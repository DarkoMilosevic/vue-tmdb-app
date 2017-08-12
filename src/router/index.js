import Vue from 'vue'
import Router from 'vue-router'
import Popular from '@/components/Popular'
import TopRated from '@/components/TopRated'
import Upcoming from '@/components/Upcoming'
import NowPlaying from '@/components/NowPlaying'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Popular',
      name: 'Popular',
      component: Popular
    },
    {
      path: '/TopRated',
      name: 'TopRated',
      component: TopRated
    },
    {
      path: '/Upcoming',
      name: 'Upcoming',
      component: Upcoming
    },
    {
      path: '/NowPlaying',
      name: 'NowPlaying',
      component: NowPlaying
    }
  ],
  mode: 'history'
})