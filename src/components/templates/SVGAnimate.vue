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
      <svg width="100" height="100">
        <circle
          cx="50%"
          cy="50%"
          r="31.847133"
          fill="transparent"
          stroke="#f98918"
          stroke-width="4"
          class="circle"
        ></circle>
      </svg>
      <svg x="0px" y="0px" width="100px" height="100px" xml:space="preserve">
        <g transform="translate(25, 25)">
          <rect fill="#FE9FFF" width="50px" height="50px">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="20s"
              repeatDur="indefinite"
            />
          </rect>
        </g>
      </svg>
    </div>
    <hint v-pre
      >This does not animate in IE and Opera mini. To calculate radius, we use r
      = C/(2π)</hint
    >
  </div>
</template>
<style lang="scss">
.circle {
  stroke-dasharray: 200;
  stroke-dashoffset: 25;
  animation: dash 1s linear infinite;
}
@keyframes dash {
  from {
    stroke-dashoffset: 200;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
