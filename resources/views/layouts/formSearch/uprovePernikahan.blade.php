@include('layouts.formSearch.navbar')
@include('layouts.formSearch.header')
@include('layouts.formSearch.sidebar')
@include('layouts.formSearch.footer')
@include('sweetalert::alert')

<!-- Main content -->
<div class="content-wrapper"><br><br>
<section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card card-primary">
              <div class="card-header" style="height:6rem;">
                <h3 class="card-title" id="textHeader">Approve Jemaat Nikah</h3>
              </div><br>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>Nama Kedua Mempelai</th>
                    <th width="400px">Status</th>
                    <th width="126px"><center>Aksi</center></th>
                  </tr>
                  </thead>
                    @foreach($nikahs as $data)
                    @if($data['status']== 0)
                  <tbody>
                  <tr>
                    <td>{{$data['nama_lengkap_laki']}}&nbsp<span style="color: #e25555;">&#9829;</span>&nbsp{{$data['nama_lengkap_perempuan']}}</td>
                    <td><label class="text-danger">Belum di Approve</label></td>
                    <td>
                      <a href="{{route('UprovePernikahan1', $data['id_registrasi_nikah'])}}" class="btn btn-success" data-toggle="tooltip" data-placement="top" title="uprove">Approve</a>
                      <a href="{{route('UprovePernikahan2', $data['id_registrasi_nikah'])}}" class="btn btn-danger" data-toggle="tooltip" data-placement="top" title="tolak uprove">Tolak</a>
                    </td>                    
                  </tr>
                  </tbody>
                  @elseif($data['status'] == 1)
                  <tbody class="info-1">
                  <tr>
                    <td>{{$data['nama_lengkap_laki']}}&nbsp<span style="color: #e25555;">&#9829;</span>&nbsp{{$data['nama_lengkap_perempuan']}}</td>
                    <td><label class="text-danger">Belum di Approve</label></td>
                    <td>
                      <a href="{{route('UprovePernikahan1', $data['id_registrasi_nikah'])}}" class="btn btn-success" data-toggle="tooltip" data-placement="top" title="uprove">Approve</a>
                      <a href="{{route('UprovePernikahan2', $data['id_registrasi_nikah'])}}" class="btn btn-danger" data-toggle="tooltip" data-placement="top" title="tolak uprove">Tolak</a>
                    </td>                    
                  </tr>
                  </tbody>
                  @endif
                  @endforeach
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->