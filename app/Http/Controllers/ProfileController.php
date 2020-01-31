<?php

namespace App\Http\Controllers;

use App\User;
use App\Profile;
use Auth;
use JWTAuth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    /**
     * create a new users profiel
     * @param $reques 
     * @return object containing user profile details
    */
    public function create(Request $request){
        $validator = Validator::make($request->all(),[
            'profession' => 'required|string|max:225',
            'description' => 'required|string',
            'location' => 'required|max:225',
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
