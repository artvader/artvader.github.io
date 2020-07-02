<template>
  <div>
    <div>
      <svg width="500" height="100">
        <circle r="30" cx="50" cy="50" fill="orange">
          <animate
            attributeName="cx"
            values="50;450;50"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
      <svg width="40" height="40">
        <circle
          cx="20"
          cy="20"
          r="15.91549430918954"
          fill="transparent"
          stroke="#f98918"
          stroke-width="4"
          class="circle"
        >
        </circle>
      </svg>
    </div>
    <hint v-pre>This does not animate in IE and Opera mini.</hint>
  </div>
</template>
<style lang="scss">
.circle {
  stroke-dasharray: 100;
  stroke-dashoffset: 0;
  animation: dash 1s linear alternate infinite;
}
@keyframes dash {
  from {
    stroke-dashoffset: 100;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
