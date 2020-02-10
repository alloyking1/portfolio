<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::post('register', 'UserController@register');
Route::post('login', 'UserController@authenticate');
Route::get('openem', 'DataController@open');
Route::get('verify/{token}', 'UserController@authVerify');
Route::get('logout', 'UserController@logout');

Route::prefix('profile')->group(function(){
    Route::post('/create', 'ProfileController@create');
    Route::post('/edit/{profileId}', 'ProfileController@edit');
    Route::delete('/delete/{profileId}', 'ProfileController@delete');
});

Route::prefix('portfolio')->group(function(){
    Route::post('create', 'PortfolioController@create');
    Route::post('/edit/{portfolioId}', 'PortfolioController@edit');
    Route::get('/get/{portfolioId}', 'PortfolioController@get');
    Route::delete('/delete/{portfolioId}', 'PortfolioController@delete');
});

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('user', 'UserController@getAuthenticatedUser');
    Route::get('closed', 'DataController@closed');
});