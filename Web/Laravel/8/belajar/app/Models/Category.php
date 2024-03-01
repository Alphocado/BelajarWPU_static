<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
  use HasFactory;
  protected $guarded = ['id'];

  public function posts()
  {
    // category bisa dimiliki oleh banyak data
    // misal data 1 berelasi dengan category
    // data 2 juga
    // dst
    return $this->hasMany(Post::class);
  }
}
