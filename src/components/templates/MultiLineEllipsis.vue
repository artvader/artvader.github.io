<template>
  <div>
    <div class="multi-line-crop">{{ msg }}</div>
    <pre>
      .multi-line-crop {
        text-align: left;
        line-height: 1.2em;
        overflow: hidden;
        max-height: 3.6em;
        position: relative;
        padding-right: 1em;
        background: white;
        &:before {
         content: "...";
         position: absolute;
         bottom: 0;
         right: 0;
        }
        &:after {
         content: "";
         position: absolute;
         right: 0;
         width: 1em;
         height: 1em;
         background: white;
        }
      }
    </pre>
    <hint v-pre
      >The background color is required and must be a solid color.</hint
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "text for ellipsis",
      loopCount: 0,
    };
  },
  methods: {
    msgLoop: function() {
      if (this.loopCount < 20) {
        this.msg = this.msg + " " + "text for ellipsis";
        this.loopCount++;
      } else {
        this.msg = "text for ellipsis";
        this.loopCount = 0;
      }
    },
  },
  created() {
    this.timer = setInterval(this.msgLoop, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>
<style lang="scss" scoped>
$-line-height: 1.2;
$-show-how-many-lines: 3;
.multi-line-crop {
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  line-height: $-line-height * 1em;
  overflow: hidden;
  max-height: $-show-how-many-lines * $-line-height * 1em;
  position: relative;
  padding-right: 1em;
  background: white;
  &:before {
    content: "...";
    position: absolute;
    bottom: 0;
    right: 0;
  }
  &:after {
    content: "";
    position: absolute;
    right: 0;
    width: 1em;
    height: 1em;
    background: white;
  }
}
</style>
