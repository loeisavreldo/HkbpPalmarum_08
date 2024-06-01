const apiUrl = 'http://127.0.0.1:8000';
describe('Laravel Project Testing', () => {
  // Section 1: Login
  it('should login user', async () => {
      await browser.url(`${apiUrl}/login`);

      const emailInput = await $('#email');
      const passwordInput = await $('#password');

      await emailInput.setValue('josepnapitupulu9@gmail.com');
      await passwordInput.setValue('12345678');

      const loginButton = await $('input[type="submit"].btn.btn-pill.text-white.btn-block.btn-primary');
      await loginButton.click();

      await browser.url(`${apiUrl}/aksesJemaatUser`);

      // Assertion for successful login can be added here if needed
  });

  // Section 2: Registration with complete data
  it('register a new jemaat with complete data', async () => {
      await browser.url(`${apiUrl}/aksesJemaatUser`);

      const namaDepanInput = await $('#name');
      await namaDepanInput.setValue('Fresky');

      const namaBelakangInput = await $('[name="nama_belakang"]');
      await namaBelakangInput.setValue('Tobing');

      const gelarDepanInput = await $('[name="gelar_depan"]');
      await gelarDepanInput.setValue('Mayjend');

      const gelarBelakangInput = await $('[name="gelar_belakang"]');
      await gelarBelakangInput.setValue('S.kom');

      const tempatLahirInput = await $('[name="tempat_lahir"]');
      await tempatLahirInput.setValue('Lobupining');

      const tanggalLahirInput = await $('[name="tanggal_lahir"]');
      await tanggalLahirInput.setValue('01-06-2000');

      const golDarahInput = await $('[name="gol_darah"]');
      await golDarahInput.setValue('AB');

      const jenisKelaminInput = await $('[name="jenis_kelamin"]');
      await jenisKelaminInput.setValue('Laki Laki');

      const noTeleponInput = await $('[name="no_telepon"]');
      await noTeleponInput.setValue('081362721250');

      const alamatInput = await $('[name="alamat"]');
      await alamatInput.setValue('Tarutung');

      const statusHubunganDropdown = await $('[name="id_hub_keluarga"]');
      await statusHubunganDropdown.selectByVisibleText('Anak');

      const pendidikanTerakhirDropdown = await $('[name="id_pendidikan"]');
      await pendidikanTerakhirDropdown.selectByVisibleText('SMA');

      const bidangPendidikanDropdown = await $('[name="id_bidang_pendidikan"]');
      await bidangPendidikanDropdown.selectByVisibleText('Pendidikan Khusus');

      const pekerjaanDropdown = await $('[name="id_pekerjaan"]');
      await pekerjaanDropdown.selectByVisibleText('Petani');

      // Input Pekerjaan Lain jika tidak terdaftar
      const pekerjaanLainInput = await $('[name="nama_pekerjaan_lain"]');
      await pekerjaanLainInput.setValue('');

      // Input Gelar
      const gelarInput = await $('[name="keterangan"]');
      await gelarInput.setValue('');

      // "Daftar" button
      const daftarButton = await $('[value="daftar"]');
      await daftarButton.click();
      
  });

  // Section 3: Registration with empty first name
  it('add a new jemaat with empty first name', async () => {
      await browser.url(`${apiUrl}/aksesJemaatUser`);

      const namaDepanInput = await $('#name');
      await namaDepanInput.setValue('');

      const namaBelakangInput = await $('[name="nama_belakang"]');
      await namaBelakangInput.setValue('Tobing');

      const gelarDepanInput = await $('[name="gelar_depan"]');
      await gelarDepanInput.setValue('Mayjend');

      const gelarBelakangInput = await $('[name="gelar_belakang"]');
      await gelarBelakangInput.setValue('S.kom');

      const tempatLahirInput = await $('[name="tempat_lahir"]');
      await tempatLahirInput.setValue('Lobupining');

      const tanggalLahirInput = await $('[name="tanggal_lahir"]');
      await tanggalLahirInput.setValue('01-06-2000');

      const golDarahInput = await $('[name="gol_darah"]');
      await golDarahInput.setValue('AB');

      const jenisKelaminInput = await $('[name="jenis_kelamin"]');
      await jenisKelaminInput.setValue('Laki Laki');

      const noTeleponInput = await $('[name="no_telepon"]');
      await noTeleponInput.setValue('081362721250');

      const alamatInput = await $('[name="alamat"]');
      await alamatInput.setValue('Tarutung');

      const statusHubunganDropdown = await $('[name="id_hub_keluarga"]');
      await statusHubunganDropdown.selectByVisibleText('Anak');

      const pendidikanTerakhirDropdown = await $('[name="id_pendidikan"]');
      await pendidikanTerakhirDropdown.selectByVisibleText('SMA');

      const bidangPendidikanDropdown = await $('[name="id_bidang_pendidikan"]');
      await bidangPendidikanDropdown.selectByVisibleText('Pendidikan Khusus');

      const pekerjaanDropdown = await $('[name="id_pekerjaan"]');
      await pekerjaanDropdown.selectByVisibleText('Petani');

      // Input Pekerjaan Lain jika tidak terdaftar
      const pekerjaanLainInput = await $('[name="nama_pekerjaan_lain"]');
      await pekerjaanLainInput.setValue('');

      // Input Gelar
      const gelarInput = await $('[name="keterangan"]');
      await gelarInput.setValue('');

      // "Daftar" button
      const daftarButton = await $('[value="daftar"]');
      await daftarButton.click();
  
  });

  // Section 4: Registration with empty last name
  it('add a new jemaat with empty nama_belakang', async () => {
      await browser.url(`${apiUrl}/aksesJemaatUser`);

      const namaDepanInput3 = await $('#name');
      await namaDepanInput3.setValue('Fresky');

      const namaBelakangInput3 = await $('[name="nama_belakang"]');
      await namaBelakangInput3.setValue('');

      const gelarDepanInput3 = await $('[name="gelar_depan"]');
      await gelarDepanInput3.setValue('Mayjend');

      const gelarBelakangInput3 = await $('[name="gelar_belakang"]');
      await gelarBelakangInput3.setValue('S.kom');

      const tempatLahirInput3 = await $('[name="tempat_lahir"]');
      await tempatLahirInput3.setValue('Lobupining');

      const tanggalLahirInput3 = await $('[name="tanggal_lahir"]');
      await tanggalLahirInput3.setValue('01-06-2000');

      const golDarahInput3 = await $('[name="gol_darah"]');
      await golDarahInput3.setValue('AB');

      const jenisKelaminInput3 = await $('[name="jenis_kelamin"]');
      await jenisKelaminInput3.setValue('Laki Laki');

      const noTeleponInput3 = await $('[name="no_telepon"]');
      await noTeleponInput3.setValue('081362721250');

      const alamatInput3 = await $('[name="alamat"]');
      await alamatInput3.setValue('Tarutung');

      const statusHubunganDropdown3 = await $('[name="id_hub_keluarga"]');
      await statusHubunganDropdown3.selectByVisibleText('Anak');

      const pendidikanTerakhirDropdown3 = await $('[name="id_pendidikan"]');
      await pendidikanTerakhirDropdown3.selectByVisibleText('SMA');

      const bidangPendidikanDropdown3 = await $('[name="id_bidang_pendidikan"]');
      await bidangPendidikanDropdown3.selectByVisibleText('Pendidikan Khusus');

      const pekerjaanDropdown3 = await $('[name="id_pekerjaan"]');
      await pekerjaanDropdown3.selectByVisibleText('Petani');

      // Input Pekerjaan Lain jika tidak terdaftar
      const pekerjaanLainInput3 = await $('[name="nama_pekerjaan_lain"]');
      await pekerjaanLainInput3.setValue('');

      // Input Gelar
      const gelarInput3 = await $('[name="keterangan"]');
      await gelarInput3.setValue('');

      // "Daftar" button
      const daftarButton3 = await $('[value="daftar"]');
      await daftarButton3.click();

  });
  
  // Section 5: Registration with empty prefix title
    it('add a new jemaat with empty gelar_depan', async () => {
        await browser.url(`${apiUrl}/aksesJemaatUser`);
  
        const namaDepanInput3 = await $('#name');
        await namaDepanInput3.setValue('Fresky');
  
        const namaBelakangInput3 = await $('[name="nama_belakang"]');
        await namaBelakangInput3.setValue('Tobing');
  
        const gelarDepanInput3 = await $('[name="gelar_depan"]');
        await gelarDepanInput3.setValue('');
  
        const gelarBelakangInput3 = await $('[name="gelar_belakang"]');
        await gelarBelakangInput3.setValue('S.kom');
  
        const tempatLahirInput3 = await $('[name="tempat_lahir"]');
        await tempatLahirInput3.setValue('Lobupining');
  
        const tanggalLahirInput3 = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput3.setValue('01-06-2000');
  
        const golDarahInput3 = await $('[name="gol_darah"]');
        await golDarahInput3.setValue('AB');
  
        const jenisKelaminInput3 = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput3.setValue('Laki Laki');
  
        const noTeleponInput3 = await $('[name="no_telepon"]');
        await noTeleponInput3.setValue('081362721250');
  
        const alamatInput3 = await $('[name="alamat"]');
        await alamatInput3.setValue('Tarutung');
  
        const statusHubunganDropdown3 = await $('[name="id_hub_keluarga"]');
        await statusHubunganDropdown3.selectByVisibleText('Anak');
  
        const pendidikanTerakhirDropdown3 = await $('[name="id_pendidikan"]');
        await pendidikanTerakhirDropdown3.selectByVisibleText('SMA');
  
        const bidangPendidikanDropdown3 = await $('[name="id_bidang_pendidikan"]');
        await bidangPendidikanDropdown3.selectByVisibleText('Pendidikan Khusus');
  
        const pekerjaanDropdown3 = await $('[name="id_pekerjaan"]');
        await pekerjaanDropdown3.selectByVisibleText('Petani');
  
        // Input Pekerjaan Lain jika tidak terdaftar
        const pekerjaanLainInput3 = await $('[name="nama_pekerjaan_lain"]');
        await pekerjaanLainInput3.setValue('');
  
        // Input Gelar
        const gelarInput3 = await $('[name="keterangan"]');
        await gelarInput3.setValue('');
  
        // "Daftar" button
        const daftarButton3 = await $('[value="daftar"]');
        await daftarButton3.click();

  });
  
  // Section 6: Daftar Jemaat dengan gelar belakang kosong
    it('add a new jemaat with empty gelar_belakang', async () => {
        await browser.url(`${apiUrl}/aksesJemaatUser`);
  
        const namaDepanInput3 = await $('#name');
        await namaDepanInput3.setValue('Fresky');
  
        const namaBelakangInput3 = await $('[name="nama_belakang"]');
        await namaBelakangInput3.setValue('Tobing');
  
        const gelarDepanInput3 = await $('[name="gelar_depan"]');
        await gelarDepanInput3.setValue('Mayjend');
  
        const gelarBelakangInput3 = await $('[name="gelar_belakang"]');
        await gelarBelakangInput3.setValue('');
  
        const tempatLahirInput3 = await $('[name="tempat_lahir"]');
        await tempatLahirInput3.setValue('Lobupining');
  
        const tanggalLahirInput3 = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput3.setValue('01-06-2000');
  
        const golDarahInput3 = await $('[name="gol_darah"]');
        await golDarahInput3.setValue('AB');
  
        const jenisKelaminInput3 = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput3.setValue('Laki Laki');
  
        const noTeleponInput3 = await $('[name="no_telepon"]');
        await noTeleponInput3.setValue('081362721250');
  
        const alamatInput3 = await $('[name="alamat"]');
        await alamatInput3.setValue('Tarutung');
  
        const statusHubunganDropdown3 = await $('[name="id_hub_keluarga"]');
        await statusHubunganDropdown3.selectByVisibleText('Anak');
  
        const pendidikanTerakhirDropdown3 = await $('[name="id_pendidikan"]');
        await pendidikanTerakhirDropdown3.selectByVisibleText('SMA');
  
        const bidangPendidikanDropdown3 = await $('[name="id_bidang_pendidikan"]');
        await bidangPendidikanDropdown3.selectByVisibleText('Pendidikan Khusus');
  
        const pekerjaanDropdown3 = await $('[name="id_pekerjaan"]');
        await pekerjaanDropdown3.selectByVisibleText('Petani');
  
        // Input Pekerjaan Lain jika tidak terdaftar
        const pekerjaanLainInput3 = await $('[name="nama_pekerjaan_lain"]');
        await pekerjaanLainInput3.setValue('');
  
        // Input Gelar
        const gelarInput3 = await $('[name="keterangan"]');
        await gelarInput3.setValue('');
  
        // "Daftar" button
        const daftarButton3 = await $('[value="daftar"]');
        await daftarButton3.click();
  
  });
  
  // Section 7: Registration with empty prefix title
    it('add a new jemaat with empty tempat lahir', async () => {
        await browser.url(`${apiUrl}/aksesJemaatUser`);
  
        const namaDepanInput3 = await $('#name');
        await namaDepanInput3.setValue('Fresky');
  
        const namaBelakangInput3 = await $('[name="nama_belakang"]');
        await namaBelakangInput3.setValue('Tobing');
  
        const gelarDepanInput3 = await $('[name="gelar_depan"]');
        await gelarDepanInput3.setValue('Mayjend');
  
        const gelarBelakangInput3 = await $('[name="gelar_belakang"]');
        await gelarBelakangInput3.setValue('S.kom');
  
        const tempatLahirInput3 = await $('[name="tempat_lahir"]');
        await tempatLahirInput3.setValue('');
  
        const tanggalLahirInput3 = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput3.setValue('01-06-2000');
  
        const golDarahInput3 = await $('[name="gol_darah"]');
        await golDarahInput3.setValue('AB');
  
        const jenisKelaminInput3 = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput3.setValue('Laki Laki');
  
        const noTeleponInput3 = await $('[name="no_telepon"]');
        await noTeleponInput3.setValue('081362721250');
  
        const alamatInput3 = await $('[name="alamat"]');
        await alamatInput3.setValue('Tarutung');
  
        const statusHubunganDropdown3 = await $('[name="id_hub_keluarga"]');
        await statusHubunganDropdown3.selectByVisibleText('Anak');
  
        const pendidikanTerakhirDropdown3 = await $('[name="id_pendidikan"]');
        await pendidikanTerakhirDropdown3.selectByVisibleText('SMA');
  
        const bidangPendidikanDropdown3 = await $('[name="id_bidang_pendidikan"]');
        await bidangPendidikanDropdown3.selectByVisibleText('Pendidikan Khusus');
  
        const pekerjaanDropdown3 = await $('[name="id_pekerjaan"]');
        await pekerjaanDropdown3.selectByVisibleText('Petani');
  
        // Input Pekerjaan Lain jika tidak terdaftar
        const pekerjaanLainInput3 = await $('[name="nama_pekerjaan_lain"]');
        await pekerjaanLainInput3.setValue('');
  
        // Input Gelar
        const gelarInput3 = await $('[name="keterangan"]');
        await gelarInput3.setValue('');
  
        // "Daftar" button
        const daftarButton3 = await $('[value="daftar"]');
        await daftarButton3.click();


  });
  
  // Section 8: Registration with empty prefix title
    it('add a new jemaat with empty tanggal lahir', async () => {
        await browser.url(`${apiUrl}/aksesJemaatUser`);

        const namaDepanInput3 = await $('#name');
        await namaDepanInput3.setValue('Fresky');
  
        const namaBelakangInput3 = await $('[name="nama_belakang"]');
        await namaBelakangInput3.setValue('Tobing');
  
        const gelarDepanInput3 = await $('[name="gelar_depan"]');
        await gelarDepanInput3.setValue('Mayjend');
  
        const gelarBelakangInput3 = await $('[name="gelar_belakang"]');
        await gelarBelakangInput3.setValue('S.kom');
  
        const tempatLahirInput3 = await $('[name="tempat_lahir"]');
        await tempatLahirInput3.setValue('Lobupining');
  
        const tanggalLahirInput3 = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput3.setValue('');
  
        const golDarahInput3 = await $('[name="gol_darah"]');
        await golDarahInput3.setValue('AB');
  
        const jenisKelaminInput3 = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput3.setValue('Laki Laki');
  
        const noTeleponInput3 = await $('[name="no_telepon"]');
        await noTeleponInput3.setValue('081362721250');
  
        const alamatInput3 = await $('[name="alamat"]');
        await alamatInput3.setValue('Tarutung');
  
        const statusHubunganDropdown3 = await $('[name="id_hub_keluarga"]');
        await statusHubunganDropdown3.selectByVisibleText('Anak');
  
        const pendidikanTerakhirDropdown3 = await $('[name="id_pendidikan"]');
        await pendidikanTerakhirDropdown3.selectByVisibleText('SMA');
  
        const bidangPendidikanDropdown3 = await $('[name="id_bidang_pendidikan"]');
        await bidangPendidikanDropdown3.selectByVisibleText('Pendidikan Khusus');
  
        const pekerjaanDropdown3 = await $('[name="id_pekerjaan"]');
        await pekerjaanDropdown3.selectByVisibleText('Petani');
  
        // Input Pekerjaan Lain jika tidak terdaftar
        const pekerjaanLainInput3 = await $('[name="nama_pekerjaan_lain"]');
        await pekerjaanLainInput3.setValue('');
  
        // Input Gelar
        const gelarInput3 = await $('[name="keterangan"]');
        await gelarInput3.setValue('');
  
        // "Daftar" button
        const daftarButton3 = await $('[value="daftar"]');
        await daftarButton3.click();

  });
        

  // Section 9: Registration with empty golongan darah
    it('add a new jemaat with empty golongan darah', async () => {
        await browser.url(`${apiUrl}/aksesJemaatUser`);

        const namaDepanInput4 = await $('#name');
        await namaDepanInput4.setValue('Fresky');

        const namaBelakangInput4 = await $('[name="nama_belakang"]');
        await namaBelakangInput4.setValue('Tobing');

        const gelarDepanInput4 = await $('[name="gelar_depan"]');
        await gelarDepanInput4.setValue('Mayjend');

        const gelarBelakangInput4 = await $('[name="gelar_belakang"]');
        await gelarBelakangInput4.setValue('S.kom');

        const tempatLahirInput4 = await $('[name="tempat_lahir"]');
        await tempatLahirInput4.setValue('Lobupining');

        const tanggalLahirInput4 = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput4.setValue('');

        const golDarahInput4 = await $('[name="gol_darah"]');
        await golDarahInput4.setValue('');

        const jenisKelaminInput4 = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput4.setValue('Laki Laki');

        const noTeleponInput4 = await $('[name="no_telepon"]');
        await noTeleponInput4.setValue('081362721250');

        const alamatInput4 = await $('[name="alamat"]');
        await alamatInput4.setValue('Tarutung');

        const statusHubunganDropdown4 = await $('[name="id_hub_keluarga"]');
        await statusHubunganDropdown4.selectByVisibleText('Anak');

        const pendidikanTerakhirDropdown4 = await $('[name="id_pendidikan"]');
        await pendidikanTerakhirDropdown4.selectByVisibleText('SMA');

        const bidangPendidikanDropdown4 = await $('[name="id_bidang_pendidikan"]');
        await bidangPendidikanDropdown4.selectByVisibleText('Pendidikan Khusus');

        const pekerjaanDropdown4 = await $('[name="id_pekerjaan"]');
        await pekerjaanDropdown4.selectByVisibleText('Petani');

        // Input Pekerjaan Lain jika tidak terdaftar
        const pekerjaanLainInput4 = await $('[name="nama_pekerjaan_lain"]');
        await pekerjaanLainInput4.setValue('');

        // Input Gelar
        const gelarInput4 = await $('[name="keterangan"]');
        await gelarInput4.setValue('');

        // "Daftar" button
        const daftarButton4 = await $('[value="daftar"]');
        await daftarButton4.click();

      });

  // Section 10: Registration with empty jenis kelamin
    it('add a new jemaat with empty jenis kelamin', async () => {
        await browser.url(`${apiUrl}/aksesJemaatUser`);

        const namaDepanInput4 = await $('#name');
        await namaDepanInput4.setValue('Fresky');

        const namaBelakangInput4 = await $('[name="nama_belakang"]');
        await namaBelakangInput4.setValue('Tobing');

        const gelarDepanInput4 = await $('[name="gelar_depan"]');
        await gelarDepanInput4.setValue('Mayjend');

        const gelarBelakangInput4 = await $('[name="gelar_belakang"]');
        await gelarBelakangInput4.setValue('S.kom');

        const tempatLahirInput4 = await $('[name="tempat_lahir"]');
        await tempatLahirInput4.setValue('Lobupining');

        const tanggalLahirInput4 = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput4.setValue('');

        const golDarahInput4 = await $('[name="gol_darah"]');
        await golDarahInput4.setValue('01-06-2000');

        const jenisKelaminInput4 = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput4.setValue('');

        const noTeleponInput4 = await $('[name="no_telepon"]');
        await noTeleponInput4.setValue('081362721250');

        const alamatInput4 = await $('[name="alamat"]');
        await alamatInput4.setValue('Tarutung');

        const statusHubunganDropdown4 = await $('[name="id_hub_keluarga"]');
        await statusHubunganDropdown4.selectByVisibleText('Anak');

        const pendidikanTerakhirDropdown4 = await $('[name="id_pendidikan"]');
        await pendidikanTerakhirDropdown4.selectByVisibleText('SMA');

        const bidangPendidikanDropdown4 = await $('[name="id_bidang_pendidikan"]');
        await bidangPendidikanDropdown4.selectByVisibleText('Pendidikan Khusus');

        const pekerjaanDropdown4 = await $('[name="id_pekerjaan"]');
        await pekerjaanDropdown4.selectByVisibleText('Petani');

        // Input Pekerjaan Lain jika tidak terdaftar
        const pekerjaanLainInput4 = await $('[name="nama_pekerjaan_lain"]');
        await pekerjaanLainInput4.setValue('');

        // Input Gelar
        const gelarInput4 = await $('[name="keterangan"]');
        await gelarInput4.setValue('');

        // "Daftar" button
        const daftarButton4 = await $('[value="daftar"]');
        await daftarButton4.click();

  });

  // Section 11: Registration with empty No Telp
    it('add a new jemaat with empty No Telp', async () => {
        await browser.url(`${apiUrl}/aksesJemaatUser`);
    
        const namaDepanInput4 = await $('#name');
        await namaDepanInput4.setValue('Fresky');
    
        const namaBelakangInput4 = await $('[name="nama_belakang"]');
        await namaBelakangInput4.setValue('Tobing');
    
        const gelarDepanInput4 = await $('[name="gelar_depan"]');
        await gelarDepanInput4.setValue('Mayjend');
    
        const gelarBelakangInput4 = await $('[name="gelar_belakang"]');
        await gelarBelakangInput4.setValue('S.kom');
    
        const tempatLahirInput4 = await $('[name="tempat_lahir"]');
        await tempatLahirInput4.setValue('Lobupining');
    
        const tanggalLahirInput4 = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput4.setValue('01-06-2000');
    
        const golDarahInput4 = await $('[name="gol_darah"]');
        await golDarahInput4.setValue('AB');
    
        const jenisKelaminInput4 = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput4.setValue('Laki Laki');
    
        const noTeleponInput4 = await $('[name="no_telepon"]');
        await noTeleponInput4.setValue('');
    
        const alamatInput4 = await $('[name="alamat"]');
        await alamatInput4.setValue('Tarutung');
    
        const statusHubunganDropdown4 = await $('[name="id_hub_keluarga"]');
        await statusHubunganDropdown4.selectByVisibleText('Anak');
    
        const pendidikanTerakhirDropdown4 = await $('[name="id_pendidikan"]');
        await pendidikanTerakhirDropdown4.selectByVisibleText('SMA');
    
        const bidangPendidikanDropdown4 = await $('[name="id_bidang_pendidikan"]');
        await bidangPendidikanDropdown4.selectByVisibleText('Pendidikan Khusus');
    
        const pekerjaanDropdown4 = await $('[name="id_pekerjaan"]');
        await pekerjaanDropdown4.selectByVisibleText('Petani');
    
        // Input Pekerjaan Lain jika tidak terdaftar
        const pekerjaanLainInput4 = await $('[name="nama_pekerjaan_lain"]');
        await pekerjaanLainInput4.setValue('');
    
        // Input Gelar
        const gelarInput4 = await $('[name="keterangan"]');
        await gelarInput4.setValue('');
    
        // "Daftar" button
        const daftarButton4 = await $('[value="daftar"]');
        await daftarButton4.click();

      });

  // Section 12: Alamat
    it('add a new jemaat with empty alamat', async () => {
        await browser.url(`${apiUrl}/aksesJemaatUser`);
    
        const namaDepanInput = await $('#name');
        await namaDepanInput.setValue('Fresky');
  
        const namaBelakangInput = await $('[name="nama_belakang"]');
        await namaBelakangInput.setValue('Tobing');
  
        const gelarDepanInput = await $('[name="gelar_depan"]');
        await gelarDepanInput.setValue('Mayjend');
  
        const gelarBelakangInput = await $('[name="gelar_belakang"]');
        await gelarBelakangInput.setValue('S.kom');
  
        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Lobupining');
  
        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('01-06-2000');
  
        const golDarahInput = await $('[name="gol_darah"]');
        await golDarahInput.setValue('AB');
  
        const jenisKelaminInput = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput.setValue('Laki Laki');
  
        const noTeleponInput = await $('[name="no_telepon"]');
        await noTeleponInput.setValue('081362721250');
  
        const alamatInput = await $('[name="alamat"]');
        await alamatInput.setValue('');
  
        const statusHubunganDropdown = await $('[name="id_hub_keluarga"]');
        await statusHubunganDropdown.selectByVisibleText('Anak');
  
        const pendidikanTerakhirDropdown = await $('[name="id_pendidikan"]');
        await pendidikanTerakhirDropdown.selectByVisibleText('SMA');
  
        const bidangPendidikanDropdown = await $('[name="id_bidang_pendidikan"]');
        await bidangPendidikanDropdown.selectByVisibleText('Pendidikan Khusus');
  
        const pekerjaanDropdown = await $('[name="id_pekerjaan"]');
        await pekerjaanDropdown.selectByVisibleText('Petani');
  
        // Input Pekerjaan Lain jika tidak terdaftar
        const pekerjaanLainInput = await $('[name="nama_pekerjaan_lain"]');
        await pekerjaanLainInput.setValue('');
  
        // Input Gelar
        const gelarInput = await $('[name="keterangan"]');
        await gelarInput.setValue('');
  
        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();
        
      });

  // Section 13: Hub Keluarga
    it('add a new jemaat with empty hub keluarga', async () => {
        await browser.url(`${apiUrl}/aksesJemaatUser`);
    
        const namaDepanInput = await $('#name');
        await namaDepanInput.setValue('Fresky');
  
        const namaBelakangInput = await $('[name="nama_belakang"]');
        await namaBelakangInput.setValue('Tobing');
  
        const gelarDepanInput = await $('[name="gelar_depan"]');
        await gelarDepanInput.setValue('Mayjend');
  
        const gelarBelakangInput = await $('[name="gelar_belakang"]');
        await gelarBelakangInput.setValue('S.kom');
  
        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Lobupining');
  
        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('01-06-2000');
  
        const golDarahInput = await $('[name="gol_darah"]');
        await golDarahInput.setValue('AB');
  
        const jenisKelaminInput = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput.setValue('Laki Laki');
  
        const noTeleponInput = await $('[name="no_telepon"]');
        await noTeleponInput.setValue('081362721250');
  
        const alamatInput = await $('[name="alamat"]');
        await alamatInput.setValue('Tarutung');
  
        const statusHubunganDropdown = await $('[name="id_hub_keluarga"]');
        await statusHubunganDropdown.selectByVisibleText('');
  
        const pendidikanTerakhirDropdown = await $('[name="id_pendidikan"]');
        await pendidikanTerakhirDropdown.selectByVisibleText('SMA');
  
        const bidangPendidikanDropdown = await $('[name="id_bidang_pendidikan"]');
        await bidangPendidikanDropdown.selectByVisibleText('Pendidikan Khusus');
  
        const pekerjaanDropdown = await $('[name="id_pekerjaan"]');
        await pekerjaanDropdown.selectByVisibleText('Petani');
  
        // Input Pekerjaan Lain jika tidak terdaftar
        const pekerjaanLainInput = await $('[name="nama_pekerjaan_lain"]');
        await pekerjaanLainInput.setValue('');
  
        // Input Gelar
        const gelarInput = await $('[name="keterangan"]');
        await gelarInput.setValue('');
  
        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();
    });

  // Section 14: Pendidikan
    it('add a new jemaat with empty Pendidikan', async () => {
        await browser.url(`${apiUrl}/aksesJemaatUser`);
    
        const namaDepanInput = await $('#name');
        await namaDepanInput.setValue('Fresky');
  
        const namaBelakangInput = await $('[name="nama_belakang"]');
        await namaBelakangInput.setValue('Tobing');
  
        const gelarDepanInput = await $('[name="gelar_depan"]');
        await gelarDepanInput.setValue('Mayjend');
  
        const gelarBelakangInput = await $('[name="gelar_belakang"]');
        await gelarBelakangInput.setValue('S.kom');
  
        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Lobupining');
  
        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('01-06-2000');
  
        const golDarahInput = await $('[name="gol_darah"]');
        await golDarahInput.setValue('AB');
  
        const jenisKelaminInput = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput.setValue('Laki Laki');
  
        const noTeleponInput = await $('[name="no_telepon"]');
        await noTeleponInput.setValue('081362721250');
  
        const alamatInput = await $('[name="alamat"]');
        await alamatInput.setValue('Tarutung');
  
        const statusHubunganDropdown = await $('[name="id_hub_keluarga"]');
        await statusHubunganDropdown.selectByVisibleText('Anak');
  
        const pendidikanTerakhirDropdown = await $('[name="id_pendidikan"]');
        await pendidikanTerakhirDropdown.selectByVisibleText('');
  
        const bidangPendidikanDropdown = await $('[name="id_bidang_pendidikan"]');
        await bidangPendidikanDropdown.selectByVisibleText('Pendidikan Khusus');
  
        const pekerjaanDropdown = await $('[name="id_pekerjaan"]');
        await pekerjaanDropdown.selectByVisibleText('Petani');
  
        // Input Pekerjaan Lain jika tidak terdaftar
        const pekerjaanLainInput = await $('[name="nama_pekerjaan_lain"]');
        await pekerjaanLainInput.setValue('');
  
        // Input Gelar
        const gelarInput = await $('[name="keterangan"]');
        await gelarInput.setValue('');
  
        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();    

      });

  // Section 15: Bidang Pendidikan
    it('add a new jemaat with empty Bidang Pendidikan', async () => {
        await browser.url(`${apiUrl}/aksesJemaatUser`);
    
        const namaDepanInput = await $('#name');
        await namaDepanInput.setValue('Fresky');
  
        const namaBelakangInput = await $('[name="nama_belakang"]');
        await namaBelakangInput.setValue('Tobing');
  
        const gelarDepanInput = await $('[name="gelar_depan"]');
        await gelarDepanInput.setValue('Mayjend');
  
        const gelarBelakangInput = await $('[name="gelar_belakang"]');
        await gelarBelakangInput.setValue('S.kom');
  
        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Lobupining');
  
        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('01-06-2000');
  
        const golDarahInput = await $('[name="gol_darah"]');
        await golDarahInput.setValue('AB');
  
        const jenisKelaminInput = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput.setValue('Laki Laki');
  
        const noTeleponInput = await $('[name="no_telepon"]');
        await noTeleponInput.setValue('081362721250');
  
        const alamatInput = await $('[name="alamat"]');
        await alamatInput.setValue('Tarutung');
  
        const statusHubunganDropdown = await $('[name="id_hub_keluarga"]');
        await statusHubunganDropdown.selectByVisibleText('Anak');
  
        const pendidikanTerakhirDropdown = await $('[name="id_pendidikan"]');
        await pendidikanTerakhirDropdown.selectByVisibleText('SMA');
  
        const bidangPendidikanDropdown = await $('[name="id_bidang_pendidikan"]');
        await bidangPendidikanDropdown.selectByVisibleText('');
  
        const pekerjaanDropdown = await $('[name="id_pekerjaan"]');
        await pekerjaanDropdown.selectByVisibleText('Petani');
  
        // Input Pekerjaan Lain jika tidak terdaftar
        const pekerjaanLainInput = await $('[name="nama_pekerjaan_lain"]');
        await pekerjaanLainInput.setValue('');
  
        // Input Gelar
        const gelarInput = await $('[name="keterangan"]');
        await gelarInput.setValue('');
  
        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();

      });

  // Section 16: Pekerjaan
    it('add a new jemaat with empty Pekerjaan', async () => {
        await browser.url(`${apiUrl}/aksesJemaatUser`);
    
        const namaDepanInput = await $('#name');
        await namaDepanInput.setValue('Fresky');
  
        const namaBelakangInput = await $('[name="nama_belakang"]');
        await namaBelakangInput.setValue('Tobing');
  
        const gelarDepanInput = await $('[name="gelar_depan"]');
        await gelarDepanInput.setValue('Mayjend');
  
        const gelarBelakangInput = await $('[name="gelar_belakang"]');
        await gelarBelakangInput.setValue('S.kom');
  
        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Lobupining');
  
        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('01-06-2000');
  
        const golDarahInput = await $('[name="gol_darah"]');
        await golDarahInput.setValue('AB');
  
        const jenisKelaminInput = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput.setValue('Laki Laki');
  
        const noTeleponInput = await $('[name="no_telepon"]');
        await noTeleponInput.setValue('081362721250');
  
        const alamatInput = await $('[name="alamat"]');
        await alamatInput.setValue('Tarutung');
  
        const statusHubunganDropdown = await $('[name="id_hub_keluarga"]');
        await statusHubunganDropdown.selectByVisibleText('Anak');
  
        const pendidikanTerakhirDropdown = await $('[name="id_pendidikan"]');
        await pendidikanTerakhirDropdown.selectByVisibleText('SMA');
  
        const bidangPendidikanDropdown = await $('[name="id_bidang_pendidikan"]');
        await bidangPendidikanDropdown.selectByVisibleText('Pendidikan Khusus');
  
        const pekerjaanDropdown = await $('[name="id_pekerjaan"]');
        await pekerjaanDropdown.selectByVisibleText('');
  
        // Input Pekerjaan Lain jika tidak terdaftar
        const pekerjaanLainInput = await $('[name="nama_pekerjaan_lain"]');
        await pekerjaanLainInput.setValue('');
  
        // Input Gelar
        const gelarInput = await $('[name="keterangan"]');
        await gelarInput.setValue('');
  
        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();
     });
    
  // Section 17: Data Lengkap
    it('add a new jemaat with same data', async () => {
        await browser.url(`${apiUrl}/aksesJemaatUser`);
    
        const namaDepanInput = await $('#name');
        await namaDepanInput.setValue('Fresky');
  
        const namaBelakangInput = await $('[name="nama_belakang"]');
        await namaBelakangInput.setValue('Tobing');
  
        const gelarDepanInput = await $('[name="gelar_depan"]');
        await gelarDepanInput.setValue('Mayjend');
  
        const gelarBelakangInput = await $('[name="gelar_belakang"]');
        await gelarBelakangInput.setValue('S.kom');
  
        const tempatLahirInput = await $('[name="tempat_lahir"]');
        await tempatLahirInput.setValue('Lobupining');
  
        const tanggalLahirInput = await $('[name="tanggal_lahir"]');
        await tanggalLahirInput.setValue('01-06-2000');
  
        const golDarahInput = await $('[name="gol_darah"]');
        await golDarahInput.setValue('AB');
  
        const jenisKelaminInput = await $('[name="jenis_kelamin"]');
        await jenisKelaminInput.setValue('Laki Laki');
  
        const noTeleponInput = await $('[name="no_telepon"]');
        await noTeleponInput.setValue('081362721250');
  
        const alamatInput = await $('[name="alamat"]');
        await alamatInput.setValue('Tarutung');
  
        const statusHubunganDropdown = await $('[name="id_hub_keluarga"]');
        await statusHubunganDropdown.selectByVisibleText('Anak');
  
        const pendidikanTerakhirDropdown = await $('[name="id_pendidikan"]');
        await pendidikanTerakhirDropdown.selectByVisibleText('SMA');
  
        const bidangPendidikanDropdown = await $('[name="id_bidang_pendidikan"]');
        await bidangPendidikanDropdown.selectByVisibleText('Pendidikan Khusus');
  
        const pekerjaanDropdown = await $('[name="id_pekerjaan"]');
        await pekerjaanDropdown.selectByVisibleText('Petani');
  
        // Input Pekerjaan Lain jika tidak terdaftar
        const pekerjaanLainInput = await $('[name="nama_pekerjaan_lain"]');
        await pekerjaanLainInput.setValue('');
  
        // Input Gelar
        const gelarInput = await $('[name="keterangan"]');
        await gelarInput.setValue('');
  
        // "Daftar" button
        const daftarButton = await $('[value="daftar"]');
        await daftarButton.click();

        const errorMessageElement = await $('#error-message');
        expect(await errorMessageElement.isExisting()).to.be.true;
     });
    
});

