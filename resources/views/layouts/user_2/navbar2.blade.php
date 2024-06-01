<nav>
    <h3>
        Palmarum
    </h3>
    <ul class="list-name">
        <li>
            <a href="/" target="_self">HOME</a>
        </li>
        <li>
            <a href="/">PELAYAN</a>
        </li>
        <li>
            <a href="/">JADWAL IBADAH</a>
        </li>
        <li>
            <a href="/">KEUANGAN</a>
        </li>
        <li>
            <a href="/">KEGIATAN</a>
        </li>
        <li class="dropdown">
            <a target="blank">PENDAFTARAN</a>
            <ul class="dropdown-menu">
                <li><a href="{{route('sidiUser')}}">Pendaftaran sidi</a></li>
                <li><a href="{{ route('nikahUser') }}">Pendaftaran Pernikahan</a></li>
                <li><a href="{{ route('jemaatUser') }}">Pendaftaran Jemaat</a></li>
                <li><a href="{{ route('martumpolUser') }}">Pendaftaran Martumpol</a></li>
                <li><a href="{{ route('pindahUser') }}">Pendaftaran Pindah</a></li>
                <li><a href="{{ route('baptisUser') }}">Pendaftaran Baptis</a></li>
            </ul>
        </li>
        <li class="dropdown">
            <a target="blank">STATUS PENDAFTARAN</a>
            <ul class="dropdown-menu">
                <li><a href="{{ route('userUproveSidi') }}">Status Pendaftaran Sidi</a></li>
                <li><a href="{{ route('userUprovePernikahan') }}">Status Pendaftaran Pernikahan</a></li>
                <li><a href="{{ route('userUproveJemaat') }}">Status Pendaftaran Jemaat</a></li>
                <li><a href="{{ route('userUproveMartumpol') }}">Status Pendaftaran Martumpol</a></li>
                <li><a href="{{ route('userUprovePindah') }}">Status Pendaftaran Pindah</a></li>
                <li><a href="{{ route('userUproveBaptis') }}">Status Pendaftaran Baptis</a></li>
            </ul>
        </li>
        <li>
            <a id="Tentang">TENTANG</a>
        </li>
    </ul>
    <ul class="list-name">
        <!-- Authentication Links -->
        @guest
        @if (Route::has('login'))
        <li class="nav-item">
            <a class="nav-link" href="{{ route('login') }}">{{ __('LOGIN') }}</a>
        </li>
        @endif

        @if (Route::has('register'))
        <li class="nav-item">
            <a class="nav-link" href="{{ route('register') }}">{{ __('REGISTER') }}</a>
        </li>
        @endif
        @else
        <li class="list-name">
            <a  class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                {{ Auth::user()->name }}
            </a>&nbsp&nbsp&nbsp&nbsp&nbsp

            <div aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="{{ route('logout') }}"
                    onclick="event.preventDefault();
                    document.getElementById('logout-form').submit();">
                    {{ __('Logout') }}
                </a>

                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                @csrf
                </form>
            </div>
        </li>
        @endguest
    </ul>
    
    <ion-icon class="burger-bar" name="list-outline"></ion-icon>
    <ul class="list-name-android">
        <li>
            <a href="/" target="_self">HOME</a>
        </li>
        <li>
            <a href="{{route('sidiUser')}}" target="blank">SIDI</a>
        </li>
        <li>
            <a href="{{route('nikahUser')}}">PERNIKAHAN</a>
        </li>
        <li>
            <a href="{{route('jemaatUser')}}">JEMAAT</a>
        </li>
        <li>
            <a href="{{route('martumpolUser')}}">MARTUMPOL</a>
        </li>
        <li>
            <a href="{{route('pindahUser')}}">PINDAH</a>
        </li>
        <li>
            <a href="{{route('baptisUser')}}">BAPTIS</a>
        </li>
        <li>
            <a href="/login" target="blank">LOGIN</a>
        </li>
    </ul>
</nav>
<script src="{{asset('Style')}}/style.js"></script>
<script>
    var scrollButton = document.getElementById('Jadwal');

    scrollButton.addEventListener('click', function() {
      var targetElement = document.getElementById('targetJadwal');

      if (targetElement) {
        var targetPosition = targetElement.offsetTop;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  </script>
  <script>
    var scrollButton = document.getElementById('Keuangan');

    scrollButton.addEventListener('click', function() {
      var targetElement = document.getElementById('targetKeuangan');

      if (targetElement) {
        var targetPosition = targetElement.offsetTop;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  </script>
    <script>
    var scrollButton = document.getElementById('Kegiatan');

    scrollButton.addEventListener('click', function() {
      var targetElement = document.getElementById('targetKegiatan');

      if (targetElement) {
        var targetPosition = targetElement.offsetTop;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  </script>
    <script>
    var scrollButton = document.getElementById('Tentang');

    scrollButton.addEventListener('click', function() {
      var targetElement = document.getElementById('targetTentang');

      if (targetElement) {
        var targetPosition = targetElement.offsetTop;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  </script>

