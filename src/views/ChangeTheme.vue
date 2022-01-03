<template>
  <VContainer>
    <VBtn @click="darkMode()"
      >
      Toggle
      </VBtn
    >
    <VCard class="mt-4">
        <VCardText>
Dark mode is  {{ this.$vuetify.theme.dark }}
        </VCardText>
    </VCard>
   
  </VContainer>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  data: () => ({}),
};
</script>
