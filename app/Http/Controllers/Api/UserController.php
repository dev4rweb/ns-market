<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
//            $users = User::filter($request)->get();
            $users = User::all();
            $response['success'] = true;
            $response['message'] = 'All Users';
            $response['models'] = $users;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
//            $user = User::findOrFail($id);
            $user = User::where('user_id', $id)->first();
            if ($user) {
                $user->update($request->all());
            }
            $response['success'] = true;
            $response['message'] = 'User updated';
            $response['model'] = $user;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $user = User::findOrFail($id);
            $user->delete();
            $response['success'] = true;
            $response['message'] = 'User destroyed';
            $response['id'] = $id;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }

    public function updatePassword(Request $request)
    {
        try {
            $user = User::where('user_id', $request['user_id'])->first();
            if ($user) {
                $user->password = Hash::make($request['password']);
                $user->save();
                $response['message'] = 'User found and updated local';
                $response['success'] = true;
            } else {
                $response['success'] = false;
                $response['message'] = 'User not Found local';
            }
            $response['model'] = $user;
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }

    public function updateUserData(Request $request)
    {
        try {
            $user = User::where('user_id', $request['id'])->first();
            if ($user) {
                $user['first_name'] = $request['first_name'];
                $user['middle_name'] = $request['middle_name'];
                $user['last_name'] = $request['last_name'];
                $user['email'] = $request['email'];
                $user['mobile_phone'] = $request['mobile_phone'];
                $user->save();
                $response['success'] = true;
                $response['message'] = 'User updated';
                $response['model'] = $user;
            } else {
                $response['success'] = false;
                $response['message'] = 'User not found';
            }
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }
}
