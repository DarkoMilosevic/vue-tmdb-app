<template>
  <nav class="nav">
      <ul class="nav__list">
            <router-link :to="'/'" class="nav__link">
                <icon name="home" class="nav__icon"></icon>
                <li class="nav__item">Home</li>        
            </router-link>
            <router-link :to="'/Popular'" class="nav__link">
                <icon name="star-o" class="nav__icon"></icon>
                <li class="nav__item">Popular</li>
            </router-link>
            <router-link :to="'/TopRated'" class="nav__link">
                <icon name="thumbs-up" class="nav__icon"></icon>
                <li class="nav__item">Top Rated</li>
            </router-link>
            <router-link :to="'/Upcoming'" class="nav__link">
                <icon name="calendar" class="nav__icon"></icon>
                <li class="nav__item">Upcoming</li>
            </router-link>
            <router-link :to="'/NowPlaying'" class="nav__link">
                <icon name="play-circle-o" class="nav__icon"></icon>
                <li class="nav__item">Now Playing</li>
            </router-link>
      </ul>
  </nav>
</template>

<script>
    export default {
        data() {
            return {
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
    &__link {
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
    &__icon {
        padding-right: 10px;  
    }
    &__item {
        display: inline-block;
    }
}
</style>