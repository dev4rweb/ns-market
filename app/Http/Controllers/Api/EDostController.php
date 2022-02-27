<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class EDostController extends Controller
{


    public function getListDeliveryServices(Request $request)
    {
        try {
            $_POST['edost_to_city'] = "1019";
            $_POST['edost_weight'] = 1;
            $_POST['edost_strah'] = "";
            $_POST['edost_rus'] = 1;
            $_POST['edost_kod'] = "1";
            $_POST['edost_lenght'] = "";
            $_POST['edost_width'] = "";
            $_POST['edost_height'] = "";
            $_POST['edost_zip'] = "";
            $edost_calc = new edost_class();
//            $edost_calc = new Edost();
            $r = $edost_calc->edost_calc(
                $edost_calc->crc16($edost_calc->strtoupper_ru("199")),
//                "199",
                "1", "", "", "", "",
                ""
            );
            /*$_POST['edost_to_city'] =  $edost_calc->utf8_win('МОСКВА');
            $_POST['edost_weight'] = "1";
            $_POST['edost_strah'] = "";
            $_POST['edost_rus'] = 1;
            $_POST['edost_kod'] = "1";
            $_POST['edost_lenght'] = "";
            $_POST['edost_width'] = "";
            $_POST['edost_height'] = "";
            $_POST['edost_zip'] = "";*/
//            $r = $edost_calc->edost_calc_post();
            /*$to_city = $edost_calc->crc16("199");
            $r = $edost_calc->ManualPOST(
                'http://api.edost.ru/api2.php',
                "to_city=$to_city&strah=&id={$edost_calc->edost_id}&p={$edost_calc->edost_pswd}&weight=1&ln=&wd=&hg=&zip=&from_city="
            );*/

            $response['success'] = true;
            $response['message'] = 'getting delivery list';
            $response['models'] = $r;

        } catch (\Exception $exception) {
            $response['success'] = false;
            $response['message'] = $exception->getMessage();
        }

        return response()->json($response);
    }
}
