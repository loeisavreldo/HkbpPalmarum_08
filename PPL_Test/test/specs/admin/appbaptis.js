const apiUrl = 'http://127.0.0.1:8000';
describe('Laravel Project Testing', () => {
    it('should interact with Approve and Tolak buttons for Baptis', async () => {
        await browser.url(`${apiUrl}/login`);
        
        const emailInput = await $('#email');
        const passwordInput = await $('#password');

        await emailInput.setValue('admin@gmail.com');
        await passwordInput.setValue('12345678');

        const loginButton = await $('input[type="submit"].btn.btn-pill.text-white.btn-block.btn-primary');
        await loginButton.click();

        await browser.url(`${apiUrl}/admin/uproveBaptis`);

        const approveButton = await $('a.btn.btn-success');
        await approveButton.waitForClickable();
        await approveButton.click();

        const sweetAlertModal = await $('.swal2-container');
        await sweetAlertModal.waitForExist();

        const sweetAlertOkButton = await $('.swal2-confirm');
        await sweetAlertOkButton.click();

        const tolakButton = await $('a.btn.btn-danger');
        await tolakButton.waitForClickable();
        await tolakButton.click();

        await browser.pause(2000);

    });
});
