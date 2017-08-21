<template>
    <section class="upcoming">
        <h2 class="upcoming__heading">Upcoming Movies</h2>
        <div class="upcoming__movie" v-for="(movie, index) in upcomingList" :id="movie.id" @click="select">
            <img :src=posterPath+movie.poster_path alt="" class="upcoming__movie-img"> 
            <img v-if="movie.poster_path == null" class="home__movie-img" src="../assets/images/no-image.jpg" alt="">
            <p class="upcoming__movie-title">{{ movie.title }}</p>
        </div>
        <div @click.prevent="loadMore" class="upcoming__more">Load More</div>
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
      upcomingList: [],
      posterPath: 'http://image.tmdb.org/t/p/w185/',
      currentPage: 1,
      id: '',
      movie: '',
      viewable: false,
    }
  },
  methods: {
    searchMovies() {
      this.upcomingList = [];
      var moviesObj = this.upcomingList;
      let apiKey = 'bfa57bdf44f2db86ebcd6f2c5f120098';
      axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=' + apiKey + '&language=en-US&page='+ this.currentPage)
      .then(function(response) {
        // console.log(response.data.results);
        response.data.results.map(function(value, key){
            moviesObj.push(value);
        });
      });
    },
    loadMore() {
      this.currentPage++;
      let apiKey = 'bfa57bdf44f2db86ebcd6f2c5f120098';
      axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=' + apiKey + '&language=en-US&page='+ this.currentPage)
      .then(function(response){
          let data = response.data;
          let newData = this.upcomingList.concat(data.results);
          this.upcomingList = newData;
      }.bind(this));
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
  },
  mounted() {
      this.searchMovies();
  }
}
</script>

<style lang="scss">
.upcoming {
  &__heading {
    padding: 0 0 20px 20px;
    color: rgba(8, 28, 36, 0.5);
    font-size: 1.2rem;
  }
  width: 100%;
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