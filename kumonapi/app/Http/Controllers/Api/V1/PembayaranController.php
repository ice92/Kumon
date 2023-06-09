<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePembayaranRequest;
use App\Http\Resources\V1\PembayaranCollection;
use App\Http\Resources\V1\PembayaranResource;
use App\Models\Pembayaran;
use Illuminate\Http\Request;

class PembayaranController extends Controller
{
    public function index()
    {
        return new PembayaranCollection(Pembayaran::all());
    }

    public function show(Pembayaran $pembayaran)
    {
        return new PembayaranResource($pembayaran);
    }

    public function store(StorePembayaranRequest $request)
    {
        Pembayaran::create($request->validated());
        return response()->json("Pembayaran Created");
    }

    public function update(StorePembayaranRequest $request, Pembayaran $pembayaran)
    {
        $pembayaran->update($request->validated());
        return response()->json("Pembayaran Updated");
    }

    public function destroy(Pembayaran $pembayaran)
    {
        $pembayaran->delete();
        return response()->json("Pembayaran Deleted");
    }
}
