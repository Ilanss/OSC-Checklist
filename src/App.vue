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
body {
  /* align-items: center; */
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  padding: 1rem 2rem;
  /* text-align: center; */
}

h1, .modal h3 {
  margin-bottom: 0;
}

h3 {
  margin-top: 0;
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
  }
}

</style>