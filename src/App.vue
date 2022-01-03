<template>
  <VApp>
    <div>
      <LocaleSwitcher></LocaleSwitcher>
      <VCard class="mx-auto " tile width="auto">
        <VListItem>
          <VListItemContent>
            <VListItemTitle>
              <VBtn class="mr-1" to="/">Home</VBtn>
              <VBtn class="mr-1" to="/en/upload">Upload Page Demo</VBtn>
              <VBtn class="mr-1" to="/en/theme">Change Theme Demo {{$t('DIGITAL GAMING INNOVATORS')}}</VBtn>
              <VBtn class="mr-1" to="/en/svg">SVG</VBtn>
              <VBtn class="mr-1" to="/en/image">Image</VBtn>
              <VBtn class="mr-1" to="/en/fullscreen">Fullscreen</VBtn>
            </VListItemTitle>
          </VListItemContent>
        </VListItem>
      </VCard>
    </div>
    <RouterView></RouterView>
    <Icons></Icons>
  </VApp>
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher.vue';
// import Icons from '@/components/icons'; 
export default {
  name: "App",
  components: {
      LocaleSwitcher,
      // Icons
  },
  data: () => ({
    //
    pageLocation: "",
    to: {},
    from: {},
  }),
  methods: {
    pageIdentify() {
      return window.location.href.split("/");
    },
        showMainMenu(state) {
      this.$emit('showMainMenu', state);
    },
  },
  watch: {
    $route: function(to, from) {
      this.to = to;
      this.from = from;
    },
  },
  mounted() {
    this.pageIdentify();
  },
};
</script>

<style lang="scss">

</style>
