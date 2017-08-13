<template>
    <section class="popular">
        <h2 class="popular__heading">Popular Movies</h2>
        <div class="popular__movie" v-for="(movie, index) in popularList">
            <img :src=posterPath+movie.poster_path alt="" class="popular__movie-img"> 
            <img v-if="movie.poster_path == null" class="home__movie-img" src="../assets/images/no-image.jpg" alt="">
            <p class="popular__movie-title">{{ movie.title }}</p>
        </div>
        <div @click.prevent="loadMore" class="popular__more">Load More</div>  
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
      posterPath: 'http://image.tmdb.org/t/p/w185/',
      currentPage: 1
    }
  },
  methods: {
    searchMovies() {
      this.popularList = [];
      let moviesObj = this.popularList;
      let apiKey = 'bfa57bdf44f2db86ebcd6f2c5f120098';
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US&page='+ this.currentPage)
      .then(function(response) {
        response.data.results.map(function(value, key){
            moviesObj.push(value);
        });
      });
    },
    loadMore() {
      this.currentPage++;
      let apiKey = 'bfa57bdf44f2db86ebcd6f2c5f120098';
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US&page='+ this.currentPage)
      .then(function(response){
          let data = response.data;
          let newData = this.popularList.concat(data.results);
          this.popularList = newData;
      }.bind(this));
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
  &__heading {
    padding: 0 0 20px 20px;
    color: rgba(8, 28, 36, 0.5);
    font-size: 1.2rem;
  }
  &__movie-wrapper {
    text-align: center;
  }  
  &__movie {
    display: inline-block;
    max-width: 185px;
    margin: 5px 20px 50px;
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
      color: rgba(8, 28, 36, 0.5);
      font-size: 14px;
  }
  &__more {
    display: block;
    margin: 10px auto 30px;
    width: 100px;
    padding: 10px;
    border: 1px solid #212121;
    text-align: center;
    cursor: pointer;
  }
}
</style>