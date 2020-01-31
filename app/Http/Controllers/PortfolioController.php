<?php

namespace App\Http\Controllers;

use App\User;
use App\Profile;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    /**
     * create a new portfolio
     * @param $reques 
     * @return object user
    */
    public function create(Request $request){
        $validator = Validator::make($request->all(),[
            'title' => 'required|string|max:225',
            'description' => 'required|string',
            'link' => 'required|max:225',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $userProfile = Profile::create([
            'user_id' => JWTAuth::parseToken()->authenticate()->id,
            'Profession' => $request->profession,
            'description' => $request->description,
            'location' => $request->location,
        ]);
        return response()->json($userProfile, 200);
    }
    
}
