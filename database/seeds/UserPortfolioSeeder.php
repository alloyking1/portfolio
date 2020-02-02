<?php

use Illuminate\Database\Seeder;
use App\Portfolio;

class UserPortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //create a user portfolio from seed
        $userPortfolio = Portfolio::create([
            'user_id' => 1,
            'title' => "Hopital management",
            'description' => "This is a test portfolio for all ya developers",
            'link' => "https://helloworld.com",
            // 'file' => $request->link,
        ]);

    }
}
