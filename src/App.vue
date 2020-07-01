<template>
  <div id="app">
    <h1>CSS Techniques</h1>
    <router-view />
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
h1 {
  font-size: 92px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style lang="scss">
hint {
  font-style: italic;
  &:before {
    content: "Hint: ";
    font-weight: bold;
    font-style: normal;
    font-size: 0.8em;
    text-transform: uppercase;
  }
}
hr {
  margin: 20px 0;
}
pre {
  &:before {
    content:"scss code";
    display:block;
    font-weight:bold;
    margin:1.2em 0;
  }
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
}
</style>
