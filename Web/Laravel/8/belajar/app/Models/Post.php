<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
  use HasFactory;
  // property yang boleh diisi
  // protected $fillable = ['title', 'excerpt', 'body'];
  // property yang tidak boleh diisi
  protected $guarded = ['id'];
  protected $with = ['category', 'author'];

  public function scopeFilter($query, array $filters)
  {
    // if (isset($filters['search']) ? $filters['search'] : false) {
    //   // cari judul
    //   return $query->where('title', 'like', '%' . $filters['search'] . '%')
    //     // cari isi post
    //     ->orWhere('body', 'like', '%' . $filters['search'] . '%');
    // }

    // yang diatas sama saja dengan yang dibawah

    $query->when($filters['search'] ?? false, function ($query, $search) {
      // alasan menggunakan use
      // $search didalam return function tidak bisa mendetect variable diatas
      // jadi perlu dipanggil kembali karena beda scope
      return $query->where(function ($query) use ($search) {
        $query->where('title', 'like', '%' . $search . '%')
          ->orWhere('body', 'like', '%' . $search . '%');
      });

      $query->where($filters['category'] ?? false, function ($query, $category) {
        return $query->whereHas('category', function ($query) use ($category) {
          $query->where('slug', $category);
        });
      });
    });
    $query->when(
      $filters['author'] ?? false,
      fn ($query, $author) =>
      $query->whereHas(
        'author',
        fn ($query) =>
        $query->where('username', $author)
      )
    );
  }

  public function category()
  {
    // langsung connect ke table lain
    // data di row category akan connect ke id table category
    return $this->belongsTo(Category::class);
  }

  // jika memaksa tidak sama nama function dengan object
  public function author()
  {
    // tambahkan 
    return $this->belongsTo(User::class, 'user_id');
  }
}
