---
bg: "photo1.jpg"
layout: default
title: "About Me"
crawlertitle: "Rúben André Barreiro's Blog - About Me"
permalink: /about/
summary: "Biography, Programming Languages, Hard & Soft Skills, Interests, Goals/Accomplishments, Projects and Publications"
active: About Me
---

<style>
.button {
    background-color: #CCCCCC; /* Medium Grey */
    border: none;
    color: white;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}

.buttonDocument {
    border-radius: 12px;
}

.loadingSuspensionPoints span {
  -webkit-animation-name: blink;
          animation-name: blink;
  -webkit-animation-duration: 2.4s;
          animation-duration: 2.4s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
}

.loadingSuspensionPoints span:nth-child(2) {
  -webkit-animation-delay: .8s;
          animation-delay: .8s;
}

.loadingSuspensionPoints span:nth-child(3) {
  -webkit-animation-delay: 1.6s;
          animation-delay: 1.6s;
}

@-webkit-keyframes blink {
  0% {
    opacity: .2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: .2;
  }
}

@keyframes blink {
  0% {
    opacity: .2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: .2;
  }
}

.fa-beat {
  animation:fa-beat 5s ease infinite;
}

@keyframes fa-beat {
  0% {
    transform:scale(0.8);
  }
  5% {
    transform:scale(1);
  }
  20% {
    transform:scale(0.8);
  }
  30% {
    transform:scale(1);
  }
  35% {
    transform:scale(0.8);
  }
  50% {
    transform:scale(1);
  }
  55% {
    transform:scale(0.8);
  }
  70% {
    transform:scale(1);
  }
}

.fa-bounce {
    display: inline-block;
    position: relative;
    -moz-animation: bounce 1s infinite linear;
    -o-animation: bounce 1s infinite linear;
    -webkit-animation: bounce 1s infinite linear;
    animation: bounce 1s infinite linear;
}

@-webkit-keyframes bounce {
    0% {
        top: 0;
    }
    50% {
        top: -0.2em;
    }
    70% {
        top: -0.3em;
    }
    100% {
        top: 0;
    }
}

@-moz-keyframes bounce {
    0% {
        top: 0;
    }
    50% {
        top: -0.2em;
    }
    70% {
        top: -0.3em;
    }
    100% {
        top: 0;
    }
}

@-o-keyframes bounce {
    0% {
        top: 0;
    }
    50% {
        top: -0.2em;
    }
    70% {
        top: -0.3em;
    }
    100% {
        top: 0;
    }
}

@-ms-keyframes bounce {
    0% {
        top: 0;
    }
    50% {
        top: -0.2em;
    }
    70% {
        top: -0.3em;
    }
    100% {
        top: 0;
    }
}

@keyframes bounce {
    0% {
        top: 0;
    }
    50% {
        top: -0.2em;
    }
    70% {
        top: -0.3em;
    }
    100% {
        top: 0;
    }
}

.fa-blink {
   -webkit-animation: fa-blink .75s linear infinite;
   -moz-animation: fa-blink .75s linear infinite;
   -ms-animation: fa-blink .75s linear infinite;
   -o-animation: fa-blink .75s linear infinite;
   animation: fa-blink .75s linear infinite;
}

@keyframes fa-blink {
    0% {
        opacity: 1;
    }
    10% {
        opacity: 1;
    }
    20% {
        opacity: 1;
    }
    30% {
        opacity: 1;
    }
    35% {
        opacity: 0.125;
    }
    40% {
        opacity: 0.25;
    }
    45% {
        opacity: 0.375;
    }
    50% {
        opacity: 0.5;
    }
    55% {
        opacity: 0.625;
    }
    60% {
        opacity: 0.75;
    }
    65% {
        opacity: 0.875;
    }
    70% {
        opacity: 0;
    }
    80% {
        opacity: 0;
    }
    90% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
 }
 
 @-webkit-keyframes wrench {
  0% {
    -webkit-transform: rotate(-12deg);
    transform: rotate(-12deg);
  }

  8% {
    -webkit-transform: rotate(12deg);
    transform: rotate(12deg);
  }

  10% {
    -webkit-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  18% {
    -webkit-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  20% {
    -webkit-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  28% {
    -webkit-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  30% {
    -webkit-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  38% {
    -webkit-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  40% {
    -webkit-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  48% {
    -webkit-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  50% {
    -webkit-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  58% {
    -webkit-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  60% {
    -webkit-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  68% {
    -webkit-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  75% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@keyframes wrench {
  0% {
    -webkit-transform: rotate(-12deg);
    -ms-transform: rotate(-12deg);
    transform: rotate(-12deg);
  }

  8% {
    -webkit-transform: rotate(12deg);
    -ms-transform: rotate(12deg);
    transform: rotate(12deg);
  }

  10% {
    -webkit-transform: rotate(24deg);
    -ms-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  18% {
    -webkit-transform: rotate(-24deg);
    -ms-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  20% {
    -webkit-transform: rotate(-24deg);
    -ms-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  28% {
    -webkit-transform: rotate(24deg);
    -ms-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  30% {
    -webkit-transform: rotate(24deg);
    -ms-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  38% {
    -webkit-transform: rotate(-24deg);
    -ms-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  40% {
    -webkit-transform: rotate(-24deg);
    -ms-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  48% {
    -webkit-transform: rotate(24deg);
    -ms-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  50% {
    -webkit-transform: rotate(24deg);
    -ms-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  58% {
    -webkit-transform: rotate(-24deg);
    -ms-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  60% {
    -webkit-transform: rotate(-24deg);
    -ms-transform: rotate(-24deg);
    transform: rotate(-24deg);
  }

  68% {
    -webkit-transform: rotate(24deg);
    -ms-transform: rotate(24deg);
    transform: rotate(24deg);
  }

  75% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

.faa-wrench.animated,
.faa-wrench.animated-hover:hover,
.faa-parent.animated-hover:hover > .faa-wrench {
  -webkit-animation: wrench 2.5s ease infinite;
  animation: wrench 2.5s ease infinite;
  transform-origin-x: 90%;
  transform-origin-y: 35%;
  transform-origin-z: initial;
}

/* BELL */

@-webkit-keyframes ring {
  0% {
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }

  2% {
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  4% {
    -webkit-transform: rotate(-18deg);
    transform: rotate(-18deg);
  }

  6% {
    -webkit-transform: rotate(18deg);
    transform: rotate(18deg);
  }

  8% {
    -webkit-transform: rotate(-22deg);
    transform: rotate(-22deg);
  }

  10% {
    -webkit-transform: rotate(22deg);
    transform: rotate(22deg);
  }

  12% {
    -webkit-transform: rotate(-18deg);
    transform: rotate(-18deg);
  }

  14% {
    -webkit-transform: rotate(18deg);
    transform: rotate(18deg);
  }

  16% {
    -webkit-transform: rotate(-12deg);
    transform: rotate(-12deg);
  }

  18% {
    -webkit-transform: rotate(12deg);
    transform: rotate(12deg);
  }

  20% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@keyframes ring {
  0% {
    -webkit-transform: rotate(-15deg);
    -ms-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }

  2% {
    -webkit-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    transform: rotate(15deg);
  }

  4% {
    -webkit-transform: rotate(-18deg);
    -ms-transform: rotate(-18deg);
    transform: rotate(-18deg);
  }

  6% {
    -webkit-transform: rotate(18deg);
    -ms-transform: rotate(18deg);
    transform: rotate(18deg);
  }

  8% {
    -webkit-transform: rotate(-22deg);
    -ms-transform: rotate(-22deg);
    transform: rotate(-22deg);
  }

  10% {
    -webkit-transform: rotate(22deg);
    -ms-transform: rotate(22deg);
    transform: rotate(22deg);
  }

  12% {
    -webkit-transform: rotate(-18deg);
    -ms-transform: rotate(-18deg);
    transform: rotate(-18deg);
  }

  14% {
    -webkit-transform: rotate(18deg);
    -ms-transform: rotate(18deg);
    transform: rotate(18deg);
  }

  16% {
    -webkit-transform: rotate(-12deg);
    -ms-transform: rotate(-12deg);
    transform: rotate(-12deg);
  }

  18% {
    -webkit-transform: rotate(12deg);
    -ms-transform: rotate(12deg);
    transform: rotate(12deg);
  }

  20% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

.faa-ring.animated,
.faa-ring.animated-hover:hover,
.faa-parent.animated-hover:hover > .faa-ring {
  -webkit-animation: ring 2s ease infinite;
  animation: ring 2s ease infinite;
  transform-origin-x: 50%;
  transform-origin-y: 0px;
  transform-origin-z: initial;
}

/* VERTICAL */

@-webkit-keyframes vertical {
  0% {
    -webkit-transform: translate(0,-3px);
    transform: translate(0,-3px);
  }

  4% {
    -webkit-transform: translate(0,3px);
    transform: translate(0,3px);
  }

  8% {
    -webkit-transform: translate(0,-3px);
    transform: translate(0,-3px);
  }

  12% {
    -webkit-transform: translate(0,3px);
    transform: translate(0,3px);
  }

  16% {
    -webkit-transform: translate(0,-3px);
    transform: translate(0,-3px);
  }

  20% {
    -webkit-transform: translate(0,3px);
    transform: translate(0,3px);
  }

  22% {
    -webkit-transform: translate(0,0);
    transform: translate(0,0);
  }
}

@keyframes vertical {
  0% {
    -webkit-transform: translate(0,-3px);
    -ms-transform: translate(0,-3px);
    transform: translate(0,-3px);
  }

  4% {
    -webkit-transform: translate(0,3px);
    -ms-transform: translate(0,3px);
    transform: translate(0,3px);
  }

  8% {
    -webkit-transform: translate(0,-3px);
    -ms-transform: translate(0,-3px);
    transform: translate(0,-3px);
  }

  12% {
    -webkit-transform: translate(0,3px);
    -ms-transform: translate(0,3px);
    transform: translate(0,3px);
  }

  16% {
    -webkit-transform: translate(0,-3px);
    -ms-transform: translate(0,-3px);
    transform: translate(0,-3px);
  }

  20% {
    -webkit-transform: translate(0,3px);
    -ms-transform: translate(0,3px);
    transform: translate(0,3px);
  }

  22% {
    -webkit-transform: translate(0,0);
    -ms-transform: translate(0,0);
    transform: translate(0,0);
  }
}

.faa-vertical.animated,
.faa-vertical.animated-hover:hover,
.faa-parent.animated-hover:hover > .faa-vertical {
  -webkit-animation: vertical 2s ease infinite;
  animation: vertical 2s ease infinite;
}

/* HORIZONTAL */

@-webkit-keyframes horizontal {
  0% {
    -webkit-transform: translate(0,0);
    transform: translate(0,0);
  }

  6% {
    -webkit-transform: translate(5px,0);
    transform: translate(5px,0);
  }

  12% {
    -webkit-transform: translate(0,0);
    transform: translate(0,0);
  }

  18% {
    -webkit-transform: translate(5px,0);
    transform: translate(5px,0);
  }

  24% {
    -webkit-transform: translate(0,0);
    transform: translate(0,0);
  }

  30% {
    -webkit-transform: translate(5px,0);
    transform: translate(5px,0);
  }

  36% {
    -webkit-transform: translate(0,0);
    transform: translate(0,0);
  }
}

@keyframes horizontal {
  0% {
    -webkit-transform: translate(0,0);
    -ms-transform: translate(0,0);
    transform: translate(0,0);
  }

  6% {
    -webkit-transform: translate(5px,0);
    -ms-transform: translate(5px,0);
    transform: translate(5px,0);
  }

  12% {
    -webkit-transform: translate(0,0);
    -ms-transform: translate(0,0);
    transform: translate(0,0);
  }

  18% {
    -webkit-transform: translate(5px,0);
    -ms-transform: translate(5px,0);
    transform: translate(5px,0);
  }

  24% {
    -webkit-transform: translate(0,0);
    -ms-transform: translate(0,0);
    transform: translate(0,0);
  }

  30% {
    -webkit-transform: translate(5px,0);
    -ms-transform: translate(5px,0);
    transform: translate(5px,0);
  }

  36% {
    -webkit-transform: translate(0,0);
    -ms-transform: translate(0,0);
    transform: translate(0,0);
  }
}

.faa-horizontal.animated,
.faa-horizontal.animated-hover:hover,
.faa-parent.animated-hover:hover > .faa-horizontal {
  -webkit-animation: horizontal 2s ease infinite;
  animation: horizontal 2s ease infinite;
}

/* FLASHING */

@-webkit-keyframes flash {
  0%, 100%, 50% {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
}

@keyframes flash {
  0%, 100%, 50% {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
}

.faa-flash.animated,
.faa-flash.animated-hover:hover,
.faa-parent.animated-hover:hover > .faa-flash {
  -webkit-animation: flash 2s ease infinite;
  animation: flash 2s ease infinite;
}

/* BOUNCE */

@-webkit-keyframes bounce {
  0%, 10%, 20%, 50%, 80% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }

  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

@keyframes bounce {
  0%, 10%, 20%, 50%, 80% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    transform: translateY(-15px);
  }

  60% {
    -webkit-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

.faa-bounce.animated,
.faa-bounce.animated-hover:hover,
.faa-parent.animated-hover:hover > .faa-bounce {
  -webkit-animation: bounce 2s ease infinite;
  animation: bounce 2s ease infinite;
}

/* SPIN */

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(359deg);
    -ms-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}

.faa-spin.animated,
.faa-spin.animated-hover:hover,
.faa-parent.animated-hover:hover > .faa-spin {
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;
}

/* FLOAT */

@-webkit-keyframes float {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  50% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes float {
  0% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  50% {
    -webkit-transform: translateY(-6px);
    -ms-transform: translateY(-6px);
    transform: translateY(-6px);
  }

  100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.faa-float.animated,
.faa-float.animated-hover:hover,
.faa-parent.animated-hover:hover > .faa-float {
  -webkit-animation: float 2s linear infinite;
  animation: float 2s linear infinite;
}

/* PULSE */

@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  50% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }

  100% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}

@keyframes pulse {
  0% {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  50% {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
  }

  100% {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
}

.faa-pulse.animated,
.faa-pulse.animated-hover:hover,
.faa-parent.animated-hover:hover > .faa-pulse {
  -webkit-animation: pulse 2s linear infinite;
  animation: pulse 2s linear infinite;
}

/* SHAKE */

.faa-shake.animated,
.faa-shake.animated-hover:hover,
.faa-parent.animated-hover:hover > .faa-shake {
  -webkit-animation: wrench 2.5s ease infinite;
  animation: wrench 2.5s ease infinite;
}

/* TADA */

@-webkit-keyframes tada {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  10%, 20% {
    -webkit-transform: scale(.9) rotate(-8deg);
    transform: scale(.9) rotate(-8deg);
  }

  30%, 50%, 70% {
    -webkit-transform: scale(1.3) rotate(8deg);
    transform: scale(1.3) rotate(8deg);
  }

  40%, 60% {
    -webkit-transform: scale(1.3) rotate(-8deg);
    transform: scale(1.3) rotate(-8deg);
  }

  80% {
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}

@keyframes tada {
  0% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  10%, 20% {
    -webkit-transform: scale(.9) rotate(-8deg);
    -ms-transform: scale(.9) rotate(-8deg);
    transform: scale(.9) rotate(-8deg);
  }

  30%, 50%, 70% {
    -webkit-transform: scale(1.3) rotate(8deg);
    -ms-transform: scale(1.3) rotate(8deg);
    transform: scale(1.3) rotate(8deg);
  }

  40%, 60% {
    -webkit-transform: scale(1.3) rotate(-8deg);
    -ms-transform: scale(1.3) rotate(-8deg);
    transform: scale(1.3) rotate(-8deg);
  }

  80% {
    -webkit-transform: scale(1) rotate(0);
    -ms-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}

.faa-tada.animated,
.faa-tada.animated-hover:hover,
.faa-parent.animated-hover:hover > .faa-tada {
  -webkit-animation: tada 2s linear infinite;
  animation: tada 2s linear infinite;
}

/* PASSING */

@-webkit-keyframes passing {
  0% {
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    opacity: 0;
  }

  50% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(50%);
    transform: translateX(50%);
    opacity: 0;
  }
}

@keyframes passing {
  0% {
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    opacity: 0;
  }

  50% {
    -webkit-transform: translateX(0%);
    -ms-transform: translateX(0%);
    transform: translateX(0%);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(50%);
    -ms-transform: translateX(50%);
    transform: translateX(50%);
    opacity: 0;
  }
}

.faa-passing.animated,
.faa-passing.animated-hover:hover,
.faa-parent.animated-hover:hover > .faa-passing {
  -webkit-animation: passing 3s linear infinite;
  animation: passing 3s linear infinite;
}

/* WAVE */

@-webkit-keyframes burst {
  0% {
    opacity: .6;
  }

  50% {
    -webkit-transform: scale(1.8);
    transform: scale(1.8);
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

@keyframes burst {
  0% {
    opacity: .6;
  }

  50% {
    -webkit-transform: scale(1.8);
    -ms-transform: scale(1.8);
    transform: scale(1.8);
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

.faa-burst.animated,
.faa-burst.animated-hover:hover,
.faa-parent.animated-hover:hover > .faa-burst {
  -webkit-animation: burst 3s infinite linear;
  animation: burst 3s infinite linear;
}

.androidHead {
  position: relative;
  height: 40px;
  width: 80px;
  background: #a4c639;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}

.androidHead div:first-child, .androidHead div:nth-child(2) {
  position: absolute;
  height: 3.5px;
  width: 15px;
  border-radius: 10px;
  background: #a4c639;
}
    
.androidHead div:first-child {
  left: 7.5px;
  transform: rotate(50deg);
}
    
.androidHead div:nth-child(2) {
  transform: rotate(-50deg);
  left: 58px;
}
    
.androidHead div:nth-child(3) {
  position: relative;
}
    
.androidHead div:nth-child(3) div {
  position: absolute;
  height: 7.5px;
  width: 7.5px;
  background: #FFF;
  border-radius: 50%;
  top: 17.5px;
}
    
.androidHead div:nth-child(3) div:first-child {
  left: 20px;
}
    
.androidHead div:nth-child(3) div:nth-child(2) {
  left: 53.5px;
}

.androidBody {
  position: relative;
  width: 80px;
  height: 65px;
  background: #a4c639;
  margin-top: 2.5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
    
.androidBody div {
  position: absolute;
  width: 17.5px;
  height: 55px;
  border-radius: 15px;
  background: #a4c639;
}
    
.androidBody div:first-child {
  left: -20px;
  transform-origin: top;
  animation: arm-l 0.9s infinite;
  animation-delay: 0.45s;
}
    
.androidBody div:nth-child(2) {
  left: 82.5px;
  transform-origin: top;
  animation: arm-r 0.9s infinite;
}
    
.androidBody div:nth-child(3), .androidBody div:nth-child(4) {
  top: 32.5px;
}
    
.androidBody div:nth-child(3) {
  animation: legup-l 0.9s infinite;
  animation-delay: 0.45s;
  left: 16px;
}
    
.androidBody div:nth-child(4) {
  animation: legup-r 0.9s infinite;
  left: 48px;
}

.androidShadow {
  margin-top: -36px;
  z-index: -2;
  height: 15px;
  width: 80px;
  background: #eee;
  border-radius: 50%;
  animation: androidShadow 0.45s infinite;
  display: flex;
  justify-content: space-between;
}
    
.androidShadow div {
  height: 7.5px;
  width: 20px;
  background: #eee;
  border-radius: 50%;
}
    
.androidShadow div:first-child {
  margin: 4px -12.5px;
}
    
.androidShadow div:last-child {
  margin: 4px -12.5px;
}

.androidFootsteps {
  display: flex;
}
    
.androidFootsteps div {
  height: 7.5px;
  width: 15px;
  background: gainsboro;
  border-radius: 50%;
  margin: 25.5px 10px;
  z-index: -1;
}
    
.androidFootsteps div:first-child {
  animation: footsteps-l 0.9s infinite;
  animation-delay: 0.45s;
}
    
.androidFootsteps div:last-child {
  animation: footsteps-r 0.9s infinite;
}

.androidLogo {
  animation: bobble 0.45s infinite;
}

@keyframes androidShadow {
  50% {
    transform: scale(0.96);
  }
}
    
@keyframes footsteps-l {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(3px, -2.5px);
  }
}
    
@keyframes footsteps-r {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(-3px, -2.5px);
  }
}
    
@keyframes bobble {
  0% {
    transform: translateY(-1px);
  }
  70% {
    transform: translateY(1px);
  }
  100% {
    transform: translateY(-1px);
  }
}
    
@keyframes legup-l {
  0% {
    transform: translate(2px, -2.5px);
  }
  30% {
    transform: translate(-2px, 3.5px);
  }
  100% {
    transform: translate(2px, -2.5px);
  }
}
    
@keyframes legup-r {
  0% {
    transform: translate(-2px, -2.5px);
  }
  30% {
    transform: translate(2px, 3.5px);
  }
  100% {
    transform: translate(-2px, -2.5px);
  }
}
    
@keyframes arm-l {
  0% {
    transform: rotate(7deg);
  }
  60% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(7deg);
  }
}
    
@keyframes arm-r {
  0% {
    transform: rotate(-7deg);
  }
  60% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(-7deg);
  }
}
 

.icon-new-university-lisbon .path1:before {
  content: "\e900";
  color: #308041;
}
.icon-new-university-lisbon .path2:before {
  content: "\e901";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path3:before {
  content: "\e902";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path4:before {
  content: "\e903";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path5:before {
  content: "\e904";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path6:before {
  content: "\e905";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path7:before {
  content: "\e906";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path8:before {
  content: "\e907";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path9:before {
  content: "\e908";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path10:before {
  content: "\e909";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path11:before {
  content: "\e90a";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path12:before {
  content: "\e90b";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path13:before {
  content: "\e90c";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path14:before {
  content: "\e90d";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path15:before {
  content: "\e90e";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path16:before {
  content: "\e90f";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path17:before {
  content: "\e910";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path18:before {
  content: "\e911";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path19:before {
  content: "\e912";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path20:before {
  content: "\e913";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path21:before {
  content: "\e914";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path22:before {
  content: "\e915";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path23:before {
  content: "\e916";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path24:before {
  content: "\e917";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path25:before {
  content: "\e918";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path26:before {
  content: "\e919";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path27:before {
  content: "\e91a";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path28:before {
  content: "\e91b";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path29:before {
  content: "\e91c";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path30:before {
  content: "\e91d";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path31:before {
  content: "\e91e";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path32:before {
  content: "\e91f";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path33:before {
  content: "\e920";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path34:before {
  content: "\e921";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path35:before {
  content: "\e922";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path36:before {
  content: "\e923";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path37:before {
  content: "\e924";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path38:before {
  content: "\e925";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path39:before {
  content: "\e926";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path40:before {
  content: "\e927";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path41:before {
  content: "\e928";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path42:before {
  content: "\e929";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path43:before {
  content: "\e92a";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path44:before {
  content: "\e92b";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path45:before {
  content: "\e92c";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path46:before {
  content: "\e92d";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path47:before {
  content: "\e92e";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path48:before {
  content: "\e92f";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path49:before {
  content: "\e930";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path50:before {
  content: "\e931";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path51:before {
  content: "\e932";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path52:before {
  content: "\e933";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path53:before {
  content: "\e934";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path54:before {
  content: "\e935";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path55:before {
  content: "\e936";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path56:before {
  content: "\e937";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path57:before {
  content: "\e938";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path58:before {
  content: "\e939";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path59:before {
  content: "\e93a";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path60:before {
  content: "\e93b";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path61:before {
  content: "\e93c";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path62:before {
  content: "\e93d";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path63:before {
  content: "\e93e";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path64:before {
  content: "\e93f";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path65:before {
  content: "\e940";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path66:before {
  content: "\e941";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path67:before {
  content: "\e942";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path68:before {
  content: "\e943";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path69:before {
  content: "\e944";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path70:before {
  content: "\e945";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path71:before {
  content: "\e946";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path72:before {
  content: "\e947";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path73:before {
  content: "\e948";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path74:before {
  content: "\e949";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path75:before {
  content: "\e94a";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path76:before {
  content: "\e94b";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path77:before {
  content: "\e94c";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path78:before {
  content: "\e94d";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path79:before {
  content: "\e94e";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path80:before {
  content: "\e94f";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path81:before {
  content: "\e950";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path82:before {
  content: "\e951";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path83:before {
  content: "\e952";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path84:before {
  content: "\e953";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path85:before {
  content: "\e954";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path86:before {
  content: "\e955";
  color: #fff;
  margin-left: -1em;
}
.icon-new-university-lisbon .path87:before {
  content: "\e956";
  color: #308041;
  margin-left: -1em;
}
.icon-new-university-lisbon .path88:before {
  content: "\e957";
  color: #308041;
  margin-left: -1em;
}


.icon-fct-unl .path1:before {
  content: "\e958";
  color: #fefefe;
}
.icon-fct-unl .path2:before {
  content: "\e959";
  color: #426bbc;
  margin-left: -1em;
}
.icon-fct-unl .path3:before {
  content: "\e95a";
  color: #5abccd;
  margin-left: -1em;
}
.icon-fct-unl .path4:before {
  content: "\e95b";
  color: #7bbc00;
  margin-left: -1em;
}

</style>

<link rel="stylesheet" href="/apps-brands-social-icons/style.css">
<link rel="stylesheet" href="/projects/colleges-universities-icons/style.css">

<h2 id="biography">
    <i>Biography</i>
    <span class="fa-stack">
        <i class="fa fa-circle-thin fa-stack-2x"></i>
        <i class="fa fa-user fa-stack-1x faa-vertical animated"></i>
    </span>
</h2>
<hr/>

<p align="justify">Hi everyone, nice to meet you! 😀</p>

<p align="justify">My name is <b>Rúben André Letra Barreiro</b>. And I'm <b>Computer Science Engineer</b> and <b>IT/IS Programmer/Technician</b>! 👨‍💻 💻</p>

<p align="justify">I'm <b>25 years old</b>. The <b>90's</b> are the best generation ever, believe it! 🎂 🎈</p>

<br>

[![ChildhoodPhoto2]({{ site.images | relative_url }}/childhood/childhood2.jpg)]({{ site.images | relative_url }}/childhood/childhood2.jpg)
<p style="font-size:11px"><i>Myself's Portrait at 1996</i></p>

<p align="justify">I was born in <b>Lisbon</b>, <b>Portugal</b>, at November 19, 1992. 👶 🚼 </p>

<p align="justify">Yes, I'm <b>Scorpio</b>. Usually, this is something about me that scares the people because <b>Scorpio</b> have a huge bad reputation, it seems we are the villains, following the horoscope! 😂 🔮</p>
    
<p align="justify">But it's same Zodiac Sign of <a target="_blank" href="https://en.wikipedia.org/wiki/Bill_Gates"><b><i>Bill Gates</i></b></a>, <a target="_blank" href="https://en.wikipedia.org/wiki/Pel%C3%A9"><b><i>Pelé</i></b></a>, <a target="_blank" href="https://en.wikipedia.org/wiki/Diego_Maradona"><b><i>Diego Maradona</i></b></a>, <a target="_blank" href="https://en.wikipedia.org/wiki/Marco_van_Basten"><b><i>Marco van Basten</i></b></a>, <a target="_blank" href="https://en.wikipedia.org/wiki/Lu%C3%ADs_Figo"><b><i>Luís Figo</i></b></a> and <a target="_blank" href="https://en.wikipedia.org/wiki/Pablo_Picasso"><b><i>Pablo Picasso</i></b></a>. And all of them accomplished a lot in life! So, it's a good omen, right?! 🦂 ♏ </p>

<p align="justify">My grandfather was <b>Brazilian</b>, so I'm a <b>Portuguese Soul with Brazilian Roots</b>! 🇵🇹 🇧🇷</p>

<p align="justify">I lived in <b>Loures</b>, in <b>Portugal</b>, when I was baby, for my very first year of life. After that, I moved to <b>Almada</b>, <b>Portugal</b>. I lived, most preciselly, in a small neighborhood called <b>Barrocas</b>, where I spent my entire childhood and part of my adolescence (The same neighborhood where <a target="_blank" href="https://en.wikipedia.org/wiki/Lu%C3%ADs_Figo"><b><i>Luís Figo</i></b></a> grew up too and started playing futsal, before play football!). When I'm <b>20 years old</b>, I moved to <b>Monte de Caparica</b>, also in <b>Almada</b>, <b>Portugal</b>. But I'm currently living in <b>Porto</b>, <b>Portugal</b>. 📍 🌍</p>

<p align="justify">I did a lot of sports in my life because it's something that I'm addicted to. I did swimming, when I was kid, between 1998 and 2002, at <b>S. F. U. A. P.</b> (<b>Sociedade Filarmónica União Artística Piedense</b>), in <b>Barrocas</b>/<b>Cova da Piedade</b>, <b>Almada</b>. I did football at <b>Monte de Caparica Atlético Clube</b>, in <b>Monte de Caparica</b>, <b>Almada</b>, in 2010, where I played as goalkeeper. I did weight training at some gyms, like <b>Girassus Club</b>, in <b>Barrocas</b>/<b>Cova da Piedade</b>, <b>Almada</b>, in 2008, <b>Ginásio Transformers</b>, in the center of <b>Almada</b>, in 2011 and <b>Ginásio Super Olímpia</b>, in <b>Laranjeiro</b>, <b>Almada</b>, in 2015. 🏋️ ⚽</p>
    
<p align="justify">Related to my education, I attended a <b>Professional Course of Technician of Programming and Management of Computer Systems</b> at <b>Escola Secundária do Monte de Caparica</b>, in <b>Almada</b>, between 2009 and 2012. After that, I decided to keep learning and got enter into the universities/colleges' world! 🤓 📚 </p>

<p align="justify">My current academic journey at universities/colleges, until the moment, is: 👨‍🎓 🎓</p>
<ul>
    <li><p align="justify"><font size="5">
    <span class="icon-new-university-lisbon" title="Computer Science and Engineering at Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa (Caparica/Almada Campus, FCT NOVA - FCT/UNL), between 2013 and 2018">
        <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span><span class="path21"></span><span class="path22"></span><span class="path23"></span><span class="path24"></span><span class="path25"></span><span class="path26"></span><span class="path27"></span><span class="path28"></span><span class="path29"></span><span class="path30"></span><span class="path31"></span><span class="path32"></span><span class="path33"></span><span class="path34"></span><span class="path35"></span><span class="path36"></span><span class="path37"></span><span class="path38"></span><span class="path39"></span><span class="path40"></span><span class="path41"></span><span class="path42"></span><span class="path43"></span><span class="path44"></span><span class="path45"></span><span class="path46"></span><span class="path47"></span><span class="path48"></span><span class="path49"></span><span class="path50"></span><span class="path51"></span><span class="path52"></span><span class="path53"></span><span class="path54"></span><span class="path55"></span><span class="path56"></span><span class="path57"></span><span class="path58"></span><span class="path59"></span><span class="path60"></span><span class="path61"></span><span class="path62"></span><span class="path63"></span><span class="path64"></span><span class="path65"></span><span class="path66"></span><span class="path67"></span><span class="path68"></span><span class="path69"></span><span class="path70"></span><span class="path71"></span><span class="path72"></span><span class="path73"></span><span class="path74"></span><span class="path75"></span><span class="path76"></span><span class="path77"></span><span class="path78"></span><span class="path79"></span><span class="path80"></span><span class="path81"></span><span class="path82"></span><span class="path83"></span><span class="path84"></span><span class="path85"></span><span class="path86"></span><span class="path87"></span><span class="path88"></span>
    </span>
    <span class="icon-fct-unl" title="Computer Science and Engineering at Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa (Caparica/Almada Campus, FCT NOVA - FCT/UNL), between 2013 and 2018">
        <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
    </span>
</font>
<a target="_blank" href="https://www.fct.unl.pt/ensino/curso/mestrado-integrado-em-engenharia-informatica" title="Computer Science and Engineering at Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa (Caparica/Almada Campus, FCT NOVA - FCT/UNL), between 2013 and 2018"><b>BSc Degree</b> in <b>Computer Science and Engineering</b> at <b>Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa</b> (<b>Caparica/Almada Campus, FCT NOVA - FCT/UNL</b>)</a>, between 2013 and 2018; ✔️</p></li>
</ul>

<br>
    
<center>

    <div id="walkingAndroid" style="height: 20vh; display: flex; flex-direction: column; justify-content: center; align-items: center">
            <div class="androidLogo">
                <div class="androidHead">
                    <div></div>
                    <div></div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div class="androidBody">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div class="androidFootsteps">
               <div></div>
               <div></div>
            </div>

            <div class="androidShadow">
               <div></div>
               <div></div>
            </div>
        </div>

    
    <h5 class="loadingSuspensionPoints"><i>Chasing and conquering all my dreams<span>.</span><span>.</span><span>.</span></i></h5>
</center>

<br>

<p align="justify">
    "<i>Life is a play that does not allow testing. So, sing, cry, dance, laugh and live intensely, before the curtain closes and the piece ends with no applause.</i>" - <a target="_blank" href="https://en.wikipedia.org/wiki/Charlie_Chaplin"><b><i>Charlie Chaplin</i></b></a>
</p>

<a target="_blank" title="Download Rúben André Barreiro's Resume" href="/documents/ruben-andre-barreiro-resume.pdf"><button class="button buttonDocument"><b>Download Resumé 📝</b></button></a>
<a target="_blank" title="Download Rúben André Barreiro's Curriculum Vitae" href="/docs/ruben-andre-barreiro-CV.pdf"><button class="button buttonDocument"><b>Download Curriculum Vitae 📋</b></button></a>


<br>
<hr/>
<center><font size="1">*** © Rúben André Barreiro - GitHub's Page/Personal Blog - All rights reserved ***</font></center>
<hr/>
<br>


<h2 id="programming-languages-skills">
    <i>Programming Languages, Hard & Soft Skills</i>
    <span class="fa-stack">
        <i class="fa fa-circle-thin fa-stack-2x"></i>
        <i class="fa fa-code fa-stack-1x faa-float animated"></i>
    </span>
</h2>
<hr/>

<p align="justify"><i class="fa fa-caret-right faa-horizontal animated"></i>&nbsp;&nbsp;Skills learned at the <b>Professional Course of Technician of Programming and Management of Computer Systems</b> (<b>Escola Secundária do Monte de Caparica</b>), between 2009 and 2012:</p>
<ul>
    <li>
        <p align="justify">Subjects and areas covered:</p>
        <ul>
            <li>
                <p align="justify">Operative Systems and Architectures, Databases, Basic Notions of Computer Networks, Web Design & Web Forms and Users' Data Validations;</p>
            </li>
        </ul>
    </li>
    <li>
        <p align="justify">Programming Languages covered:</p>
        <ul>
            <li>
                <p align="justify"><b>Pascal</b>, <b>VisualBasic</b>, <b>C++</b>, <b>HTML</b>, <b>JavaScript</b>, <b>CSS</b>, <b>MySQL</b> & <b>PHP</b>;</p>
            </li>
        </ul>
    </li>
    <li>
        <p align="justify">Frameworks, GUIs and IDEs covered:</p>
        <ul>
            <li>
                <p align="justify"><b>Free Pascal</b>, <b>Turbo Pascal</b>, <b>Notepad++</b> and <b>WampServer</b>;</p>  
            </li>
        </ul>
    </li>
</ul>

<p align="justify"><i class="fa fa-caret-right faa-horizontal animated"></i>&nbsp;Skills learned at the <b>BSc Degree</b> focused in <b>Computer Science and Engineering</b> (<b>Caparica/Almada Campus, FCT NOVA - FCT/UNL</b>), between 2013 and 2018:</p>
<ul>
    <li>
        <p align="justify">Subjects and areas covered:</p>
        <ul>
            <li>
                <p align="justify">Object Oriented Programming, Operative Systems & Architectures, Data Structures, Databases, Logic Programming, Computer Networks, Computer Graphics & 3D Interfaces, Artificial Intelligence, Searching Algorithms, Genetic Algorithms, Modelling and Design of Programming Languages, Graphs Algorithms, Distributed Systems, Basic Notions of Internet Security and Multi-Threading;</p>
            </li>
        </ul>
    </li>
    <li>
        <p align="justify">Programming Languages covered:</p>
        <ul>
            <li>
                <p align="justify"><b>Java</b>, <b>C</b>, <b>Assembly</b>, <b>OCaml</b>, <b>HTML</b>, <b>JavaScript</b>, <b>CSS</b>, <b>Oracle SQL</b>, <b>Datalog</b>, <b>XML</b>, <b>Prolog (STRIPS)</b>, <b>Unified Modelling Language (UML)</b>, <b>Object Constraint Language (OCL)</b> and <b>Android</b>;</p>
            </li>
        </ul>
    </li>
    <li>
        <p align="justify">Programming Language APIs covered:</p>
        <ul>
            <li>
                <p align="justify"><b>WebGL</b>, <b>OpenGL</b>, <b>REST</b>, <b>SOAP</b>, <b>JSON</b>, <b>MongoDB</b>, <b>Apache ZooKeeper</b>, <b>Apache Kafka</b> and <b>Google Protobuffers</b>;</p>
            </li>
        </ul>
    </li>
    <li>
        <p align="justify">Frameworks, GUIs and IDEs covered:</p>
        <ul>
            <li>
                <p align="justify"><b>Eclipse IDE</b>, <b>Oracle APEX (Oracle Application Express)</b>, <b>Sublime Text</b>, <b>Brackets</b>, <b>Atom</b>, <b>Docker</b>,<b>Android Studio IDE</b>, <b>Sourcetree GUI</b> and <b>GitHub Desktop GUI</b>;</p>
            </li>
        </ul>
    </li>
    <li>
        <p align="justify">Papers/articles' build skills covered:</p>
        <ul>
            <li>
                <p align="justify"><b>LaTeX</b>;</p>
            </li>
        </ul>
    </li>
</ul>

<p align="justify"><i class="fa fa-caret-right faa-horizontal animated"></i>&nbsp;&nbsp;&nbsp;Other skills:</p>
<ul>
    <li>
        <p align="justify"><b>Adobe Creative Cloud Tools</b> & <b>Microsoft Office Tools</b>;</p>
    </li>
</ul>


<br>
<hr/>
<center><font size="1">*** © Rúben André Barreiro - GitHub's Page/Personal Blog - All rights reserved ***</font></center>
<hr/>
<br>


<h2 id="interests">
    <i>Interests</i>
    <span class="fa-stack">
        <i class="fa fa-circle-thin fa-stack-2x"></i>
        <i class="fa fa-heart fa-stack-1x faa-pulse animated"></i>
    </span>
</h2>
<hr/>

<p align="justify">I'm addicted to <b>technologies</b> and <b>informatics</b>. I love to <b>programming</b> and <b>coding</b>! I also have a big interest in <b>design</b>, <b>photography</b>, <b>multimedia</b>, <b>fashion</b>, <b>business</b>, <b>marketing</b>, <b>drawing</b> and <b>poetry</b>.</p>


<br>
<hr/>
<center><font size="1">*** © Rúben André Barreiro - GitHub's Page/Personal Blog - All rights reserved ***</font></center>
<hr/>
<br>


<h2 id="goalsAccomplishments">
    <i>Goals/Accomplishments</i>
    <span class="fa-stack">
        <i class="fa fa-circle-thin fa-stack-2x"></i>
        <i class="fa fa-check fa-stack-1x faa-horizontal animated"></i>
    </span>
</h2>
<hr/>

<p align="justify"> <!-- SOME TEXT HERE --> </p>


<br>
<hr/>
<center><font size="1">*** © Rúben André Barreiro - GitHub's Page/Personal Blog - All rights reserved ***</font></center>
<hr/>
<br>


<h2 id="publications">
    <i>Publications</i>
    <span class="fa-stack">
        <i class="fa fa-circle-thin fa-stack-2x"></i>
        <i class="fa fa-book fa-stack-1x faa-ring animated"></i>
    </span>
</h2>
<hr/>

<p align="justify"> <!-- SOME TEXT HERE --> </p>