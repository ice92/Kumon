<?php

use App\Http\Controllers\Api\V1\PembayaranController;
use App\Http\Controllers\Api\V1\SiswaController;
use App\Http\Controllers\Api\V1\SppController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function(){
    Route::apiResource('spp',SppController::class);
    Route::apiResource('siswa',SiswaController::class);
    Route::apiResource('pembayaran',PembayaranController::class);
});