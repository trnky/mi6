<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// the actual route is /api/request
Route::get('request', 'Api\PeopleController@index');

//     /api/statuses
Route::get('statuses', 'Api\StatusController@index');

//      /api/missions
Route::post('missions', 'Api\MissionController@store');
