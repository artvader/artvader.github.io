<template>
  <div>
    <div class="triangle-container">
      <span class="triangle top"></span>
      <span class="triangle right"></span>
      <span class="triangle bottom"></span>
      <span class="triangle left"></span>
    </div>
    <hint v-pre>
        The left and right border width should just be 90% of the width of the arrow direction.
    </hint>
  </div>
</template>

<style lang="scss">
.triangle-container {
  text-align: center;
}
.triangle {
    border:50px solid transparent;
    display:inline-block;
    &.top {
        border-bottom-color: #000000;
        border-width: 0 50px 50px 50px;
    }
    &.left {
        border-right-color: #000000;
        border-width: 45px 50px 45px 0;
    }
    &.bottom {
        border-top-color: #000000;
        border-width: 50px 50px 0 50px;
    }
        &.right {
        border-left-color: #000000;
        border-width: 45px 0 45px 50px;
    }
}
</style>
