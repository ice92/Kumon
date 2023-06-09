<script setup>
import { reactive } from 'vue';
import useSiswas from '../../composables/siswas';

const {storeSiswa,errors} = useSiswas();

const form = reactive ({
    name: "",
    telpon: "",
    status: ""
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
                <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                <input type="text" id="status" v-model="form.status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <div v-if="errors.status"><span class="text-sm text-red-400">{{errors.status[0]}}</span></div>
            </div>
            <div class="mt-4">
                <button type="submit" class="px-4 py-2 bg-teal-300 hover:bg-teal-400 text-white rounded">Simpan</button>
            </div>
        </div>
    </form>
</div>
</template>