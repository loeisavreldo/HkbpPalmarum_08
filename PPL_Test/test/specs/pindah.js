const apiUrl = 'http://127.0.0.1:8000';
describe('Laravel Project Testing', () => {
    it('menambahkan user untuk pindah', async () => {
        // Mengunjungi halaman web
        await browser.url(`${apiUrl}/login`);

        // Login
        const emailInput = await $('#email');
        const passwordInput = await $('#password');

        await emailInput.setValue('josepnapitupulu9@gmail.com');
        await passwordInput.setValue('12345678');

        const loginButton = await $('input[type="submit"].btn.btn-pill.text-white.btn-block.btn-primary');
        await loginButton.click();

        // Setelah login, pergi ke halaman yang diinginkan
        await browser.url(`${apiUrl}/aksesPindahUser`);

        // Mengisi semua data pada form
        const idJemaatDropdown = await $('[name="id_jemaat"]');
        await idJemaatDropdown.selectByAttribute('value', '1'); 

        const idRegistrasiDropdown = await $('[name="id_registrasi"]');
        await idRegistrasiDropdown.selectByAttribute('value', '1');

        const tglPindahInput = await $('[name="tgl_pindah"]');
        await tglPindahInput.setValue('01-01-2020');

        const namaGerejaInput = await $('[name="nama_gereja"]');
        await namaGerejaInput.setValue('siualuompu');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Masukkan keterangan jika dibutuhkan');

        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();

    });

    // Section 2: Adding user for relocation with empty id_jemaat
    it('mengisi form dengan id_jemaat kosong', async () => {
        await browser.url(`${apiUrl}/aksesPindahUser`);

        // Mengisi semua data pada form
        const idJemaatDropdown = await $('[name="id_jemaat"]');
        await idJemaatDropdown.selectByAttribute('value',''); 

        const idRegistrasiDropdown = await $('[name="id_registrasi"]');
        await idRegistrasiDropdown.selectByAttribute('value', '1');

        const tglPindahInput = await $('[name="tgl_pindah"]');
        await tglPindahInput.setValue('01-01-2020');

        const namaGerejaInput = await $('[name="nama_gereja"]');
        await namaGerejaInput.setValue('siualuompu');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Masukkan keterangan jika dibutuhkan');

        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();
    });

    // Section 3: Adding user for relocation with empty id_registrasi
    it('mengisi form dengan id_registrasi kosong', async () => {
        await browser.url(`${apiUrl}/aksesPindahUser`);

        // Mengisi semua data pada form
        const idJemaatDropdown = await $('[name="id_jemaat"]');
        await idJemaatDropdown.selectByAttribute('value','1'); 

        const idRegistrasiDropdown = await $('[name="id_registrasi"]');
        await idRegistrasiDropdown.selectByAttribute('value', '');

        const tglPindahInput = await $('[name="tgl_pindah"]');
        await tglPindahInput.setValue('01-01-2020');

        const namaGerejaInput = await $('[name="nama_gereja"]');
        await namaGerejaInput.setValue('siualuompu');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Masukkan keterangan jika dibutuhkan');

        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();

    });

    // Section 4: Adding user for relocation with empty tgl_pindah
    it('mengisi form dengan tgl_pindah kosong', async () => {
        await browser.url(`${apiUrl}/aksesPindahUser`);

        // Mengisi semua data pada form
        const idJemaatDropdown = await $('[name="id_jemaat"]');
        await idJemaatDropdown.selectByAttribute('value', '1'); 

        const idRegistrasiDropdown = await $('[name="id_registrasi"]');
        await idRegistrasiDropdown.selectByAttribute('value', '1');

        const tglPindahInput = await $('[name="tgl_pindah"]');
        await tglPindahInput.setValue('');

        const namaGerejaInput = await $('[name="nama_gereja"]');
        await namaGerejaInput.setValue('siualuompu');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Masukkan keterangan jika dibutuhkan');

        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();
    });

    // Section 5: Adding user for relocation with empty nama_gereja
    it('mengisi form dengan nama_gereja kosong', async () => {
        await browser.url(`${apiUrl}/aksesPindahUser`);

        const idJemaatDropdown = await $('[name="id_jemaat"]');
        await idJemaatDropdown.selectByAttribute('value', '1'); 

        const idRegistrasiDropdown = await $('[name="id_registrasi"]');
        await idRegistrasiDropdown.selectByAttribute('value', '1');

        const tglPindahInput = await $('[name="tgl_pindah"]');
        await tglPindahInput.setValue('01-01-2020');

        const namaGerejaInput = await $('[name="nama_gereja"]');
        await namaGerejaInput.setValue('');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Masukkan keterangan jika dibutuhkan');

        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();

    }); 
    // Section 6: Adding user with same data
    it('mengisi form dengan data yang sama', async () => {
        await browser.url(`${apiUrl}/aksesPindahUser`);

        const idJemaatDropdown = await $('[name="id_jemaat"]');
        await idJemaatDropdown.selectByAttribute('value', '1'); 

        const idRegistrasiDropdown = await $('[name="id_registrasi"]');
        await idRegistrasiDropdown.selectByAttribute('value', '1');

        const tglPindahInput = await $('[name="tgl_pindah"]');
        await tglPindahInput.setValue('01-01-2020');

        const namaGerejaInput = await $('[name="nama_gereja"]');
        await namaGerejaInput.setValue('');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Masukkan keterangan jika dibutuhkan');

        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();

        const errorMessageElement = await $('#error-message');
        expect(await errorMessageElement.isExisting()).to.be.true;
    });  
});
