import{a as t}from"./axios-aba6f0e0.js";import{m as i,n as u,p as w}from"./index-4313b053.js";t.defaults.baseURL="http://192.168.8.104:8000/api/v1/";function m(){const o=i([]),e=i([]),r=i([]);u();const n=async()=>{const a=await t.get("siswa");o.value=a.data.data};return{siswa:e,siswas:o,getSiswa:async a=>{const s=await t.get("siswa/"+a);e.value=s.data.data},getSiswas:n,storeSiswa:async a=>{try{await t.post("siswa",a),await w.push({name:"SiswaIndex"})}catch(s){s.response.status===422&&(r.value=s.response.data.errors)}},updateSiswa:async a=>{try{await t.put("siswa/"+a,e.value),await w.push({name:"SiswaIndex"})}catch(s){s.response.status===422&&(r.value=s.response.data.errors)}},destroySiswa:async a=>{window.confirm("Apakah anda yakin akan menghapus data?")&&(await t.delete("siswa/"+a),await n())},errors:r}}export{m as u};
