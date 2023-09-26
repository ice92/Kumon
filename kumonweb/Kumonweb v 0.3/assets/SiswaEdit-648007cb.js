import{o as b,a as d,c as l,b as t,j as n,k as c,u as e,t as i,g as u,v as p,F as h,e as v,l as w}from"./index-71aa85fd.js";import{u as S}from"./siswas-faffb27f.js";import{u as V}from"./spp-6c3552d5.js";import"./axios-aba6f0e0.js";const j={class:"mt-20"},A={class:"space-y-6"},M={class:"mb-6"},U=t("label",{for:"name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Nama",-1),B={key:0},N={class:"text-sm text-red-400"},D={class:"mb-6"},E=t("label",{for:"idspp",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Subject",-1),F=["value"],T={key:0},$={class:"text-sm text-red-400"},q={class:"mb-6"},C=t("label",{for:"telpon",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Telepon",-1),J={key:0},L={class:"text-sm text-red-400"},z={class:"mb-6"},G=t("label",{for:"status",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Status",-1),H=t("option",{value:"Aktif"},"Aktif",-1),I=t("option",{value:"Absent"},"Absent",-1),K=[H,I],O={key:0},P={class:"text-sm text-red-400"},Q=t("div",{class:"mt-4"},[t("button",{type:"submit",class:"px-4 py-2 bg-teal-300 hover:bg-teal-400 text-white rounded"},"Simpan")],-1),Z={__name:"SiswaEdit",props:{id:{required:!0,type:String}},setup(m){const g=m,{siswa:o,getSiswa:k,updateSiswa:x,errors:a}=S(),{spps:y,getSpps:_}=V();return b(()=>k(g.id)),b(()=>_()),(f,r)=>(d(),l("div",j,[t("form",{class:"max-w-md mx-auto p-4 bg-gray-500 shadown-md rounded-md text-black",onSubmit:r[4]||(r[4]=w(s=>e(x)(f.$route.params.id),["prevent"]))},[t("div",A,[t("div",M,[U,n(t("input",{type:"text",id:"name","onUpdate:modelValue":r[0]||(r[0]=s=>e(o).name=s),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,512),[[c,e(o).name]]),e(a).name?(d(),l("div",B,[t("span",N,i(e(a).name[0]),1)])):u("",!0)]),t("div",D,[E,n(t("select",{type:"text",id:"idspp","onUpdate:modelValue":r[1]||(r[1]=s=>e(o).idspp=s),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(d(!0),l(h,null,v(e(y),s=>(d(),l("option",{value:s.id},i(s.Subject+" "+s.Jenjang),9,F))),256))],512),[[p,e(o).idspp]]),e(a).idspp?(d(),l("div",T,[t("span",$,i(e(a).idspp[0]),1)])):u("",!0)]),t("div",q,[C,n(t("input",{type:"text",id:"telpon","onUpdate:modelValue":r[2]||(r[2]=s=>e(o).telpon=s),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,512),[[c,e(o).telpon]]),e(a).telpon?(d(),l("div",J,[t("span",L,i(e(a).telpon[0]),1)])):u("",!0)]),t("div",z,[G,n(t("select",{type:"text",id:"status","onUpdate:modelValue":r[3]||(r[3]=s=>e(o).status=s),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},K,512),[[p,e(o).status]]),e(a).status?(d(),l("div",O,[t("span",P,i(e(a).status[0]),1)])):u("",!0)]),Q])],32)]))}};export{Z as default};
