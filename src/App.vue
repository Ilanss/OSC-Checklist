<template>
  <RouterView />
</template>

<script>
// import CheckList from './components/Checklist.vue';

export default {
  name: 'App',
  components: {
    // CheckList,
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
  /* -webkit-app-region: drag; */
}

body.modal-open {
  overflow: hidden;
}

#app {
  /* -webkit-app-region: no-drag; */
  /* width: fit-content; */
  /* padding-right: 5rem; */
}

#main {
  padding-top: 7rem;
}

#main > h2:first-child {
  margin-top: 0;
}

.menu {
  position: fixed;
  z-index: 1;
  width: 100vw;
  top: 0;
  left: 0;
  -webkit-app-region: drag;
  /* box-shadow: 1px -10px 5px 10px rgba(0,0,0,0.75); */
}

html:not([data-scroll='0']) .menu {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.title {
  padding: 1rem 2.5rem 0rem;
}

.router {
  position: absolute;
  right: 2.5rem;
  top: 3.5rem;
  color: #ffffff;
}

/* h1, .subtitle {
  -webkit-app-region: drag;
} */

.no-drag {
  -webkit-app-region: no-drag;
}

h1, .modal h3 {
  margin-bottom: 0;
}

h3 {
  margin-top: 0;
}

label + h2, .modal-mask + h2 {
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

a {
  color: #fff;
}

button a {
  text-decoration: none;
}

code {
  font-size: .7em;
  background-color: #404247;
  padding: 4px 8px;
  border-radius: 4px;
  vertical-align: .2em;
}

button {
  background: #3c53c7;
  padding: .7rem 1.5rem;
  margin: 0 5px;
  border-radius: 50px;
  border: 0px solid;
  color: #ffffff;
  cursor: pointer;
  transition: .2s;
}

img {
  border-radius: 8px;
  width: 100%;
}

button:hover {
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
}

.guide img {
  margin-bottom: 2rem;
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

  .menu {
    background-color: #ffffff;
  }

  code {
    color: #ffffff;
  }

  a {
    color: #202124;
  }
  
  .svg-inline--fa {
    color: #00104B;
  }
  
  .warning {
    background-color: #fff3cd;
    border: 1px solid #ffe69c;
    color: #664d03;
    padding: 1.5rem;
    border-radius: 4px;
  }

}

@media (prefers-color-scheme: dark) {
  body { 
    color: #ffffff;
    background-color: #202124;
  }

  .menu {
    background-color: #202124;
  }

  .warning {
    background-color: #332701;
    border: 1px solid #997404;
    color: #ffda6a;
    padding: 1.5rem;
    border-radius: 4px;
  }

}

.menu {
  animation-name: shadowFadeIn;
  animation-duration: 1s; /* Duration won't affect scroll-timeline sync */
  animation-timeline: scroll();
  animation-timeline-name: headerScroll;
  animation-range: 0% 20%; /* Shadow will fully appear by 20% scroll */
}

@scroll-timeline headerScroll {
  source: auto;
  orientation: block;
}

@keyframes shadowFadeIn {
  0% {
    box-shadow: none;
  }
  100% {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}
</style>