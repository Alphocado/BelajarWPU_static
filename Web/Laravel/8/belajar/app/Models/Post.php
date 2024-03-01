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
}
