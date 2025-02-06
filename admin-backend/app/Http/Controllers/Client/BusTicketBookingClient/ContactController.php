<?php

namespace App\Http\Controllers\Client\BusTicketBookingClient;

use App\Http\Controllers\Controller;
use App\Models\Info\WebInfo;

class ContactController extends Controller
{
    public function lien_he()
    {
        $webInfo = WebInfo::all()->first();
        return view("client.modules.contact.lien_he", compact("webInfo"));
    }

    public function gioi_thieu()
    {
        $webInfo = WebInfo::all()->first();
        return view("client.modules.contact.gioi_thieu", compact("webInfo"));
    }
}
