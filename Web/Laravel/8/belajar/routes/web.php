<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

// use App\Models\Post;
// use App\Models\User;
use App\Models\Category;

use App\Http\Controllers\PostController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

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
    "title" => "Home",
    'active' => 'home',
  ]);
});

Route::get('/about', function () {
  return view('about', [
    "title" => "About",
    'active' => 'about',
    "name" => "alphocado",
    "email" => "raylienardy@gmail.com",
    "image" => "profile.jpg"
  ]);
});


Route::get('/blogs', [PostController::class, 'index']);

// halaman single post
// jika di isi post saja maka secara default akan mengirim id
// Route::get('posts/{post}', [PostController::class, 'show']);

// jika diisi begini maka akan mengirim slug 
Route::get('/blogs/{post:slug}', [PostController::class, 'show']);
// dengan begini tidak perlu id lagi

Route::get('/categories', function () {
  return view('categories', [
    'title' => 'Post Categories',
    'active' => 'categories',
    'categories' => Category::all()
  ]);
});

// menampilkan semua postingan berdasarkan categories
// Route::get('/categories/{category:slug}', function (Category $category) {
//   return view('posts', [
//     'title' => "Post By Category : " . $category->name,
//     'active' => 'categories',
//     'posts' => $category->posts->load('category', 'author'),
//   ]);
// });

// Route::get('/authors/{author:username}', function (User $author) {
//   return view('posts', [
//     'title' => "Post By Author : " . $author->name,
//     'active' => 'author',
//     'posts' => $author->posts->load('category', 'author'),
//   ]);
// });


Route::get('/login', [LoginController::class, 'index']);
Route::post('/login', [LoginController::class, 'authenticate']);

Route::get('/register', [RegisterController::class, 'index']);
Route::post('/register', [RegisterController::class, 'store']);

Route::get('/dashboard', [DashboardController::class, 'index']);
