<template>
    <section class="home">
        <div class="home__img"></div>
        <input type="text" v-model.trim="query" @keyup.enter="searchMovies()" class="home__input" placeholder="Type here to search for movies">
        <div class="home__movie-wrapper">
          <div class="home__movie" v-for="(movie, index) in moviesList">
              <img :src=posterPath+movie.poster_path alt="" class="home__movie-img"> 
              <img v-if="movie.poster_path == null" class="home__movie-img" src="../assets/images/no-image.jpg" alt="">
              <p class="home__movie-title">{{ movie.title }}</p>
          </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: 'app',
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
        // for(let i=0;i<moviesObj.length;i++) {
        //     poster.push('http://image.tmdb.org/t/p/w185/' + moviesObj[i].poster_path);
        // }
      });
      this.query = '';
    }
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  &__img {
    width: 100%;
    height: 400px;
    background: url('../assets/images/main.jpg') no-repeat;
    background-size: cover;
    background-position: 0 -150px;
  }
  &__input {
    width: 50%;
    padding: 1rem;
    border: 3px solid #2ecc71;
    display: block;
    margin: 1rem 0;
    font-size: 1.5rem;
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
    margin: 5px 10px;
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
  }
}
</style>