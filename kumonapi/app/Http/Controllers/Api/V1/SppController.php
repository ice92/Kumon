<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSppRequest;
use App\Http\Resources\V1\SPPCollection;
use App\Http\Resources\V1\SPPResource;
use App\Models\SPP;
use Illuminate\Http\Request;

class SppController extends Controller
{
    public function index()
    {
        return new SPPCollection(SPP::all());
    }

    public function show(SPP $spp)
    {
        return new SPPResource($spp);
    }

    public function store(StoreSppRequest $request)
    {
        SPP::create($request->validated());
        return response()->json("SPP Created");
    }

    public function update(StoreSppRequest $request, SPP $spp)
    {
        $spp->update($request->validated());
        return response()->json("SPP Updated");
    }

    public function destroy(SPP $spp)
    {
        $spp->delete();
        return response()->json("SPP Deleted");
    }
}