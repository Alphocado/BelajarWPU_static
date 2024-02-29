@extends('layouts/main')
@section('container')

  <h1>Page About</h1>
  <h3>{{ $name }}</h3>
  <p>{{ $email }}</p>
  <img src="img/{{ $image }}" alt="{{ $email }}" width="200" class="img-thumbnail rounded-circle">
  
@endsection