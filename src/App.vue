<template>
  <CheckList />
</template>

<script>
import CheckList from './components/Checklist.vue';

export default {
  name: 'App',
  components: {
    CheckList
  }
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

button {
  background: #3c53c7;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: 0px solid;
  color: #ffffff;
  cursor: pointer;
  transition: .2s;
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