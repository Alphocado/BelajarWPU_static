<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('kasir_pelanggan', function (Blueprint $table) {
      $table->bigIncrements('PelangganID');
      $table->string('NamaPelanggan');
      $table->string('alamat');
      $table->string('NomorTelepon');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    //
  }
};
