import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import Form from '@/components/Form.vue'
import Photo from '@/components/Photo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/photo',
      name: 'Photo',
      component: Photo
    }
  ]
})
