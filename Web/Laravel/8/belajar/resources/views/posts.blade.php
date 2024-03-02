@extends('layouts/main')
@section('container')
  <h1 class="mb-5">{{ $title }}</h1>

  @if($posts->count())
  <div class="card mb-3">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h3 class="card-title">{{ $posts[0]->title }}</h3>
      <p class="card-text">{{ $post[0]->excerpt }}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  @else
  <p class="text-center fs-4">No post found.</p>
  @endif
  
  @foreach ($posts as $post)
  <article class="mb-5 border-bottom pb-4">

    <h2><a href="/posts/{{ $post->slug }}" class="text-decoration-none">{{ $post->title }}</a></h2>

    <p>By. <a href="/authors/{{ $post->author->username }}" class="text-decoration-none">{{ $post->author->name }}</a> in 
      <a href="/categories/{{ $post->category->slug }}" class="text-decoration-none">
        {{ $post->category->name }}
      </a>
    </p>
    
    <p>{{ $post->excerpt }}</p>

    <a href="/posts/{{ $post->slug }}" class="text-decoration-none">Read more..</a>
  </article>
  @endforeach

@endsection

