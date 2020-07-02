<template>
  <div>
    <TextWithGradient />
    <hr />
    <MultiLineEllipsis />
    <hr />
    <SVGDonut />
    <hr />
    <SVGGrayImage />
    <hr />
    <CSSTriangles />
    <hr />
    <SVGAnimate />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TextWithGradient from "@/components/templates/TextWithGradient.vue";
import MultiLineEllipsis from "@/components/templates/MultiLineEllipsis.vue";
import SVGDonut from "@/components/templates/SVGDonut.vue";
import SVGGrayImage from "@/components/templates/SVGGrayImage.vue";
import CSSTriangles from "@/components/templates/CSSTriangles.vue";
import SVGAnimate from "@/components/templates/SVGAnimate.vue";

@Component({
  components: {
    TextWithGradient,
    MultiLineEllipsis,
    SVGDonut,
    SVGGrayImage,
    CSSTriangles,
    SVGAnimate
  },
})
export default class LandingPage extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
