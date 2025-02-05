<?php

namespace App\Http\Controllers\Client\BusTicketBookingClient;

use App\Http\Controllers\Controller;
use App\Mail\BusSystem\BookingBusMail;
use App\Models\BusSystem\CompanyRouteBus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class BookingTicketController extends Controller
{
    public function send_information(Request $request)
    {
        $validated = $request->validate([
            "name" => "required|string",
            "email" => "required|email",
            "phone" => "required",
            "company_route_bus_id" => "required|exists:App\Models\BusSystem\CompanyRouteBus,id",
            "date" => ""
        ]);

        $validated['company_route_bus'] = CompanyRouteBus::find($validated['company_route_bus_id'])->first();

        try {
            $toEmail[] = $validated['email'];
            $toEmail[] = "kingexpressbus@gmail.com";
//            dd($toEmail);
            // Gửi email vào hàng đợi
            Mail::to($toEmail)->send(new BookingBusMail($validated));

        } catch (\Exception $e) {
            dd($e);
            return back()->withErrors(['msg' => 'Không thể gửi email.']);
        } finally {
            $request->session()->flash('userData', $validated);
            return back();
        }
    }
}
