@extends('layouts/main')
@section('container')
<div class="container">
  <div class="row justify-content-center mb-5">
    <div class="col-md-8">
      
      <h1 class="mb-3">{{ $post->title }}</h1>
    
      <p>By. 
        <a href="/blogs?author={{ $post->author->username }}" class="text-decoration-none">
          {{ $post->author->name }}
        </a> in 
        <a href="/blogs?category={{ $post->category->slug }}" class="text-decoration-none">
          {{ $post->category->name }}
        </a>
      </p>
      
      @if ($post->image)
        <div style="max-height: 350px; overflow: hidden;">
          <img src="{{ asset('storage/'.$post->image) }}" alt="{{ $post->category->name }}" class="img-fluid">
        </div>
      @else
        <img src="https://source.unsplash.com/1200x400?{{ $post->category->name }}" alt="{{ $post->category->name }}" class="img-fluid">
      @endif

      {{-- kalau pake ini akan melakukan escape, artinya tag didalamnya akan muncul ke page --}}
      {{-- {{ $post->body }} --}}
    
      {{-- kalau pakai ini tidak akan melakukan escape, jadi tag didalamnya tidak akan muncul di page dan akan menjadi salah satu tag html --}}
      <article class="my-3 fs-5">
        {!! $post->body !!}
      </article>
      
      <a href="/blogs" class="d-block mt-3">Back to blog</a>

    </div>
  </div>
</div>

@endsection

