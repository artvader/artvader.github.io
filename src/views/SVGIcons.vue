<template>
  <div style="color: orange">
    <svg class="icon" width="2rem" height="2rem">
      <use xlink:href="#icon-football-streak"></use>
    </svg>
    <svg class="icon" width="2rem" height="2rem">
      <use xlink:href="#icon-calendar"></use>
    </svg>
    <svg class="icon" width="3rem" height="3rem">
      <use xlink:href="#icon-creatives"></use>
    </svg>
    <svg class="icon" width="2rem" height="2rem">
      <use xlink:href="#icon-calendar"></use>
    </svg>
    <VTextField filled append-icon="icon-188-close"> </VTextField>
    <SvgInline src="@/assets/img/symbol-defs.svg" />
    <VBtn icon>
      <svg class="icon white--text" width="1.5rem" height="2rem">
        <use xlink:href="#icon-hamburger-menu"></use>
      </svg>
    </VBtn>
    <VIcon large color="green darken-2"> $complete </VIcon>
    <VIcon large color="green darken-2"> icon-188-open </VIcon>
    <VIcon large color="green darken-2"> icon-188-warning </VIcon>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  components: {},
  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
svg {
  &::v-deep {
    use {
      fill: currentColor;
    }
  }
}
div {
  &::v-deep {
    .icon-188-close {
      &:before {
        content: 'A';
      }
    }
    .icon-188-complete {
      &:before {
        content: 'B';
      }
    }
    .icon-188-open {
      &:before {
        content: 'J';
      }
    }
    .icon-188-warning {
      &:before {
        content: 'H';
      }
    }
  }
}
</style>
