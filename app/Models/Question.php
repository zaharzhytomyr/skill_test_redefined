<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $table = 'questions';

    protected $fillable = [
        'question_text',
        'test_id',
        'type'
    ];

    public function answers()
    {
        return $this->hasMany(QuestionAnswer::class, 'question_id', 'id');
    }

    public function getRightAnswer()
    {
        return QuestionAnswer::query()->where('question_id', $this->id)->where('is_right', 1)->first();
    }
}
