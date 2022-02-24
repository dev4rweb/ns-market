<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class EDostController extends Controller
{


    public function getListDeliveryServices(Request $request)
    {
        try {
            $_POST['edost_to_city'] = '';
            $_POST['edost_weight'] = '';
            $_POST['edost_strah'] = '';
            $_POST['edost_rus'] = '';
            $_POST['edost_kod'] = '';
            $_POST['edost_lenght'] = '';
            $_POST['edost_width'] = '';
            $_POST['edost_height'] = '';
            $_POST['edost_zip'] = '';
            $edost_calc = new edost_class();
            $r = $edost_calc->edost_calc_post();
            $response['success'] = true;
            $response['message'] = 'getting delivery list';
            $response['models'] = $edost_calc->decode($r);
        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }
}
