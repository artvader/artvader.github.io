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
      <svg viewBox="0 0 160 160" width="250" height="160">
        <g transform=" matrix(1.5, -.75, 0, -0.533, 75, 70)">
          <path
            d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z"
            fill="#F48132"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 0 0"
              to="0 0 0"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
        <g transform=" matrix(.00001, .75, -.25, .00001, 70, 70)">
          <path
            d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z"
            fill="#F48132"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 0 0"
              to="0 0 0"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
        <g>      
          <path
            fill="#F48132"
            d="M75.706,42.538c0,0,1.262-24.401-4.074-24.091c0,0-6.141-3.908-17.06,37.284   c0,0,45.949-29.405,84.329-43.633c0,0,48.307-19.521,58.895-6.783c0,0,6.906,6.493-9.348,23.74c0,0-26.551,26.18-40.076,30.397   c0,0,45.535-29.281,40.572-43.674c0,0-0.371-4.59-13.525-3.846c0,0-14.266,2.232-32.383,8.561   c-18.115,6.328-76.429,37.595-90.573,48.017c0,0-1.365,6.204-1.117,16.998c0,0,0.249,19.231,8.809,8.81   c0,0-14.723,24.816-12.242-22.167c0,0-64.353,48.636-17.205,44.337c0,0-75.935,15.053,19.19-58.234   c0,0,10.257-45.659,20.514-45.825C80.669,12.262,75.706,42.538,75.706,42.538z"
          />
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
