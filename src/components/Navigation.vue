<template>
  <nav class="nav">
      <ul class="list">
          <router-link v-for="item in menuItems" :to="item.link"><li class="item" :key="item.title">{{ item.title }}</li></router-link>
      </ul>
  </nav>
</template>

<script>
    export default {
        data() {
            return {
                menuItems: [
                    { icon: 'face', title: 'Home', link: '/Home' },
                    { icon: 'face', title: 'Popular', link: '/Popular' },
                    { icon: 'collections', title: 'Top Rated', link: '/TopRated' },
                    { icon: 'collections', title: 'Upcoming', link: '/Upcoming' },
                    { icon: 'collections', title: 'Now Playing', link: '/NowPlaying' }
                ]
            }
        }
    }
</script>

<style>
.nav {
    width: 100%;
}    
.list {
        width: 100%;
        display: block;
        text-align: center;
    }
.item {
        display: inline-block;
        width: 20%;
        padding: 1.5rem 0;
        font-size: 1.2rem;
        cursor: pointer;
        transition: 0.3s ease;
}
.item:hover {
            background: #2ecc71;
            color: #fff;
            transition: 0.3s ease;
        }
</style>