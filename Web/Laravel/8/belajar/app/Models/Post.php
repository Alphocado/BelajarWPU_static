<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;

class Post // extends Model
{
  // use HasFactory;
  private static $blog_posts = [
    [
      "title" => "Judul Post Pertama",
      "slug" => 'judul-post-pertama',
      "author" => "Udin Samsudin",
      "body" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem velit nesciunt nihil, totam veritatis cumque, quaerat dolor ex officiis, cum consequuntur accusantium doloremque! Laborum optio pariatur dolorem! Sit magni excepturi, consequuntur iure, minima unde porro corrupti libero et vitae maxime dolorem illo tempore sapiente! Eveniet adipisci tempore, quasi est nemo consequuntur laudantium odio temporibus dolor! Voluptas dolores iusto possimus blanditiis ab, error iure eligendi eveniet qui optio, sunt ex fugit expedita laboriosam consectetur doloribus vel nesciunt? Quisquam, ipsum ullam."
    ],
    [
      "title" => "Judul Post Kedua",
      "slug" => 'judul-post-kedua',
      "author" => "Budi Susanto",
      "body" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem velit nesciunt nihil, totam veritatis cumque, quaerat dolor ex officiis, cum consequuntur accusantium doloremque! Laborum optio pariatur dolorem! quasi est nemo consequuntur laudantium odio temporibus dolor! Voluptas dolores iusto possimus blanditiis ab, error iure eligendi eveniet qui optio, sunt ex fugit expedita laboriosam consectetur doloribus vel nesciunt? Quisquam, ipsum ullam. Sit magni excepturi, consequuntur iure, minima unde porro corrupti libero et vitae maxime dolorem illo tempore sapiente! Eveniet adipisci tempore"
    ]
  ];

  public static function all()
  {
    return collect(self::$blog_posts);
  }

  public static function find($slug)
  {
    $posts = static::all();
    // $post = [];
    // foreach ($posts as $p) {
    //   if ($p["slug"] === $slug) {
    //     $post = $p;
    //   }
    // }
    return $posts->firstWhere('slug', $slug);
  }
}
