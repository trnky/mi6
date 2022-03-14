<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    public function aliases()
    {
        return $this->hasMany('App\Alias');
    }

    public function image()
    {
        return $this->belongsTo('App\Image');
    }

    public function status()
    {
        return this->belongsTo('App\Status');
    }
}
