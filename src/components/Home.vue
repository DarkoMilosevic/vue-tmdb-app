<template>
    <section class="home">
        <input type="text" v-model.trim="query" @keyup.enter="searchMovies()" class="home__input" placeholder="Type here to search for movies...">
        <div class="home__movie-wrapper">
          <div class="home__movie" v-for="(movie, index) in moviesList" :id="movie.id" :key="movie.id" @click="select">
              <img :src=posterPath+movie.poster_path alt="" class="home__movie-img"> 
              <img v-if="movie.poster_path == null" class="home__movie-img" src="../assets/images/no-image.jpg" alt="">
              <p class="home__movie-title">{{ movie.title }}</p>
          </div>
        </div>
        <movie-popup v-if="viewable"></movie-popup>
    </section>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import moviePopup from './MoviePopup.vue'
import { EventBus } from '../main.js';

export default {
  name: 'app',
  components: { moviePopup },
  data () {
    return {
      query: '',
      moviesList: [],
      posterPath: 'http://image.tmdb.org/t/p/w185/',
      id: '',
      movie: '',
      viewable: false,
    }
  },
  methods: {
    searchMovies() {
      this.moviesList = [];
      let moviesObj = this.moviesList;
      let apiKey = 'bfa57bdf44f2db86ebcd6f2c5f120098';
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=' + this.query)
      .then(function(response) {
        response.data.results.map(function(value, key){
            moviesObj.push(value);
        });
      });
      this.query = '';
    },
    select(e) {
        this.id = e.currentTarget.id; 
        let movieID = this.id;
        let movie = this.movie;

        let apiKey = 'bfa57bdf44f2db86ebcd6f2c5f120098';
        axios.get('https://api.themoviedb.org/3/movie/' + movieID + '?api_key=' + apiKey + '&language=en-US')
        .then(function(response) {
            movie = response.data;
            EventBus.$emit('movieDetails', movie);
        }); 
        this.viewable = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  &__input {
    width: 50%;
    padding: 1rem;
    border: 3px solid #2ecc71;
    display: block;
    margin: 1rem auto;
    font-size: 1rem;
    position: relative;
    &:focus {
      outline: none;
    }
  }
  &__movie-wrapper {
    text-align: center;
    margin-bottom: 2rem;
  }  
  &__movie {
    display: inline-block;
    max-width: 185px;
    margin: 5px 20px 50px;
    cursor: pointer;
  }
  &__movie-img {
    width: 185px;
    height: 280px;
    transition: all 0.3s;
    &:hover {
        transform: scale(1.05);
    }
  }
  &__movie-title {
      padding: 1rem 0;
      color: rgba(8, 28, 36, 0.5);
      font-size: 14px;
  }
}
</style>