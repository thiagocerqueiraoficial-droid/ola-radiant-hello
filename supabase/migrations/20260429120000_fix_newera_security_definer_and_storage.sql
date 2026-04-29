-- Restrict payment-critical SECURITY DEFINER functions so they cannot be called
-- directly by anonymous or authenticated clients through the public RPC API.
REVOKE EXECUTE ON FUNCTION public.newera_mark_purchase_paid(text, numeric) FROM anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.newera_attach_license_to_purchase(uuid, text, timestamptz, text) FROM anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.newera_user_has_active_license(uuid) FROM anon, authenticated;

-- Keep these helpers callable by trusted backend code that uses the service role.
GRANT EXECUTE ON FUNCTION public.newera_mark_purchase_paid(text, numeric) TO service_role;
GRANT EXECUTE ON FUNCTION public.newera_attach_license_to_purchase(uuid, text, timestamptz, text) TO service_role;
GRANT EXECUTE ON FUNCTION public.newera_user_has_active_license(uuid) TO service_role;

-- Ensure paid resource files in the private bucket are only selectable by admins
-- or users with a paid/completed purchase for the resource whose storage path
-- matches the requested object name.
DROP POLICY IF EXISTS "newera resources downloads require purchase" ON storage.objects;

CREATE POLICY "newera resources downloads require purchase"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'newera-resources'
  AND (
    public.has_role(auth.uid(), 'admin'::public.app_role)
    OR EXISTS (
      SELECT 1
      FROM public.newera_resources nr
      JOIN public.newera_purchases np
        ON np.resource_id = nr.id
      WHERE nr.storage_path = storage.objects.name
        AND np.user_id = auth.uid()
        AND np.status IN ('paid', 'completed')
    )
  )
);
