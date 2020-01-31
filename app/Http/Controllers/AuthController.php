<?php

// namespace App\Http\Controllers;

// use App\User;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Hash;
// use Illuminate\Support\Facades\Validator;
// use JWTAuth;
// use Auth;
// use Tymon\JWTAuth\Exceptions\JWTException;
// use Mail;
// use App\Mail\UserEmailConfirm;


// class UserController extends Controller
// {
//     protected $userDetails;

//     public function authenticate(Request $request)
//     {
//         $credentials = $request->only('email', 'password');

//         try {
//             if (! $token = JWTAuth::attempt($credentials)) {
//                 return response()->json(['error' => 'invalid_credentials'], 400);
//             }
//         } catch (JWTException $e) {
//             return response()->json(['error' => 'could_not_create_token'], 500);
//         }

//         return response()->json(compact('token'));
//     }

//     public function register(Request $request)
//     {
//             $validator = Validator::make($request->all(), [
//             'name' => 'required|string|max:255',
//             'email' => 'required|string|email|max:255|unique:users',
//             'password' => 'required|string|min:6|confirmed',
//         ]);

//         if($validator->fails()){
//                 return response()->json($validator->errors()->toJson(), 400);
//         }

//         $token = mt_rand(012123234,234345456);

//         $user = User::create([
//             'name' => $request->get('name'),
//             'email' => $request->get('email'),
//             'email_verify_code' => $token.now(),
//             'password' => Hash::make($request->get('password')),
//         ]);
        
//         try{
//             Mail::to($request->email)->send(new UserEmailConfirm($token));

//         }catch (Error $e){
//             return response()->json(['error' => 'could_not_send_verification_email'], 500);
//         }

    

//         $token = JWTAuth::fromUser($user);

//         return response()->json(compact('user','token'),201);
//     }

//     public function getAuthenticatedUser()
//     {
//         try {

//                 if (! $user = JWTAuth::parseToken()->authenticate()) {
//                         return response()->json(['user_not_found'], 404);
//                 }

//         } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

//                 return response()->json(['token_expired'], $e->getStatusCode());

//         } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

//                 return response()->json(['token_invalid'], $e->getStatusCode());

//         } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

//                 return response()->json(['token_absent'], $e->getStatusCode());

//         }

//         return response()->json(compact('user'));
//     }

//     public function logout()
//     {
//         Auth::logout();
//         return response()->json([
//             'status'=> 'success',
//             'message'=> 'user loged out'
//         ], 200);
//     }

//     public function authVerify(Request $request){

//         $this->userDetails = $user;
//         $token = $request['token'];

//         $this->userDetails = User::where('email_verify_code', $token)->first();
//         $this->userDetails->email_verify_code = NUll;
//         $this->userDetails->save();

//         return $this->userDetails;
//     }
//}