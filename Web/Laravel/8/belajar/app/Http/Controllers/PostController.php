<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// manggil post dari model dan database
use App\Models\Post;

class PostController extends Controller
{
  public function index()
  {
    return view('posts', [
      // untuk head title
      "title" => "All Posts",
      "active" => 'posts',
      // "posts" => Post::all()
      // menampilkan postingan terbaru terdahulu

      // bisa pindahkan withnya ke modelnya
      // "posts" => Post::with(['author', 'category'])->latest()->get()
      // dan jadi singkat seperti ini
      "posts" => Post::latest()->get()
    ]);
  }
  // karena berbentuk Post $post
  // maka akan mencari object data 
  // object datanya dari database (tinker)
  // lalu akan dicari secara otomatis
  // dan akan dikirim kembali ke route lalu ke view dalam bentuk object
  // jauh lebih mudah begini
  public function show(Post $post)
  {
    return view('post', [
      "title" => "Single Post",
      "active" => 'posts',
      "post" => $post
    ]);
  }
}
