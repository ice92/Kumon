<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PembayaranResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'            => $this->id,
            'idsiswa'       => $this->idsiswa,
            
            'statusspp'     => $this->statusspp,
            'tanggalbayar'  => $this->tanggalbayar,
            'bulan'         => $this->bulan,
            'tahun'         => $this->tahun
        ];
    }
}
