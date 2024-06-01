const apiUrl = 'http://127.0.0.1:8000';
describe('Laravel Project Testing', () => {
    it('Berhasil menambahkan sidi', async () => {
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
        await browser.url(`${apiUrl}/aksesSidiUser`);

        // Mengisi formulir
        const namaLengkapInput = await $('[name="nama_lengkap"]');
        await namaLengkapInput.setValue('Melince Yigibalom');

        const namaAyahInput = await $('[name="nama_ayah"]');
        await namaAyahInput.setValue('Melkias');

        const namaIbuInput = await $('[name="nama_ibu"]');
        await namaIbuInput.setValue('Gerina Walimbo');

        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Tigini');

        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('2-04-2002');

        const gerejaDropdown = await $('[name="id_gereja_sidi"]');
        await gerejaDropdown.selectByAttribute('value','1');

        const alamatInput = await $('[name="nama_gereja_non_hkbp"]');
        await alamatInput.setValue('GKPA');

        const statusKeluargaDropdown = await $('[name="id_hub_keluarga"]');
        await statusKeluargaDropdown.selectByAttribute('value','3');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Keterangan tidak ada');

        
        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();
    });  

 //Pada saat tidak mengisi kolom Nama Lengkap 
    it('pada saat tidak mengisi kolom Nama Lengkap', async () => {
        // Mengunjungi halaman web
        await browser.url(`${apiUrl}/aksesSidiUser`);

        // Mengisi formulir
        const namaLengkapInput = await $('[name="nama_lengkap"]');
        await namaLengkapInput.setValue('');

        const namaAyahInput = await $('[name="nama_ayah"]');
        await namaAyahInput.setValue('Melkias');

        const namaIbuInput = await $('[name="nama_ibu"]');
        await namaIbuInput.setValue('Gerina Walimbo');

        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Tigini');

        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('02-04-2002');

        const gerejaDropdown = await $('[name="id_gereja_sidi"]');
        await gerejaDropdown.selectByAttribute('value', '1');

        const alamatInput = await $('[name="nama_gereja_non_hkbp"]');
        await alamatInput.setValue('GKPA');

        const statusKeluargaDropdown = await $('[name="id_hub_keluarga"]');
        await statusKeluargaDropdown.selectByAttribute('value', '3');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Keterangan tidak ada');

        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();
        
    });


    //Pada saat tidak mengisi kolom Nama Ayah 
    it('pada saat tidak mengisi kolom Nama Ayah', async () => {
        // Mengunjungi halaman web
        await browser.url(`${apiUrl}/aksesSidiUser`);

        // Mengisi formulir
        const namaLengkapInput = await $('[name="nama_lengkap"]');
        await namaLengkapInput.setValue('Melince Yigibalom');

        const namaAyahInput = await $('[name="nama_ayah"]');
        await namaAyahInput.setValue('');

        const namaIbuInput = await $('[name="nama_ibu"]');
        await namaIbuInput.setValue('Gerina Walimbo');

        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Tigini');

        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('02-04-2002');

        const gerejaDropdown = await $('[name="id_gereja_sidi"]');
        await gerejaDropdown.selectByAttribute('value', '1');

        const alamatInput = await $('[name="nama_gereja_non_hkbp"]');
        await alamatInput.setValue('GKPA');

        const statusKeluargaDropdown = await $('[name="id_hub_keluarga"]');
        await statusKeluargaDropdown.selectByAttribute('value', '3');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Keterangan tidak ada');

        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();
        
    });

//Pada saat tidak mengisi kolom Nama Ibu 
it('pada saat tidak mengisi kolom Nama Ibu', async () => {
    // Mengunjungi halaman web
    await browser.url(`${apiUrl}/aksesSidiUser`);

    // Mengisi formulir
    const namaLengkapInput = await $('[name="nama_lengkap"]');
    await namaLengkapInput.setValue('Melince Yigibalom');

    const namaAyahInput = await $('[name="nama_ayah"]');
    await namaAyahInput.setValue('Melkias');

    const namaIbuInput = await $('[name="nama_ibu"]');
    await namaIbuInput.setValue('');

    const tempatLahirInput = await $('[name="tempat_lahir"]');
    await tempatLahirInput.setValue('Tigini');

    const tanggalLahirInput = await $('[name="tanggal_lahir"]');
    await tanggalLahirInput.setValue('02-04-2002');

    const gerejaDropdown = await $('[name="id_gereja_sidi"]');
    await gerejaDropdown.selectByAttribute('value', '1');

    const alamatInput = await $('[name="nama_gereja_non_hkbp"]');
    await alamatInput.setValue('GKPA');

    const statusKeluargaDropdown = await $('[name="id_hub_keluarga"]');
    await statusKeluargaDropdown.selectByAttribute('value', '3');

    const keteranganInput = await $('[name="keterangan"]');
    await keteranganInput.setValue('Keterangan tidak ada');

    // Klik tombol "daftar"
    const daftarButton = await $('input[type="submit"][value="daftar"]');
    await daftarButton.click();
    
});

    //Pada saat tidak mengisi kolom Tempat Lahir
    it('pada saat tidak mengisi kolom Tempat Lahir', async () => {
        // Mengunjungi halaman web
        await browser.url(`${apiUrl}/aksesSidiUser`);

        // Mengisi formulir
        const namaLengkapInput = await $('[name="nama_lengkap"]');
        await namaLengkapInput.setValue('Melince Yigibalom');

        const namaAyahInput = await $('[name="nama_ayah"]');
        await namaAyahInput.setValue('Melkias');

        const namaIbuInput = await $('[name="nama_ibu"]');
        await namaIbuInput.setValue('Gerina Walimbo');

        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('');

        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('02-04-2002');

        const gerejaDropdown = await $('[name="id_gereja_sidi"]');
        await gerejaDropdown.selectByAttribute('value', '1');

        const alamatInput = await $('[name="nama_gereja_non_hkbp"]');
        await alamatInput.setValue('GKPA');

        const statusKeluargaDropdown = await $('[name="id_hub_keluarga"]');
        await statusKeluargaDropdown.selectByAttribute('value', '3');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Keterangan tidak ada');

        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();
        
    });

    //Pada saat tidak mengisi kolom Tanggal Lahir
    it('pada saat tidak mengisi kolom Tanggal Lahir', async () => {
        // Mengunjungi halaman web
        await browser.url(`${apiUrl}/aksesSidiUser`);

        // Mengisi formulir
        const namaLengkapInput = await $('[name="nama_lengkap"]');
        await namaLengkapInput.setValue('Melince Yigibalom');

        const namaAyahInput = await $('[name="nama_ayah"]');
        await namaAyahInput.setValue('Melkias');

        const namaIbuInput = await $('[name="nama_ibu"]');
        await namaIbuInput.setValue('Gerina Walimbo');

        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Tigini');

        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('');

        const gerejaDropdown = await $('[name="id_gereja_sidi"]');
        await gerejaDropdown.selectByAttribute('value', '1');

        const alamatInput = await $('[name="nama_gereja_non_hkbp"]');
        await alamatInput.setValue('GKPA');

        const statusKeluargaDropdown = await $('[name="id_hub_keluarga"]');
        await statusKeluargaDropdown.selectByAttribute('value', '3');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Keterangan tidak ada');

        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();
    });

    //Pada saat tidak mengisi kolom Gereja
    it('pada saat tidak mengisi kolom Gereja', async () => {
        // Mengunjungi halaman web
        await browser.url(`${apiUrl}/aksesSidiUser`);

        // Mengisi formulir
        const namaLengkapInput = await $('[name="nama_lengkap"]');
        await namaLengkapInput.setValue('Melince Yigibalom');

        const namaAyahInput = await $('[name="nama_ayah"]');
        await namaAyahInput.setValue('Melkias');

        const namaIbuInput = await $('[name="nama_ibu"]');
        await namaIbuInput.setValue('Gerina Walimbo');

        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Tigini');

        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('02-04-2002');

        const gerejaDropdown = await $('[name="id_gereja_sidi"]');
        await gerejaDropdown.selectByAttribute('value', '');

        const alamatInput = await $('[name="nama_gereja_non_hkbp"]');
        await alamatInput.setValue('GKPA');

        const statusKeluargaDropdown = await $('[name="id_hub_keluarga"]');
        await statusKeluargaDropdown.selectByAttribute('value', '3');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Keterangan tidak ada');

        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();
        
    });

    //Pada saat tidak mengisi kolom Gereja Non HKBP
    it('pada saat tidak mengisi kolom Gereja Non HKBP', async () => {
        // Mengunjungi halaman web
        await browser.url(`${apiUrl}/aksesSidiUser`);

        // Mengisi formulir
        const namaLengkapInput = await $('[name="nama_lengkap"]');
        await namaLengkapInput.setValue('Melince Yigibalom');

        const namaAyahInput = await $('[name="nama_ayah"]');
        await namaAyahInput.setValue('Melkias');

        const namaIbuInput = await $('[name="nama_ibu"]');
        await namaIbuInput.setValue('Gerina Walimbo');

        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Tigini');

        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('02-04-2002');

        const gerejaDropdown = await $('[name="id_gereja_sidi"]');
        await gerejaDropdown.selectByAttribute('value', '1');

        const alamatInput = await $('[name="nama_gereja_non_hkbp"]');
        await alamatInput.setValue('');

        const statusKeluargaDropdown = await $('[name="id_hub_keluarga"]');
        await statusKeluargaDropdown.selectByAttribute('value', '3');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Keterangan tidak ada');

        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();
    });

    //Pada saat tidak mengisi kolom Status Keluarga
    it('pada saat tidak mengisi kolom Status Keluarga', async () => {
        // Mengunjungi halaman web
        await browser.url(`${apiUrl}/aksesSidiUser`);

        // Mengisi formulir
        const namaLengkapInput = await $('[name="nama_lengkap"]');
        await namaLengkapInput.setValue('Melince Yigibalom');

        const namaAyahInput = await $('[name="nama_ayah"]');
        await namaAyahInput.setValue('Melkias');

        const namaIbuInput = await $('[name="nama_ibu"]');
        await namaIbuInput.setValue('Gerina Walimbo');

        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Tigini');

        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('02-04-2002');

        const gerejaDropdown = await $('[name="id_gereja_sidi"]');
        await gerejaDropdown.selectByAttribute('value', '1');

        const alamatInput = await $('[name="nama_gereja_non_hkbp"]');
        await alamatInput.setValue('GKPA');

        const statusKeluargaDropdown = await $('[name="id_hub_keluarga"]');
        await statusKeluargaDropdown.selectByAttribute('value', '');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Keterangan tidak ada');

        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();
        
    });

    //Pada saat tidak mengisi kolom Keterangan
    it('pada saat tidak mengisi kolom keterangan', async () => {
        // Mengunjungi halaman web
        await browser.url(`${apiUrl}/aksesSidiUser`);

        // Mengisi formulir
        const namaLengkapInput = await $('[name="nama_lengkap"]');
        await namaLengkapInput.setValue('Melince Yigibalom');

        const namaAyahInput = await $('[name="nama_ayah"]');
        await namaAyahInput.setValue('Melkias');

        const namaIbuInput = await $('[name="nama_ibu"]');
        await namaIbuInput.setValue('Gerina Walimbo');

        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Tigini');

        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('02-04-2002');

        const gerejaDropdown = await $('[name="id_gereja_sidi"]');
        await gerejaDropdown.selectByAttribute('value', '1');

        const alamatInput = await $('[name="nama_gereja_non_hkbp"]');
        await alamatInput.setValue('GKPA');

        const statusKeluargaDropdown = await $('[name="id_hub_keluarga"]');
        await statusKeluargaDropdown.selectByAttribute('value', '3');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('');

        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();

    });
    
    //Mengirim data yang sama
    it('Mengirim data yang sama', async () => {
        // Mengunjungi halaman web
        await browser.url(`${apiUrl}/aksesSidiUser`);

        // Mengisi formulir
        const namaLengkapInput = await $('[name="nama_lengkap"]');
        await namaLengkapInput.setValue('Melince Yigibalom');

        const namaAyahInput = await $('[name="nama_ayah"]');
        await namaAyahInput.setValue('Melkias');

        const namaIbuInput = await $('[name="nama_ibu"]');
        await namaIbuInput.setValue('Gerina Walimbo');

        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Tigini');

        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('02-04-2002');

        const gerejaDropdown = await $('[name="id_gereja_sidi"]');
        await gerejaDropdown.selectByAttribute('value', '1');

        const alamatInput = await $('[name="nama_gereja_non_hkbp"]');
        await alamatInput.setValue('GKPA');

        const statusKeluargaDropdown = await $('[name="id_hub_keluarga"]');
        await statusKeluargaDropdown.selectByAttribute('value', '3');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Keterangan tidak ada');

        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();

        const errorMessageElement = await $('#error-message');
        expect(await errorMessageElement.isExisting()).to.be.true;

    });

});
