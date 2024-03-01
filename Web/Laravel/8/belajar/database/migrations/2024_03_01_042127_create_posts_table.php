<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('posts', function (Blueprint $table) {
      $table->id();
      $table->foreignId('category_id');
      $table->string('title');
      $table->string('slug')->unique();
      // untuk menyimpan sebagian kecil tulisan di dalam body blog
      $table->text('excerpt');
      $table->text('body');
      // tipe data timestamp
      $table->timestamp('published_at')->nullable();
      // method untuk membuat created_app dan updated_app
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('posts');
  }
}
