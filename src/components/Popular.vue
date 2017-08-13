<template>
    <section class="popular">
        <div class="popular__movie" v-for="(movie, index) in popularList">
            <img :src=posterPath+movie.poster_path alt="" class="popular__movie-img"> 
            <p class="popular__movie-title">{{ movie.title }}</p>
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
      popularList: [],
      posterPath: 'http://image.tmdb.org/t/p/w185/'
    }
  },
  methods: {
    searchMovies() {
      this.popularList = [];
      var moviesObj = this.popularList;
      let apiKey = 'bfa57bdf44f2db86ebcd6f2c5f120098';
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US&page=1')
      .then(function(response) {
        // console.log(response.data.results);
        response.data.results.map(function(value, key){
            moviesObj.push(value);
        });
      });
    }
  },
  mounted() {
      this.searchMovies();
  }
}
</script>

<style lang="scss">
.popular {
  width: 100%;
  padding: 1rem 0;
  &__movie-wrapper {
    text-align: center;
  }  
  &__movie {
    display: inline-block;
    max-width: 185px;
    margin: 5px 10px;
    vertical-align: top;
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