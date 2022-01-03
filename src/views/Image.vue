<template>
<div>
<VImg src="https://picsum.photos/510/300?random" srcset="https://ik.imagekit.io/ikmedia/paddy.jpg?tr=w-300 300w, https://ik.imagekit.io/ikmedia/paddy.jpg?tr=w-600 600w, https://ik.imagekit.io/ikmedia/paddy.jpg?tr=w-900 900w" height="100px" width="100px" aspect-ratio="2.35"></VImg>
<img src="../assets/logo.png" srcset="https://ik.imagekit.io/ikmedia/paddy.jpg?tr=w-300 300w, ../assets/logo.png 600w, https://ik.imagekit.io/ikmedia/paddy.jpg?tr=w-900 900w" height="100px" width="100px" aspect-ratio="2.35" />
<img src="https://ik.imagekit.io/ikmedia/paddy.jpg" srcset="https://ik.imagekit.io/ikmedia/paddy.jpg?tr=w-300 300w, ../assets/logo.png 600w, https://ik.imagekit.io/ikmedia/paddy.jpg?tr=w-900 900w">
<svg viewbox="0 0 100 20">
  <defs>
    <linearGradient id="gradient">
      <stop color="#000"/>
    </linearGradient>
    <pattern id="wave" x="0" y="-0.5" width="100%" height="100%" patternUnits="userSpaceOnUse">
      <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)"> 
        <animateTransform
            attributeName="transform"
            begin="0s"
            dur="1.5s"
            type="translate"
            from="0,0"
            to="40,0"
            repeatCount="indefinite" />
      </path>
    </pattern>
  </defs>
  <text text-anchor="middle" x="50" y="15" font-size="17" fill="white" fill-opacity="0.1">JESUS</text>
  <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#wave)"  fill-opacity="1">JESUS</text>

</svg>
  https://codepen.io/Callum-Martin/pen/aWpdGw
</div>

</template>
<style>
svg{font-weight:bold;max-width:600px;}
</style>