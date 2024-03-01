@extends('layouts/main')
@section('container')

  <h1 class="mb-5">Post Category : {{ $category }}</h1>
  
  @foreach ($posts as $post)
  <article class="mb-5 border-bottom pb-4">
    <h2><a href="/posts/{{ $post->slug }}" class="text-decoration-none">{{ $post->title }}</a></h2>
    <p>By. Udin in 
      <a href="/categories/{{ $post->category->slug }}" class="text-decoration-none" class="text-decoration-none">
        {{ $post->category->name }}
      </a>
    </p>
    <p>{{ $post->excerpt }}</p>
    <a href="/posts/{{ $post->slug }}" class="text-decoration-none">Read more..</a>
  </article>
  @endforeach

@endsection

