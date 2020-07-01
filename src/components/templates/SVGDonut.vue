<template>
  <div>
    <div class="svg-container">
      <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
        <circle
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#000000"
          stroke-width="3"
          opacity=".3"
          class="donut-ring"
        ></circle>
        <circle
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#cef263"
          stroke-width="3"
          stroke-dasharray="10,90"
          stroke-dashoffset="25"
          class="donut-segment"
        ></circle>
        <circle
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#ff9200"
          stroke-width="6"
          stroke-dasharray="25,75"
          stroke-dashoffset="15"
          class="donut-segment"
        ></circle>
        <circle
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#ff0000"
          stroke-width="10"
          stroke-dasharray="10,90"
          stroke-dashoffset="-10"
          class="donut-segment"
        ></circle>
        <circle
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#008cff"
          stroke-width="6"
          stroke-dasharray="25,75"
          stroke-dashoffset="-20"
          class="donut-segment"
        ></circle>
        <g class="chart-text">
          <text x="50%" y="50%" class="chart-number">70%</text>
          <text x="50%" y="50%" class="chart-label">Label</text>
        </g>
      </svg>
    </div>
    <hint>stroke-dasharray should always equal to 100. Since our initial stroke-dashoffset is 25, in order to place other segments correctly, we deduct the sum of previous segments from 25.</hint>
  </div>
</template>
<style lang="scss" scoped>
.svg-container {
  width: 200px;
  height: 200px;
  margin:0 auto;
}
.chart-number {
        font-size: .55em;
        line-height: 1;
        text-anchor: middle;
        transform: translateY(.25em);
        fill: #000;
}
.chart-label {
            font-size: .18em;
        text-transform: uppercase;
        text-anchor: middle;
        transform: translateY(2em);
        fill: #000;
        opacity: .3;
}
</style>
