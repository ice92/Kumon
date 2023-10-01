<script setup>
    import useSiswas from "../../composables/siswas";
    import useSpp from "../../composables/spp";
    import { onMounted } from "vue";

    const {siswas,getSiswas,destroySiswa} = useSiswas();
    const {spps,getSpps} = useSpp();
    onMounted(() => getSiswas());
    onMounted(() => getSpps());
</script>
<template>
    <div class="mt-20">
        <div class="flex justify-end m-2 p-2">
            <RouterLink :to="{name:'SiswaCreate'}" class="px-4 py-2 bg-teal-400  hover:bg-teal-800 text-white rounded">Tambah Siswa Baru</RouterLink>
        </div>                 
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 bg-teal-300 text-gray-900">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nama
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Subject
                        </th>
                        <th scope="col" class="px-6 py-3">
                            No.Telepon
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr  v-for="siswa in siswas" :key="siswa.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td v-if="siswa.status!=='Hapus'" class="px-6 py-4">{{ siswa.name }}</td>
                        <td v-if="siswa.status!=='Hapus' && spps[spps.findIndex((x) => x.id==siswa.idspp)]" class="px-6 py-4">{{ spps[spps.findIndex((x) => x.id==siswa.idspp)].Subject  }} {{ spps[spps.findIndex((x) => x.id==siswa.idspp)].Jenjang  }} </td>
                        <td v-else class="px-6 py-4">Subject Tidak Ditemukan/Telah dihapus</td>
                        <td v-if="siswa.status!=='Hapus'" class="px-6 py-4">{{ siswa.telpon }}</td>
                        <td v-if="siswa.status!=='Hapus'" class="px-6 py-4">{{ siswa.status }}</td>
                        <td v-if="siswa.status!=='Hapus'" class="px-6 py-4">
                            <RouterLink :to="{ name:'SiswaEdit', params: {id:siswa.id}}"
                            class="px-4 py-2 bg-teal-400 hover:bg-teal-800 text-white rounded">Ubah/Hapus
                            </RouterLink>
                            <!-- <button @click="destroySiswa(siswa.id)" class="px-4 py-2 ml-2 bg-red-400 hover:bg-red-800 text-white rounded">Hapus</button> -->
                        </td>
                    </tr>                    
                </tbody>
            </table>
        </div>
         
    </div>
</template>