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
