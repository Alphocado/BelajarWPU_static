<?php


use App\Models\Post;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Models\Category;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// starter
Route::get('/starter', function () {
  return view('welcome');
});

Route::get('/', function () {
  // tampilkan view yang namanya welcome
  // return view('welcome');
  return view('home', [
    "title" => "Home"
  ]);
});

Route::get('/about', function () {
  return view('about', [
    "title" => "About",
    "name" => "alphocado",
    "email" => "raylienardy@gmail.com",
    "image" => "profile.jpg"
  ]);
});


Route::get('/posts', [PostController::class, 'index']);

// halaman single post
// jika di isi post saja maka secara default akan mengirim id
// Route::get('posts/{post}', [PostController::class, 'show']);

// jika diisi begini maka akan mengirim slug 
Route::get('posts/{post:slug}', [PostController::class, 'show']);
// dengan begini tidak perlu id lagi

Route::get('/categories', function () {
  return view('categories', [
    'title' => 'Post Categories',
    'categories' => Category::all()
  ]);
});

// menampilkan semua postingan berdasarkan categories
Route::get('/categories/{category:slug}', function (Category $category) {
  return view('category', [
    'title' => $category->name,
    'posts' => $category->posts,
    'category' => $category->name
  ]);
});


Route::get('/authors/{author:username}', function (User $author) {
  return view('posts', [
    'title' => $author->name,
    'posts' => $author->posts,
  ]);
});
