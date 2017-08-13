<template>
  <div id="app">
    <div class="header">
      <h1>Movie app made using VueJS and TMDB API</h1>
    </div>
      <navigation></navigation><section class="main">
        <router-view></router-view>
      </section>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: { Navigation },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import 'assets/css/reset';

.header {
  width: 100%;
  height: 65px;
  background: #27ae60;
  color: #fff;
  font-size: 1.25rem;
  display: table;
  h1 {
    display: table-cell;
    vertical-align: middle;
    padding-left: 2rem;
  }
}

body {
  font-size: 16px;
  font-family: 'Verdana', serif;
}

.main {
  width: 80%;
  display: inline-block;
}
  
.main, .nav {
  vertical-align: top;
}

</style>