<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MissionController extends Controller
{
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'requeired'
        ]);

        $name = $request->input('name');

        return [
            'status' =>'success',
            'name' => $name
        ];
    }
}
