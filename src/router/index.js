import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Popular from '@/components/Popular'
import TopRated from '@/components/TopRated'
import Upcoming from '@/components/Upcoming'
import NowPlaying from '@/components/NowPlaying'
import MoviePopup from '@/components/MoviePopup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
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
    },
    {
      path: '/MoviePopup',
      name: 'MoviePopup',
      component: MoviePopup
    }
  ],
  mode: 'history'
})
