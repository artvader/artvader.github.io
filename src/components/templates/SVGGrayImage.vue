<template>
  <div>
    <div>
      <div
        class="svg"
        style="background-image:url(./img/logo.82b9c7a5.82b9c7a5.png);"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="svgroot"
          viewBox="0 0 400 377"
          width="400"
          height="377"
        >
          <defs>
            <filter id="filtersPicture">
              <feComposite
                result="inputTo_38"
                in="SourceGraphic"
                in2="SourceGraphic"
                operator="arithmetic"
                k1="0"
                k2="1"
                k3="0"
                k4="0"
              />
              <feColorMatrix
                id="filter_38"
                type="saturate"
                values="0"
                data-filterid="38"
              />
            </filter>
          </defs>
          <image
            :class="{ gray: isGray }"
            filter='url("#filtersPicture")'
            x="0"
            y="0"
            width="400"
            height="377"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="@/assets/logo.82b9c7a5.png"
          />
        </svg>
      </div>
    </div>
    <hint v-pre
      >This is an SVG image with a background image inlined for the colored
      version and the gray version inlined in the &lt;image&gt; tag</hint
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      isGray: false,
      textColor: "#ff9200",
    };
  },
  computed: {
    cssProps() {
      return {
        "--textColor": this.textColor,
      };
    },
  },
  methods: {
    toggleGray: function() {
      this.isGray = !this.isGray;
    },
  },
  created() {
    this.timerGray = setInterval(this.toggleGray, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timerGray);
  },
};
</script>
<style lang="scss">
img.grayscale:hover {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 1 0'/></filter></svg>#grayscale");
}

svg {
  background: inherit;
}

svg image:hover {
  opacity: 0;
}
.svg {
  display: inline-block;
  background-size: 93.75%;
  background-repeat: no-repeat;
  background-position: top;
}
</style>
