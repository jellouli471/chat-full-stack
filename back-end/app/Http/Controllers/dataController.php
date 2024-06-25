<?php

namespace App\Http\Controllers;

use App\Models\ai;
use App\Models\user;
use Illuminate\Http\Request;

class dataController extends Controller
{
    //
    public function userFunction(){

      $usermessage=  user::all();
      return $usermessage;
    }

    public function SenduserFunction(request $request){

        $msuser = $request->message;
        user::create([
            'message'=>$msuser
        ]);


    }






    public function AiFunction(){
        $aimessage = ai::all();
        return $aimessage;
    }


    public function SendAiFunction(request $request){

        $msai = $request->message;

        ai::create([
            'message'=>$msai
        ]);

    }
}
