const apiUrl = 'http://127.0.0.1:8000';
describe('Laravel Project Testing', () => {
    it('should interact with Approve and Tolak buttons for uprove Jemaat Pindah data', async () => {
      // Login page
      await browser.url(`${apiUrl}/login`);
  
      // Login
      const emailInput = await $('#email');
      const passwordInput = await $('#password');
      await emailInput.setValue('admin@gmail.com');
      await passwordInput.setValue('12345678');
      const loginButton = await $('input[type="submit"].btn.btn-pill.text-white.btn-block.btn-primary');
      await loginButton.click();
  
      // Ke halaman uprovePindah
      await browser.url(`${apiUrl}/admin/uprovePindah`);
  
      // Temukan baris yang berisi "Nama Gereja Tujuan" tertentu untuk disetujui
      const rowToApprove = await $('//td[contains(text(), "Parso")]/parent::tr');

      const approveID = await rowToApprove.$('a.btn.btn-success').getAttribute('href');
  
      // Klik tombol "Setuju" untuk data uprovePindah tertentu
      const approveButton = await rowToApprove.$('a.btn.btn-success');
      await approveButton.waitForClickable();
      await approveButton.click();
  
      // Baris yang berisi "Nama Gereja Tujuan" khusus untuk penolakan
      const rowToReject = await $('//td[contains(text(), "adsad")]/parent::tr');

      const rejectID = await rowToReject.$('a.btn.btn-danger').getAttribute('href');
  
      // Klik tombol "Tolak" untuk data uprovePindah tertentu
      const rejectButton = await rowToReject.$('a.btn.btn-danger');
      await rejectButton.waitForClickable();
      await rejectButton.click();
  
    });
  });
  