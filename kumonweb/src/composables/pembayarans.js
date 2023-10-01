import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import router from "../router";
// axios.defaults.baseURL = "http://192.168.1.24:8000/api/v1/"//real kumon
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"
// axios.defaults.baseURL = "http://192.168.8.139:8000/api/v1/"
export default function usePembayarans()
{
    const pembayarans = ref([]);
    const pembayaran = ref([]);
    const errors = ref([]);
    const router = useRouter();

    const getPembayarans = async () => {
        try{
            const response = await axios.get("pembayaran");
            pembayarans.value = response.data.data.reverse();
        } catch(error){
            pembayarans.value =null;
        }
        
    };

    const getPembayaran = async (id) => {
        try{
            const response = await axios.get("pembayaran/" + id);
            pembayaran.value = response.data.data;
        }catch(error){
            pembayaran.value =null;
        }
        
    }

    const storePembayaran = async (data) => {
        try {
            await axios.post("pembayaran",data);
            await router.push({name:"PembayaranIndex"});
        } catch (error) {
            if(error.response.status===422){
                errors.value = error.response.data.errors;
            }
        }
    };

    const updatePembayaran =  async (id) => {
        try {
            await axios.put("pembayaran/"+id, pembayaran.value);
            await router.push({name:"PembayaranIndex"});
        } catch (error) {
            if(error.response.status===422){
                errors.value = error.response.data.errors;
            }
        }
    };

    const destroyPembayaran = async (id) => {
        if(!window.confirm("Apakah anda yakin akan menghapus data?")){
            return;
        }
        await axios.delete("pembayaran/"+id);
        await getPembayarans();
    }
    
    const cetakPembayaran = async (nama,harga,subject,tanggal,ids,bulan) => { 
        // var url="https://api.countapi.xyz/hit/kumonpejanggik/"+tanggal
        // const response = await axios.get(url);      
        var month = ["Januari", "Februari", "Maret","April","Mei", "Juni", "Juli","Agustus","September", "Oktober", "November","Desember"]; 
        var template = `
            <style>
            #invoice-POS{                          
                margin: 0 auto;
                width: 58mm;
                background: #FFF;
            h1{
                font-size: 1.5em;
                color: #222;
            }
            h2{font-size: .9em;}
            h3{
                font-size: 1.2em;
                font-weight: 300;
                line-height: 2em;
            }
            p{
                font-size: .7em;
                color: #666;
                line-height: 1.2em;
            }
            #top, #mid,#bot{ /* Targets all id with 'col-' */
            border-bottom: 1px solid #EEE;
            }

            #top{min-height: 100px;}
            #mid{min-height: 80px;} 
            #bot{min-height: 50px;}
            
            .info{
                display: block;
                margin-left: 0;
            }
            .title{
                float: right;
            }
            .title p{text-align: right;} 
            table{
                width: 100%;
                border-collapse: collapse;
            }
            td{
                //padding: 5px 0 5px 15px;
                //border: 1px solid #EEE
            }
            .tabletitle{
                //padding: 5px;
                font-size: .5em;
                background: #EEE;
            }
            .service{border-bottom: 1px solid #EEE;}
            .item{width: 24mm;}
            .itemtext{font-size: .5em;}
              
            #legalcopy{
                margin-top: 5mm;
            }
            </style>        
            <div id="invoice-POS">               
            <center id="top">
                <img src="https://www.kumon.com/assets/images/kumon_logo.png" width="198" height="44"> 
                <div class="info"> 
                    <p> <strong>KUMON PEJANGGIK</strong></br>
                    Jl. Pejanggik No.12D, Mataram</br>
                    Telp: 0877-6556-6698 <p>
                </div><!--End Info-->
            </center><!--End InvoiceTop-->
    
            <div id="mid">         
                <div class="info">
                <p>
                    Tgl.`+tanggal+`</br>
                    No.`+tanggal.replace('-', '').replace('-', '')+(month.indexOf(bulan)+1)+'00'+ids+`                    
                </p>
                
                <p>
                <center><strong>KWITANSI PEMBAYARAN</strong></center> </br>
                    Nama Siswa    :</br>`+nama+`</br>
                    Uang Kursus Bulan: `+bulan+`</br>
                    Subyek : `+subject+`</br>
                    Nominal : `+'Rp. '+harga+',-'+`</br>
                </p>
                </div>
            </div><!--End Invoice Mid-->
                
            <div id="bot">

                <div id="legalcopy">
                    <small>Bayar:Tunai/Transfer/Debet/QRIS</small>
                </div>

                </div><!--End InvoiceBot-->
            </div><!--End Invoice-->
        `;
        let w = window.open()
        w.document.write(template)
        w.document.close()
        w.setTimeout(function () {
          w.print()
        }, 1000)
    }

    return {
        pembayaran,
        pembayarans,
        getPembayaran,
        getPembayarans,
        storePembayaran,
        updatePembayaran,
        destroyPembayaran,
        cetakPembayaran,
        errors,
    };
}