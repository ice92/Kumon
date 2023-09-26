import{a as t}from"./axios-aba6f0e0.js";import{h as i,p as g}from"./index-71aa85fd.js";t.defaults.baseURL="http://192.168.1.24:8000/api/v1/";function k(){const s=i([]),r=i([]),o=i([]),m=g(),d=async()=>{const a=await t.get("pembayaran");s.value=a.data.data};return{pembayaran:r,pembayarans:s,getPembayaran:async a=>{const e=await t.get("pembayaran/"+a);r.value=e.data.data},getPembayarans:d,storePembayaran:async a=>{try{await t.post("pembayaran",a),await m.push({name:"PembayaranIndex"})}catch(e){e.response.status===422&&(o.value=e.response.data.errors)}},updatePembayaran:async a=>{try{await t.put("pembayaran/"+a,r.value),await m.push({name:"PembayaranIndex"})}catch(e){e.response.status===422&&(o.value=e.response.data.errors)}},destroyPembayaran:async a=>{window.confirm("Apakah anda yakin akan menghapus data?")&&(await t.delete("pembayaran/"+a),await d())},cetakPembayaran:async(a,e,l,p,b,c)=>{var u=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],y=`
            <style>
            #invoice-POS{
                border: 1px solid black;             
                padding:2mm;
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
                    Telp: 0877-6555-6698 <p>
                </div><!--End Info-->
            </center><!--End InvoiceTop-->
    
            <div id="mid">         
                <div class="info">
                <p>
                    Tgl.`+p+`</br>
                    No.`+p.replace("-","").replace("-","")+u.indexOf(c)+"00"+b+`                    
                </p>
                
                <p>
                <center><strong>KWITANSI PEMBAYARAN</strong></center> </br>
                    Nama Siswa    :</br>`+a+`</br>
                    Uang Kursus Bulan: `+c+`</br>
                    Subyek : `+l+`</br>
                    Nominal : Rp. `+e+`,-</br>
                </p>
                </div>
            </div><!--End Invoice Mid-->
                
            <div id="bot">

                <div id="legalcopy">
                    <small>Bayar:Tunai/Transfer/Debet/QRIS</small>
                </div>

                </div><!--End InvoiceBot-->
            </div><!--End Invoice-->
        `;let n=window.open();n.document.write(y),n.document.close(),n.setTimeout(function(){n.print()},1e3)},errors:o}}export{k as u};
