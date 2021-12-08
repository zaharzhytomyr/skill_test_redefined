<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

Route::get('/user/authorized', [UserController::class, 'getAuthorizedUser']);
Route::get('/test/categories', [TestController::class, 'getCategories']);
Route::get('/test/categories/{id}/tests', [TestController::class, 'getTestsByCategoriesId']);
Route::get('/test/{test_id}/questions', [TestController::class, 'getQuestionsByTestId']);
Route::put('/test/questions/{test_id}/answer', [TestController::class, 'checkAnswers']);
Route::get('/{any}', [AppController::class, 'index'])->where('any', '.*');


