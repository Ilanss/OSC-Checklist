<template>
  <CheckList />
</template>

<script>
import CheckList from './components/Checklist.vue';

export default {
  name: 'App',
  components: {
    CheckList,
  },
  data() {
    return {
      showProcessModal: false,
    };
  },
}
</script>

<style>
html {
  height:100%;
}

body {
  /* align-items: center; */
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  padding: 1rem 2rem;
  /* position:absolute; 
  top:0; 
  bottom:0; 
  right:0; 
  left:0; */
  -webkit-app-region: drag;
}

#app {
  -webkit-app-region: no-drag;
  width: fit-content;
  padding-right: 5rem;
}

h1, .subtitle {
  -webkit-app-region: drag;
}

h1, .modal h3 {
  margin-bottom: 0;
}

h3 {
  margin-top: 0;
}

label + h2 {
  margin-top: calc(.83em + 15px);
}

ol, ul {
  text-align: left;
  margin-top: 2rem;
}

li {
  padding-bottom: 1rem;
}

p.subtitle {
  margin-top: .2rem;
  margin-bottom: 2rem;
}

button {
  background: #3c53c7;
  padding: 1rem 2rem;
  margin: 0 5px;
  border-radius: 50px;
  border: 0px solid;
  color: #ffffff;
  cursor: pointer;
  transition: .2s;
}

img {
  border-radius: 8px;
}

button:hover {
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
}

/* h2 {
  font-style: italic;
  font-weight: 400;
  font-size: 1.3rem;
}
 */
@media (prefers-color-scheme: light) {
  body { 
    color: #00104B;
    background-color: #ffffff;
  }

  .svg-inline--fa {
    color: #00104B;
  }
}

@media (prefers-color-scheme: dark) {
  body { 
    color: #ffffff;
    background-color: #202124;
  }
}

</style>