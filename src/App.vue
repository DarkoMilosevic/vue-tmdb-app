<template>
  <div id="app">
      <navigation></navigation>
      <section class="main">
        <div class="main__img"></div>
        <input type="text" v-model.trim="query" @keyup.enter="searchMovies()" class="main__input" placeholder="Search">
        <div class="main__movie-wrapper">
          <div class="main__movie" v-for="(movie, index) in moviesList">
              <img :src=posterPath+movie.poster_path alt="" class="main__movie-img"> 
              <p>{{ movie.title }}</p>
          </div>
        </div>
      </section>
      <section>
        <router-view></router-view>
      </section>
  </div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: { Navigation },
  data () {
    return {
      query: '',
      moviesList: [],
      posterPath: 'http://image.tmdb.org/t/p/w185/'
    }
  },
  methods: {
    searchMovies() {
      this.moviesList = [];
      var moviesObj = this.moviesList;
      let apiKey = 'bfa57bdf44f2db86ebcd6f2c5f120098';
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=' + this.query)
      .then(function(response) {
        // console.log(response.data.results);
        response.data.results.map(function(value, key){
            moviesObj.push(value);
        });
      });
      this.query = '';
    },

  }
}
</script>

<style lang="scss">
@import 'assets/css/reset';

body {
  font-size: 16px;
  font-family: 'Verdana', serif;
}

.main {
  width: 100%;
  &__img {
    width: 100%;
    height: 400px;
    background: url('./assets/images/main.jpg') no-repeat;
    background-size: cover;
    background-position: 0 -250px;
    &:before{
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      max-height: 400px;
      background: rgba(255,255,255, 0.75);
    }
  }
  &__input {
    width: 50%;
    padding: 1rem;
    border: none;
    display: block;
    margin: 1rem auto;
    &:focus {
      outline: none;
    }
  }
  &__movie-wrapper {
    text-align: center;
  }  
  &__movie {
    display: inline-block;
    max-width: 185px;
    margin: 5px 10px;
    vertical-align: top;
  }
  &__movie-img {
    width: 185px;
    height: 280px;
  }
}
  
</style>