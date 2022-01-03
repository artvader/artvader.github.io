<template>
      <v-row>
        <v-col :sm="12" v-for="myData in $store.getters.worldData" :key="myData.country">
          <div v-if="myData.continent !=null" class="tertiary--text">{{myData}}</div>
        </v-col>
      </v-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data: () => ({
    //
  }),
};
</script>
