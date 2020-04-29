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
     * create a new users profile
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

    /**
     * edit a users profile
     * @param $reques 
     * @return object edited profile
    */
    public function edit(Request $request){

        $validator = Validator::make($request->all(),[
            'profession' => 'required|string|max:225',
            'description' => 'required|string',
            'location' => 'required|max:225',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        
        $profileEdit = Profile::find($request->profileId);
        $profileEdit->Profession = $request->profession;
        $profileEdit->description = $request->description;
        $profileEdit->location = $request->location;
        $profileEdit->save();
        
        return response()->json([
            'message'=> 'profile Edited',
            'data' => $profileEdit,
        ],200);

    }

    public function get(Request $request){
        dd($request->id);
        $profile = Profile::find($reques->id);
        return response()->json($profile, 200);
    }

    /**
     * delete a users profile
     * @param profile ID 
     * @return message profile deleted
    */
    public function delete(Request $request){
        
        try{
            $profileEdit = Profile::find($request->profileId)->delete();

        }catch(Exception $e){
            return response()->json($e);
        }

        return response()->json([
            'message'=> 'profile deleted',
        ],200);

    }
}
