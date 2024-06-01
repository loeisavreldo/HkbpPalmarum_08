const apiUrl = 'http://127.0.0.1:8000';
describe('Laravel Project Testing', () => {
  it('should interact with Approve and Tolak buttons for uprove jemaat', async () => {
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
      await browser.url(`${apiUrl}/admin/uproveJemaat`);

      // Data untuk approve dan reject
      const actions = [
          { firstName: 'Talenta', lastName: 'Pardede', buttonSelector: 'a.btn.btn-success' },
          { firstName: 'rendi', lastName: 'Napitupulu', buttonSelector: 'a.btn.btn-danger' },
      ];

      // Lakukan aksi pada setiap elemen
      for (const action of actions) {
          await performAction(action);
      }
  });

  // Fungsi untuk melakukan aksi approve atau reject
  async function performAction(data) {
      const rowToAction = await findRowByNames(data.firstName, data.lastName);

      const actionButton = await rowToAction.$(data.buttonSelector);
      await actionButton.waitForClickable({ timeout: 10000 });
      await actionButton.click();

      console.log(`${data.firstName} ${data.lastName} action performed`);
  }

  // Fungsi untuk menemukan baris berdasarkan nama depan dan nama belakang
  async function findRowByNames(firstName, lastName) {
      const rowSelector = `//td[contains(text(), "${firstName}") and contains(text(), "${lastName}")]/parent::tr`;
      const row = await $(rowSelector);
      await row.waitForExist({ timeout: 10000 });
      return row;
  }
});
