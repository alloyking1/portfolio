<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    //belongs to user
    public function PortfolioOwner(){
        return $this->belongsTo('App/User');
    }
}
