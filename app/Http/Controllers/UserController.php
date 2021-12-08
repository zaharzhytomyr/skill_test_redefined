<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getAuthorizedUser()
    {
        return response()->json(Auth::user() ?? null);
    }
}
