<template>
  <nav class="nav">
      <ul class="nav__list">
          <router-link v-for="item in menuItems" :to="item.link" class="nav__item" :key="item.title"><li>{{ item.title }}</li></router-link>
      </ul>
  </nav>
</template>

<script>
    export default {
        data() {
            return {
                menuItems: [
                    { title: 'Home', link: '/' },
                    { title: 'Popular', link: '/Popular' },
                    { title: 'Top Rated', link: '/TopRated' },
                    { title: 'Upcoming', link: '/Upcoming' },
                    { title: 'Now Playing', link: '/NowPlaying' }
                ]
            }
        }
    }
</script>

<style lang="scss">

.nav {
    width: 250px;
    height: 100vh;
    background: #fff;
    position: fixed;
    top: 0;
    padding-top: 65px;
    &__list {
        width: 100%;
        max-width: 380px;
        text-align: center;
    }
    &__item {
        color: #000;
        display: block;
        width: 100%;
        max-width: 380px;
        padding: 1.75rem 0;
        cursor: pointer;
        transition: 0.3s ease;
        text-decoration: none;
        &:hover {
            background: #2ecc71;
            color: #fff;
            transition: 0.3s ease;
        }
    }
}
</style>