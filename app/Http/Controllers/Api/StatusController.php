<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Status;

class StatusController extends Controller
{
    public function index()
    {
        $status_type = Status::query()
            ->orderBy('name', 'asc')
            ->get();

        return ($status_type);
    }
}
