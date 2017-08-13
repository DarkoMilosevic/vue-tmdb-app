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
                    { icon: 'face', title: 'Home', link: '/' },
                    { icon: 'face', title: 'Popular', link: '/Popular' },
                    { icon: 'collections', title: 'Top Rated', link: '/TopRated' },
                    { icon: 'collections', title: 'Upcoming', link: '/Upcoming' },
                    { icon: 'collections', title: 'Now Playing', link: '/NowPlaying' }
                ]
            }
        }
    }
</script>

<style lang="scss">

.nav {
    width: 20%;
    display: inline-block;
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
        padding: 1.5rem 0;
        font-size: 1.2rem;
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

/* .nav {
    width: 20%;
    display: inline-block;
}    
.list {
    width: 20%;
    text-align: center;
    position: fixed;
}
.item {
    display: block;
    width: 100%;
    padding: 1.5rem 0;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.3s ease;
}
.item:hover {
    background: #2ecc71;
    color: #fff;
    transition: 0.3s ease;
} */
</style>