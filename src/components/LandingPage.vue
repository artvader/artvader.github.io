<template>
  <div>
    <TextWithGradient />
    <hr>
    <MultiLineEllipsis />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TextWithGradient from '@/components/templates/TextWithGradient.vue';
import MultiLineEllipsis from '@/components/templates/MultiLineEllipsis.vue';

@Component({
  components: {
    TextWithGradient,
    MultiLineEllipsis
  }
})
export default class LandingPage extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
