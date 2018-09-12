import Vue from 'vue'
import Router from 'vue-router'
import fmusic from '../components/fmusic.vue'
import mymusic from '../components/mymusic.vue'
import shop from '../components/shop.vue'
import people from '../components/people.vue'
import down from '../components/down.vue'
import friend from '../components/friend.vue'
import recommend from '../components/recommend.vue'
import dj from '../components/dj.vue'
import list from '../components/list.vue'
import ranking from '../components/ranking.vue'
import singer from '../components/singer.vue'
import news from '../components/news.vue'

Vue.use(Router)

export default new Router({
  routes: [{
        path:'/',
        redirect:'/fmusic/recommend'
      },
      {
      path: '/fmusic',
      name: 'fmusic',
      component: fmusic,
      redirect:'/fmusic/recommend',
      children:[
      {
        path:'recommend',
        component: recommend
      },
      {
        path:'ranking',
        component: ranking
      },
      {
        path:'list',
        component: list
      },
      {
        path:'dj',
        component: dj
      },
      {
        path:'singer',
        component: singer
      },
      {
        path:'news',
        component: news
      }
    ]
    },
    {
      path: '/mymusic',
      name: 'mymusic',
      component: mymusic
    },
    {
      path: '/friend',
      name: 'friend',
      component: friend
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/people',
      name: 'people',
      component: people
    },
    {
      path: '/down',
      name: 'down',
      component: down
    }  
  ]
})
