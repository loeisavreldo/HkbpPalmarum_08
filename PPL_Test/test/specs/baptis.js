const apiUrl = 'http://127.0.0.1:8000';
describe('Laravel Project Testing', () => {
    it('pendaftaran baptis dengan data lengkap', async () => {
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
        await browser.url(`${apiUrl}/aksesBaptisUser`);

        // Mengisi formulir
        const namaLengkapInput = await $('[name="nama_lengkap"]');
        await namaLengkapInput.setValue('Cocep Napitupulu');

        const namaAyahInput = await $('[name="nama_ayah"]');
        await namaAyahInput.setValue('Sahala');

        const namaIbuInput = await $('[name="nama_ibu"]');
        await namaIbuInput.setValue('Risna');

        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Parsoburan');

        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('07-01-2003');

        const jenisKelaminInput = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput.setValue('Laki-laki');

        const alamatInput = await $('[name="alamat"]');
        await alamatInput.setValue('Parsoburan');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Halo');

        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();
    });
    it('Pendaftaran baptis dengan nama kosong', async () => {
        // Setelah login, pergi ke halaman yang diinginkan
        await browser.url(`${apiUrl}/aksesBaptisUser`);

        // Mengisi formulir
        const namaLengkapInput = await $('[name="nama_lengkap"]');
        await namaLengkapInput.setValue('');

        const namaAyahInput = await $('[name="nama_ayah"]');
        await namaAyahInput.setValue('Cocep Napitupulu');

        const namaIbuInput = await $('[name="nama_ibu"]');
        await namaIbuInput.setValue('Risna');

        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Parsoburan');

        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('07-01-2003');

        const jenisKelaminInput = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput.setValue('Laki-laki');

        const alamatInput = await $('[name="alamat"]');
        await alamatInput.setValue('Parsoburan');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Halo');
        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();

    });
    it('Pendaftaran baptis dengan nama ayah kosong', async () => {
        // Setelah login, pergi ke halaman yang diinginkan
        await browser.url(`${apiUrl}/aksesBaptisUser`);

        // Mengisi formulir
        const namaLengkapInput = await $('[name="nama_lengkap"]');
        await namaLengkapInput.setValue('Sahala');

        const namaAyahInput = await $('[name="nama_ayah"]');
        await namaAyahInput.setValue('');

        const namaIbuInput = await $('[name="nama_ibu"]');
        await namaIbuInput.setValue('Risna');

        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Parsoburan');

        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('07-01-2003');

        const jenisKelaminInput = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput.setValue('Laki-laki');

        const alamatInput = await $('[name="alamat"]');
        await alamatInput.setValue('Parsoburan');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Halo');
        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();
        
    });
    it('Pendaftaran baptis dengan nama ibu kosong', async () => {
        // Setelah login, pergi ke halaman yang diinginkan
        await browser.url(`${apiUrl}/aksesBaptisUser`);

        // Mengisi formulir
        const namaLengkapInput = await $('[name="nama_lengkap"]');
        await namaLengkapInput.setValue('Risna');

        const namaAyahInput = await $('[name="nama_ayah"]');
        await namaAyahInput.setValue('Sahala');

        const namaIbuInput = await $('[name="nama_ibu"]');
        await namaIbuInput.setValue('');

        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Parsoburan');

        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('07-01-2003');

        const jenisKelaminInput = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput.setValue('Laki-laki');

        const alamatInput = await $('[name="alamat"]');
        await alamatInput.setValue('Parsoburan');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Halo');
        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();
        
    });
    it('Pendaftaran baptis dengan tempat lahir kosong', async () => {
        // Setelah login, pergi ke halaman yang diinginkan
        await browser.url(`${apiUrl}/aksesBaptisUser`);

        // Mengisi formulir
        const namaLengkapInput = await $('[name="nama_lengkap"]');
        await namaLengkapInput.setValue('Risna');

        const namaAyahInput = await $('[name="nama_ayah"]');
        await namaAyahInput.setValue('Sahala');

        const namaIbuInput = await $('[name="nama_ibu"]');
        await namaIbuInput.setValue('Ringgo');

        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('');

        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('07-01-2003');

        const jenisKelaminInput = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput.setValue('Laki-laki');

        const alamatInput = await $('[name="alamat"]');
        await alamatInput.setValue('Parsoburan');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Halo');
        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();
        
    });
    it('Pendaftaran baptis dengan tanggal lahir kosong', async () => {
        // Setelah login, pergi ke halaman yang diinginkan
        await browser.url(`${apiUrl}/aksesBaptisUser`);

        // Mengisi formulir
        const namaLengkapInput = await $('[name="nama_lengkap"]');
        await namaLengkapInput.setValue('Risna');

        const namaAyahInput = await $('[name="nama_ayah"]');
        await namaAyahInput.setValue('Sahala');

        const namaIbuInput = await $('[name="nama_ibu"]');
        await namaIbuInput.setValue('Ringgo');

        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Parsoburan');

        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('');

        const jenisKelaminInput = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput.setValue('Laki-laki');

        const alamatInput = await $('[name="alamat"]');
        await alamatInput.setValue('Parsoburan');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Halo');
        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();
        
    });
    it('Pendaftaran baptis dengan jenis kelamin kosong', async () => {
        // Setelah login, pergi ke halaman yang diinginkan
        await browser.url(`${apiUrl}/aksesBaptisUser`);

        // Mengisi formulir
        const namaLengkapInput = await $('[name="nama_lengkap"]');
        await namaLengkapInput.setValue('Risna');

        const namaAyahInput = await $('[name="nama_ayah"]');
        await namaAyahInput.setValue('Sahala');

        const namaIbuInput = await $('[name="nama_ibu"]');
        await namaIbuInput.setValue('Ringgo');

        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Parsoburan');

        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('07-01-2003');

        const jenisKelaminInput = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput.setValue('');

        const alamatInput = await $('[name="alamat"]');
        await alamatInput.setValue('Parsoburan');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Halo');
        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();
        
    });
    it('Pendaftaran baptis dengan alamat kosong', async () => {
        // Setelah login, pergi ke halaman yang diinginkan
        await browser.url(`${apiUrl}/aksesBaptisUser`);

        // Mengisi formulir
        const namaLengkapInput = await $('[name="nama_lengkap"]');
        await namaLengkapInput.setValue('Risna');

        const namaAyahInput = await $('[name="nama_ayah"]');
        await namaAyahInput.setValue('Sahala');

        const namaIbuInput = await $('[name="nama_ibu"]');
        await namaIbuInput.setValue('Ringgo');

        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Parsoburan');

        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('07-01-2003');

        const jenisKelaminInput = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput.setValue('Perempuan');

        const alamatInput = await $('[name="alamat"]');
        await alamatInput.setValue('');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Halo');
        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();
        
    });
    it('Pendaftaran baptis dengan keterangan kosong', async () => {
        // Setelah login, pergi ke halaman yang diinginkan
        await browser.url(`${apiUrl}/aksesBaptisUser`);

        // Mengisi formulir
        const namaLengkapInput = await $('[name="nama_lengkap"]');
        await namaLengkapInput.setValue('Risna');

        const namaAyahInput = await $('[name="nama_ayah"]');
        await namaAyahInput.setValue('Sahala');

        const namaIbuInput = await $('[name="nama_ibu"]');
        await namaIbuInput.setValue('Ringgo');

        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Parsoburan');

        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('07-01-2003');

        const jenisKelaminInput = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput.setValue('Perempuan');

        const alamatInput = await $('[name="alamat"]');
        await alamatInput.setValue('Parsoburan');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('');
        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();
    });

    it('Pendaftaran baptis dengan data yang sama', async () => {
        // Setelah login, pergi ke halaman yang diinginkan
        await browser.url(`${apiUrl}/aksesBaptisUser`);

        // Mengisi formulir
        const namaLengkapInput = await $('[name="nama_lengkap"]');
        await namaLengkapInput.setValue('Risna');

        const namaAyahInput = await $('[name="nama_ayah"]');
        await namaAyahInput.setValue('Sahala');

        const namaIbuInput = await $('[name="nama_ibu"]');
        await namaIbuInput.setValue('Ringgo');

        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Parsoburan');

        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('07-01-2003');

        const jenisKelaminInput = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput.setValue('Perempuan');

        const alamatInput = await $('[name="alamat"]');
        await alamatInput.setValue('Parsoburan');

        const keteranganInput = await $('[name="keterangan"]');
        await keteranganInput.setValue('Halo');
        // Klik tombol "daftar"
        const daftarButton = await $('input[type="submit"][value="daftar"]');
        await daftarButton.click();

        const errorMessageElement = await $('#error-message'); 
        expect(await errorMessageElement.isExisting()).to.be.true;
    });
});
