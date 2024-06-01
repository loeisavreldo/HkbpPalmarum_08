const apiUrl = 'http://127.0.0.1:8000/register';
describe('Laravel Project Testing', () => {
    it('should register a new jemaat', async () => {
        // Mengunjungi halaman web
        await browser.url(`${apiUrl}`);
  
        // Registrasi
        const nameInput = await $('#name');
        const emailInput = await $('#email');
        const passwordInput = await $('#password');
        const passwordInput2 = await $('#password');
  
        await nameInput.setValue('Tri Vera Silalahi');
        await emailInput.setValue('vsilalahi042@gmail.com');
        await passwordInput.setValue('12345678');
        await passwordInput2.setValue('12345678');
  
        const loginButton = await $('input[type="submit"].btn.btn-pill.text-white.btn-block.btn-primary');
        await loginButton.click();
        
    });

    it('should register a new jemaat', async () => {
        // Mengunjungi halaman web
    await browser.url(`${apiUrl}`);

    // Registrasi dengan mengkosongkan nama
    const nameInput = await $('#name');
    const emailInput = await $('#email');
    const passwordInput = await $('#password');
    const passwordInput2 = await $('#password');

    await nameInput.setValue('');
    await emailInput.setValue('vsilalahi042@gmail.com');
    await passwordInput.setValue('12345678');
    await passwordInput2.setValue('12345678');

    const loginButton = await $('input[type="submit"].btn.btn-pill.text-white.btn-block.btn-primary');
    await loginButton.click();
    
    });

    it('should register a new jemaat', async () => {
        // Mengunjungi halaman web
    await browser.url(`${apiUrl}`);

    // Registrasi dengan mengkosongkan nama
    const nameInput = await $('#name');
    const emailInput = await $('#email');
    const passwordInput = await $('#password');
    const passwordInput2 = await $('#password');

    await nameInput.setValue('Tri Vera Silalahi');
    await emailInput.setValue('');
    await passwordInput.setValue('12345678');
    await passwordInput2.setValue('12345678');

    const loginButton = await $('input[type="submit"].btn.btn-pill.text-white.btn-block.btn-primary');
    await loginButton.click();
    
    });

    it('should register a new jemaat', async () => {
        // Mengunjungi halaman web
    await browser.url(`${apiUrl}`);

    // Registrasi dengan mengkosongkan nama
    const nameInput = await $('#name');
    const emailInput = await $('#email');
    const passwordInput = await $('#password');
    const passwordInput2 = await $('#password');

    await nameInput.setValue('Tri Vera Silalahi');
    await emailInput.setValue('vsilalahi042@gmail.com');
    await passwordInput.setValue('');
    await passwordInput2.setValue('12345678');

    const loginButton = await $('input[type="submit"].btn.btn-pill.text-white.btn-block.btn-primary');
    await loginButton.click();
    
    });

    it('should register a new jemaat', async () => {
        // Mengunjungi halaman web
    await browser.url(`${apiUrl}`);

    // Registrasi dengan mengkosongkan nama
    const nameInput = await $('#name');
    const emailInput = await $('#email');
    const passwordInput = await $('#password');
    const passwordInput2 = await $('#password');

    await nameInput.setValue('Tri Vera Silalahi');
    await emailInput.setValue('vsilalahi042@gmail.com');
    await passwordInput.setValue('12345678');
    await passwordInput2.setValue('');

    const loginButton = await $('input[type="submit"].btn.btn-pill.text-white.btn-block.btn-primary');
    await loginButton.click();
    
    });
});