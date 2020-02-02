<?php

use Illuminate\Database\Seeder;
use App\Profile;

class UserProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //create a seed user
        $profile = new Profile;
        $profile->user_id = 1;
        $profile->Profession = "Web developer";
        $profile->description = "This is a test description for the user profile";
        $profile->location = "World wide";
        $profile->save();
    }
}
