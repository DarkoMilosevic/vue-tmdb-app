<template>
    <section class="popup">
        <div class="popup__wrapper">
            <div class="playing__movie" v-for="(movie, index) in selectedMovie" :id="movie.id" @click="select">
                <img :src=posterPath+movie.poster_path alt="" class="playing__movie-img"> 
                <img v-if="movie.poster_path == null" class="home__movie-img" src="../assets/images/no-image.jpg" alt="">
                <p class="playing__movie-title">{{ movie.title }}</p>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import { eventBus } from '../main';

export default {
  name: 'app',
  data () {
    return {
      query: '',
      selectedMovie: [],
      posterPath: 'http://image.tmdb.org/t/p/w185/',
      id: ''
    }
  },
  methods: {
    movieDetails() {
        let moviesObj = this.selectedMovie;
        let movieID = this.id;
        let apiKey = 'bfa57bdf44f2db86ebcd6f2c5f120098';
        axios.get('https://api.themoviedb.org/3/movie/' + movieID + '?api_key=' + apiKey + '&language=en-US')
        .then(function(response) {
            moviesObj.push(response.data);
        });
    }
  },
  mounted() {
    var movie = JSON.parse(localStorage.getItem('movieID'));
        
    this.id = movie;
      
    this.movieDetails();

    //moram napraviti da svaki put kad korisnik klikne na film, on ponovo uradi request za popup i prikaze novi film

    //moram naci bolji nacin da pozivam movieDetails(), on bi trebao biti pozvan na taj klik na neki film
  }
}
</script>

<style lang="scss">

</style>