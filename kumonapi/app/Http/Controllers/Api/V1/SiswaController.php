<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSiswaRequest;
use App\Http\Resources\V1\SiswaCollection;
use App\Http\Resources\V1\SiswaResource;
use App\Models\Siswa;
use Illuminate\Http\Request;

class SiswaController extends Controller
{
    public function index()
    {
        return new SiswaCollection(Siswa::all());
    }

    public function show(Siswa $siswa)
    {
        return new SiswaResource($siswa);
    }

    public function store(StoreSiswaRequest $request)
    {
        Siswa::create($request->validated());
        return response()->json("Siswa Created");
    }

    public function update(StoreSiswaRequest $request, Siswa $siswa)
    {
        $siswa->update($request->validated());
        return response()->json("Siswa Updated");
    }

    public function destroy(Siswa $siswa)
    {
        $siswa->delete();
        return response()->json("Siswa Deleted");
    }
}
