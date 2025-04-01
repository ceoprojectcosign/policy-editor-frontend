import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: './test.env' });

const adminClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

test('RLS: user can only access their own documents', async () => {
  // ✅ This ID must match the `sub` field in TEST_USER_JWT
  const testUserId = 'test-user-123';

  const testDoc = {
    id: `test-rls-doc-${Date.now()}`,
    content: 'RLS test content',
    user_id: testUserId,
  };

  // Insert doc using service role (bypasses RLS)
  const { error: insertError } = await adminClient
    .from('documents')
    .insert([testDoc]);

  expect(insertError).toBeNull();

  const userClient = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      global: {
        headers: {
          Authorization: `Bearer ${process.env.TEST_USER_JWT}`,
        },
      },
    }
  );

  const { data, error: selectError } = await userClient
    .from('documents')
    .select('*')
    .eq('id', testDoc.id);

  expect(selectError).toBeNull();
  expect(data).toHaveLength(1);
  expect(data[0].user_id).toBe(testUserId);
});
