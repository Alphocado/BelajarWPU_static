<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// manggil post dari model dan database
use App\Models\Post;
use App\Models\User;
use App\Models\Category;

class PostController extends Controller
{
  public function index()
  {
    // request akan menangkap method get
    // dd(request('search'));

    $title = '';
    if (request('category')) {
      $category = Category::firstWhere('slug', request('category'));
      $title = ' in ' . $category->name;
    }
    if (request('author')) {
      $author = User::firstWhere('username', request('author'));
      $title = ' in ' . $author->name;
    }
    return view('posts', [
      // untuk head title
      "title" => "All Posts" . $title,
      "active" => 'blogs',
      // "posts" => Post::all()
      // menampilkan postingan terbaru terdahulu

      // bisa pindahkan withnya ke modelnya
      // "posts" => Post::with(['author', 'category'])->latest()->get()
      // dan jadi singkat seperti ini

      // mengambil data post dari model Post dan mengurutkannya berdasarkan 
      // yang terbaru
      "posts" => Post::latest()->filter(request(['search', 'category', 'author']))->paginate(7)->withQueryString()
      // "posts" => $posts->get()
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
      "active" => 'blogs',
      "post" => $post
    ]);
  }
}
