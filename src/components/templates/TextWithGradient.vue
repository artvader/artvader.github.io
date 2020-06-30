<template>
  <div>
    <h1>Gradient Text</h1>
    <p>For this to work, The text must have a background color and must not have alpha transparency.</p>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 64px;
  color: black;
  position: relative;
  mix-blend-mode: multiply;
  background: linear-gradient(to top, #d9fbff 0%, #ffffff 100%);
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    display: block;
    background-image: linear-gradient(to bottom, #ff9200 30%, #ff5400 50%);
    mix-blend-mode: screen;
  }
}
</style>
