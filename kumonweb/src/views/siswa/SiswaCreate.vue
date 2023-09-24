<script setup>
import { reactive } from 'vue';
import { onMounted } from "vue";
import useSiswas from '../../composables/siswas';
import useSpp from "../../composables/spp";

const {storeSiswa,errors} = useSiswas();
const {spps,getSpps} = useSpp();
onMounted(() => getSpps());
const form = reactive ({
    name: "",
    telpon: "",
    status:"Aktif",
    idspp: ""
});
</script>
<template>
<div class="mt-20">
    <form class="max-w-md mx-auto p-4 bg-gray-500 shadown-md rounded-md text-black" @submit.prevent="storeSiswa(form)">
        <div class="space-y-6">
            <div class="mb-6">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                <input type="text" id="name" v-model="form.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <div v-if="errors.name"><span class="text-sm text-red-400">{{errors.name[0]}}</span></div>
            </div>
            <div class="mb-6">
                <label for="telpon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telepon</label>
                <input type="text" id="telpon" v-model="form.telpon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <div v-if="errors.telpon"><span class="text-sm text-red-400">{{errors.telpon[0]}}</span></div>
            </div>
            <div class="mb-6">
                <label for="idspp" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                <select type="text" id="idspp" v-model="form.idspp" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option v-for="spp in spps" :value="spp.id">{{spp.Subject +" "+ spp.Jenjang}}</option>
                </select>
                <div v-if="errors.idspp"><span class="text-sm text-red-400">{{errors.idspp[0]}}</span></div>
            </div>
            <div class="mt-4">
                <button type="submit" class="px-4 py-2 bg-teal-300 hover:bg-teal-400 text-white rounded">Simpan</button>
            </div>
        </div>
    </form>
</div>
</template>