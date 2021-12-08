<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Test;
use App\Models\TestCategory;
use Illuminate\Support\Facades\Request;

class TestController extends Controller
{
    public function getCategories()
    {
        $result = [];
        foreach (TestCategory::all() ?? [] as $index => $category)
        {
            $category->setAmount();
            $result[] = $category;
        }

        return response()->json(
            $result
        );
    }

    public function getTestsByCategoriesId($id)
    {
        $tests = Test::query()->where('category_id', $id)->get() ?? [];
        $result = [];
        foreach ($tests as $test) {
            $test->tags = explode(',', $test->tags);
            $result[] = $test;
        }

        return response()->json(
            $result
        );
    }

    public function getQuestionsByTestId($test_id)
    {
        /** @var Test $test */
        $test = Test::query()->where('id', $test_id)->first();
        $result = [];
        foreach ($test->questions ?? [] as $question) {

            $answersResult = [];
            foreach ($question->answers ?? [] as $answer) {
                $answer->checked = false;
                $answersResult[] = $answer;
            }

            $question->answers = $answersResult ?? [];

            $result[] = $question;
        }

        return response()->json(
            $result
        );
    }

    public function checkAnswers($test_id)
    {
        $data = Request::all();
        $test = Test::query()->where('id', $test_id)->first();
        $score = 0;

        foreach ($data['results'] as $questionParam) {
            $question = Question::query()->where('id', $questionParam['id'])->first();
            $rightAnswerId = $question->getRightAnswer()->id;
            $currentScore = 0;
            foreach ($questionParam['answers'] ?? [] as $answerParam) {
                if($rightAnswerId === $answerParam['id'] && $answerParam['checked'])
                {
                    $currentScore = 1;
                }

                if($rightAnswerId !== $answerParam['id'] && $answerParam['checked']) {
                    $currentScore = 0;
                    break;
                }
            }
            $score += $currentScore;

        }

        $maxScore = $test->questions->count();

        return response()->json(
            [
                'max' => $maxScore,
                'actual' => $score
            ]
        );
    }
}
