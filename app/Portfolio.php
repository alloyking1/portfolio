<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id','title','description','link','file' 
    ];

    //belongs to user
    public function PortfolioOwner(){
        return $this->belongsTo('App/User');
    }
}
