<template>
  <div id="app">
    <header>
      <router-link to="/"><h1>
        <span class="green">Snit</span>™</h1>
      <span class="small">we do Less with SCSS</span></router-link>
    </header>
    <navbar></navbar>
    <router-view></router-view>
    <footer>Coffeerights© belong to
      <span class="green">Snit</span>™ &nbsp; Ltd. &nbsp; 2017</footer>
  </div>
</template>

<script>
import navbar from './components/Main/Navbar'

export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>

<style lang="scss">
header {
  margin: 3%;
  text-align: center;
  a{
    text-decoration: none;
    color:inherit;
  }
  h1 {
    margin-top: 3em;
    margin-bottom: 0px;
    font-size: 3em;
    padding: 0;
    margin: 0;
    line-height: 1em;
  }
  .small {
    display: block;
    font-size: 0.8em;
    font-style: italic;
  }
}

footer {
  text-align: center;
  color: gray;
}

:root {
  /* Layout */
  --container-width: 900px;
  --inner-container-width: 900px;
  /* Fonts */
  --primary-font: Exo2;
  --secondary-font: Pacifico;
  /* Colors */
  --main-color: #626262;
  --green-color: #42b983;
}

html {
  color: var(--main-color);
  font-family: var(--primary-font);
  font-size: 16px;
}

.green {
  color: var(--green-color);
  font-family: var(--secondary-font);
}


/*----------  Pacifico-Regular Font  ----------*/

@font-face {
  font-family: 'Pacifico';
  src: url('./assets/fonts/Pacifico-Regular.ttf');
}


/*----------  Exo2-Medium Font  ----------*/

@font-face {
  font-family: 'Exo2';
  src: url('./assets/fonts/Exo2-Medium.ttf');
}
</style>
