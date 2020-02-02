<?php

namespace App\Http\Controllers;

use App\User;
use App\Portfolio;
use Auth;
use JWTAuth;
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
            'link' => '|max:225',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $userPortfolio = Portfolio::create([
            'user_id' => JWTAuth::parseToken()->authenticate()->id,
            'title' => $request->title,
            'description' => $request->description,
            'link' => $request->link,
            // 'file' => $request->link,
        ]);
        return response()->json($userPortfolio, 200);
    }

    /**
     * edit a users portfolio
     * @param $reques 
     * @return object edited portfolio
    */
    public function edit(Request $request){

        $validator = Validator::make($request->all(),[
            'title' => 'required|string|max:225',
            'description' => 'required|string',
            'link' => '|max:225',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        
        $userPortfolio = Portfolio::find($request->portfolioId);
        $userPortfolio->title = $request->title;
        $userPortfolio->description = $request->description;
        $userPortfolio->link = $request->link;
        $userPortfolio->save();
        
        return response()->json([
            'message'=> 'portfolio Edited',
            'data' => $userPortfolio,
        ],200);

    }

    /**
     * delete a users profile
     * @param profile ID 
     * @return message profile deleted
    */
    public function delete(Request $request){
        
        try{
            $userPortfolio = Portfolio::find($request->portfolioId)->delete();

        }catch(Exception $e){
            return response()->json($e);
        }

        return response()->json([
            'message'=> 'profile deleted',
        ],200);

    }
}
