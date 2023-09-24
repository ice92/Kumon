<script setup>
import usePembayarans from '../../composables/pembayarans';
import { onMounted } from 'vue';

const {pembayaran, getPembayaran, updatePembayaran, errors} = usePembayarans();
var today = new Date();
var month=today.getMonth();
const monthname = ["Januari", "Februari", "Maret","April","Mei", "Juni", "Juli","Agustus","September", "Oktober", "November","Desember"];
var year=today.getFullYear();
const props = defineProps({
    id:{
        required: true,
        type: String
    },
});
onMounted(()=>getPembayaran(props.id));
</script>
<template>
<div class="mt-20">
    <form class="max-w-md mx-auto p-4 bg-gray-500 shadown-md rounded-md text-black" @submit.prevent="updatePembayaran($route.params.id)">
        <div class="space-y-6">
            <div class="mb-6">
                <label for="idsiswa" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID Siswa</label>
                <input disabled type="text" id="idsiswa" v-model="pembayaran.idsiswa" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <div v-if="errors.idsiswa"><span class="text-sm text-red-400">{{errors.idsiswa[0]}}</span></div>
            </div>            
            <div class="mb-6">
                <label for="statusspp" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                <select type="text" id="statusspp" v-model="pembayaran.statusspp" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Lunas">Lunas</option>
                    <option value="Belum Lunas">Belum Lunas</option>
                </select>
                <div v-if="errors.statusspp"><span class="text-sm text-red-400">{{errors.statusspp[0]}}</span></div>
            </div>
            <div class="mb-6">
                <label for="tanggalbayar" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal</label>
                <input type="text" id="tanggalbayar" v-model="pembayaran.tanggalbayar" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <div v-if="errors.tanggalbayar"><span class="text-sm text-red-400">{{errors.tanggalbayar[0]}}</span></div>
            </div>

            <div class="mb-6">
                <label for="bulan" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bulan</label>
                <input disabled type="text" id="bulan" v-model="pembayaran.bulan" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <!-- <select id="bulan" v-model="pembayaran.bulan" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="1">Januari</option>
                    <option value="2">Februari</option>
                    <option value="3">Maret</option>
                    <option value="4">April</option>
                    <option value="5">Mei</option>
                    <option value="6">Juni</option>
                    <option value="7">Juli</option>
                    <option value="8">Agustus</option>
                    <option value="9">September</option>
                    <option value="10">Oktober</option>
                    <option value="11">November</option>
                    <option value="12">Desember</option>
                </select> -->
                <!-- <div v-if="errors.bulan"><span class="text-sm text-red-400">{{errors.bulan[0]}}</span></div> -->
            </div>
            <!-- <div class="mb-6">
                <label for="tahun" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tahun</label> -->
                <input v-show=false type="text" id="tahun" v-model="pembayaran.tahun" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <!-- <select id="tahun" v-model="pembayaran.tahun" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2022">2022</option>
                </select>  -->
                <!-- <div v-if="errors.tahun"><span class="text-sm text-red-400">{{errors.tahun[0]}}</span></div>
            </div> -->

            <div class="mt-4">
                <button type="submit" class="px-4 py-2 bg-teal-300 hover:bg-teal-400 text-white rounded">Simpan</button>
            </div>
        </div>
    </form>
</div>
</template>