<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\dataController;

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

route::get('/user',[dataController::class,"userFunction"]);
route::post('/user',[dataController::class,"SenduserFunction"]);


route::get('/ai',[dataController::class,"AiFunction"]);
route::post('/ai',[dataController::class,"SendAiFunction"]);