<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Post;
use App\Models\Category;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   *
   * @return void
   */
  public function run()
  {

    // masih ingat tinker?
    // yang dilakukan di tinker lakukan kembali di sini
    // User::create([
    //   'name' => 'Udin Samsudin',
    //   'email' => 'udin@gmail.com',
    //   'password' => bcrypt('12345')
    // ]);
    // User::create([
    //   'name' => 'Budi Susanto',
    //   'email' => 'budi@gmail.com',
    //   'password' => bcrypt('12345')
    // ]);

    // akan generate 5 data dummy ke dalam database
    User::factory(3)->create();

    Category::create([
      'name' => 'Web Programming',
      'slug' => 'web-programming'
    ]);
    Category::create([
      'name' => 'Personal',
      'slug' => 'personal'
    ]);
    Category::create([
      'name' => 'Web Design',
      'slug' => 'web-design'
    ]);

    Post::factory(20)->create();

    // Post::create([
    //   'title' => 'Judul Pertama',
    //   'slug' => 'judul-pertama',
    //   'excerpt' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //   'body' => '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><p>Molestiae ipsum aspernatur possimus in quis deserunt repudiandae reiciendis ab qui, nulla eligendi aperiam, sunt distinctio nobis amet maiores ipsam ipsa beatae? Maiores neque mollitia veritatis, facere itaque quaerat perspiciatis ipsam dolore blanditiis pariatur amet numquam fugit!</p><p>Aspernatur molestiae vitae ipsa, voluptas eos fugiat ex omnis, numquam laudantium dolores magni vero amet blanditiis ut inventore vel dolorum natus quod labore commodi! Quaerat et totam facilis natus, vero soluta at molestias cum veritatis reprehenderit quasi. Odit fugiat corporis vel sequi veritatis illo ipsum eius excepturi dolore rem eos aspernatur nisi, perspiciatis ullam nam?</p>',
    //   'category_id' => 1,
    //   'user_id' => 1
    // ]);
    // Post::create([
    //   'title' => 'Judul Ke Dua',
    //   'slug' => 'judul-ke-dua',
    //   'excerpt' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //   'body' => '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><p>Molestiae ipsum aspernatur possimus in quis deserunt repudiandae reiciendis ab qui, nulla eligendi aperiam, sunt distinctio nobis amet maiores ipsam ipsa beatae? Maiores neque mollitia veritatis, facere itaque quaerat perspiciatis ipsam dolore blanditiis pariatur amet numquam fugit!</p><p>Aspernatur molestiae vitae ipsa, voluptas eos fugiat ex omnis, numquam laudantium dolores magni vero amet blanditiis ut inventore vel dolorum natus quod labore commodi! Quaerat et totam facilis natus, vero soluta at molestias cum veritatis reprehenderit quasi. Odit fugiat corporis vel sequi veritatis illo ipsum eius excepturi dolore rem eos aspernatur nisi, perspiciatis ullam nam?</p>',
    //   'category_id' => 2,
    //   'user_id' => 1
    // ]);
    // Post::create([
    //   'title' => 'Judul Ke Tiga',
    //   'slug' => 'judul-ke-tiga',
    //   'excerpt' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //   'body' => '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><p>Molestiae ipsum aspernatur possimus in quis deserunt repudiandae reiciendis ab qui, nulla eligendi aperiam, sunt distinctio nobis amet maiores ipsam ipsa beatae? Maiores neque mollitia veritatis, facere itaque quaerat perspiciatis ipsam dolore blanditiis pariatur amet numquam fugit!</p><p>Aspernatur molestiae vitae ipsa, voluptas eos fugiat ex omnis, numquam laudantium dolores magni vero amet blanditiis ut inventore vel dolorum natus quod labore commodi! Quaerat et totam facilis natus, vero soluta at molestias cum veritatis reprehenderit quasi. Odit fugiat corporis vel sequi veritatis illo ipsum eius excepturi dolore rem eos aspernatur nisi, perspiciatis ullam nam?</p>',
    //   'category_id' => 1,
    //   'user_id' => 2
    // ]);
    // Post::create([
    //   'title' => 'Judul Ke empat',
    //   'slug' => 'judul-ke-empat',
    //   'excerpt' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //   'body' => '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><p>Molestiae ipsum aspernatur possimus in quis deserunt repudiandae reiciendis ab qui, nulla eligendi aperiam, sunt distinctio nobis amet maiores ipsam ipsa beatae? Maiores neque mollitia veritatis, facere itaque quaerat perspiciatis ipsam dolore blanditiis pariatur amet numquam fugit!</p><p>Aspernatur molestiae vitae ipsa, voluptas eos fugiat ex omnis, numquam laudantium dolores magni vero amet blanditiis ut inventore vel dolorum natus quod labore commodi! Quaerat et totam facilis natus, vero soluta at molestias cum veritatis reprehenderit quasi. Odit fugiat corporis vel sequi veritatis illo ipsum eius excepturi dolore rem eos aspernatur nisi, perspiciatis ullam nam?</p>',
    //   'category_id' => 2,
    //   'user_id' => 2
    // ]);
  }
};
