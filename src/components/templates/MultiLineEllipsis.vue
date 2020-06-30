<template>
  <div>
    <div class="multi-line-crop">{{ msg }}</div>
    <hint>The background color is required and must be a solid color.</hint>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "text for ellipsis",
    };
  },
  methods: {
    msgLoop: function() {
      this.msg = this.msg + " " + this.msg;
    },
  },
  mounted() {
    let i = 0;
    for (i = 0; i <= 2; i++) {
      this.msgLoop();
    }     
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
