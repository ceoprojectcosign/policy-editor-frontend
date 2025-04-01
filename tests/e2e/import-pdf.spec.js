import { test, expect } from '@playwright/test';

test.describe('📄 PDF Import Flow', () => {
  test('User can load editor and paste a PDF URL', async ({ page }) => {
    // -------------------------------
    // Setup: Navigate to the editor
    // -------------------------------
    try {
      await page.goto('http://localhost:5173/editor', {
        waitUntil: 'domcontentloaded',
        timeout: 10000,
      });
    } catch (err) {
      console.error('💥 Could not connect to Vite dev server on http://localhost:5173/editor');
      throw err;
    }

    // -------------------------------
    // Step 1: Locate PDF input field
    // -------------------------------
    const pdfInput = page.getByPlaceholder('Enter PDF URL');
    await expect(pdfInput, 'PDF URL input field should be visible').toBeVisible();

    // -------------------------------
    // Step 2: Mock PDF fetch (optional but smart)
    // -------------------------------
    await page.route('**/policy.pdf', async (route) => {
      // Simulate a PDF file fetch response
      const fakePDF = Buffer.from('%PDF-1.4 FAKE PDF CONTENT');
      await route.fulfill({
        status: 200,
        contentType: 'application/pdf',
        body: fakePDF
      });
    });

    // -------------------------------
    // Step 3: Trigger import
    // -------------------------------
    await pdfInput.fill('https://example.com/policy.pdf');

    const importButton = page.getByRole('button', { name: /import/i });
    await expect(importButton, 'Import button should be visible').toBeVisible();

    await importButton.click();

    // -------------------------------
    // Step 4: Wait for editor content
    // -------------------------------
    const editor = page.locator('textarea');
    await expect(editor, 'Editor should appear after importing').toBeVisible();

    await expect(editor, 'Editor should not be empty after import').toHaveValue(
      /.+/,
      { timeout: 5000 }
    );
  });
});
