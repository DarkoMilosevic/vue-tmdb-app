<template>
    <section class="playing">
        <div class="playing__movie" v-for="(movie, index) in playingList">
            <img :src=posterPath+movie.poster_path alt="" class="playing__movie-img"> 
            <p class="playing__movie-title">{{ movie.title }}</p>
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
      playingList: [],
      posterPath: 'http://image.tmdb.org/t/p/w185/'
    }
  },
  methods: {
    searchMovies() {
      this.playingList = [];
      var moviesObj = this.playingList;
      let apiKey = 'bfa57bdf44f2db86ebcd6f2c5f120098';
      axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey + '&language=en-US&page=1')
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
.playing {
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