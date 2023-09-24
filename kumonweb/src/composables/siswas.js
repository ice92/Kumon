import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import router from "../router";

// axios.defaults.baseURL = "http://192.168.8.104:8000/api/v1/"
// axios.defaults.baseURL = "http://192.168.1.24:8000/api/v1/"
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"
// axios.defaults.baseURL = "http://192.168.8.139:8000/api/v1/"
export default function useSiswas()
{
    const siswas = ref([]);
    const siswa = ref([]);
    const errors = ref([]);
    const router = useRouter();
    
    const getSiswas = async () => {
        const response = await axios.get("siswa");
        siswas.value = response.data.data;
    };

    const getSiswa = async (id) => {
        const response = await axios.get("siswa/" + id);
        siswa.value = response.data.data;
    }

    const storeSiswa = async (data) => {
        try {
            await axios.post("siswa",data);
            await router.push({name:"SiswaIndex"});
        } catch (error) {
            if(error){
                errors.value = error.response.data.errors;
                console.error(error.response.data);
            }
        }
    };

    const updateSiswa =  async (id) => {
        try {
            await axios.put("siswa/"+id, siswa.value);
            await router.push({name:"SiswaIndex"});
        } catch (error) {
            if(error){
                errors.value = error.response.data.errors;
                console.error(error.response.data);
            }
        }
    };

    const destroySiswa = async (id) => {
        if(!window.confirm("Apakah anda yakin akan menghapus data?")){
            return;
        }
        await axios.delete("siswa/"+id);
        await getSiswas();
    }    

    return {
        siswa,
        siswas,
        getSiswa,
        getSiswas,
        storeSiswa,
        updateSiswa,
        destroySiswa,
        errors,
    };
}