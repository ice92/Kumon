import{i as g,a as n,c as d,b as e,j as l,v as c,u as o,t as i,g as u,k as p,l as m,m as k}from"./index-ff5ab244.js";import{u as y}from"./spp-dd8197da.js";import"./axios-aba6f0e0.js";const h={class:"mt-20"},x={class:"space-y-6"},_={class:"mb-6"},f=e("label",{for:"Subject",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Subject",-1),v={key:0},S={class:"text-sm text-red-400"},j={class:"mb-6"},w=e("label",{for:"Jenjang",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Jenjang",-1),J=k('<option value="Play Group">Play Group</option><option value="Taman Kanak-Kanak">Taman Kanak-Kanak</option><option value="Sekolah Dasar">Sekolah Dasar</option><option value="Sekolah Menengah Pertama">Sekolah Menengah Pertama</option><option value="Sekolah Menengah Atas">Sekolah Menengah Atas</option><option value="Lainnya">Lainnya</option>',6),H=[J],M={key:0},P={class:"text-sm text-red-400"},V={class:"mb-6"},D=e("label",{for:"Harga",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"SPP",-1),K={key:0},B={class:"text-sm text-red-400"},N=e("div",{class:"mt-4"},[e("button",{type:"submit",class:"px-4 py-2 bg-teal-300 hover:bg-teal-400 text-white rounded"},"Simpan")],-1),L={__name:"SppCreate",setup(T){const{storeSpp:b,errors:r}=y(),a=g({Subject:"",Jenjang:"",Harga:""});return(U,t)=>(n(),d("div",h,[e("form",{class:"max-w-md mx-auto p-4 bg-gray-500 shadown-md rounded-md text-black",onSubmit:t[3]||(t[3]=m(s=>o(b)(a),["prevent"]))},[e("div",x,[e("div",_,[f,l(e("input",{type:"text",id:"Subject","onUpdate:modelValue":t[0]||(t[0]=s=>a.Subject=s),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,512),[[c,a.Subject]]),o(r).Subject?(n(),d("div",v,[e("span",S,i(o(r).Subject[0]),1)])):u("",!0)]),e("div",j,[w,l(e("select",{type:"text",id:"Jenjang","onUpdate:modelValue":t[1]||(t[1]=s=>a.Jenjang=s),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},H,512),[[p,a.Jenjang]]),o(r).Jenjang?(n(),d("div",M,[e("span",P,i(o(r).Jenjang[0]),1)])):u("",!0)]),e("div",V,[D,l(e("input",{type:"number",id:"Harga","onUpdate:modelValue":t[2]||(t[2]=s=>a.Harga=s),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,512),[[c,a.Harga]]),o(r).Harga?(n(),d("div",K,[e("span",B,i(o(r).Harga[0]),1)])):u("",!0)]),N])],32)]))}};export{L as default};