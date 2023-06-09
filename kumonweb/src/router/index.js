import { createRouter, createWebHistory } from 'vue-router'
 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: () => import('../views/HomeView.vue')
    // },
    {
      path: '/pembayaran',
      name: 'PembayaranIndex',
      component: () => import('../views/pembayaran/PembayaranIndex.vue')
    },
    {
      path: '/pembayaran/create',
      name: 'PembayaranCreate',
      component: () => import('../views/pembayaran/PembayaranCreate.vue')
    },
    {
      path: '/pembayaran/:id/edit',
      name: 'PembayaranEdit',
      component: () => import('../views/pembayaran/PembayaranEdit.vue'),
      props:true,
    },

    {
      path: '/spp',
      name: 'SppIndex',
      component: () => import('../views/spp/SppIndex.vue')
    },
    {
      path: '/spp/create',
      name: 'SppCreate',
      component: () => import('../views/spp/SppCreate.vue')
    },
    {
      path: '/spp/:id/edit',
      name: 'SppEdit',
      component: () => import('../views/spp/SppEdit.vue'),
      props:true,
    },
    {
      path: '/siswa',
      name: 'SiswaIndex',
      component: () => import('../views/siswa/SiswaIndex.vue')
    },
    {
      path: '/siswa/create',
      name: 'SiswaCreate',
      component: () => import('../views/siswa/SiswaCreate.vue')
    },
    {
      path: '/siswa/:id/edit',
      name: 'SiswaEdit',
      component: () => import('../views/siswa/SiswaEdit.vue'),
      props:true,
    }
  ]
})

export default router
