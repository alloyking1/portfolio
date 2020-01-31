<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id','Profession','description','location','CV' 
    ];

    //belongs to user
    public function ProfileOwner(){
        return $this->belongsTo('App/User', 'user_id');
    }
}
