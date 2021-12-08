<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestCategory extends Model
{
    use HasFactory;

    protected $table = 'test_categories';

    protected $fillable = [
        'parent_category_id',
        'title',
        'img',
    ];

    public function setAmount()
    {
        $this->amount =  Test::query()->where('category_id', $this->id)->count();
    }

}
