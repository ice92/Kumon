<script setup>
import { reactive } from 'vue';
import useSpp from '../../composables/spp';

const {storeSpp,errors} = useSpp();

const form = reactive ({
    Subject: "",
    Jenjang: "",
    Harga: ""
});
</script>
<template>
<div class="mt-20">
    <form class="max-w-md mx-auto p-4 bg-gray-500 shadown-md rounded-md text-black" @submit.prevent="storeSpp(form)">
        <div class="space-y-6">
            <div class="mb-6">
                <label for="Subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                <input type="text" id="Subject" v-model="form.Subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <div v-if="errors.Subject"><span class="text-sm text-red-400">{{errors.Subject[0]}}</span></div>
            </div>
            <div class="mb-6">
                <label for="Jenjang" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenjang</label>
                <input type="text" id="Jenjang" v-model="form.Jenjang" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <div v-if="errors.Jenjang"><span class="text-sm text-red-400">{{errors.Jenjang[0]}}</span></div>
            </div>
            <div class="mb-6">
                <label for="Harga" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SPP</label>
                <input type="text" id="Harga" v-model="form.Harga" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <div v-if="errors.Harga"><span class="text-sm text-red-400">{{errors.Harga[0]}}</span></div>
            </div>
            <div class="mt-4">
                <button type="submit" class="px-4 py-2 bg-teal-300 hover:bg-teal-400 text-white rounded">Simpan</button>
            </div>
        </div>
    </form>
</div>
</template>