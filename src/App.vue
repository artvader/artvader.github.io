<template>
  <div id="app">
    <h1>CSS Techniques</h1>
    <router-view />
  </div>
</template>

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
    content:"Hint: ";
    font-weight:bold;
    font-style: normal;
    font-size:.8em;
    text-transform: uppercase;
  }
}
hr {
  margin: 20px 0;
}
</style>