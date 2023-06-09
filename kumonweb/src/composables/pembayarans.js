import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import router from "../router";
axios.defaults.baseURL = "http://192.168.1.24:8000/api/v1/"
// axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"
// axios.defaults.baseURL = "http://192.168.8.139:8000/api/v1/"
export default function usePembayarans()
{
    const pembayarans = ref([]);
    const pembayaran = ref([]);
    const errors = ref([]);
    const reuter = useRouter();

    const getPembayarans = async () => {
        const response = await axios.get("pembayaran");
        pembayarans.value = response.data.data;
    };

    const getPembayaran = async (id) => {
        const response = await axios.get("pembayaran/" + id);
        pembayaran.value = response.data.data;
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
    
    const cetakPembayaran = async (nama,harga,subject,tanggal) => { 
        var url="https://api.countapi.xyz/hit/kumonpejanggik/"+tanggal
        const response = await axios.get(url);       
        var template = `
            <style>
            #invoice-POS{
                box-shadow: 0 0 1in -0.25in rgba(0, 0, 0, 0.5);
                padding:2mm;
                margin: 0 auto;
                width: 88mm;
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
            #bot{ min-height: 50px;}
            
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
                <img src="https://www.kumon.com/assets/images/kumon_logo.png" width="200" height="60"> 
                <div class="info"> 
                    <h2>Kumon Pejanggik</h2>
                    <p>Kursus Matematika & Bahasa Inggris<p>
                </div><!--End Info-->
            </center><!--End InvoiceTop-->
            
            <div id="mid">
                <div class="info">
                <h3>Kontak :</h3>
                <p> 
                    Address : Jln. Pejanggik No. 12 D, Mataram</br>
                    Phone   : 0877-6556-6698</br>
                </p>
                </div>
            </div><!--End Invoice Mid-->
            <div id="mid">
                <div class="info">
                <h3>Detail Pembayaran :</h3>
                <p> 
                    Nama    : `+nama+`</br>
                    Subject : `+subject+`</br>
                    Nominal : `+'Rp. '+harga+',-'+`</br>
                    Tanggal : `+tanggal+`</br>
                </p>
                </div>
            </div><!--End Invoice Mid-->
                
            <div id="bot">

                <div id="legalcopy">
                    <p class="legal"><strong>Thank you for your business!</strong></p>
                    <small>kwitansi no:`+tanggal+'-'+response.data["value"]+`</small>
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