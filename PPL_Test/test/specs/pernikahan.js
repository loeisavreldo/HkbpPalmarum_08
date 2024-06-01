const apiUrl = 'http://127.0.0.1:8000';
describe('Laravel Project Testing', () => {
    it('should register a new jemaat', async () => {
        // Mengunjungi halaman web
        await browser.url(`${apiUrl}/login`);
  
        // Login
        const emailInput = await $('#email');
        const passwordInput = await $('#password');
  
        await emailInput.setValue('josepnapitupulu9@gmail.com');
        await passwordInput.setValue('12345678');
  
        const loginButton = await $('input[type="submit"].btn.btn-pill.text-white.btn-block.btn-primary');
        await loginButton.click();

        // Pendaftaran Pernikahan
    it('form dengan data lengkap', async () => {
        await browser.url(`${apiUrl}/aksesNikahUser`);

        // Pernikahan registration form
        const namaMempelaiLakiLakiInput = await $('[name="nama_lengkap_laki"]');
        await namaMempelaiLakiLakiInput.setValue('Irvan');

        const namaMempelaiPerempuanInput = await $('[name="nama_lengkap_perempuan"]');
        await namaMempelaiPerempuanInput.setValue('Santa');

        const tanggalMartumpolInput = await $('[name="tgl_martumpol"]');
        await tanggalMartumpolInput.setValue('20-07-2023');

        const namaGerejaMartumpolInput = await $('[name="nama_gereja_martumpol"]');
        await namaGerejaMartumpolInput.setValue('HKBP Palmarum');

        const tanggalPemeberkatanInput = await $('[name="tgl_pemberkatan"]');
        await tanggalPemeberkatanInput.setValue('31-08-2021');

        const namaGerejaPemberkatanInput = await $('[name="nama_gereja_pemberkatan"]');
        await namaGerejaPemberkatanInput.setValue('HKBP Palmarum');

        const namaGerejaMempelaiLakiLakIInput = await $('[name="nama_gereja_laki"]');
        await namaGerejaMempelaiLakiLakIInput.setValue('HKBP');

        const namaAyahMempelaiLakiLakiInput = await $('[name="nama_ayah_laki"]');
        await namaAyahMempelaiLakiLakiInput.setValue('Sudarman');

        const namaIbuMempelaiLakiLakiInput = await $('[name="nama_ibu_laki"]');
        await namaIbuMempelaiLakiLakiInput .setValue('Sumina');

        const namaGerejaMempelaiPerempuanInput = await $('[name="nama_gereja_perempuan"]');
        await namaGerejaMempelaiPerempuanInput.setValue('GKPI');

        const statusHubunganDropdown = await $('[name="nama_ayah_perempuan"]');
        await statusHubunganDropdown.setValue('sudar');

        const namaIbuMempelaiPerempuanInput = await $('[name="nama_ibu_perempuan"]');
        await namaIbuMempelaiPerempuanInput.setValue('Sary');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('kedjjef');

        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();

        const errorMessageElement = await $('#error-message'); 
        expect(await errorMessageElement.isExisting()).toBe(false);
    });

    it('form dengan nama laki laki kosong', async () => {
        await browser.url(`${apiUrl}/aksesNikahUser`);

        // Pernikahan registration form dengan nama laki laki kosong
        const namaMempelaiLakiLakiinput = await $('[name="nama_lengkap_laki"]');
        await namaMempelaiLakiLakiinput.setValue('');
     
        const namaMempelaiPerempuaninput = await $('[name="nama_lengkap_perempuan"]');
        await namaMempelaiPerempuaninput.setValue('Santa');
     
        const tanggalMartumpolInput = await $('[name="tgl_martumpol"]');
        await tanggalMartumpolInput.setValue('20-07-2023');
     
        const namaGerejaMartumpolInput = await $('[name="nama_gereja_martumpol"]');
        await namaGerejaMartumpolInput.setValue('HKBP Palmarum');
     
        const tanggalPemeberkatanInput = await $('[name="tgl_pemberkatan"]');
        await tanggalPemeberkatanInput.setValue('31-08-2021');
     
        const namaGerejaPemberkatanInput = await $('[name="nama_gereja_pemberkatan"]');
        await namaGerejaPemberkatanInput.setValue('HKBP Palmarum');
     
        const namaGerejaMempelaiLakiLakiInput = await $('[name="nama_gereja_laki"]');
        await namaGerejaMempelaiLakiLakiInput.setValue('HKBP');
     
        const namaAyahMempelaiLakiLakiInput = await $('[name="nama_ayah_laki"]');
        await namaAyahMempelaiLakiLakiInput.setValue('Sudarman');
     
        const namaIbuMempelaiLakiLakiInput = await $('[name="nama_ibu_laki"]');
        await namaIbuMempelaiLakiLakiInput .setValue('Sumina');
     
        const namaGerejaMempelaiPerempuanInput = await $('[name="nama_gereja_perempuan"]');
        await namaGerejaMempelaiPerempuanInput.setValue('GKPI');
     
        const namaAyahMempelaiPerempuanInput = await $('[name="nama_ayah_perempuan"]');
        await namaAyahMempelaiPerempuanInput.setValue('sudar');
     
        const namaIbuMempelaiPerempuanInput = await $('[name="nama_ibu_perempuan"]');
        await namaIbuMempelaiPerempuanInput.setValue('Sary');
     
        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('kedjjef');
     
        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();

       const errorMessageElement = await $('#error-message'); 
        expect(await errorMessageElement.isExisting()).toBe(false);
    });

        it('form dengan nama perempuan kosong', async () => {
        await browser.url(`${apiUrl}/aksesNikahUser`);

        // Pernikahan registration form dengan nama perempuan kosong
        const namaMempelaiLakiLakiinput = await $('[name="nama_lengkap_laki"]');
        await namaMempelaiLakiLakiinput.setValue('Irvan');
        
        const namaMempelaiPerempuaninput = await $('[name="nama_lengkap_perempuan"]');
        await namaMempelaiPerempuaninput.setValue('');
        
        const tanggalMartumpolInput = await $('[name="tgl_martumpol"]');
        await tanggalMartumpolInput.setValue('20-07-2023');
        
        const namaGerejaMartumpolInput = await $('[name="nama_gereja_martumpol"]');
        await namaGerejaMartumpolInput.setValue('HKBP Palmarum');
        
        const tanggalPemeberkatanInput = await $('[name="tgl_pemberkatan"]');
        await tanggalPemeberkatanInput.setValue('31-08-2021');
        
        const namaGerejaPemberkatanInput = await $('[name="nama_gereja_pemberkatan"]');
        await namaGerejaPemberkatanInput.setValue('HKBP Palmarum');
        
        const namaGerejaMempelaiLakiLakiInput = await $('[name="nama_gereja_laki"]');
        await namaGerejaMempelaiLakiLakiInput.setValue('HKBP');
        
        const namaAyahMempelaiLakiLakiInput = await $('[name="nama_ayah_laki"]');
        await namaAyahMempelaiLakiLakiInput.setValue('Sudarman');
        
        const namaIbuMempelaiLakiLakiInput = await $('[name="nama_ibu_laki"]');
        await namaIbuMempelaiLakiLakiInput .setValue('Sumina');
        
        const namaGerejaMempelaiPerempuanInput = await $('[name="nama_gereja_perempuan"]');
        await namaGerejaMempelaiPerempuanInput.setValue('GKPI');
        
        const namaAyahMempelaiPerempuanInput = await $('[name="nama_ayah_perempuan"]');
        await namaAyahMempelaiPerempuanInput.setValue('sudar');
        
        const namaIbuMempelaiPerempuanInput = await $('[name="nama_ibu_perempuan"]');
        await namaIbuMempelaiPerempuanInput.setValue('Sary');
        
        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('kedjjef');
        
        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();

        const errorMessageElement = await $('#error-message'); 
        expect(await errorMessageElement.isExisting()).toBe(false);
    });


        it('form dengan tanggalmartumpol kosong', async () => {
        await browser.url(`${apiUrl}/aksesNikahUser`);

        // Pernikahan registration form dengan tanggalmartumpol kosong
        const namaMempelaiLakiLakiinput = await $('[name="nama_lengkap_laki"]');
        await namaMempelaiLakiLakiinput.setValue('Irvan');
        
        const namaMempelaiPerempuaninput = await $('[name="nama_lengkap_perempuan"]');
        await namaMempelaiPerempuaninput.setValue('Santa');
        
        const tanggalMartumpolInput = await $('[name="tgl_martumpol"]');
        await tanggalMartumpolInput.setValue('');
        
        const namaGerejaMartumpolInput = await $('[name="nama_gereja_martumpol"]');
        await namaGerejaMartumpolInput.setValue('HKBP Palmarum');
        
        const tanggalPemeberkatanInput = await $('[name="tgl_pemberkatan"]');
        await tanggalPemeberkatanInput.setValue('31-08-2021');
        
        const namaGerejaPemberkatanInput = await $('[name="nama_gereja_pemberkatan"]');
        await namaGerejaPemberkatanInput.setValue('HKBP Palmarum');
        
        const namaGerejaMempelaiLakiLakiInput = await $('[name="nama_gereja_laki"]');
        await namaGerejaMempelaiLakiLakiInput.setValue('HKBP');
        
        const namaAyahMempelaiLakiLakiInput = await $('[name="nama_ayah_laki"]');
        await namaAyahMempelaiLakiLakiInput.setValue('Sudarman');
        
        const namaIbuMempelaiLakiLakiInput = await $('[name="nama_ibu_laki"]');
        await namaIbuMempelaiLakiLakiInput .setValue('Sumina');
        
        const namaGerejaMempelaiPerempuanInput = await $('[name="nama_gereja_perempuan"]');
        await namaGerejaMempelaiPerempuanInput.setValue('GKPI');
        
        const namaAyahMempelaiPerempuanInput = await $('[name="nama_ayah_perempuan"]');
        await namaAyahMempelaiPerempuanInput.setValue('sudar');
        
        const namaIbuMempelaiPerempuanInput = await $('[name="nama_ibu_perempuan"]');
        await namaIbuMempelaiPerempuanInput.setValue('Sary');
        
        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('kedjjef');
        
        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();

        const errorMessageElement = await $('#error-message'); 
        expect(await errorMessageElement.isExisting()).toBe(false);
    });


        it('form dengan nama gereja martumpol kosong', async () => {
        await browser.url(`${apiUrl}/aksesNikahUser`);

        // Pernikahan registration form dengan nama gereja martumpol kosong
        const namaMempelaiLakiLakiinput = await $('[name="nama_lengkap_laki"]');
        await namaMempelaiLakiLakiinput.setValue('Irvan');
        
        const namaMempelaiPerempuaninput = await $('[name="nama_lengkap_perempuan"]');
        await namaMempelaiPerempuaninput.setValue('Santa');
        
        const tanggalMartumpolInput = await $('[name="tgl_martumpol"]');
        await tanggalMartumpolInput.setValue('20-07-2023');
        
        const namaGerejaMartumpolInput = await $('[name="nama_gereja_martumpol"]');
        await namaGerejaMartumpolInput.setValue('');
        
        const tanggalPemeberkatanInput = await $('[name="tgl_pemberkatan"]');
        await tanggalPemeberkatanInput.setValue('31-08-2021');
        
        const namaGerejaPemberkatanInput = await $('[name="nama_gereja_pemberkatan"]');
        await namaGerejaPemberkatanInput.setValue('HKBP Palmarum');
        
        const namaGerejaMempelaiLakiLakiInput = await $('[name="nama_gereja_laki"]');
        await namaGerejaMempelaiLakiLakiInput.setValue('HKBP');
        
        const namaAyahMempelaiLakiLakiInput = await $('[name="nama_ayah_laki"]');
        await namaAyahMempelaiLakiLakiInput.setValue('Sudarman');
        
        const namaIbuMempelaiLakiLakiInput = await $('[name="nama_ibu_laki"]');
        await namaIbuMempelaiLakiLakiInput .setValue('Sumina');
        
        const namaGerejaMempelaiPerempuanInput = await $('[name="nama_gereja_perempuan"]');
        await namaGerejaMempelaiPerempuanInput.setValue('GKPI');
        
        const namaAyahMempelaiPerempuanInput = await $('[name="nama_ayah_perempuan"]');
        await namaAyahMempelaiPerempuanInput.setValue('sudar');
        
        const namaIbuMempelaiPerempuanInput = await $('[name="nama_ibu_perempuan"]');
        await namaIbuMempelaiPerempuanInput.setValue('Sary');
        
        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('kedjjef');
        
        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();

        const errorMessageElement = await $('#error-message'); 
        expect(await errorMessageElement.isExisting()).toBe(false);
    });

        it('form dengan tanggal pemberkatan kosong', async () => {
        await browser.url(`${apiUrl}/aksesNikahUser`);

        // Pernikahan registration form dengan tanggal pemberkatan kosong
        const namaMempelaiLakiLakiinput = await $('[name="nama_lengkap_laki"]');
        await namaMempelaiLakiLakiinput.setValue('Irvan');
        
        const namaMempelaiPerempuaninput = await $('[name="nama_lengkap_perempuan"]');
        await namaMempelaiPerempuaninput.setValue('Santa');
        
        const tanggalMartumpolInput = await $('[name="tgl_martumpol"]');
        await tanggalMartumpolInput.setValue('20-07-2023');
        
        const namaGerejaMartumpolInput = await $('[name="nama_gereja_martumpol"]');
        await namaGerejaMartumpolInput.setValue('HKBP Palmarum');
        
        const tanggalPemeberkatanInput = await $('[name="tgl_pemberkatan"]');
        await tanggalPemeberkatanInput.setValue('');
        
        const namaGerejaPemberkatanInput = await $('[name="nama_gereja_pemberkatan"]');
        await namaGerejaPemberkatanInput.setValue('HKBP Palmarum');
        
        const namaGerejaMempelaiLakiLakiInput = await $('[name="nama_gereja_laki"]');
        await namaGerejaMempelaiLakiLakiInput.setValue('HKBP');
        
        const namaAyahMempelaiLakiLakiInput = await $('[name="nama_ayah_laki"]');
        await namaAyahMempelaiLakiLakiInput.setValue('Sudarman');
        
        const namaIbuMempelaiLakiLakiInput = await $('[name="nama_ibu_laki"]');
        await namaIbuMempelaiLakiLakiInput .setValue('Sumina');
        
        const namaGerejaMempelaiPerempuanInput = await $('[name="nama_gereja_perempuan"]');
        await namaGerejaMempelaiPerempuanInput.setValue('GKPI');
        
        const namaAyahMempelaiPerempuanInput = await $('[name="nama_ayah_perempuan"]');
        await namaAyahMempelaiPerempuanInput.setValue('sudar');
        
        const namaIbuMempelaiPerempuanInput = await $('[name="nama_ibu_perempuan"]');
        await namaIbuMempelaiPerempuanInput.setValue('Sary');
        
        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('kedjjef');
        
        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();

        const errorMessageElement = await $('#error-message'); 
        expect(await errorMessageElement.isExisting()).toBe(false);
    });
    it('form dengan namagerejapemberkatan kosong', async () => {
        await browser.url(`${apiUrl}/aksesNikahUser`);

        // Pernikahan registration form dengan namagerejapemberkatan kosong
        const namaMempelaiLakiLakiinput = await $('[name="nama_lengkap_laki"]');
        await namaMempelaiLakiLakiinput.setValue('Irvan');
        
        const namaMempelaiPerempuaninput = await $('[name="nama_lengkap_perempuan"]');
        await namaMempelaiPerempuaninput.setValue('Santa');
        
        const tanggalMartumpolInput = await $('[name="tgl_martumpol"]');
        await tanggalMartumpolInput.setValue('20-07-2023');
        
        const namaGerejaMartumpolInput = await $('[name="nama_gereja_martumpol"]');
        await namaGerejaMartumpolInput.setValue('HKBP Palmarum');
        
        const tanggalPemeberkatanInput = await $('[name="tgl_pemberkatan"]');
        await tanggalPemeberkatanInput.setValue('31-08-2021');
        
        const namaGerejaPemberkatanInput = await $('[name="nama_gereja_pemberkatan"]');
        await namaGerejaPemberkatanInput.setValue('');
        
        const namaGerejaMempelaiLakiLakiInput = await $('[name="nama_gereja_laki"]');
        await namaGerejaMempelaiLakiLakiInput.setValue('HKBP');
        
        const namaAyahMempelaiLakiLakiInput = await $('[name="nama_ayah_laki"]');
        await namaAyahMempelaiLakiLakiInput.setValue('Sudarman');
        
        const namaIbuMempelaiLakiLakiInput = await $('[name="nama_ibu_laki"]');
        await namaIbuMempelaiLakiLakiInput .setValue('Sumina');
        
        const namaGerejaMempelaiPerempuanInput = await $('[name="nama_gereja_perempuan"]');
        await namaGerejaMempelaiPerempuanInput.setValue('GKPI');
        
        const namaAyahMempelaiPerempuanInput = await $('[name="nama_ayah_perempuan"]');
        await namaAyahMempelaiPerempuanInput.setValue('sudar');
        
        const namaIbuMempelaiPerempuanInput = await $('[name="nama_ibu_perempuan"]');
        await namaIbuMempelaiPerempuanInput.setValue('Sary');
        
        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('kedjjef');
        
        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();

        const errorMessageElement = await $('#error-message'); 
        expect(await errorMessageElement.isExisting()).toBe(false);
    });

        it('form dengan nama gereja laki-laki kosong', async () => {
        await browser.url(`${apiUrl}/aksesNikahUser`);

        // Pernikahan registration form dengan namagerejalakilaki kosong
        const namaMempelaiLakiLakiinput = await $('[name="nama_lengkap_laki"]');
        await namaMempelaiLakiLakiinput.setValue('Irvan');
        
        const namaMempelaiPerempuaninput = await $('[name="nama_lengkap_perempuan"]');
        await namaMempelaiPerempuaninput.setValue('Santa');
        
        const tanggalMartumpolInput = await $('[name="tgl_martumpol"]');
        await tanggalMartumpolInput.setValue('20-07-2023');
        
        const namaGerejaMartumpolInput = await $('[name="nama_gereja_martumpol"]');
        await namaGerejaMartumpolInput.setValue('HKBP Palmarum');
        
        const tanggalPemeberkatanInput = await $('[name="tgl_pemberkatan"]');
        await tanggalPemeberkatanInput.setValue('31-08-2021');
        
        const namaGerejaPemberkatanInput = await $('[name="nama_gereja_pemberkatan"]');
        await namaGerejaPemberkatanInput.setValue('HKBP Palmarum');
        
        const namaGerejaMempelaiLakiLakiInput = await $('[name="nama_gereja_laki"]');
        await namaGerejaMempelaiLakiLakiInput.setValue('');
        
        const namaAyahMempelaiLakiLakiInput = await $('[name="nama_ayah_laki"]');
        await namaAyahMempelaiLakiLakiInput.setValue('Sudarman');
        
        const namaIbuMempelaiLakiLakiInput = await $('[name="nama_ibu_laki"]');
        await namaIbuMempelaiLakiLakiInput .setValue('Sumina');
        
        const namaGerejaMempelaiPerempuanInput = await $('[name="nama_gereja_perempuan"]');
        await namaGerejaMempelaiPerempuanInput.setValue('GKPI');
        
        const namaAyahMempelaiPerempuanInput = await $('[name="nama_ayah_perempuan"]');
        await namaAyahMempelaiPerempuanInput.setValue('sudar');
        
        const namaIbuMempelaiPerempuanInput = await $('[name="nama_ibu_perempuan"]');
        await namaIbuMempelaiPerempuanInput.setValue('Sary');
        
        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('kedjjef');
        
        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();

        const errorMessageElement = await $('#error-message'); 
        expect(await errorMessageElement.isExisting()).toBe(false);
    });

    it('form dengan nama ayah laki laki kosong', async () => {
        await browser.url(`${apiUrl}/aksesNikahUser`);

        // Pernikahan registration form dengan nama ayah laki lakikosong
        const namaMempelaiLakiLakiinput = await $('[name="nama_lengkap_laki"]');
        await namaMempelaiLakiLakiinput.setValue('Irvan');
        
        const namaMempelaiPerempuaninput = await $('[name="nama_lengkap_perempuan"]');
        await namaMempelaiPerempuaninput.setValue('Santa');
        
        const tanggalMartumpolInput = await $('[name="tgl_martumpol"]');
        await tanggalMartumpolInput.setValue('20-07-2023');
        
        const namaGerejaMartumpolInput = await $('[name="nama_gereja_martumpol"]');
        await namaGerejaMartumpolInput.setValue('HKBP Palmarum');
        
        const tanggalPemeberkatanInput = await $('[name="tgl_pemberkatan"]');
        await tanggalPemeberkatanInput.setValue('31-08-2021');
        
        const namaGerejaPemberkatanInput = await $('[name="nama_gereja_pemberkatan"]');
        await namaGerejaPemberkatanInput.setValue('HKBP Palmarum');
        
        const namaGerejaMempelaiLakiLakiInput = await $('[name="nama_gereja_laki"]');
        await namaGerejaMempelaiLakiLakiInput.setValue('HKBP');
        
        const namaAyahMempelaiLakiLakiInput = await $('[name="nama_ayah_laki"]');
        await namaAyahMempelaiLakiLakiInput.setValue('');
        
        const namaIbuMempelaiLakiLakiInput = await $('[name="nama_ibu_laki"]');
        await namaIbuMempelaiLakiLakiInput .setValue('Sumina');
        
        const namaGerejaMempelaiPerempuanInput = await $('[name="nama_gereja_perempuan"]');
        await namaGerejaMempelaiPerempuanInput.setValue('GKPI');
        
        const namaAyahMempelaiPerempuanInput = await $('[name="nama_ayah_perempuan"]');
        await namaAyahMempelaiPerempuanInput.setValue('sudar');
        
        const namaIbuMempelaiPerempuanInput = await $('[name="nama_ibu_perempuan"]');
        await namaIbuMempelaiPerempuanInput.setValue('Sary');
        
        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('kedjjef');
        
        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();

        const errorMessageElement = await $('#error-message'); 
        expect(await errorMessageElement.isExisting()).toBe(false);
    });

    it('form dengan nama ibu laki laki kosong', async () => {
        await browser.url(`${apiUrl}/aksesNikahUser`);

        // Pernikahan registration form dengan nama ibu laki lakikosong
        const namaMempelaiLakiLakiinput = await $('[name="nama_lengkap_laki"]');
        await namaMempelaiLakiLakiinput.setValue('Irvan');
        
        const namaMempelaiPerempuaninput = await $('[name="nama_lengkap_perempuan"]');
        await namaMempelaiPerempuaninput.setValue('Santa');
        
        const tanggalMartumpolInput = await $('[name="tgl_martumpol"]');
        await tanggalMartumpolInput.setValue('20-07-2023');
        
        const namaGerejaMartumpolInput = await $('[name="nama_gereja_martumpol"]');
        await namaGerejaMartumpolInput.setValue('HKBP Palmarum');
        
        const tanggalPemeberkatanInput = await $('[name="tgl_pemberkatan"]');
        await tanggalPemeberkatanInput.setValue('31-08-2021');
        
        const namaGerejaPemberkatanInput = await $('[name="nama_gereja_pemberkatan"]');
        await namaGerejaPemberkatanInput.setValue('HKBP Palmarum');
        
        const namaGerejaMempelaiLakiLakiInput = await $('[name="nama_gereja_laki"]');
        await namaGerejaMempelaiLakiLakiInput.setValue('HKBP');
        
        const namaAyahMempelaiLakiLakiInput = await $('[name="nama_ayah_laki"]');
        await namaAyahMempelaiLakiLakiInput.setValue('Sudarman');
        
        const namaIbuMempelaiLakiLakiInput = await $('[name="nama_ibu_laki"]');
        await namaIbuMempelaiLakiLakiInput .setValue('');
        
        const namaGerejaMempelaiPerempuanInput = await $('[name="nama_gereja_perempuan"]');
        await namaGerejaMempelaiPerempuanInput.setValue('GKPI');
        
        const namaAyahMempelaiPerempuanInput = await $('[name="nama_ayah_perempuan"]');
        await namaAyahMempelaiPerempuanInput.setValue('sudar');
        
        const namaIbuMempelaiPerempuanInput = await $('[name="nama_ibu_perempuan"]');
        await namaIbuMempelaiPerempuanInput.setValue('Sary');
        
        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('kedjjef');
        
        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();

        const errorMessageElement = await $('#error-message'); 
        expect(await errorMessageElement.isExisting()).toBe(false);
    });

    it('form dengan nama gereja perempuan kosong', async () => {
        await browser.url(`${apiUrl}/aksesNikahUser`);

        // Pernikahan registration form dengan namagerejaperempuan kosong
        const namaMempelaiLakiLakiinput = await $('[name="nama_lengkap_laki"]');
        await namaMempelaiLakiLakiinput.setValue('Irvan');
        
        const namaMempelaiPerempuaninput = await $('[name="nama_lengkap_perempuan"]');
        await namaMempelaiPerempuaninput.setValue('Santa');
        
        const tanggalMartumpolInput = await $('[name="tgl_martumpol"]');
        await tanggalMartumpolInput.setValue('20-07-2023');
        
        const namaGerejaMartumpolInput = await $('[name="nama_gereja_martumpol"]');
        await namaGerejaMartumpolInput.setValue('HKBP Palmarum');
        
        const tanggalPemeberkatanInput = await $('[name="tgl_pemberkatan"]');
        await tanggalPemeberkatanInput.setValue('31-08-2021');
        
        const namaGerejaPemberkatanInput = await $('[name="nama_gereja_pemberkatan"]');
        await namaGerejaPemberkatanInput.setValue('HKBP Palmarum');
        
        const namaGerejaMempelaiLakiLakiInput = await $('[name="nama_gereja_laki"]');
        await namaGerejaMempelaiLakiLakiInput.setValue('HKBP');
        
        const namaAyahMempelaiLakiLakiInput = await $('[name="nama_ayah_laki"]');
        await namaAyahMempelaiLakiLakiInput.setValue('Sudarman');
        
        const namaIbuMempelaiLakiLakiInput = await $('[name="nama_ibu_laki"]');
        await namaIbuMempelaiLakiLakiInput .setValue('Sumina');
        
        const namaGerejaMempelaiPerempuanInput = await $('[name="nama_gereja_perempuan"]');
        await namaGerejaMempelaiPerempuanInput.setValue('');
        
        const namaAyahMempelaiPerempuanInput = await $('[name="nama_ayah_perempuan"]');
        await namaAyahMempelaiPerempuanInput.setValue('sudar');
        
        const namaIbuMempelaiPerempuanInput = await $('[name="nama_ibu_perempuan"]');
        await namaIbuMempelaiPerempuanInput.setValue('Sary');
        
        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('kedjjef');
        
        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();

        const errorMessageElement = await $('#error-message'); 
        expect(await errorMessageElement.isExisting()).toBe(false);
    });

    it('form dengan nama ayah perempuan kosong', async () => {
        await browser.url(`${apiUrl}/aksesNikahUser`);

        // Pernikahan registration form dengan nama_ayah_perempuan kosong
        const namaMempelaiLakiLakiinput = await $('[name="nama_lengkap_laki"]');
        await namaMempelaiLakiLakiinput.setValue('Irvan');
        
        const namaMempelaiPerempuaninput = await $('[name="nama_lengkap_perempuan"]');
        await namaMempelaiPerempuaninput.setValue('Santa');
        
        const tanggalMartumpolInput = await $('[name="tgl_martumpol"]');
        await tanggalMartumpolInput.setValue('20-07-2023');
        
        const namaGerejaMartumpolInput = await $('[name="nama_gereja_martumpol"]');
        await namaGerejaMartumpolInput.setValue('HKBP Palmarum');
        
        const tanggalPemeberkatanInput = await $('[name="tgl_pemberkatan"]');
        await tanggalPemeberkatanInput.setValue('31-08-2021');
        
        const namaGerejaPemberkatanInput = await $('[name="nama_gereja_pemberkatan"]');
        await namaGerejaPemberkatanInput.setValue('HKBP Palmarum');
        
        const namaGerejaMempelaiLakiLakiInput = await $('[name="nama_gereja_laki"]');
        await namaGerejaMempelaiLakiLakiInput.setValue('HKBP');
        
        const namaAyahMempelaiLakiLakiInput = await $('[name="nama_ayah_laki"]');
        await namaAyahMempelaiLakiLakiInput.setValue('Sudarman');
        
        const namaIbuMempelaiLakiLakiInput = await $('[name="nama_ibu_laki"]');
        await namaIbuMempelaiLakiLakiInput .setValue('Sumina');
        
        const namaGerejaMempelaiPerempuanInput = await $('[name="nama_gereja_perempuan"]');
        await namaGerejaMempelaiPerempuanInput.setValue('GKPI');
        
        const namaAyahMempelaiPerempuanInput = await $('[name="nama_ayah_perempuan"]');
        await namaAyahMempelaiPerempuanInput.setValue('');
        
        const namaIbuMempelaiPerempuanInput = await $('[name="nama_ibu_perempuan"]');
        await namaIbuMempelaiPerempuanInput.setValue('Sary');
        
        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('kedjjef');
        
        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();

        const errorMessageElement = await $('#error-message'); 
        expect(await errorMessageElement.isExisting()).toBe(false);
    });
                                        

    it('form dengan nama ibu perempuan kosong', async () => {
        await browser.url(`${apiUrl}/aksesNikahUser`);

        // Pernikahan registration form dengan nama_ibu_perempuan kosong
        const namaMempelaiLakiLakiinput = await $('[name="nama_lengkap_laki"]');
        await namaMempelaiLakiLakiinput.setValue('Irvan');
        
        const namaMempelaiPerempuaninput = await $('[name="nama_lengkap_perempuan"]');
        await namaMempelaiPerempuaninput.setValue('Santa');
        
        const tanggalMartumpolInput = await $('[name="tgl_martumpol"]');
        await tanggalMartumpolInput.setValue('20-07-2023');
        
        const namaGerejaMartumpolInput = await $('[name="nama_gereja_martumpol"]');
        await namaGerejaMartumpolInput.setValue('HKBP Palmarum');
        
        const tanggalPemeberkatanInput = await $('[name="tgl_pemberkatan"]');
        await tanggalPemeberkatanInput.setValue('31-08-2021');
        
        const namaGerejaPemberkatanInput = await $('[name="nama_gereja_pemberkatan"]');
        await namaGerejaPemberkatanInput.setValue('HKBP Palmarum');
        
        const namaGerejaMempelaiLakiLakiInput = await $('[name="nama_gereja_laki"]');
        await namaGerejaMempelaiLakiLakiInput.setValue('HKBP');
        
        const namaAyahMempelaiLakiLakiInput = await $('[name="nama_ayah_laki"]');
        await namaAyahMempelaiLakiLakiInput.setValue('Sudarman');
        
        const namaIbuMempelaiLakiLakiInput = await $('[name="nama_ibu_laki"]');
        await namaIbuMempelaiLakiLakiInput .setValue('Sumina');
        
        const namaGerejaMempelaiPerempuanInput = await $('[name="nama_gereja_perempuan"]');
        await namaGerejaMempelaiPerempuanInput.setValue('GKPI');
        
        const namaAyahMempelaiPerempuanInput = await $('[name="nama_ayah_perempuan"]');
        await namaAyahMempelaiPerempuanInput.setValue('sudar');
        
        const namaIbuMempelaiPerempuanInput = await $('[name="nama_ibu_perempuan"]');
        await namaIbuMempelaiPerempuanInput.setValue('');
        
        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('kedjjef');
        
        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();

        const errorMessageElement = await $('#error-message'); 
        expect(await errorMessageElement.isExisting()).toBe(false);
    });


    it('form dengan keterangan kosong', async () => {
        await browser.url(`${apiUrl}/aksesNikahUser`);

        // Pernikahan registration form dengan keterangan kosong
        const namaMempelaiLakiLakiinput = await $('[name="nama_lengkap_laki"]');
        await namaMempelaiLakiLakiinput.setValue('Irvan');
        
        const namaMempelaiPerempuaninput = await $('[name="nama_lengkap_perempuan"]');
        await namaMempelaiPerempuaninput.setValue('Santa');
        
        const tanggalMartumpolInput = await $('[name="tgl_martumpol"]');
        await tanggalMartumpolInput.setValue('20-07-2023');
        
        const namaGerejaMartumpolInput = await $('[name="nama_gereja_martumpol"]');
        await namaGerejaMartumpolInput.setValue('HKBP Palmarum');
        
        const tanggalPemeberkatanInput = await $('[name="tgl_pemberkatan"]');
        await tanggalPemeberkatanInput.setValue('31-08-2021');
        
        const namaGerejaPemberkatanInput = await $('[name="nama_gereja_pemberkatan"]');
        await namaGerejaPemberkatanInput.setValue('HKBP Palmarum');
        
        const namaGerejaMempelaiLakiLakiInput = await $('[name="nama_gereja_laki"]');
        await namaGerejaMempelaiLakiLakiInput.setValue('HKBP');
        
        const namaAyahMempelaiLakiLakiInput = await $('[name="nama_ayah_laki"]');
        await namaAyahMempelaiLakiLakiInput.setValue('Sudarman');
        
        const namaIbuMempelaiLakiLakiInput = await $('[name="nama_ibu_laki"]');
        await namaIbuMempelaiLakiLakiInput .setValue('Sumina');
        
        const namaGerejaMempelaiPerempuanInput = await $('[name="nama_gereja_perempuan"]');
        await namaGerejaMempelaiPerempuanInput.setValue('GKPI');
        
        const namaAyahMempelaiPerempuanInput = await $('[name="nama_ayah_perempuan"]');
        await namaAyahMempelaiPerempuanInput.setValue('sudar');
        
        const namaIbuMempelaiPerempuanInput = await $('[name="nama_ibu_perempuan"]');
        await namaIbuMempelaiPerempuanInput.setValue('Sary');
        
        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('');
        
        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();

        const errorMessageElement = await $('#error-message'); 
        expect(await errorMessageElement.isExisting()).toBe(false);
    });
        
    it('form dengan data yang sama', async () => {
        await browser.url(`${apiUrl}/aksesNikahUser`);

        const namaMempelaiLakiLakiinput = await $('[name="nama_lengkap_laki"]');
        await namaMempelaiLakiLakiinput.setValue('Irvan');
     
        const namaMempelaiPerempuaninput = await $('[name="nama_lengkap_perempuan"]');
        await namaMempelaiPerempuaninput.setValue('Santa');
     
        const tanggalMartumpolInput = await $('[name="tgl_martumpol"]');
        await tanggalMartumpolInput.setValue('20-07-2023');
     
        const namaGerejaMartumpolInput = await $('[name="nama_gereja_martumpol"]');
        await namaGerejaMartumpolInput.setValue('HKBP Palmarum');
     
        const tanggalPemeberkatanInput = await $('[name="tgl_pemberkatan"]');
        await tanggalPemeberkatanInput.setValue('31-08-2021');
     
        const namaGerejaPemberkatanInput = await $('[name="nama_gereja_pemberkatan"]');
        await namaGerejaPemberkatanInput.setValue('HKBP Palmarum');
     
        const namaGerejaMempelaiLakiLakiInput = await $('[name="nama_gereja_laki"]');
        await namaGerejaMempelaiLakiLakiInput.setValue('HKBP');
     
        const namaAyahMempelaiLakiLakiInput = await $('[name="nama_ayah_laki"]');
        await namaAyahMempelaiLakiLakiInput.setValue('Sudarman');
     
        const namaIbuMempelaiLakiLakiInput = await $('[name="nama_ibu_laki"]');
        await namaIbuMempelaiLakiLakiInput .setValue('Sumina');
     
        const namaGerejaMempelaiPerempuanInput = await $('[name="nama_gereja_perempuan"]');
        await namaGerejaMempelaiPerempuanInput.setValue('GKPI');
     
        const namaAyahMempelaiPerempuanInput = await $('[name="nama_ayah_perempuan"]');
        await namaAyahMempelaiPerempuanInput.setValue('sudar');
     
        const namaIbuMempelaiPerempuanInput = await $('[name="nama_ibu_perempuan"]');
        await namaIbuMempelaiPerempuanInput.setValue('Sary');
     
        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('kedjjef');
     
        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();

        const errorMessageElement = await $('#error-message'); 
        expect(await errorMessageElement.isExisting()).toBe(false);
    });

});
