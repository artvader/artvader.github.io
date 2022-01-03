<template>
  <div>
         <VBtn type="button" @click="toggle">Fullscreen</VBtn>
    <fullscreen v-model="fullscreen">
      <VSheet height="50vh" color="gray"></VSheet>
    </fullscreen>
 
    <!-- Api  -->
    <VBtn type="button" @click="toggleApi">FullscreenApi</VBtn>
    <!-- Directive  -->
    <VBtn type="button" v-fullscreen>FullscreenDirective</VBtn>
  </div>
</template>
<script>
export default {
  methods: {
    toggle() {
      this.fullscreen = !this.fullscreen;
    },
    toggleApi() {
      this.$fullscreen.toggle();
    },
  },
  data() {
    return {
      fullscreen: false,

      teleport: true,
    };
  },
};
</script>
