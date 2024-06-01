const apiUrl = 'http://127.0.0.1:8000';
describe('Laravel Project Testing', () => {
    it('Login dengan mengisi semua field', async () => {
        // Mengunjungi halaman web
        await browser.url(`${apiUrl}/login`);
  
        // Login
        const emailInput = await $('#email');
        const passwordInput = await $('#password');
  
        await emailInput.setValue('josepnapitupulu9@gmail.com');
        await passwordInput.setValue('12345678');
  
        const loginButton = await $('input[type="submit"].btn.btn-pill.text-white.btn-block.btn-primary');
        await loginButton.click();
        
        // Logout
        const logoutLink = await $('a[href="http://127.0.0.1:8000/logout"]');
        await logoutLink.waitForClickable();
        await logoutLink.click();
    });


    it('Login dengan tidak mengisi field email', async () => {
        // Mengunjungi halaman login
        await browser.url(`${apiUrl}/login`);
    
        // Mengosongkan field email dan mengisi kata sandi 
        const emailInput = await $('#email');
        const passwordInput = await $('#password');
      
        await emailInput.setValue('');
        await passwordInput.setValue('12345678');
      
        // Menekan tombol login
        const loginButton = await $('input[type="submit"].btn.btn-pill.text-white.btn-block.btn-primary');
        await loginButton.click();

     });    

     it('Login dengan tidak mengisi field pasaword', async () => {
        // Mengunjungi halaman login
        await browser.url(`${apiUrl}/login`);
    
        // Mengisi field email dan mengosongkan kata sandi tertentu
        const emailInput = await $('#email');
        const passwordInput = await $('#password');
      
        await emailInput.setValue('josepnapitupulu9@gmail.com');
        await passwordInput.setValue('');
      
        // Menekan tombol login
        const loginButton = await $('input[type="submit"].btn.btn-pill.text-white.btn-block.btn-primary');
        await loginButton.click();
     }); 

     it('Login dengan  mengisi field email yang salah', async () => {
        // Mengunjungi halaman login
        await browser.url(`${apiUrl}/login`);
    
        // Mengisi field email dan mengosongkan kata sandi tertentu
        const emailInput = await $('#email');
        const passwordInput = await $('#password');
      
        await emailInput.setValue('josepnapit@gmail.com');
        await passwordInput.setValue('12345678');
      
        // Menekan tombol login
        const loginButton = await $('input[type="submit"].btn.btn-pill.text-white.btn-block.btn-primary');
        await loginButton.click();

        const errorMessageElement = await $('#error-message'); 
        expect(await errorMessageElement.isExisting()).to.be.true;
     }); 

     it('Login dengan mengisi field password yang salah', async () => {
        // Mengunjungi halaman login
        await browser.url(`${apiUrl}/login`);
    
        // Mengisi field email dan mengosongkan kata sandi tertentu
        const emailInput = await $('#email');
        const passwordInput = await $('#password');
      
        await emailInput.setValue('josepnapitupulu9@gmail.com');
        await passwordInput.setValue('12fyyu313');
      
        // Menekan tombol login
        const loginButton = await $('input[type="submit"].btn.btn-pill.text-white.btn-block.btn-primary');
        await loginButton.click();
     }); 

     it('Login dengan mengisi email dan password yang salah', async () => {
      // Mengunjungi halaman login
      await browser.url(`${apiUrl}/login`);
  
      // Mengisi field email dan mengosongkan kata sandi tertentu
      const emailInput = await $('#email');
      const passwordInput = await $('#password');
    
      await emailInput.setValue('josep@gmail.com');
      await passwordInput.setValue('12fyyu313');
    
      // Menekan tombol login
      const loginButton = await $('input[type="submit"].btn.btn-pill.text-white.btn-block.btn-primary');
      await loginButton.click();
   }); 

});
