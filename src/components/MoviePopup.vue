<template>
    <section class="movie" v-if="viewable">
        <div class="movie__wrapper">
            <div class="movie__details">
                <div class="movie__bg" :style="{ backgroundImage: 'url(' + backdropPath+movie.backdrop_path + ')' }"></div>
            <div @click="remove" class="close">X</div>
                <img :src=posterPath+movie.poster_path alt="" class="playing__movie-img"> 
                <img v-if="movie.poster_path == null" class="home__movie-img" src="../assets/images/no-image.jpg" alt="">
                <p class="playing__movie-title">{{ movie.title }}</p>
                <p class="playing__movie-title">{{ movie.overview }}</p>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import { EventBus } from '../main.js';

export default {
  name: 'app',
  data () {
    return {
      query: '',
      selectedMovie: [],
      posterPath: 'http://image.tmdb.org/t/p/w185/',
      backdropPath: 'http://image.tmdb.org/t/p/original/',
      movie: '',
      viewable: true,      
    }
  },
  methods: {
    remove() {
      this.viewable = false
    }
  },
  mounted() {
    EventBus.$on('movieDetails', ($event) => {
        this.movie = $event;
        this.viewable = true;

        console.log(this.movie)
    });
  }
}
</script>

<style lang="scss" scoped>
.movie {
    height: 100vh;
    overflow: hidden;
    &__wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 99999;
        top: 0;
        left: 0;
        background: rgba(39,174,96 ,0.7);
    }
    &__bg {
        width: 100%;
        height: 300px;
        background-repeat: no-repeat;
        background-size: cover;
    }
    &__details {
        width: 100%;
        max-width: 900px;
        background: #fff;
        display: block;
        margin: 0 auto;
    }
}
.close {
  position: absolute;
  z-index: 9999999;
  top: 0;
  left: 0;
}
</style>