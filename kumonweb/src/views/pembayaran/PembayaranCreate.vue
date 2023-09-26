<script setup>
import { reactive } from 'vue';
import usePembayarans from '../../composables/pembayarans';
import { onMounted } from "vue";
import useSiswas from "../../composables/siswas";
import useSpp from "../../composables/spp";
import { ref } from 'vue';

// import Datepicker from 'flowbite-datepicker/Datepicker';
// const datepickerEl = document.getElementById('datepickerId');
// new Datepicker(datepickerEl, {
//     // options
// }); 
const {storePembayaran,errors} = usePembayarans();
var today = new Date();
var month=today.getMonth();
const monthname = ref([
    {name:"Januari" , id:1},
    {name:"Februari", id:2}, 
    {name:"Maret",id:3},
    {name:"April",id:4},
    {name:"Mei",id:5},
    {name:"Juni",id:6},
    {name:"Juli",id:7},
    {name:"Agustus",id:8},
    {name:"September",id:9},
    {name:"Oktober",id:10},
    {name:"November",id:11},
    {name:"Desember",id:12}]);
var year=today.getFullYear();

const form = reactive ({
    idsiswa: "",
    statusspp: "",
    tanggalbayar: "",
    bulan: "",
    tahun: "",
});

const {siswas,getSiswas} = useSiswas();

onMounted(() => getSiswas());

const {spps,getSpps} = useSpp();

onMounted(() => getSpps());
</script>
<template>
<div class="mt-20">
    <form class="max-w-md mx-auto p-4 bg-gray-500 shadown-md rounded-md text-black" @submit.prevent="storePembayaran(form)">
        <div class="space-y-6">
            <div class="mb-6">
                <label for="idsiswa" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID Siswa</label>
                <input type="text" list="siswas" id="idsiswa" v-model="form.idsiswa" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <datalist type="text" id="siswas">
                    <option v-for="siswa in siswas" :value="siswa.id">{{siswa.name}}</option>
                </datalist>
                <div v-if="errors.idsiswa"><span class="text-sm text-red-400">{{errors.idsiswa[0]}}</span></div>
            </div>            
            <div class="mb-6">
                <label for="statusspp" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                <select type="text" id="statusspp" v-model="form.statusspp" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Lunas">Lunas</option>
                    <option value="Belum Lunas">Belum Lunas</option>
                </select>
                <div v-if="errors.statusspp"><span class="text-sm text-red-400">{{errors.statusspp[0]}}</span></div>
            </div>
            <div class="mb-6">
                <label for="tanggalbayar" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Pembayaran</label>
                <input placeholder="YYYY-MM-DD" type="date" id="datepickerId" v-model="form.tanggalbayar" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <div v-if="errors.tanggalbayar"><span class="text-sm text-red-400">{{errors.tanggalbayar[0]}}</span></div>
            </div>
            <div class="mb-6">
                <label for="bulan" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pembayaran Untuk Bulan</label>
                <!-- <input type="text" id="bulan" v-model="form.bulan" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> -->
                <select type="text" id="bulan" v-model="form.bulan" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option v-for="mon in monthname" :value="mon.id">{{mon.name}}</option>
                </select>
                <div v-if="errors.bulan"><span class="text-sm text-red-400">{{errors.bulan[0]}}</span></div>
            </div>
            <div class="mb-6">
                <label for="tahun" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tahun</label>
                <!-- <input type="text" id="tahun" v-model="form.tahun" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> -->
                <select id="tahun" v-model="form.tahun" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                </select> 
                <div v-if="errors.tahun"><span class="text-sm text-red-400">{{errors.tahun[0]}}</span></div>
            </div>
            <div class="mt-4">
                <button type="submit" class="px-4 py-2 bg-teal-300 hover:bg-teal-400 text-white rounded">Simpan</button>
            </div>
        </div>
    </form>
</div>
</template>