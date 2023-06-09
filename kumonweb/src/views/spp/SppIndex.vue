<script setup>
    import useSpp from "../../composables/spp";
    import { onMounted } from "vue";

    const {spps,getSpps,destroySpp} = useSpp();

    onMounted(() => getSpps());
</script>
<template>
     
    <div class="mt-20">  
        <div class="flex justify-end m-2 p-2">
            <RouterLink :to="{name:'SppCreate'}" class="px-4 py-2 bg-teal-400 hover:bg-teal-800 text-white rounded">Tambah Subject Baru</RouterLink>
        </div>               
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 bg-teal-300 text-gray-900">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Subject
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Jenjang
                        </th>
                        <th scope="col" class="px-6 py-3">
                            SPP
                        </th>
                        <th scope="col" class="px-6 py-3">
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="spp in spps" :key="spp.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">{{ spp.Subject }}</td>
                        <td class="px-6 py-4">{{ spp.Jenjang }}</td>
                        <td class="px-6 py-4">{{ spp.Harga }}</td>
                        <td class="px-6 py-4">
                            <RouterLink :to="{ name:'SppEdit', params: {id:spp.id}}"
                            class="px-4 py-2 bg-teal-400 hover:bg-teal-800 text-white rounded">Ubah
                            </RouterLink>
                            <button @click="destroySpp(spp.id)" class="px-4 py-2 ml-2 bg-red-400 hover:bg-red-800 text-white rounded">Hapus</button>
                        </td>
                    </tr>                    
                </tbody>
            </table>
        </div>
         
    </div>
</template>