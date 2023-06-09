import{a as t}from"./axios-aba6f0e0.js";import{m as r,n as g,p}from"./index-4313b053.js";t.defaults.baseURL="http://192.168.8.104:8000/api/v1/";function x(){const d=r([]),i=r([]),o=r([]);g();const m=async()=>{const a=await t.get("pembayaran");d.value=a.data.data};return{pembayaran:i,pembayarans:d,getPembayaran:async a=>{const e=await t.get("pembayaran/"+a);i.value=e.data.data},getPembayarans:m,storePembayaran:async a=>{try{await t.post("pembayaran",a),await p.push({name:"PembayaranIndex"})}catch(e){e.response.status===422&&(o.value=e.response.data.errors)}},updatePembayaran:async a=>{try{await t.put("pembayaran/"+a,i.value),await p.push({name:"PembayaranIndex"})}catch(e){e.response.status===422&&(o.value=e.response.data.errors)}},destroyPembayaran:async a=>{window.confirm("Apakah anda yakin akan menghapus data?")&&(await t.delete("pembayaran/"+a),await m())},cetakPembayaran:async(a,e,c,s)=>{var l="https://api.countapi.xyz/hit/kumonpejanggik/"+s;const b=await t.get(l);var h=`
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
                    Nama    : `+a+`</br>
                    Subject : `+c+`</br>
                    Nominal : Rp. `+e+`,-</br>
                    Tanggal : `+s+`</br>
                </p>
                </div>
            </div><!--End Invoice Mid-->
                
            <div id="bot">

                <div id="legalcopy">
                    <p class="legal"><strong>Thank you for your business!</strong></p>
                    <small>kwitansi no:`+s+"-"+b.data.value+`</small>
                </div>

                </div><!--End InvoiceBot-->
            </div><!--End Invoice-->
        `;let n=window.open();n.document.write(h),n.document.close(),n.setTimeout(function(){n.print()},1e3)},errors:o}}export{x as u};
