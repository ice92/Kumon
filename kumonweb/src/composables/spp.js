import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import router from "../router";

// axios.defaults.baseURL = "http://192.168.8.104:8000/api/v1/"
// axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"
axios.defaults.baseURL = "http://192.168.1.24:8000/api/v1/"
// axios.defaults.baseURL = "http://192.168.8.139:8000/api/v1/"
export default function useSpp()
{
    const spps = ref([]);
    const spp = ref([]);
    const errors = ref([]);
    const router = useRouter();

    const getSpps = async () => {
        try{
            const response = await axios.get("spp");
            spps.value = response.data.data;
        }catch(error){

        }
        
    }; 

    const getSpp = async (id) => {
        try {
            const response = await axios.get("spp/" + id);
            spp.value = response.data.data;
        } catch (error) {
            
        }
        
    }

    const storeSpp = async (data) => { 
        try{
            await axios.post("spp",data);
            await router.push({name:"SppIndex"});
        } catch (error) {
            if(error.response.status===422){
                errors.value = error.response.data.errors;
            }
        }
    };

    const updateSpp =  async (id) => {
        try {
            await axios.put("spp/"+id, spp.value);
            await router.push({name:"SppIndex"});
        } catch (error) {
            if(error.response.status===422){
                errors.value = error.response.data.errors;
            }
        }
    };

    const destroySpp = async (id) => {
        if(!window.confirm("Apakah anda yakin akan menghapus data?")){
            return;
        }
        await axios.delete("spp/"+id);
        await getSpps();
    }

    return {
        spp,
        spps,
        getSpp,
        getSpps,
        storeSpp,
        updateSpp,
        destroySpp,
        errors,
    };
}