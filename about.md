---
bg: "photo13.jpg"
layout: default
title: "About Me"
crawlertitle: "Rúben André Barreiro's Blog - About Me"
permalink: /about/
summary: "Biography, Programming Languages, Hard & Soft Skills, Interests, Goals/Accomplishments, Projects and Publications"
active: About Me
---

<style>
.checked {
  color: orange;
}
    
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

.icon-university-porto:before {
  content: "\e95d";
}

.icon-feup:before {
  content: "\e95e";
  color: #a73621;
}

</style>

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open Sans">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/v4-shims.css">
<link rel="stylesheet" href="/apps-brands-social-icons/style.css">
<link rel="stylesheet" href="/projects/colleges-universities-icons/style.css">

<h2 id="biography_title">
    <i>Biography</i>
    <span class="fa-stack">
        <i class="fa fa-circle-thin fa-stack-2x"></i>
        <i class="fa fa-user fa-stack-1x faa-vertical animated"></i>
    </span>
</h2>
<hr/>

<p align="justify">Hi everyone, nice to meet you! 😀</p>

<p align="justify">My name is <b>Rúben André Letra Barreiro</b>. And I'm <b>Computer Science Engineer</b> and <b>IT/IS Programmer/Technician</b>! 👨‍💻 💻</p>

<p align="justify">I'm <b>26 years old</b>. The <b>90's</b> are the best generation ever, believe it! 🎂 🎈</p>

<br>

[![ChildhoodPhoto2]({{ site.images | relative_url }}/childhood/childhood2.jpg)]({{ site.images | relative_url }}/childhood/childhood2.jpg)
<p style="font-size:11px"><i>Myself's Portrait at 1996</i></p>

<p align="justify">I was born in <b>Lisbon</b>, <b>Portugal</b>, at November 19, 1992. 👶 🚼 </p>

<p align="justify">Yes, I'm <b>Scorpio</b>. Usually, this is something about me that scares the people because <b>Scorpio</b> have a huge bad reputation, it seems we are the villains, following the horoscope! 😂 🔮</p>
    
<p align="justify">But it's same Zodiac Sign of <a target="_blank" href="https://en.wikipedia.org/wiki/Bill_Gates"><b><i>Bill Gates</i></b></a>, <a target="_blank" href="https://en.wikipedia.org/wiki/Pel%C3%A9"><b><i>Pelé</i></b></a>, <a target="_blank" href="https://en.wikipedia.org/wiki/Diego_Maradona"><b><i>Diego Maradona</i></b></a>, <a target="_blank" href="https://en.wikipedia.org/wiki/Marco_van_Basten"><b><i>Marco van Basten</i></b></a>, <a target="_blank" href="https://en.wikipedia.org/wiki/Lu%C3%ADs_Figo"><b><i>Luís Figo</i></b></a> and <a target="_blank" href="https://en.wikipedia.org/wiki/Pablo_Picasso"><b><i>Pablo Picasso</i></b></a>. And all of them accomplished a lot in life! So, it's a good omen, right?! 🦂 ♏ </p>

<p align="justify">My grandfather was <b>Brazilian</b>, so I'm a <b>Portuguese Soul with Brazilian Roots</b>! 🇵🇹 🇧🇷</p>

<p align="justify">I lived in <b>Loures</b>, in <b>Portugal</b>, when I was baby, for my very first year of life. After that, I moved to <b>Almada</b>, <b>Portugal</b>. I lived, most preciselly, in a small neighborhood called <b>Barrocas</b>, where I spent my entire childhood and part of my adolescence (The same neighborhood where <a target="_blank" href="https://en.wikipedia.org/wiki/Lu%C3%ADs_Figo"><b><i>Luís Figo</i></b></a> grew up too and started playing futsal, before play soccer!). When I'm <b>20 years old</b>, I moved to <b>Monte de Caparica</b>, also in <b>Almada</b>, <b>Portugal</b>, where I'm currently living today. 📍 🌍</p>

<p align="justify">I did a lot of sports in my life because it's something that I'm addicted to. I did swimming, when I was kid, between 1998 and 2002, at <b>S. F. U. A. P.</b> (<b>Sociedade Filarmónica União Artística Piedense</b>), in <b>Barrocas</b>/<b>Cova da Piedade</b>, <b>Almada</b>. I did soccer at <b>Monte de Caparica Atlético Clube</b>, in <b>Monte de Caparica</b>, <b>Almada</b>, in 2010, where I played as goalkeeper. I did weight training at some gyms, like <b>Girassus Club</b>, in <b>Barrocas</b>/<b>Cova da Piedade</b>, <b>Almada</b>, in 2008, <b>Ginásio Transformers</b>, in the center of <b>Almada</b>, in 2011 and <b>Ginásio Super Olímpia</b>, in <b>Laranjeiro</b>, <b>Almada</b>, in 2015. 🏋️ ⚽</p>
    
<p align="justify">Related to my education, I attended a <b>Professional Course of Technician of Programming and Management of Computer Systems</b> at <b>High School of Monte de Caparica</b>, in <b>Almada</b>, between 2009 and 2012 (projects' screenshots, final project's screenshots, certification, diploma). After that, I decided to keep learning and got enter into the universities/colleges' world! 🤓 📚 </p>

<p align="justify">My current academic journey at universities/colleges, until the moment, is: 👨‍🎓 🎓</p>
<ul>
    <li>
		<p align="justify">
		<font size="5">
	    		<span class="icon-new-university-lisbon" title="BSc. in Computer Science and Engineering at Faculty of Science and Technology of New University of Lisbon (Caparica/Almada Campus, FCT NOVA - FCT/UNL), between 2013 and 2018">
	        		<span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span><span class="path21"></span><span class="path22"></span><span class="path23"></span><span class="path24"></span><span class="path25"></span><span class="path26"></span><span class="path27"></span><span class="path28"></span><span class="path29"></span><span class="path30"></span><span class="path31"></span><span class="path32"></span><span class="path33"></span><span class="path34"></span><span class="path35"></span><span class="path36"></span><span class="path37"></span><span class="path38"></span><span class="path39"></span><span class="path40"></span><span class="path41"></span><span class="path42"></span><span class="path43"></span><span class="path44"></span><span class="path45"></span><span class="path46"></span><span class="path47"></span><span class="path48"></span><span class="path49"></span><span class="path50"></span><span class="path51"></span><span class="path52"></span><span class="path53"></span><span class="path54"></span><span class="path55"></span><span class="path56"></span><span class="path57"></span><span class="path58"></span><span class="path59"></span><span class="path60"></span><span class="path61"></span><span class="path62"></span><span class="path63"></span><span class="path64"></span><span class="path65"></span><span class="path66"></span><span class="path67"></span><span class="path68"></span><span class="path69"></span><span class="path70"></span><span class="path71"></span><span class="path72"></span><span class="path73"></span><span class="path74"></span><span class="path75"></span><span class="path76"></span><span class="path77"></span><span class="path78"></span><span class="path79"></span><span class="path80"></span><span class="path81"></span><span class="path82"></span><span class="path83"></span><span class="path84"></span><span class="path85"></span><span class="path86"></span><span class="path87"></span><span class="path88">
				</span>
	    		</span>
	    		<span class="icon-fct-unl" title="BSc. in Computer Science and Engineering at Faculty of Science and Technology of New University of Lisbon (Caparica/Almada Campus, FCT NOVA - FCT/UNL), between 2013 and 2018">
	        		<span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4">
				</span>
	    		</span>
		</font>
		<a target="_blank" href="https://www.fct.unl.pt/en/education/course/integrated-master-computer-science/" title="BSc. in Computer Science and Engineering at Faculty of Science and Technology of New University of Lisbon (Caparica/Almada Campus, FCT NOVA - FCT/UNL), between 2013 and 2018"><b>Bachelor (1st Cycle of Integrated Master - BSc. and MSc. (3+2 years) Bologna Degree)</b> in <b>Computer Science and Engineering</b> at 
		<br>
		<b>Faculty of Science and Technology of New University of Lisbon</b> (<b>Caparica/Almada Campus, FCT NOVA - FCT/UNL</b>)</a>,
		<br>
		between 2013 and 2018; ✔️</p>
	</li>
	<ul>
		<li>
			<a target="_blank" href="https://www.facebook.com/fct.nova/" title="FCT NOVA on Facebook"><i class="fa fa-facebook-official" title="FCT NOVA on Facebook" style="font-size:20px;color:Indigo"></i></a>&nbsp;&nbsp;<a target="_blank" href="https://www.facebook.com/fct.nova/" title="FCT NOVA on Facebook">Facebook</a>
		            
		    <font size="3">&nbsp;|&nbsp;</font>
		        
		    <a target="_blank" href="https://www.linkedin.com/school/faculdade-de-ciencias-e-tecnologia-da-universidade-nova-de-lisboa/" title="Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa - FCT NOVA on LinkedIn"><i class="fa fa-linkedin" title="Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa - FCT NOVA on LinkedIn" style="font-size:20px;color:RoyalBlue"></i></a>&nbsp;&nbsp;<a target="_blank" href="https://www.linkedin.com/school/faculdade-de-ciencias-e-tecnologia-da-universidade-nova-de-lisboa/" title="Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa - FCT NOVA on LinkedIn">LinkedIn</a>

		    <font size="3">&nbsp;|&nbsp;</font>

		    <a target="_blank" href="https://twitter.com/fctnova/" title="FCT NOVA on Twitter"><i class="fa fa-twitter" title="FCT NOVA on Twitter" style="font-size:20px;color:Cyan"></i></a>&nbsp;&nbsp;<a target="_blank" href="https://twitter.com/fctnova/" title="FCT NOVA on Twitter">Twitter</a>

		    <font size="3">&nbsp;|&nbsp;</font>

		    <a target="_blank" href="https://www.instagram.com/fctnova/" title="FCT NOVA on Instagram"><i class="fa fa-instagram" title="FCT NOVA on Instagram" style="font-size:20px;color:OrangeRed"></i></a>&nbsp;&nbsp;<a target="_blank" href="https://www.instagram.com/fctnova/" title="FCT NOVA on Instagram">Instagram</a>
		</li>
	    
	    <li>
			(Projects' Screenshots, Scientific Research Project, Diploma, Transcript)
		</li>
		
		<li>
			Final Global Points Average - 15 of 20
		</li>
	</ul>
	
    <li>
		<p align="justify">
		<font size="5">
	    		<span class="icon-new-university-lisbon" title="MSc. in Computer Science and Engineering at Faculty of Science and Technology of New University of Lisbon (Caparica/Almada Campus, FCT NOVA - FCT/UNL), between 2013 and 2018">
	        		<span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span><span class="path21"></span><span class="path22"></span><span class="path23"></span><span class="path24"></span><span class="path25"></span><span class="path26"></span><span class="path27"></span><span class="path28"></span><span class="path29"></span><span class="path30"></span><span class="path31"></span><span class="path32"></span><span class="path33"></span><span class="path34"></span><span class="path35"></span><span class="path36"></span><span class="path37"></span><span class="path38"></span><span class="path39"></span><span class="path40"></span><span class="path41"></span><span class="path42"></span><span class="path43"></span><span class="path44"></span><span class="path45"></span><span class="path46"></span><span class="path47"></span><span class="path48"></span><span class="path49"></span><span class="path50"></span><span class="path51"></span><span class="path52"></span><span class="path53"></span><span class="path54"></span><span class="path55"></span><span class="path56"></span><span class="path57"></span><span class="path58"></span><span class="path59"></span><span class="path60"></span><span class="path61"></span><span class="path62"></span><span class="path63"></span><span class="path64"></span><span class="path65"></span><span class="path66"></span><span class="path67"></span><span class="path68"></span><span class="path69"></span><span class="path70"></span><span class="path71"></span><span class="path72"></span><span class="path73"></span><span class="path74"></span><span class="path75"></span><span class="path76"></span><span class="path77"></span><span class="path78"></span><span class="path79"></span><span class="path80"></span><span class="path81"></span><span class="path82"></span><span class="path83"></span><span class="path84"></span><span class="path85"></span><span class="path86"></span><span class="path87"></span><span class="path88">
				</span>
	    		</span>
	    		<span class="icon-fct-unl" title="MSc. in Computer Science and Engineering at Faculty of Science and Technology of New University of Lisbon (Caparica/Almada Campus, FCT NOVA - FCT/UNL), between 2019 and 2020">
	        		<span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4">
				</span>
	    		</span>
		</font>
		<a target="_blank" href="https://www.fct.unl.pt/en/education/course/integrated-master-computer-science/" title="MSc. in Computer Science and Engineering at Faculty of Science and Technology of New University of Lisbon (Caparica/Almada Campus, FCT NOVA - FCT/UNL), between 2013 and 2018"><b>Master (2nd Cycle of Integrated Master - BSc. and MSc. (3+2 years) Bologna Degree)</b> in <b>Computer Science and Engineering</b> at 
		<br>
		<b>Faculty of Science and Technology of New University of Lisbon</b> (<b>Caparica/Almada Campus, FCT NOVA - FCT/UNL</b>)</a>,
		<br>
		between 2019 and 2020;️</p>
	</li>
	<ul>
  		<li>
	    		<a target="_blank" href="https://www.facebook.com/fct.nova/" title="FCT NOVA on Facebook"><i class="fa fa-facebook-official" title="FCT NOVA on Facebook" style="font-size:20px;color:Indigo"></i></a>&nbsp;&nbsp;<a target="_blank" href="https://www.facebook.com/fct.nova/" title="FCT NOVA on Facebook">Facebook</a>
	            
	        <font size="3">&nbsp;|&nbsp;</font>
	        
	        <a target="_blank" href="https://www.linkedin.com/school/faculdade-de-ciencias-e-tecnologia-da-universidade-nova-de-lisboa/" title="Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa - FCT NOVA on LinkedIn"><i class="fa fa-linkedin" title="Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa - FCT NOVA on LinkedIn" style="font-size:20px;color:RoyalBlue"></i></a>&nbsp;&nbsp;<a target="_blank" href="https://www.linkedin.com/school/faculdade-de-ciencias-e-tecnologia-da-universidade-nova-de-lisboa/" title="Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa - FCT NOVA on LinkedIn">LinkedIn</a>

	         <font size="3">&nbsp;|&nbsp;</font>

	        <a target="_blank" href="https://twitter.com/fctnova/" title="FCT NOVA on Twitter"><i class="fa fa-twitter" title="FCT NOVA on Twitter" style="font-size:20px;color:Cyan"></i></a>&nbsp;&nbsp;<a target="_blank" href="https://twitter.com/fctnova/" title="FCT NOVA on Twitter">Twitter</a>

	        <font size="3">&nbsp;|&nbsp;</font>

	        <a target="_blank" href="https://www.instagram.com/fctnova/" title="FCT NOVA on Instagram"><i class="fa fa-instagram" title="FCT NOVA on Instagram" style="font-size:20px;color:OrangeRed"></i></a>&nbsp;&nbsp;<a target="_blank" href="https://www.instagram.com/fctnova/" title="FCT NOVA on Instagram">Instagram</a>
        </li>
	    
	   <li>
	   		(Projects' Screenshots, Scientific Research Project, Diploma, Transcript)
		</li>
		
		<li>
			Final Global Points Average - 15 of 20
		</li>
	</ul>
	
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

<br>
<br>

<a target="_blank" title="Download Rúben André Barreiro's Résumé #1 made in NovoResumé" href="/docs/ruben-andre-barreiro-resume-1.pdf"><button class="button buttonDocument"><b>Résumé #1 📝</b></button></a>
<a target="_blank" title="Download Rúben André Barreiro's Résumé #2 made in Microsoft Word" href="/docs/ruben-andre-barreiro-resume-2.pdf"><button class="button buttonDocument"><b>Résumé #2 📝</b></button></a>
<br>
<a target="_blank" title="Download Rúben André Barreiro's Curriculum Vitae #1 made in LaTeX" href="/docs/ruben-andre-barreiro-CV-1.pdf"><button class="button buttonDocument"><b>Curriculum Vitae #1 📋</b></button></a>
<a target="_blank" title="Download Rúben André Barreiro's Curriculum Vitae #2 made in NovoResumé" href="/docs/ruben-andre-barreiro-CV-2.pdf"><button class="button buttonDocument"><b>Curriculum Vitae #2 📋</b></button></a>
<a target="_blank" title="Download Rúben André Barreiro's Curriculum Vitae #3 made in EuroPass" href="/docs/ruben-andre-barreiro-CV-3.pdf"><button class="button buttonDocument"><b>Curriculum Vitae #3 📋</b></button></a>

<br>
<hr/>
<center><font size="1">*** © Rúben André Barreiro - GitHub's Page/Personal Blog - All rights reserved ***</font></center>
<hr/>
<br>


<h2 id="full_competences_title">
    <i>Full Academic and Professional Competences</i>
    <span class="fa-stack">
        <i class="fa fa-circle-thin fa-stack-2x"></i>
        <i class="fa fa-wrench fa-stack-1x faa-float animated"></i>
    </span>
</h2>
<hr/>

<font size="2">
	<p align="justify">
		<b><u>Notes:</u></b>
		<ul>
			<li>
				Classifications in <b>interval between 1 (minimum) and 5 (maximum) points</b>;
			</li>
			<li>
				Graphic caption with ★ and ☆ symbols: <b>★ symbol for 1 point and ☆ symbol for 0 points</b>;
			</li>
			<li>
				<b>The total classification for each hard skill it’s the total sum of all ★ symbols, between 1 (minimum) and 5 (maximum)</b>;
			</li>
		</ul>
	</p>
</font>

<h3 id="hard_skills">
<p align="justify"><i class="fa fa-caret-right faa-horizontal animated"></i>&nbsp;&nbsp;<i><u>Hard skills:</u></i></p>
</h3>

<ul>
	<li>
		<p align="justify"><i class="fas fa-laptop-code faa-horizontal animated"></i>&nbsp;&nbsp;<b>1) IT/IS & Computer Engineering:</b></p>
        <ul>
			<li>
				<p align="justify"><i class="fas fa-lightbulb faa-horizontal animated"></i>&nbsp;&nbsp;<b>Subjects and areas domained:</b></p>
        			<ul>
					<li>
						<u>Imperative programming</u>;
					</li>
					<li>
						<u>Object-oriented programming</u>;
					</li>
					<li>
						<u>Operative systems & architectures</u>;
					</li>
					<li>
						<u>Data structures</u>;
					</li>
					<li>
						<u>Object-relational databases</u>;
					</li>
					<li>
						<u>Logic programming</u>;
					</li>
					<li>
						<u>Computer networks</u>;
					</li>
					<li>
						<u>Computer graphics & 2D/3D interfaces</u>;
					</li>
					<li>
						<u>Artificial intelligence</u>;
					</li>
					<li>
						<u>Searching algorithms</u>;
					</li>
					<li>
						<u>Genetic algorithms</u>;
					</li>
					<li>
						<u>Autonomous problem solvers</u>:
						<ul>
							<li>
								<u><i>STRIPS</i></u>;
							</li>
						</ul>
					</li>
					<li>
						<u>Modelling and design of software</u>;
					</li>
					<li>
						<u>Graphs algorithms</u>;
					</li>
					<li>
						<u>Distributed systems</u>;
					</li>
					<li>
						<u>Multi-threading</u>;
					</li>
					<li>
						<u>Edge & Fog computing</u>;
					</li>
					<li>
						<u>Intelligent multi-agent systems</u>;
					</li>
				</ul>
			</li>
			<li>
				 <p align="justify"><i class="fa fa-code faa-horizontal animated"></i>&nbsp;&nbsp;<b>Programming languages:</b></p>
        			<ul>
					<li>
						<u>Imperative languages</u>:
						<ul>
							<li>
								<i>Pascal</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
								<i>C</i> ★★★☆☆
							</li>
						</ul>
					</li>
					<li>
						<u>Multi-paradigm languages</u>:
						<ul>
							<li>
								<i>Visual Basic .NET</i> ★★☆☆☆
							</li>
							<li>
								<i>C++</i> ★☆☆☆☆
							</li>
							<li>
								<i>Java</i> ★★★★☆
							</li>
							<li>
								<i>OCaml (Objective Caml)</i> ★★★☆☆
							</li>
							<li>
								<i>C# (CSharp)</i> ★★☆☆☆								
							</li>
							<li>
								<i>Python</i> ★☆☆☆☆								
							</li>
						</ul>
					</li>
					<li>
						<u>Low-level languages</u>:
						<ul>
							<li>
								<i>Assembly</i> ★★☆☆☆
							</li>
						</ul>
					</li>
					<li>
						<u>Markup languages</u>:
						<ul>
							<li>
								<i>HTML (Hypertext Markup Language)</i> ★★★★☆
							</li>
							<li>
								<i>XML (Extensible Markup Language)</i> ★★☆☆☆
							</li>
						</ul>
					</li>
					<li>
						<u>Interpreted languages</u>:
						<ul>
							<li>
								<i>JavaScript</i> ★★★☆☆
							</li>
						</ul>
					</li>
					<li>
						<u>Style sheet languages</u>:
						<ul>
							<li>
								<i>CSS (Cascade Style Sheet)</i> ★★★☆☆
							</li>
						</ul>
					</li>
					<li>
						<u>Object-relational database languages</u>:
						<ul>
							<li>
								<i>MySQL</i> ★★★★☆
							</li>
							<li>
								<i>Oracle SQL</i> ★★★★☆
							</li>
							<li>
								<i>PostgreSQL</i> ★★★★☆
							</li>
						</ul>
					</li>
					<li>
						<u>Server-side scripting languages</u>:
						<ul>
							<li>
								<i>PHP (PHP: Hypertext Preprocessor)</i> ★★★☆☆
							</li>
						</ul>
					</li>
					<li>
						<u>Software modelling languages</u>:
						<ul>
							<li>
								<i>UML (Unified Modelling Language)</i> ★★★★☆
							</li>
						</ul>
					</li>
					<li>
						<u>Declarative languages for software modelling</u>:
						<ul>
							<li>
								<i>OCL (Object Constraint Language)</i> ★★★☆☆
							</li>
						</ul>
					</li>
					<li>
						<u>Formal modelling and specification languages</u>:
						<ul>
							<li>
								<i>VDM++ (Vienna Development Method ++)</i> ★★☆☆☆
							</li>
						</ul>
					</li>
					<li>
						<u>Declarative specification languages</u>:
						<ul>
							<li>
								<i>Alloy</i> ★★☆☆☆
							</li>
						</ul>
					</li>
					<li>
						<u>Declarative logic languages</u>:
						<ul>
							<li>
								<i>Datalog</i> ★★☆☆☆
							</li>
							<li>
								<i>Prolog</i> ★★★☆☆
							</li>
						</ul>
					</li>
					<li>
						<u>Mobile development languages</u>:
						<ul>
							<li>
								<i>Android</i> ★★☆☆☆
							</li>
							<li>
								<i>IOS</i> ★☆☆☆☆
							</li>
						</ul>
					</li>
					<li>
						<u>Preparation languages for documents, papers and articles</u>:
						<ul>
							<li>
								<i>LaTeX</i> ★★☆☆☆
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-cog faa-horizontal animated"></i>&nbsp;&nbsp;<b>APIs:</b></p>
        			<ul>
					<li>
						<u>JavaScript APIs</u>:
						<ul>
							<li>
								<u>2D and 3D programming</u>
								<ul>
									<li>
										<i>WebGL</i> ★★★☆☆
									</li>
								</ul>								
							</li>
						</ul>
					</li>
					<li>
						<u>Cross-platform APIs</u>:
						<ul>
							<li>
								<u>2D and 3D programming</u>
								<ul>
									<li>
										<i>OpenGL</i> ★☆☆☆☆
									</li>
								</ul>								
							</li>
							<li>
								<u>Document-oriented databases</u>
								<ul>
									<li>
										<i>MongoDB</i> ★★★☆☆
									</li>
								</ul>								
							</li>
						</ul>
					</li>
					<li>
						<u>Centralized services for distributed systems</u>:
						<ul>
							<li>
								<i>Apache ZooKeeper</i> ★★☆☆☆
							</li>
						</ul>												
					</li>
					<li>
						<u>Open-source streams-processing</u>:
						<ul>
							<li>
								<i>Apache Kafka</i> ★☆☆☆☆
							</li>
						</ul>												
					</li>
					<li>
						<u>Web services</u>:
						<ul>
							<li>
								<i>REST (Representational State Transfer)</i> ★★☆☆☆
							</li>
							<li>
								<i>SOAP (Simple Object Access Protocol)</i> ★★☆☆☆
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-terminal faa-horizontal animated"></i>&nbsp;&nbsp;<b>Run-time environments:</b></p>
        			<ul>
					<li>
						<u>JavaScript cross-platforms</u>:
						<ul>
							<li>
								<i>Node.js</i> ★★☆☆☆
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-drafting-compass faa-horizontal animated"></i>&nbsp;&nbsp;<b>Frameworks:</b></p>
        			<ul>
					<li>
						<u>Intelligent multi-agent systems</u>:
						<ul>
							<li>
								<i>JADE (Java Agent Development Framework)</i> ★★☆☆☆
							</li>
						</ul>
					</li>
					<li>
						<u>Applications and inversion of control container</u>:
						<ul>
							<li>
								<i>Spring Framework</i> ★☆☆☆☆
							</li>
						</ul>
					</li>
					<li>
						<u>JavaScript-based open-source front-end web applications</u>:
						<ul>
							<li>
								<i>AngularJS (Angular.js)</i> ★☆☆☆☆
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-gamepad faa-horizontal animated"></i>&nbsp;&nbsp;<b>Game engines:</b></p>
        			<ul>
					<li>
						<u>Cross-platform</u>:
						<ul>
							<li>
								<i>Unity</i> ★★☆☆☆
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-toolbox faa-horizontal animated"></i>&nbsp;&nbsp;<b>IDEs:</b></p>
        			<ul>
					<li>
						<i>Turbo Pascal</i> ★★★★☆
					</li>
					<li>
						<i>Microsoft Visual Studio</i> ★★☆☆☆
					</li>
					<li>
						<i>Eclipse IDE</i> ★★★★☆
					</li>
					<li>
						<i>IntelliJ IDEA</i> ★★☆☆☆
					</li>
					<li>
						<i>Android Studio</i> ★★☆☆☆
					</li>
					<li>
						<i>Unity3D</i> ★★☆☆☆
					</li>		
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-hammer faa-horizontal animated"></i>&nbsp;&nbsp;<b>Compilers:</b></p>
        			<ul>
					<li>
						<i>Free Pascal</i> ★★★★☆
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-pencil-alt faa-horizontal animated"></i>&nbsp;&nbsp;<b>Text editors:</b></p>
        			<ul>
					<li>
						<i>Notepad++</i> ★★★★☆
					</li>
					<li>
						<i>Atom</i> ★★★★☆
					</li>
					<li>
						<i>Brackets</i> ★★★★☆
					</li>
					<li>
						<i>SublimeText</i> ★★★★☆
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-box faa-horizontal animated"></i>&nbsp;&nbsp;<b>PL/SQL editors:</b></p>
        			<ul>
					<li>
						<i>Oracle SQL developer</i> ★★☆☆☆
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-database faa-horizontal animated"></i>&nbsp;&nbsp;<b>Database development environment:</b></p>
        			<ul>
					<li>
						<i>Oracle APEX (Oracle Application Express)</i> ★★★☆☆
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-archive faa-horizontal animated"></i>&nbsp;&nbsp;<b>Software platforms:</b></p>
        			<ul>
					<li>
						<u>Virtualization:</u>
						<ul>
							<li>
								<u>Hardware (hypervisors):</u>
								<ul>
									<li>
										<u>Independent:</u>
										<ul>
											<li>
												<i>Oracle VM VirtualBox</i> ★★★☆☆
											</li>
											<li>
												<i>QEMU (Quick Emulator)</i> ★☆☆☆☆
											</li>
											<li>
												<i>VMware Workstation</i> ★★☆☆☆
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<u>Operative system level:</u>
									<ul>
										<li>
											<u>Application containers:</u>
											<ul>
												<li>
													<i>Docker</i> ★☆☆☆☆
												</li>
											</ul>
										</li>
									</ul>
							</li>
						</ul>
					</li>
					<li>
						<u>Data science:</u>
						<ul>
							<li>
								<i>RapidMiner</i> ★★★☆☆
							</li>
						</ul>
					</li>
					<li>
						<u>Synthesis and analysis of hardware design languages designs:</u>
						<ul>
							<li>
								<i>Xilinx ISE</i> ★★☆☆☆
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-box-open faa-horizontal animated"></i>&nbsp;&nbsp;<b>Software stacks:</b></p>
        			<ul>
					<li>
						<u>WampServer</u> ★★☆☆☆
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-lock faa-horizontal animated"></i>&nbsp;&nbsp;<b>Administration tools:</b></p>
        			<ul>
					<li>
						<u>phpMyAdmin</u> ★★☆☆☆
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-code-branch faa-horizontal animated"></i>&nbsp;&nbsp;<b>Version-control systems:</b></p>
    				<ul>
					<li>
						<u>Web-based hosting services:</u>
						<ul>
							<li>
								<i>Atlassian Bitbucket</i> ★★★☆☆
							</li>
							<li>
								<i>GitHub</i> ★★★☆☆
							</li>
							<li>
								<i>GitLab</i> ★★★☆☆
							</li>
						</ul>
					</li>
					<li>
						<u>Git clients:</u>
						<ul>
							<li>
								<i>Atlassian Sourcetree</i> ★★★☆☆
							</li>
							<li>
								<i>GitHub Desktop</i> ★★★☆☆
							</li>
							<li>
								<i>GitKraken</i> ★★★☆☆
							</li>
						</ul>
					</li>
					<li>
						<u>Branching models for Git:</u>
						<ul>
							<li>
								<i>GitFlow</i> ★★☆☆☆
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-file-code faa-horizontal animated"></i>&nbsp;&nbsp;<b>Others:</b></p>
        			<ul>
					<li>
						<u>JavaScript's file formats:</u>
						<ul>
							<li>
								<i>JSON (JavaScript Object Notation)</i> ★★★★☆
							</li>
						</ul>
					</li>
					<li>
						<u>Client side web development techniques:</u>
						<ul>
							<li>
								<i>AJAX (Asynchronous JavaScript and XML)</i> ★★☆☆☆
							</li>
						</ul>
					</li>
					<li>
						<u>Serializing structured data formats:</u>
						<ul>
							<li>
								<i>Google Protocol Buffers</i> ★★★☆☆
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-desktop faa-horizontal animated"></i>&nbsp;&nbsp;<b>Computer operating systems:</b></p>
        			<ul>
					<li>
						<u><i>Linux:</i></u>
						<ul>
							<li>
								<i>Ubuntu LTS</i> ★★★☆☆
							</li>
						</ul>
					</li>
					<li>
						<u><i>Microsoft Windows</i></u> ★★★☆☆
					</li>
				</ul>
			</li>
		</ul>
	</li>	
	<li>
	<p align="justify"><i class="fas fa-palette faa-horizontal animated"></i>&nbsp;&nbsp;<b>2) Arts:</b></p>
        <ul>
			<li>
				<p align="justify"><i class="fas fa-paint-brush faa-horizontal animated"></i>&nbsp;&nbsp;<b>Graphic design and photography:</b></p>
        			<ul>
					<li>
						<u><i>Adobe Creative Cloud:</i></u>
						<ul>
							<li>
								<i>Adobe Illustrator CC</i> ★★★★☆
							</li>
							<li>
								<i>Adobe Photoshop CC</i> ★★★★☆
							</li>
							<li>
								<i>Adobe Lightroom CC</i> ★★★☆☆
							</li>
							<li>
								<i>Adobe Lightroom Classic CC</i> ★★★☆☆
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-tape faa-horizontal animated"></i>&nbsp;&nbsp;<b>Video editing:</b></p>
        			<ul>
					<li>
						<u><i>Adobe Creative Cloud:</i></u>
						<ul>
							<li>
								<i>Adobe After Effects CC</i> ★★☆☆☆
							</li>
							<li>
								<i>Adobe Premiere Pro CC</i> ★★☆☆☆
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-globe faa-horizontal animated"></i>&nbsp;&nbsp;<b>Web development:</b></p>
        			<ul>
					<li>
						<u><i>Adobe Creative Cloud:</i></u>
						<ul>
							<li>
								<i>Adobe Dreamweaver CC</i> ★★☆☆☆
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</li>	
	<li>
	<p align="justify"><i class="fas fa-window-restore faa-horizontal animated"></i>&nbsp;&nbsp;<b>3) Basics:</b></p>
        <ul>
			<li>
				<p align="justify"><i class="fas fa-warehouse faa-horizontal animated"></i>&nbsp;&nbsp;<b>Databases:</b></p>
        			<ul>
					<li>
						<u><i>Microsoft Office:</i></u>
						<ul>
							<li>
								<i>Microsoft Access</i> ★★★☆☆
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-file-alt faa-horizontal animated"></i>&nbsp;&nbsp;<b>Documents:</b></p>
        			<ul>
					<li>
						<u><i>Microsoft Office:</i></u>
						<ul>
							<li>
								<i>Microsoft Word</i> ★★★★☆
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fab fa-slideshare faa-horizontal animated"></i>&nbsp;&nbsp;<b>Presentations:</b></p>
        			<ul>
					<li>
						<u><i>Microsoft Office:</i></u>
						<ul>
							<li>
								<i>Microsoft Powerpoint</i> ★★★★☆
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fa fa-table faa-horizontal animated"></i>&nbsp;&nbsp;<b>Spreadsheets:</b></p>
        			<ul>
					<li>
						<u><i>Microsoft Office:</i></u>
						<ul>
							<li>
								<i>Microsoft Excel</i> ★★★☆☆
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</li>
</ul>	

<h3 id="soft_skills">
<p align="justify"><i class="fa fa-caret-right faa-horizontal animated"></i>&nbsp;&nbsp;<i><u>Soft skills:</u></i></p>
</h3>

<ul>
	<li>
		<p align="justify"><i class="fa fa-comments faa-horizontal animated"></i>&nbsp;&nbsp;<i><b>Communication skills:</b></i></p>
		<ul>
			<li>
				<p align="justify">
					<i><u>Able to listen</u></i>, <i><u>listening</u></i>, <i><u>nonverbal communication</u></i>, <i><u>persuation</u></i>, <i><u>reading body language</u></i>, <i><u>storytelling</u></i>, <i><u>visual communication</u></i>, <i><u>writing reports & proposals</u></i> and <i><u>writing skills</u></i>;
				</p>
			</li>
		</ul>
	</li>
	<li>
		<p align="justify"><i class="fas fa-exclamation-triangle faa-horizontal animated"></i>&nbsp;&nbsp;<i><b>Critical thinking:</b></i></p>
		<ul>
			<li>
				<p align="justify">
					<i><u>Adaptable</u></i>, <i><u>artistic sense</u></i>, <i><u>creativity</u></i>, <i><u>critical observer</u></i>, <i><u>design sense</u></i>, <i><u>desire to learn</u></i>, <i><u>flexible</u></i>, <i><u>innovative</u></i>, <i><u>logical thinking</u></i>, <i><u>problem solving</u></i>, <i><u>research</u></i>, <i><u>resourceful</u></i>, <i><u>thinking outside the box</u></i>, <i><u>tolerant of change & uncertainty</u></i>, <i><u>troubleshooting</u></i>, <i><u>value education</u></i> and <i><u>willingness to learn</u></i>;
				</p>
			</li>
		</ul>
	</li>
	<li>
		<p align="justify"><i class="fas fa-fist-raised faa-horizontal animated"></i>&nbsp;&nbsp;<i><b>Leadership:</b></i></p>
		<ul>
			<li>
				<p align="justify">
					<i><u>Deal-making</u></i>, <i><u>decision making</u></i>, <i><u>delegation</u></i>, <i><u>inspiring</u></i>, <i><u>management</u></i>, <i><u>mentoring</u></i>, <i><u>motivating</u></i>, <i><u>successful coaching</u></i>, <i><u>supervising</u></i> and <i><u>talent management</u></i>;
				</p>
			</li>
		</ul>
	</li>
	<li>
		<p align="justify"><i class="fas fa-hand-peace faa-horizontal animated"></i>&nbsp;&nbsp;<i><b>Positive attitude:</b></i></p>
		<ul>
			<li>
				<p align="justify">				
					<i><u>Confident</u></i>, <i><u>cooperative</u></i>, <i><u>courteous</u></i>, <i><u>energetic</u></i>, <i><u>enthusiastic</u></i>, <i><u>friendly</u></i>, <i><u>high energy</u></i>, <i><u>honest</u></i>, <i><u>patient</u></i>, <i><u>respectable</u></i>, <i><u>respectful</u></i> and <i><u>sense of humor</u></i>;
				</p>
			</li>
		</ul>
	</li>
	<li>
		<p align="justify"><i class="fas fa-hand-holding-heart faa-horizontal animated"></i>&nbsp;&nbsp;<i><b>Teamwork:</b></i></p>
		<ul>
			<li>
				<p align="justify">
					<i><u>Accept feedback</u></i>, <i><u>collaborative</u></i>, <i><u>customer service</u></i>, <i><u>dealing with difficult situations</u></i>, <i><u>empathetic</u></i>, <i><u>dealing with difficult personalities</u></i>, <i><u>intercultural competence</u></i>, <i><u>interpersonal skills</u></i>, <i><u>influential</u></i>, <i><u>networking</u></i>, <i><u>social skills</u></i> and <i><u>team player</u></i>; 
				</p>
			</li>
		</ul>
	</li>
	<li>
		<p align="justify"><i class="fas fa-handshake faa-horizontal animated"></i>&nbsp;&nbsp;<i><b>Work ethic:</b></i></p>
		<ul>
			<li>
				<p align="justify">
					<i><u>Attentive</u></i>, <i><u>competitive</u></i>, <i><u>dedicated</u></i>, <i><u>dependable</u></i>, <i><u>following direction</u></i>, <i><u>independent</u></i>, <i><u>making deadlines</u></i>, <i><u>motivated</u></i>, <i><u>multitasking</u></i>, <i><u>perseverant</u></i>, <i><u>persistent</u></i>, <i><u>planning</u></i>, <i><u>reliable</u></i>, <i><u>resilient</u></i>, <i><u>results-oriented</u></i>, <i><u>self-directed</u></i>, <i><u>self-monitoring</u></i>, <i><u>self-supervising</u></i>, <i><u>strategic planning</u></i>, <i><u>time management</u></i>, <i><u>trainable</u></i> and <i><u>working well under pressure</u></i>;
				</p>
			</li>
		</ul>
	</li>
</ul>

<br>

<a target="_blank" title="Download Rúben André Barreiro's Full Competences made in Microsoft Powerpoint" href="/docs/ruben-andre-barreiro-full-competences.pdf"><button class="button buttonDocument"><b>Full Competences Document 📑</b></button></a>

<br>
<hr/>
<center><font size="1">*** © Rúben André Barreiro - GitHub's Page/Personal Blog - All rights reserved ***</font></center>
<hr/>
<br>


<h2 id="interests_title">
    <i>Interests</i>
    <span class="fa-stack">
        <i class="fa fa-circle-thin fa-stack-2x"></i>
        <i class="fa fa-heart fa-stack-1x faa-pulse animated"></i>
    </span>
</h2>
<hr/>

<p align="justify">I'm addicted to <b>technologies</b> and <b>informatics</b>. I love to <b>programming</b> and <b>coding</b>! I also have a big interest in <b>design</b>, <b>photography</b>, <b>multimedia</b>, <b>fashion</b>, <b>business</b>, <b>enterprise's management</b>, <b>marketing</b>, <b>drawing</b> and <b>poetry</b>.</p>

<p align="justify">In <b>Computer Science and Engineering</b>, <b>IT/IS</b> and <b>Informatics</b> area, I personally, have a huge interest in <b><i><u>Web Design</u></i></b>, <b><i><u>2D/3D Graphics &amp; Interfaces</u></i></b>, <b><i><u>Computer Networks</u></i></b>, <b><i><u>Distributed Systems</u></i></b>, <b><i><u>Cloud Computing</u></i></b>, <b><i><u>Edge &amp; Fog Computing</u></i></b>, <b><i><u>Internet &amp; Computer Network's Security</u></i></b>, <b><i><u>Artificial Intelligence</u></i></b>, <b><i><u>Machine Learning</u></i></b>, <b><i><u>Data Mining &amp; Modelling</u></i></b>, <b><i><u>Autonomous &amp; Intelligent Agents</u></i></b> and <b><i><u>Games &amp; Simulation</u></i></b>.

<br>
<hr/>
<center><font size="1">*** © Rúben André Barreiro - GitHub's Page/Personal Blog - All rights reserved ***</font></center>
<hr/>
<br>


<h2 id="goals_accomplishments_title">
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


<h2 id="publications_title">
    <i>Publications</i>
    <span class="fa-stack">
        <i class="fa fa-circle-thin fa-stack-2x"></i>
        <i class="fa fa-book fa-stack-1x faa-ring animated"></i>
    </span>
</h2>
<hr/>

<p align="justify"> <!-- SOME TEXT HERE --> </p>