<?php

use Illuminate\Database\Seeder;
use App\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //create a seed user
        $user = new User;
        $user->name = "mose west";
        $user->email = "test@devtest.com";
        $user->password = bcrypt('password');
        $user->save();
    }
}
