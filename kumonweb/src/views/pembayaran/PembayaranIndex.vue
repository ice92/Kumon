<script setup>
    import usePembayarans from "../../composables/pembayarans";
    import { onMounted } from "vue";
    import useSiswas from "../../composables/siswas";
    import useSpp from "../../composables/spp";

    var today   = new Date();
    var month   = today.getMonth();
    var year    = today.getFullYear();
    let day     = today.getDate();
    let currentDate = `${day}-${month}-${year}`;
    const {pembayarans,getPembayarans,destroyPembayaran,cetakPembayaran} = usePembayarans();
    const monthname = ["Januari", "Februari", "Maret","April","Mei", "Juni", "Juli","Agustus","September", "Oktober", "November","Desember"];
    onMounted(() => getPembayarans());

    const {siswas,getSiswas,getSiswa} = useSiswas();

    onMounted(() => getSiswas());

    const {spps,getSpps} = useSpp();

    onMounted(() => getSpps());
    var selected=today.getMonth()+1;
</script>
<template>
    <div class="mt-20">
        <div class="flex justify-end m-2 p-2">
            <!-- <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected value="{{year}}">{{year}}</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2022">2022</option>
            </select> 
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-40 p-2.5 ml-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option ></option>
            </select>  -->
            <RouterLink :to="{name:'PembayaranCreate'}" class="px-4 py-2 ml-4 bg-teal-400 hover:bg-teal-800 text-white rounded">Tambah Pembayaran Baru</RouterLink>
        </div>         
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-900 dark:text-gray-900">
                <thead class="text-xs text-gray-50 uppercase bg-gray-50 bg-teal-300 text-gray-900">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Siswa
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Subject
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nominal
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Periode
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Tanggal Bayar
                        </th>
                        <th scope="col" class="px-6 py-3">
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="pembayaran in pembayarans" :key="pembayaran.id" class="bg-white border-b dark:bg-gray-100 dark:border-gray-700">
                        <td class="px-6 py-4">{{ siswas[siswas.findIndex((siswa) => siswa.id==pembayaran.idsiswa)].name }}</td>
                        <td class="px-6 py-4">{{ spps[spps.findIndex((spp)=>spp.id==siswas[siswas.findIndex((siswa) => siswa.id==pembayaran.idsiswa)].idspp)].Subject }}</td>
                        <td class="px-6 py-4">Rp. {{ spps[spps.findIndex((spp)=>spp.id==siswas[siswas.findIndex((siswa) => siswa.id==pembayaran.idsiswa)].idspp)].Harga }},-</td>
                        <td class="px-6 py-4">{{ monthname[pembayaran.bulan-1]+ " "+ pembayaran.tahun}}</td>
                        <td class="px-6 py-4">{{ pembayaran.statusspp }}</td>
                        <td class="px-6 py-4">{{ pembayaran.tanggalbayar }}</td>                        
                        <td class="px-6 py-4">
                            <RouterLink :to="{ name:'PembayaranEdit', params: {id:pembayaran.id}}"
                            class="px-4 py-2 bg-teal-400 hover:bg-teal-800 text-white rounded">Bayar
                            </RouterLink>
                            <button @click="destroyPembayaran(pembayaran.id)" class="px-4 py-2 ml-2 bg-red-400 hover:bg-red-800 text-white rounded">Hapus</button>
                            <button v-if="pembayaran.statusspp==='Lunas'" @click="cetakPembayaran(siswas[siswas.findIndex((siswa) => siswa.id==pembayaran.idsiswa)].name,spps[spps.findIndex((spp)=>spp.id==siswas[siswas.findIndex((siswa) => siswa.id==pembayaran.idsiswa)].idspp)].Harga,spps[spps.findIndex((spp)=>spp.id==siswas[siswas.findIndex((siswa) => siswa.id==pembayaran.idsiswa)].idspp)].Subject,currentDate,pembayaran.idsiswa,monthname[pembayaran.bulan-1])" class="px-4 py-2 ml-2 bg-blue-400 hover:bg-blue-800 text-white rounded">Cetak</button>
                        </td>
                    </tr>                    
                </tbody>
            </table>
        </div>
 
    </div>
</template>
<script>
export default {
  data() {
    return {
      selected: 'My To Do App',
      month: [
        {id:1,name:"Januari"},
        {id:2,name:"Februari"}, 
        {id:3,name:"Maret"},
        {id:4,name:"April"},
        {id:5,name:"Mei"}, 
        {id:6,name:"Juni"}, 
        {id:7,name:"Juli"},
        {id:8,name:"Agustus"},
        {id:9,name:"September"}, 
        {id:10,name:"Oktober"}, 
        {id:11,name:"November"},
        {id:12,name:"Desember"}
        ],      
    }
  }
}
</script>

