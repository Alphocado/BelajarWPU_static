<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Bootstrap CSS -->
  <link href="{{ asset('bootstrap/dist/css/bootstrap.min.css') }}" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

  {{-- bootstrap icons --}}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

  {{-- vanila css --}}
  <link rel="stylesheet" href="/css/style.css">

  <title>Alph | {{ $title }}</title>
</head>

<body>

  {{-- include kek import --}}
  @include('partials/navbar')

  <div class="container mt-4">
    {{-- yield ini bagaikan variable --}}
    {{-- tapi kalau container lebih spesifik yang mana mau masuk --}}
    @yield('container')
  </div>

  <script src="{{ asset('bootstrap/dist/js/bootstrap.bundle.min.js') }}" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>

</html>