import{a as s}from"./axios-aba6f0e0.js";import{h as r,p as u}from"./index-ff5ab244.js";s.defaults.baseURL="http://192.168.1.24:8000/api/v1/";function f(){const o=r([]),p=r([]),e=r([]),n=u(),c=async()=>{try{const a=await s.get("spp");o.value=a.data.data}catch{}};return{spp:p,spps:o,getSpp:async a=>{try{const t=await s.get("spp/"+a);p.value=t.data.data}catch{}},getSpps:c,storeSpp:async a=>{try{await s.post("spp",a),await n.push({name:"SppIndex"})}catch(t){t.response.status===422&&(e.value=t.response.data.errors)}},updateSpp:async a=>{try{await s.put("spp/"+a,p.value),await n.push({name:"SppIndex"})}catch(t){t.response.status===422&&(e.value=t.response.data.errors)}},destroySpp:async a=>{window.confirm("Apakah anda yakin akan menghapus data?")&&(await s.delete("spp/"+a),await c())},errors:e}}export{f as u};