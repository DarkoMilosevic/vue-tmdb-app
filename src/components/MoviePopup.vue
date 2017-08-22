<template>
    <section class="movie" v-if="viewable">
        <div class="movie__wrapper">
            <div class="movie__header" :style="{ backgroundImage: 'url(' + backdropPath+movie.backdrop_path + ')' }">
                <div @click="remove" class="movie__close">X</div>
                <img :src=posterPath+movie.poster_path alt="" class="movie__movie-img"> 
                <img v-if="movie.poster_path == null" class="movie__movie-none" src="../assets/images/no-image.jpg" alt="">
                <h2 class="movie__movie-title">{{ movie.title }}</h2>
                <h5 class="movie__movie-tagline">{{ movie.tagline }}</h5> 
            </div>
            <div class="movie__details">
                <div class="movie__details-text">
                    <p class="movie__movie-text">{{ movie.overview }}</p>

                    <h3 class="movie__details-heading">Average rating</h3>
                        <p>{{ movie.vote_average }}/10 <span>({{ movie.vote_count }} votes)</span></p>

                    <h3 class="movie__details-heading">Runtime</h3>
                        <p>{{ movie.runtime }} minutes</p>
                    
                    <h3 class="movie__details-heading">Release date</h3>
                        <p>{{ movie.release_date }}</p>
                    
                    <h3 class="movie__details-heading">Genres</h3>
                        <p>{{nestedDataToString(movie.genres)}}</p>
                </div>
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
      posterPath: 'http://image.tmdb.org/t/p/w342/',
      backdropPath: 'http://image.tmdb.org/t/p/original/',
      movie: '',
      viewable: true,      
    }
  },
  methods: {
    remove() {
      this.viewable = false
    },
    nestedDataToString(data) {
      let nestedArray = [], resultString;
      data.forEach((item) => nestedArray.push(item.name));
      resultString = nestedArray.join(', ');
      return resultString;
    }
  },
  watch: {
    modalOpen: function(newVal) {
      var className = 'modal-open';
      if (newVal) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
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

<style lang="scss">
.movie {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    background: rgba(39,174,96 ,0.95);

    p {
        color: #2c3e50;
        font-size: 15px;
        padding: 5px 0;
    }
    
    &__wrapper {
        width: 100%;
        max-width: 800px;
        height: 100%;
        display: block;
        margin: 5% auto;
    }
    &__header {
        width: 100%;
        height: 300px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        position: relative;
        &:before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            width: 100%;
            height: 100%;
            background: rgba(8, 28, 36, 0.85);
        }
    }
    &__movie-title {
        color: #2ecc71;
        font-size: 32px;
        position: absolute;
        z-index: 999;
        left: 370px;
        top: 100px;
    }
    &__movie-tagline {
        position: absolute;
        z-index: 999;
        color: #fff;
        top: 180px;
        left: 370px;
        font-size: 14px;
    }
    &__close {
        font-size: 1.2rem;
        position: absolute;
        z-index: 999;
        color: #fff;
        top: 0;
        right: 0;
        border: 0;
        padding: 15px;
        &:hover {
            cursor: pointer;
            background: #27ae60;
            color: #fff;
        }
    }
    &__movie-img {
        position: absolute;
        z-index: 999;
        width: 100%;
        max-width: 280px;
        top: 50px;
        left: 50px;
    }
    &__movie-none {
        width: 100%;
        max-width: 280px;
        position: absolute;
        top: 50px;
        left: 50px;
    }
    &__details {
        width: 100%;
        background: #fff;
        padding-top: 20px;
    }
    &__details-text {
        padding: 0 20px 20px 370px;
    }
    &__details-heading {
        color: #2ecc71;
        text-transform: uppercase;
        font-weight: 800;
        padding-top: 20px;
    }
}
</style>