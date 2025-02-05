<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CKFinderMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        config(['ckfinder.authentication' => function () {
            return true;
        }]);
        return $next($request);
    }
}
