@extends('layouts/main')
@section('container')
<article>
  <h1>{{ $post->title }}</h1>

  <p>By. Udin in Programming <a href="/categories/{{ $post->category->slug }}">{{ $post->category->name }}</a></p>
  {{-- kalau pake ini akan melakukan escape, artinya tag didalamnya akan muncul ke page --}}
  {{-- {{ $post->body }} --}}

  {{-- kalau pakai ini tidak akan melakukan escape, jadi tag didalamnya tidak akan muncul di page dan akan menjadi salah satu tag html --}}
  {!! $post->body !!}
</article>
  
  <a href="/posts">Back to blog</a>

@endsection

