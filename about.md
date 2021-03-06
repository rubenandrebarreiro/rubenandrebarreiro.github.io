---
bg: "photo-40.jpg"
layout: default
title: "About Me"
crawlertitle: "Rúben André Barreiro's Portfolio/Blog - About Me"
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

#goals-accomplishments-list {
  box-sizing: border-box;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: #bbbbbb;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: #ffffff;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -13px;
  background-color: #eee;
  border: 4px solid #FF9F55;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #eee;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent #eee transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -13px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: #eee;
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
  left: 31px;
  }
  
  /* Full-width containers */
  .container {
  width: 100%;
  padding-left: 70px;
  padding-right: 25px;
  }
  
  /* Make sure that all arrows are pointing leftwards */
  .container::before {
  left: 60px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after, .right::after {
  left: 15px;
  }
  
  /* Make all right containers behave like the left ones */
  .right {
  left: 0%;
  }
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

<p align="justify">My name is <b>Rúben André Letra Barreiro</b>. And I'm <b>Computer Science Engineer</b> and <b>IT/IS Programmer &amp; Technician</b>! 👨‍💻 💻</p>

<p align="justify">I'm <b>26 years old</b>. The <b>90's</b> are the best generation ever, believe it! 🎂 🎈</p>

<br>

[![ChildhoodPhoto2]({{ site.images | relative_url }}/childhood/childhood-02.jpg)]({{ site.images | relative_url }}/childhood/childhood-02.jpg)
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
		<a target="_blank" href="https://www.fct.unl.pt/en/education/course/integrated-master-computer-science/" title="BSc. in Computer Science and Engineering at Faculty of Science and Technology of New University of Lisbon (Caparica/Almada Campus, FCT NOVA - FCT/UNL), between 2013 and 2018"><b>Bachelor - 1st Cycle of Integrated Master - BSc. and MSc. (3+2 years) Bologna Degree</b> in 
        <br>
        <b>Computer Sciences and Engineering</b> at <b>Faculty of Science and Technology of New University of Lisbon</b>
        <br>
        (<b>Caparica/Almada Campus, FCT NOVA - FCT/UNL</b>)</a>,
		<br>
		between 2013 and 2018; ✔️</p>
	</li>
	<ul>
		<li>
            <font size="2"><b>Social Networks:</b></font>		<ul>
                <li>
                    <a target="_blank" href="https://www.facebook.com/fct.nova/" title="FCT NOVA on Facebook"><i class="fa fa-facebook-official" title="FCT NOVA on Facebook" style="font-size:20px;color:Indigo"></i></a>&nbsp;&nbsp;<a target="_blank" href="https://www.facebook.com/fct.nova/" title="FCT NOVA on Facebook">Facebook</a>

                    <font size="3">&nbsp;|&nbsp;</font>

                    <a target="_blank" href="https://www.linkedin.com/school/faculdade-de-ciencias-e-tecnologia-da-universidade-nova-de-lisboa/" title="Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa - FCT NOVA on LinkedIn"><i class="fa fa-linkedin" title="Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa - FCT NOVA on LinkedIn" style="font-size:20px;color:RoyalBlue"></i></a>&nbsp;&nbsp;<a target="_blank" href="https://www.linkedin.com/school/faculdade-de-ciencias-e-tecnologia-da-universidade-nova-de-lisboa/" title="Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa - FCT NOVA on LinkedIn">LinkedIn</a>

                    <font size="3">&nbsp;|&nbsp;</font>

                    <a target="_blank" href="https://twitter.com/fctnova/" title="FCT NOVA on Twitter"><i class="fa fa-twitter" title="FCT NOVA on Twitter" style="font-size:20px;color:Cyan"></i></a>&nbsp;&nbsp;<a target="_blank" href="https://twitter.com/fctnova/" title="FCT NOVA on Twitter">Twitter</a>

                    <font size="3">&nbsp;|&nbsp;</font>

                    <a target="_blank" href="https://www.instagram.com/fctnova/" title="FCT NOVA on Instagram"><i class="fa fa-instagram" title="FCT NOVA on Instagram" style="font-size:20px;color:OrangeRed"></i></a>&nbsp;&nbsp;<a target="_blank" href="https://www.instagram.com/fctnova/" title="FCT NOVA on Instagram">Instagram</a>
                </li>
            </ul>
		</li>
	    
	    <li>
			<font size="2"><b>Click to see:</b></font>
            <ul>
                <li>
                    <i class="fab fa-slideshare faa-horizontal animated"></i>&nbsp;&nbsp;<a href="../degrees/bachelor-projects-screenshots/slideshow.html"><i>Projects' Screenshots</i></a>
                </li>
                <li>
                    <i class="fas fa-search faa-horizontal animated"></i>&nbsp;&nbsp;<a href="../research-development#research-development-hyrax-dice-content"><i>Scientific Research Project</i></a>
                </li>
                <li>
                    <i class="fas fa-file-alt faa-horizontal animated"></i>&nbsp;&nbsp;<a href="../docs/ruben-andre-barreiro-bachelor-certificate-1.pdf"><i>Bachelor's Certificate (Diploma and Transcript)</i></a>
                </li>
            </ul> 
		</li>
		
		<li>
			<font size="2"><b>Final Global Points Average:</b></font>
            <ul>
                <li>
                    <i class="fas fa-certificate faa-horizontal animated"></i>&nbsp;&nbsp;15 of 20
                </li>
            </ul>
		</li>
	</ul>
	
    <li>
		<p align="justify">
		<font size="5">
	    		<span class="icon-new-university-lisbon" title="MSc. in Computer Science and Engineering at Faculty of Science and Technology of New University of Lisbon (Caparica/Almada Campus, FCT NOVA - FCT/UNL), between 2019 and 2021">
	        		<span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span><span class="path21"></span><span class="path22"></span><span class="path23"></span><span class="path24"></span><span class="path25"></span><span class="path26"></span><span class="path27"></span><span class="path28"></span><span class="path29"></span><span class="path30"></span><span class="path31"></span><span class="path32"></span><span class="path33"></span><span class="path34"></span><span class="path35"></span><span class="path36"></span><span class="path37"></span><span class="path38"></span><span class="path39"></span><span class="path40"></span><span class="path41"></span><span class="path42"></span><span class="path43"></span><span class="path44"></span><span class="path45"></span><span class="path46"></span><span class="path47"></span><span class="path48"></span><span class="path49"></span><span class="path50"></span><span class="path51"></span><span class="path52"></span><span class="path53"></span><span class="path54"></span><span class="path55"></span><span class="path56"></span><span class="path57"></span><span class="path58"></span><span class="path59"></span><span class="path60"></span><span class="path61"></span><span class="path62"></span><span class="path63"></span><span class="path64"></span><span class="path65"></span><span class="path66"></span><span class="path67"></span><span class="path68"></span><span class="path69"></span><span class="path70"></span><span class="path71"></span><span class="path72"></span><span class="path73"></span><span class="path74"></span><span class="path75"></span><span class="path76"></span><span class="path77"></span><span class="path78"></span><span class="path79"></span><span class="path80"></span><span class="path81"></span><span class="path82"></span><span class="path83"></span><span class="path84"></span><span class="path85"></span><span class="path86"></span><span class="path87"></span><span class="path88">
				</span>
	    		</span>
	    		<span class="icon-fct-unl" title="MSc. in Computer Science and Engineering at Faculty of Science and Technology of New University of Lisbon (Caparica/Almada Campus, FCT NOVA - FCT/UNL), between 2019 and 2021">
	        		<span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4">
				</span>
	    		</span>
		</font>
		<a target="_blank" href="https://www.fct.unl.pt/en/education/course/integrated-master-computer-science/" title="MSc. in Computer Science and Engineering at Faculty of Science and Technology of New University of Lisbon (Caparica/Almada Campus, FCT NOVA - FCT/UNL), between 2019 and 2021"><b>Master - 2nd Cycle of Integrated Master - BSc. and MSc. (3+2 years) Bologna Degree</b> in 
        <br>
        <b>Computer Engineering</b> at <b>Faculty of Science and Technology of New University of Lisbon</b>
        <br>
        (<b>Caparica/Almada Campus, FCT NOVA - FCT/UNL</b>)</a>,
		<br>
		between 2019 and 2021;️</p>
	</li>
	<ul>
        <li>
            <font size="2"><b>Social Networks:</b></font>		<ul>
                <li>
                    <a target="_blank" href="https://www.facebook.com/fct.nova/" title="FCT NOVA on Facebook"><i class="fa fa-facebook-official" title="FCT NOVA on Facebook" style="font-size:20px;color:Indigo"></i></a>&nbsp;&nbsp;<a target="_blank" href="https://www.facebook.com/fct.nova/" title="FCT NOVA on Facebook">Facebook</a>

                    <font size="3">&nbsp;|&nbsp;</font>

                    <a target="_blank" href="https://www.linkedin.com/school/faculdade-de-ciencias-e-tecnologia-da-universidade-nova-de-lisboa/" title="Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa - FCT NOVA on LinkedIn"><i class="fa fa-linkedin" title="Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa - FCT NOVA on LinkedIn" style="font-size:20px;color:RoyalBlue"></i></a>&nbsp;&nbsp;<a target="_blank" href="https://www.linkedin.com/school/faculdade-de-ciencias-e-tecnologia-da-universidade-nova-de-lisboa/" title="Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa - FCT NOVA on LinkedIn">LinkedIn</a>

                    <font size="3">&nbsp;|&nbsp;</font>

                    <a target="_blank" href="https://twitter.com/fctnova/" title="FCT NOVA on Twitter"><i class="fa fa-twitter" title="FCT NOVA on Twitter" style="font-size:20px;color:Cyan"></i></a>&nbsp;&nbsp;<a target="_blank" href="https://twitter.com/fctnova/" title="FCT NOVA on Twitter">Twitter</a>

                    <font size="3">&nbsp;|&nbsp;</font>

                    <a target="_blank" href="https://www.instagram.com/fctnova/" title="FCT NOVA on Instagram"><i class="fa fa-instagram" title="FCT NOVA on Instagram" style="font-size:20px;color:OrangeRed"></i></a>&nbsp;&nbsp;<a target="_blank" href="https://www.instagram.com/fctnova/" title="FCT NOVA on Instagram">Instagram</a>
                </li>
            </ul>
		</li>
	    
	    <li>
			<font size="2"><b>Click to see:</b></font>
            <ul>
                <li>
                    <i class="fab fa-slideshare faa-horizontal animated"></i>&nbsp;&nbsp;<a href="../degrees/master-projects-screenshots/slideshow.html"><i>Projects' Screenshots</i></a>
                </li>
                <li>
                    <i class="fas fa-search faa-horizontal animated"></i>&nbsp;&nbsp;<a href="../research-development"><i>Scientific Research Project</i></a>
                </li>
                <li>
                    <i class="fas fa-file-signature faa-horizontal animated"></i>&nbsp;&nbsp;<a href="../docs/ruben-andre-barreiro-master-certificate-1.pdf"><i>Master's Thesis</i></a>
                </li>
                <li>
                    <i class="fas fa-file-alt faa-horizontal animated"></i>&nbsp;&nbsp;<a href="../docs/ruben-andre-barreiro-master-certificate-1.pdf"><i>Master's Certificate (Diploma and Transcript)</i></a>
                </li>
            </ul> 
		</li>
		
		<li>
			<font size="2"><b>Final Global Points Average:</b></font>
            <ul>
                <li>
                    <i class="fas fa-certificate faa-horizontal animated"></i>&nbsp;&nbsp;16 of 20
                </li>
            </ul>
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
<a target="_blank" title="Download Rúben André Barreiro's Curriculum Vitae #1 made in LaTeX" href="/docs/ruben-andre-barreiro-cv-1.pdf"><button class="button buttonDocument"><b>Curriculum Vitae #1 📋</b></button></a>
<a target="_blank" title="Download Rúben André Barreiro's Curriculum Vitae #2 made in NovoResumé" href="/docs/ruben-andre-barreiro-cv-2.pdf"><button class="button buttonDocument"><b>Curriculum Vitae #2 📋</b></button></a>
<a target="_blank" title="Download Rúben André Barreiro's Curriculum Vitae #3 made in EuroPass" href="/docs/ruben-andre-barreiro-cv-3.pdf"><button class="button buttonDocument"><b>Curriculum Vitae #3 📋</b></button></a>

<br>
<hr/>
<center><font size="1">*** © Rúben André Barreiro - GitHub's Portfolio/Personal Blog - All rights reserved ***</font></center>
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

<h3 id="hard-skills">
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
						<u>Imperative programming</u>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<u>Object-oriented programming</u>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
					</li>
                        <u>Functional Programming</u>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    <li>
                    </li>
					<li>
						<u>Operative systems & architectures</u>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<u>Data structures</u>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<u>Object-relational databases</u>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<u>Logic programming</u>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<u>Computer networks</u>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<u>Computer graphics &amp; 2D/3D interfaces</u>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<u>Artificial intelligence</u>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<u>Searching algorithms</u>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<u>Genetic algorithms</u>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
					</li>
                    <li>
						<u>Neural networks</u>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<u>Autonomous problem solvers</u>:
						<ul>
							<li>
								<u><i>STRIPS</i></u>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
					<li>
						<u>Modelling and design of software</u>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<u>Graphs algorithms</u>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<u>Distributed systems</u>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
					</li>
                    <li>
						<u>Basic notions of Internet security</u>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<u>Multi-threading</u>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<u>Edge &amp; Fog computing</u>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<u>Intelligent multi-agent systems</u>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
					</li>
				</ul>
			</li>
			<li>
				 <p align="justify"><i class="fas fa-code faa-horizontal animated"></i>&nbsp;&nbsp;<b>Programming languages:</b></p>
        			<ul>
					<li>
						<i class="fas fa-terminal faa-horizontal animated"></i>&nbsp;&nbsp;<u>Imperative languages</u>:
						<ul>
							<li>
								<i>Pascal</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
								<i>C</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
					<li>
						<i class="fas fa-cube faa-horizontal animated"></i>&nbsp;&nbsp;<u>Multi-paradigm languages</u>:
						<ul>
							<li>
								<i>Visual Basic .NET</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
								<i>C++</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
								<i>Java</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
								<i>OCaml (Objective Caml)</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
                                <i>C# (CSharp)</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
                            <li>
								<i>TypeScript</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
                            <li>
								<i>Python</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
                            <li>
                            	<i>Go (Golang)</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>
								<i>Ruby</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
                            <li>
								<i>Lisp</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
                            <li>
								<i>Scala</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
                            <li>
								<i>Lua</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
                            <li>
								<i>Perl</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
                            <li>
								<i>Julia</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
                    <li>
                        <i class="fas fa-hammer faa-horizontal animated"></i>&nbsp;&nbsp;<u>Statically typed languages</u>:
						<ul>
							<li>
								<i>Kotlin</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
                    </li>
                    <li>
                        <i class="fas fa-superscript faa-horizontal animated"></i>&nbsp;&nbsp;<u>Multi-paradigm numerical computing environment</u>:
						<ul>
							<li>
								<i>MATLAB (Matrix Laboratory)</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
                    </li>
					<li>
						<i class="fas fa-microchip faa-horizontal animated"></i>&nbsp;&nbsp;<u>Low-level languages</u>:
						<ul>
							<li>
								<i>Assembly</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
					<li>
						<i class="fas fa-passport faa-horizontal animated"></i>&nbsp;&nbsp;<u>Markup languages</u>:
						<ul>
							<li>
								<i>HTML (Hypertext Markup Language)</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
								<i>XML (Extensible Markup Language)</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
					<li>
						<i class="fas fa-hand-pointer faa-horizontal animated"></i>&nbsp;&nbsp;<u>Interpreted languages</u>:
						<ul>
							<li>
								<i>JavaScript</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
					<li>
						<i class="fab fa-sketch faa-horizontal animated"></i>&nbsp;&nbsp;<u>Style sheet languages</u>:
						<ul>
							<li>
								<i>CSS (Cascade Style Sheet)</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
					<li>
						<i class="fas fa-database faa-horizontal animated"></i>&nbsp;&nbsp;<u>Object-relational database languages</u>:
						<ul>
                            <li>
                                <i class="fab fa-microsoft faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>Microsoft</i></u>:
                                <ul>
                                    <li>
                                        <i>Microsoft SQL Server</i>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </li>
                                </ul>
                            </li>
							<li>
								<i>MySQL</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
								<i>Oracle SQL</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
								<i>PostgreSQL</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
					<li>
						<i class="fas fa-question faa-horizontal animated"></i>&nbsp;&nbsp;<u>Query and functional programming languages</u>:
						<ul>
							<li>
								<i>XQuery (XML Query)</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
                    <li>
						<i class="fas fa-server faa-horizontal animated"></i>&nbsp;&nbsp;<u>Server-side scripting languages</u>:
						<ul>
							<li>
								<i>PHP (PHP: Hypertext Preprocessor)</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
					<li>
						<i class="fas fa-ruler-combined faa-horizontal animated"></i>&nbsp;&nbsp;<u>Software modelling languages</u>:
						<ul>
							<li>
								<i>UML (Unified Modelling Language)</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
					<li>
						<i class="fas fa-ruler faa-horizontal animated"></i>&nbsp;&nbsp;<u>Declarative languages for software modelling</u>:
						<ul>
							<li>
								<i>OCL (Object Constraint Language)</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
					<li>
						<i class="fas fa-pencil-ruler faa-horizontal animated"></i>&nbsp;&nbsp;<u>Formal modelling and specification languages</u>:
						<ul>
							<li>
								<i>VDM++ (Vienna Development Method ++)</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
					<li>
						<i class="fas fa-ruler-vertical faa-horizontal animated"></i>&nbsp;&nbsp;<u>Declarative specification languages</u>:
						<ul>
							<li>
								<i>Alloy</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
					<li>
						<i class="fas fa-brain faa-horizontal animated"></i>&nbsp;&nbsp;<u>Declarative logic languages</u>:
						<ul>
							<li>
								<i>Datalog</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
								<i>Prolog</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
					<li>
						<i class="fas fa-mobile-alt faa-horizontal animated"></i>&nbsp;&nbsp;<u>Mobile development languages</u>:
						<ul>
							<li>
								<i>Android</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
								<i>iOS</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
					<li>
						<i class="fas fa-newspaper faa-horizontal animated"></i>&nbsp;&nbsp;<u>Preparation languages for documents, papers and articles</u>:
						<ul>
							<li>
								<i>LaTeX</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
				</ul>
			</li>
            <li>
                <p align="justify"><i class="fas fa-robot faa-horizontal animated"></i>&nbsp;&nbsp;<b>Robotics middleware:</b></p>
                <ul>
                    <li>
                        <i>ROS (Robot Operating System)</i>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </li>
                </ul>
            </li>
			<li>
				<p align="justify"><i class="fas fa-cog faa-horizontal animated"></i>&nbsp;&nbsp;<b>APIs:</b></p>
        			<ul>
					<li>
						<i class="fab fa-js-square faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>JavaScript</i> APIs</u>:
						<ul>
							<li>
								<i class="fas fa-dice-d6 faa-horizontal animated"></i>&nbsp;&nbsp;<u>2D and 3D programming</u>:
								<ul>
									<li>
										<i>WebGL</i>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
									</li>
								</ul>								
							</li>
						</ul>
					</li>
					<li>
						<i class="fas fa-cubes faa-horizontal animated"></i>&nbsp;&nbsp;<u>Cross-platform APIs</u>:
						<ul>
							<li>
								<i class="fas fa-dice-d6 faa-horizontal animated"></i>&nbsp;&nbsp;<u>2D and 3D programming</u>:
								<ul>
									<li>
										<i>OpenGL</i>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
									</li>
								</ul>							
							</li>
							<li>
								<i class="fas fa-file-signature faa-horizontal animated"></i>&nbsp;&nbsp;<u>Document-oriented databases (NoSQL)</u>:
								<ul>
									<li>
										<i>MongoDB</i>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
									</li>
								</ul>							
							</li>
						</ul>
					</li>
                    <li>
                        <i class="fas fa-cubes faa-horizontal animated"></i>&nbsp;&nbsp;<u>Cross-platform libraries</u>:
                        <ul>
                            <li>
                                <i class="fas fa-eye faa-horizontal animated"></i>&nbsp;&nbsp;<u>Real-time computer vision libraries</u>:
                                <ul>
                                    <li>
                                        <i>OpenCV (Open Source Computer Vision)</i>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <i class="fas fa-dice-d6 faa-horizontal animated"></i>&nbsp;&nbsp;<u>Open-source software graphics libraries</u>:
                                <ul>
                                    <li>
                                        <i>Mesa3D (Mesa 3D Graphics Library)</i>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <i class="fas fa-vr-cardboard faa-horizontal animated"></i>&nbsp;&nbsp;<u>Open-source computer tracking libraries for creation of augmented reality applications</u>:
                                <ul>
                                    <li>
                                        <i>ARToolKit</i>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i class="fas fa-microchip faa-horizontal animated"></i>&nbsp;&nbsp;<u>Heterogeneous computing APIs</u>:
                        <ul>
                            <li>
                                <i>OpenCL (Open Computing Language)</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                        </ul>
                    </li>
                    <li>
						<i class="fas fa-cloud faa-horizontal animated"></i>&nbsp;&nbsp;<u>Centralized services for distributed systems</u>:
						<ul>
							<li>
								<i>Apache ZooKeeper</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>												
					</li>
					<li>
						<i class="fas fa-stream faa-horizontal animated"></i>&nbsp;&nbsp;<u>Open-source streams-processing</u>:
						<ul>
							<li>
								<i>Apache Kafka</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>												
					</li>
					<li>
						<i class="fas fa-globe faa-horizontal animated"></i>&nbsp;&nbsp;<u>Web services</u>:
						<ul>
							<li>
								<i>REST (Representational State Transfer)</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
								<i>SOAP (Simple Object Access Protocol)</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-terminal faa-horizontal animated"></i>&nbsp;&nbsp;<b>Run-time environments:</b></p>
        			<ul>
					<li>
						<i class="fab fa-js-square faa-horizontal animated"></i>&nbsp;&nbsp;<u>JavaScript cross-platforms</u>:
						<ul>
							<li>
								<i>Node.js</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-drafting-compass faa-horizontal animated"></i>&nbsp;&nbsp;<b>Frameworks:</b></p>
        			<ul>
					<li>
						<i class="fas fa-brain faa-horizontal animated"></i>&nbsp;&nbsp;<u>Intelligent multi-agent systems</u>:
						<ul>
							<li>
								<i>JADE (Java Agent Development Framework)</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
					<li>
						<i class="fas fa-cubes faa-horizontal animated"></i>&nbsp;&nbsp;<u>Applications and inversion of control container</u>:
						<ul>
							<li>
								<i>Spring Framework</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
                    <li>
                        <i class="fas fa-sitemap faa-horizontal animated"></i>&nbsp;&nbsp;<u>Object-relational mapping tool</u>:
						<ul>
							<li>
								<i>Hibernate ORM</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
                    </li>
					<li>
						<i class="fab fa-js-square faa-horizontal animated"></i>&nbsp;&nbsp;<u>JavaScript-based open-source framework for front-end web applications</u>:
						<ul>
							<li>
								<i>AngularJS (Angular.js)</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
								<i>Vue.js (Vue)</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
                    <li>
						<i class="fab fa-php faa-horizontal animated"></i>&nbsp;&nbsp;<u>PHP-based open-source framework for web applications</u>:
						<ul>
                            <li>
								<i>Laravel</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
                    <li>
						<i class="fas fa-globe faa-horizontal animated"></i>&nbsp;&nbsp;<u>Open-source front-end framework for developing websites and web applications</u>:
						<ul>
                            <li>
								<i>Bootstrap</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
                    <li>
						<i class="fas fa-atom faa-horizontal animated"></i>&nbsp;&nbsp;<u>Open-source framework for working with noisy quantum computers at the level of pulses, processors, circuits, and algorithms</u>:
						<ul>
                            <li>
								<i>QISKit</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
				</ul>
			</li>
            <li>
				<p align="justify"><i class="fas fa-mobile-alt faa-horizontal animated"></i>&nbsp;&nbsp;<b>Mobile application development frameworks:</b></p>
                <ul>
					<li>
						<i>Apache Cordova</i>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<i>Ionic</i>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-toolbox faa-horizontal animated"></i>&nbsp;&nbsp;<b>IDEs &amp; programming tools:</b></p>
        			<ul>
					<li>
						<i class="fas fa-terminal faa-horizontal animated"></i>&nbsp;&nbsp;<i>Turbo Pascal</i>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<i class="fab fa-codepen faa-horizontal animated"></i>&nbsp;&nbsp;<i>Eclipse IDE</i>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<i class="fab fa-codepen faa-horizontal animated"></i>&nbsp;&nbsp;<i>NetBeans IDE</i>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
                        <i class="fab fa-codepen faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>Jet Brains</i></u>:
                        <ul>
                            <li>
                                <i>App Code</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>
                                <i>CLion</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>
                                <i>Datalore</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>
                                <i>DataGrip</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>
                                <i>GoLand</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>
                                <i>IntelliJ IDEA</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>
                                <i>PhpStorm</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>
                                <i>PyCharm</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>
                                <i>Rider</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>
                                <i>RubyMine</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>
                                <i>WebStorm</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                        </ul>
					</li>
                    <li>
                        <i class="fab fa-microsoft faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>Microsoft Visual Studio</i></u>:
                        <ul>
                            <li>
                                <i>Microsoft Visual Code</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>
                                <i>Xamarin for Visual Studio</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                            <li>
                                <i>Unity3D</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>	
                        </ul>
					</li>
					<li>
                        <i class="fab fa-google faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>Google</i></u>:
                        <ul>
                            <li>
                                <i>Android Studio</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                        </ul>
					</li>
                    <li>
                        <i class="fab fa-apple faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>Apple</i></u>:
                        <ul>
                            <li>
                                <i>Xcode</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </li>
                        </ul>
					</li>	
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-hammer faa-horizontal animated"></i>&nbsp;&nbsp;<b>Assemblers & Compilers:</b></p>
                <ul>
					<li>
						<i>Free Pascal</i>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
					</li>
                    <li>
						<i>Jasmin</i>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-pencil-alt faa-horizontal animated"></i>&nbsp;&nbsp;<b>Text editors:</b></p>
        			<ul>
					<li>
						<i>Notepad++</i>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<i>Atom</i>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<i>Brackets</i>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
					</li>
					<li>
						<i>SublimeText</i>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-box faa-horizontal animated"></i>&nbsp;&nbsp;<b>PL/SQL editors:</b></p>
        			<ul>
					<li>
						<i>Oracle SQL Developer</i>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-database faa-horizontal animated"></i>&nbsp;&nbsp;<b>Database development environment:</b></p>
        			<ul>
					<li>
						<i>Oracle APEX (Oracle Application Express)</i>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-archive faa-horizontal animated"></i>&nbsp;&nbsp;<b>Software platforms:</b></p>
        			<ul>
					<li>
						<i class="fas fa-boxes faa-horizontal animated"></i>&nbsp;&nbsp;<u>Virtualization</u>:
						<ul>
							<li>
								<i class="fas fa-microchip faa-horizontal animated"></i>&nbsp;&nbsp;<u>Hardware (hypervisors)</u>:
								<ul>
									<li>
										<i class="fas fa-cube faa-horizontal animated"></i>&nbsp;&nbsp;<u>Independent</u>:
										<ul>
											<li>
												<i>Oracle VM VirtualBox</i>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
											</li>
											<li>
												<i>QEMU (Quick Emulator)</i>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
											</li>
											<li>
												<i>VMware Workstation</i>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<i class="fas fa-mouse-pointer faa-horizontal animated"></i>&nbsp;&nbsp;<u>Operative system level</u>:
									<ul>
										<li>
											<i class="fas fa-box faa-horizontal animated"></i>&nbsp;&nbsp;<u>Application containers</u>:
											<ul>
												<li>
													<i>Docker</i>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
												</li>
											</ul>
										</li>
									</ul>
							</li>
						</ul>
					</li>
					<li>
						<i class="fas fa-chart-bar faa-horizontal animated"></i>&nbsp;&nbsp;<u>Data science</u>:
						<ul>
							<li>
								<i>RapidMiner</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
                    <li>
                        <i class="fas fa-network-wired faa-horizontal animated"></i>&nbsp;&nbsp;<u>IoT & Cloud platforms for creating, deploying and managing connected products</u>:
                        <ul>
                            <li>
								<i>Atmosphere</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
                        </ul>
                    </li>
					<li>
						<i class="fas fa-microchip faa-horizontal animated"></i>&nbsp;&nbsp;<u>Synthesis and analysis of hardware design languages designs</u>:
						<ul>
							<li>
								<i>Xilinx ISE</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-box-open faa-horizontal animated"></i>&nbsp;&nbsp;<b>Software stacks:</b></p>
        			<ul>
					<li>
						<i>WampServer</i>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-lock faa-horizontal animated"></i>&nbsp;&nbsp;<b>Administration tools:</b></p>
        			<ul>
					<li>
						<i>phpMyAdmin</i>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-code-branch faa-horizontal animated"></i>&nbsp;&nbsp;<b>Version-control systems:</b></p>
    				<ul>
					<li>
                        <i class="fas fa-globe faa-horizontal animated"></i>&nbsp;&nbsp;<u>Web-based hosting services</u>:
						<ul>
							<li>
								<i>Atlassian Bitbucket</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
								<i>GitHub</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
								<i>GitLab</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
					<li>
                        <i class="fab fa-git-square faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>Git</i> clients</u>:
						<ul>
							<li>
								<i>Atlassian Sourcetree</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
								<i>GitHub Desktop</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
								<i>GitKraken</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
					<li>
						<i class="fab fa-git faa-horizontal animated"></i>&nbsp;&nbsp;<u>Branching models for <i>Git</i></u>:
						<ul>
							<li>
								<i>GitFlow</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-file-code faa-horizontal animated"></i>&nbsp;&nbsp;<b>Others:</b></p>
        			<ul>
					<li>
						<i class="fab fa-js-square faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>JavaScript</i>'s file formats</u>:
						<ul>
							<li>
								<i>JSON (JavaScript Object Notation)</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
                    <li>
						<i class="fab fa-js-square faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>JavaScript</i>'s libraries</u>:
						<ul>
                            <li>
                                <i class="fas fa-cubes faa-horizontal animated"></i>&nbsp;&nbsp;<u>Suite of modular libraries and tools which work together to create interactive content on open web technologies</u>:
                                <ul>
                                    <li>
                                        <i class="fas fa-toolbox faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>CreateJS</i></u>:
                                        <ul>
                                            <li>
                                                <i>EaselJS</i>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>        
                                            </li>
                                            <li>
                                                <i>TweenJS</i>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>        
                                            </li>
                                            <li>
                                                <i>SoundJS</i>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>        
                                            </li>
                                            <li>
                                                <i>PreloadJS</i>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>        
                                            </li>
                                            <li>
                                                <i>Zoë</i>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>        
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <i class="fab fa-react faa-horizontal animated"></i>&nbsp;&nbsp;<u>Functional reactive programming</u>:
                                <ul>
                                    <li>
                                        <i>Bacon.js</i>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </li>
                                    <li>
                                        <i>Meteor (MeteorJS)</i>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </li>
                                    <li>
                                        <i>React (React.js/ReactJS)</i>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>   
                                    </li>
                                </ul>
                            </li>
                            <li>
                            </li>
                                <i class="fas fa-chart-pie faa-horizontal animated"></i>&nbsp;&nbsp;<u>Building of interactive diagrams and graphs on the Web</u>:
                                <ul>
                                    <li>
                                        <i>GoJS</i>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </li>
                                </ul>
                            <li>
                                <i class="fas fa-dice-d6 faa-horizontal animated"></i>&nbsp;&nbsp;<u>Web cross-browser creation and displaying of animated 3D computer graphics</u>:
                                <ul>
                                    <li>
                                        <i>Three.js</i>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </li>
                                </ul>
                            </li>
                            <li>
								<i>jQuery</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
                    <li>
                        <i class="fas fa-tools faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>AJAX</i> frameworks</u>:
                        <ul>
                            <li>
                                <i class="fab fa-google faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>Google</i></u>:
                                <ul>
                                    <li>
                                        <i>Google Web Toolkit (GWT/GWT Web Toolkit)</i>
                                        <span class="fa fa-star checked"></span> 
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </li>   
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i class="fab fa-microsoft faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>Microsoft .NET</i> libraries & frameworks</u>:
                        <ul>
                            <li>
                                <i class="fas fa-globe faa-horizontal animated"></i>&nbsp;&nbsp;<u>Web frameworks</u>:
                                <ul>
                                    <li>
                                        <i class="fas fa-server faa-horizontal animated"></i>&nbsp;&nbsp;<u>Server-side open-source web development frameworks</u>:
                                        <ul>
                                            <li>
                                                <i>ASP.NET</i>
                                                <span class="fa fa-star checked"></span> 
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <i class="fas fa-sitemap faa-horizontal animated"></i>&nbsp;&nbsp;<u>Object-relational mapping</u>:
                                        <ul>
                                            <li>
                                                <i>LINQ (Language Integrated Query)</i>
                                                <span class="fa fa-star checked"></span> 
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <i class="fas fa-dice-d20 faa-horizontal animated"></i>&nbsp;&nbsp;<u>3D graphics</u>:
                                <ul>
                                    <li>
                                        <i class="fas fa-gamepad faa-horizontal animated"></i>&nbsp;&nbsp;<u>Game engines</u>:
                                        <ul>
                                            <li>
                                                <i>Unity</i>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                                <span class="fa fa-star"></span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
					<li>
						<i class="fas fa-user faa-horizontal animated"></i>&nbsp;&nbsp;<u>Client-side web development techniques</u>:
						<ul>
							<li>
								<i>AJAX (Asynchronous JavaScript and XML)</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
					<li>
                        <i class="fas fa-cubes faa-horizontal animated"></i>&nbsp;&nbsp;<u>Serializing structured data formats</u>:
                        <ul>
                            <li>
                                <i class="fab fa-google faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>Google</i></u>:
						        <ul>
                                    <li>
                                        <i>Google Protocol Buffers</i>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                    </li>
						      </ul>
                            </li>
                        </ul>
                    </li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-desktop faa-horizontal animated"></i>&nbsp;&nbsp;<b>Computer operating systems:</b></p>
        			<ul>
					<li>
						<i class="fab fa-linux faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>Linux</i></u>:
						<ul>
							<li>
								<i>Ubuntu LTS</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
                            <li>
								<i>Linux Mint</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
					<li>
						<i class="fab fa-windows faa-horizontal animated"></i>&nbsp;&nbsp;<i>Microsoft Windows</i>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
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
						<i class="fab fa-adobe faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>Adobe Creative Cloud</i></u>:
						<ul>
							<li>
								<i>Adobe Illustrator CC</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
								<i>Adobe Photoshop CC</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
								<i>Adobe Lightroom CC</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
								<i>Adobe Lightroom Classic CC</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-video faa-horizontal animated"></i>&nbsp;&nbsp;<b>Video editing:</b></p>
        			<ul>
					<li>
						<i class="fab fa-adobe faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>Adobe Creative Cloud</i></u>:
						<ul>
							<li>
								<i>Adobe After Effects CC</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
							<li>
								<i>Adobe Premiere Pro CC</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-globe faa-horizontal animated"></i>&nbsp;&nbsp;<b>Web development:</b></p>
        			<ul>
					<li>
						<i class="fab fa-adobe faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>Adobe Creative Cloud</i></u>:
						<ul>
							<li>
								<i>Adobe Dreamweaver CC</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
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
						<i class="fab fa-microsoft faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>Microsoft Office</i></u>:
						<ul>
							<li>
								<i>Microsoft Access</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fas fa-file-alt faa-horizontal animated"></i>&nbsp;&nbsp;<b>Documents:</b></p>
        			<ul>
					<li>
						<i class="fab fa-microsoft faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>Microsoft Office</i></u>:
						<ul>
							<li>
								<i>Microsoft Word</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fab fa-slideshare faa-horizontal animated"></i>&nbsp;&nbsp;<b>Presentations:</b></p>
        			<ul>
					<li>
						<i class="fab fa-microsoft faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>Microsoft Office</i></u>:
						<ul>
							<li>
								<i>Microsoft Powerpoint</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				<p align="justify"><i class="fa fa-table faa-horizontal animated"></i>&nbsp;&nbsp;<b>Spreadsheets:</b></p>
        			<ul>
					<li>
						<i class="fab fa-microsoft faa-horizontal animated"></i>&nbsp;&nbsp;<u><i>Microsoft Office</i></u>:
						<ul>
							<li>
								<i>Microsoft Excel</i>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
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
		<p align="justify"><i class="fas fa-handshake faa-horizontal animated"></i>&nbsp;&nbsp;<i><b>Teamwork:</b></i></p>
		<ul>
			<li>
				<p align="justify">
					<i><u>Accept feedback</u></i>, <i><u>collaborative</u></i>, <i><u>customer service</u></i>, <i><u>dealing with difficult situations</u></i>, <i><u>empathetic</u></i>, <i><u>dealing with difficult personalities</u></i>, <i><u>intercultural competence</u></i>, <i><u>interpersonal skills</u></i>, <i><u>influential</u></i>, <i><u>networking</u></i>, <i><u>social skills</u></i> and <i><u>team player</u></i>; 
				</p>
			</li>
		</ul>
	</li>
	<li>
		<p align="justify"><i class="fas fa-hand-holding-heart faa-horizontal animated"></i>&nbsp;&nbsp;<i><b>Work ethic:</b></i></p>
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

<a target="_blank" title="Download Rúben André Barreiro's Full Competences made in Microsoft Powerpoint" href="/docs/ruben-andre-barreiro-full-competences-1.pdf"><button class="button buttonDocument"><b>Full Competences Document 📑</b></button></a>

<br>
<hr/>
<center><font size="1">*** © Rúben André Barreiro - GitHub's Portfolio/Personal Blog - All rights reserved ***</font></center>
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

<p align="justify">I'm addicted to <b>technologies</b> and <b>informatics</b>! I consider myself a <b>high-tech lover!</b> 🤓</p>

<p align="justify">I love to <b>programming</b> and <b>coding</b>! 👨‍💻</p>

<p align="justify">In <b>Computer Science and Engineering</b>, <b>IT/IS</b> and <b>Informatics</b> area, I personally, have a huge interest in:</p>

<ul>
    <li>
        <b><i><u>Web &amp; Internet Applications' Design</u></i></b>
    </li>
    <li>
        <b><i><u>2D/3D Graphics &amp; Interfaces</u></i></b>
    </li>
    <li>
        <b><i><u>Computer Networks</u></i></b>
    </li>
    <li>
        <b><i><u>Distributed Systems</u></i></b>
    </li>
    <li>
        <b><i><u>Cloud Computing</u></i></b>
    </li>
    <li>
        <b><i><u>Edge &amp; Fog Computing</u></i></b>
    </li>
    <li>
        <b><i><u>Mobile &amp; Pervasive Computing</u></i></b>
    </li>
    <li>
        <b><i><u>Internet &amp; Computer Network's Security</u></i></b>
    </li>
    <li>
        <b><i><u>Cybersecurity</u></i></b>
    </li>
    <li>
        <b><i><u>Artificial Intelligence</u></i></b>
    </li>
    <li>
        <b><i><u>Machine &amp; Deep Learning</u></i></b>
    </li>
    <li>
        <b><i><u>Data Mining</u></i></b>
    </li>
    <li>
        <b><i><u>Data Analytics &amp; Modelling</u></i></b>
    </li>
    <li>
        <b><i><u>Computational Game Theory</u></i></b>
    </li>
    <li>
        <b><i><u>Autonomous &amp; Intelligent Agents</u></i></b>
    </li>
    <li>
        <b><i><u>Computer Vision</u></i></b>
    </li>
    <li>
        <b><i><u>Robotics</u></i></b>
    </li>
    <li>
        <b><i><u>Cybernetics</u></i></b>
    </li>
    <li>
        <b><i><u>Multi-threading Systems</u></i></b>
    </li>
    <li>
        <b><i><u>Concurrency &amp; Paralelism</u></i></b>
    </li>
    <li>
        <b><i><u>High Performance Computing</u></i></b>
    </li>
    <li>
        <b><i><u>Quantum Computing</u></i></b>
    </li>
    <li>
        <b><i><u>Games &amp; Simulation</u></i></b>
    </li>
    <li>
        <b><i><u>Augmented &amp; Virtual Reality</u></i></b>
    </li>
</ul>

<p align="justify"><u><i>I love to <b>improve myself constantly</b>! I love to <b>study</b> and <b>learn</b> more and more, everyday! I think <b>it's never late to learn something</b> new and I also think that, <b>I will always feel a little like a student</b>, no matter how much time passes!</i></u> 😊</p>

<p align="justify">I also have a big interest in <b>design</b>, <b>photography</b>, <b>multimedia</b>, <b>fashion</b>, <b>business</b>, <b>enterprise's management</b>, <b>marketing</b>, <b>drawing</b> and <b>poetry</b>. 😍</p>


<br>
<hr/>
<center><font size="1">*** © Rúben André Barreiro - GitHub's Portfolio/Personal Blog - All rights reserved ***</font></center>
<hr/>
<br>


<h2 id="to-do-goals-accomplishments-done-title">
    <i>To Do List and Goals/Accomplishments Done</i>
    <span class="fa-stack">
        <i class="fa fa-circle-thin fa-stack-2x"></i>
        <i class="fa fa-check fa-stack-1x faa-tada animated"></i>
    </span>
</h2>
<hr/>

<h3 id="to-do-list">
<p align="justify"><i class="fa fa-caret-right faa-horizontal animated"></i>&nbsp;&nbsp;<i><u>To Do List:</u></i></p>
</h3>



<p align="justify">&nbsp;&nbsp;&nbsp;<i class="fa fa-lightbulb faa-horizontal animated"></i>&nbsp;&nbsp;<i><u><b>Create/Start</b></u></i>:</p>


<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>My own business/enterprise</u></i></p>

<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>My portfolio/personal blog</u></i> ✔️ <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="1">(in 2018)</font></p>
    
<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>My first Research and Development scientific project</u></i> ✔️ <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="2">(<i><u>Hyrax - DiCE at NOVA LINCS in FCT NOVA - Faculty of Sciences and Technology of New University of Lisbon</u></i>)</font> <font size="1">(in 2017)</font></p>
    
<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>Computer programming</u></i> ✔️ <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="2">(<i><u>at High School of Monte de Caparica</u></i>)</font> <font size="1">(in 2009)</font></p>



<p align="justify">&nbsp;&nbsp;&nbsp;<i class="fa fa-chalkboard-teacher faa-horizontal animated"></i>&nbsp;&nbsp;<i><u><b>Learn</b></u></i>:</p>
    

<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>To play piano</u></i></p>
    
<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>Japanese</u></i></p>
    
<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>Spanish</u></i></p>
    
<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>German</u></i></p>

<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>French</u></i></p>
    
<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>English</u></i> ✔️ <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="2">(<i><u>at Middle/Preparatory School 2.3 of Comandante Conceição e Silva</u></i>)</font> <font size="1">(in 2002)</font></p>



<p align="justify">&nbsp;&nbsp;&nbsp;<i class="fa fa-plane-departure faa-horizontal animated"></i>&nbsp;&nbsp;<i><u><b>Travel to</b></u></i>:</p>


<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>Brazil</u></i></p>

<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>Austria</u></i></p>
    
<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>Switzerland</u></i> ✔️ <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="2">(Visited <i><u>Zurich</u></i>, <i><u>Schwyz</u></i>, <i><u>Luzern</u></i> and <i><u>Basel</u></i>)</font> <font size="1">(in 2009)</font></p>
    
<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>Italy</u></i></p>
    
<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>Germany</u></i></p>
    
<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>France</u></i></p>
    
<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>Spain</u></i></p>
    
<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>Porto</u></i> ✔️ <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="1">(in 2018)</font></p>



<p align="justify">&nbsp;&nbsp;&nbsp;<i class="fa fa-user-graduate faa-horizontal animated"></i>&nbsp;&nbsp;<i><u><b>Complete the following degrees</b></u></i>:</p>


<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>Ph.D (Doctor of Philosophy) in Computer Science and Engineering</u></i></p>
    
<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>MBA (Master of Business Administration)</u></i></p>

<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>MSc. (Master) in Computer Science and Engineering</u></i></p>

<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>BSc. (Bachelor) in Computer Science and Engineering</u></i> ✔️ <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="2">(<i><u>at FCT NOVA - Faculty of Sciences and Technology of New University of Lisbon</u></i>)</font> <font size="1">(in 2018)</font></p>



<p align="justify">&nbsp;&nbsp;&nbsp;<i class="fa fa-money-bill-alt faa-horizontal animated"></i>&nbsp;&nbsp;<i><u><b>Buy</b></u></i>:</p>


<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>Canon 1300D</u></i></p>   



<p align="justify">&nbsp;&nbsp;&nbsp;<i class="fa fa-bullseye faa-horizontal animated"></i>&nbsp;&nbsp;<i><u><b>Others</b></u></i>:</p>


<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>Do volunteering in Africa</u></i></p>
    
<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>Do a college's semester/year in a foreign european country, using the ERASMUS' exchange program</u></i></p>

<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>Get the drive license for cars and bikes</u></i></p>

<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-caret-right"></i>&nbsp;&nbsp;<i><u>Get a tattoo</u></i> ✔️ <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="2">(<i><u>at Flavius Tattoos - Almada, Setúbal, Portugal</u></i>)</font> <font size="1">(in 2014)</font></p>


<br>
<hr/>
<center><font size="1">*** © Rúben André Barreiro - GitHub's Portfolio/Personal Blog - All rights reserved ***</font></center>
<hr/>
<br>


<h3 id="goals-accomplishments-done-list">
<p align="justify"><i class="fa fa-caret-right faa-horizontal animated"></i>&nbsp;&nbsp;<i><u>Goals/Accomplishments Done:</u></i></p>
</h3>

<center>
    <h2><b><u>My Timeline</u></b></h2> 
</center>

<div class="timeline" id="goals-accomplishments-list">
  <div class="container left">
    <div class="content">
      <h4>January 2019</h4>
      <h5><b><i><u>I started my Master degree in Computer Engineering at Faculty of Sciences and Technology of New University of Lisbon - FCT NOVA!</u></i></b></h5>
        <p align="justify"><font size="2"><b>I started my Master degree in Computer Engineering at Faculty of Sciences and Technology of New University of Lisbon - FCT NOVA!</b> After a short time in <u><i>Porto</i></u>, I decided to return to <u><i>Lisbon</i></u> and <u><i>Almada</i></u>, to start the <u><i>Master degree</i></u> in <u><i>Computer Engineering</i></u>, to try to achieve another of my personal and academic goals. 👨‍🎓</font></p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h4>October 2018</h4>
      <h5><b><i><u>I started working as app designer and developer at U.Porto Media Innovation Labs!</u></i></b></h5>
        <p align="justify"><font size="2"><b>I started working as app designer and developer at U.Porto Media Innovation Labs!</b> I worked in designing and development the interface of an app for mobile devices' <u><i>Android</i></u> and <u><i>iOS</i></u> operative systems called "<u><i>Everyone Is a Hero</i></u>". This mobile app was designed in <u><i>Adobe Illustrator</i></u> and <u><i>Adobe Photoshop</i></u>, and was developed in <u><i>Unity 3D</i></u>. The "<u><i>Everyone Is a Hero</i></u>" app was developed with the collaboration of <u><i>Faculty of Engineering of University of Porto (FEUP)</i></u>, <u><i>U.Porto Media Innovation Labs</i></u> and <u><i>Bright Digital</i></u>. This app aims to offer interactive and appellative support and information to families, educators and volunteers of children who suffer of cancer diseases. Other goal of this app, it's to, in a near future, be linked to the video game app for these same children, called <u><i>"Hope"</i></u>, that's being also developed by <u><i>Bright Digital</i></u>. 🧒</font></p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h4>July 2018</h4>
      <h5><b><i><u>I finished my Bachelor degree in Computer Sciences and Engineering at FCT NOVA (Faculty of Sciences and Technology of New University of Lisbon)!</u></i></b></h5>
        <p align="justify"><font size="2"><b>I finished my Bachelor degree in Computer Sciences and Engineering at FCT NOVA (Faculty of Sciences and Technology of New University of Lisbon)!</b> <u><i>After so much hardwork, effort and a ton of hours studying, I achieved one of my greatest ambitions of all time! I finally, finished my Bachelor degree in Computer Sciences and Engineering at FCT NOVA (Faculty of Sciences and Engineering of New University of Lisbon) with a final average grade of 15 of 20</i></u>. I finished this <u><i>Bachelor degree</i></u> with <u><i>180 ECTSs completed</i></u>, <u><i>1 R&amp;D project</i></u> made and <u><i>many other personal/professional achievements</i></u>. 👨‍🎓</font></p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h4>February 2017</h4>
      <h5><b><i><u>I started my first Research and Development Scientific Project at NOVA LINCS (FCT NOVA), during my Bachelor degree!</u></i></b></h5>
        <p align="justify"><font size="2"><b>I started my first Research and Development Scientific Project at NOVA LINCS (FCT NOVA), during my Bachelor degree!</b> In the <u><i>3rd year</i></u> of my <u><i>Bachelor degree</i></u>, it was proposed to work in a <u><i>Department's Research and Development Scientific Project</i></u>. I choosed to work in <u><i>R&amp;D</i></u> project called <u><i>Hyrax</i></u>, that was related with <u><i>Computer and Mobile (3G and 4G) Networks</i></u>, <u><i>Distributed Systems</i></u> and <u><i>Cloud Computing Systems</i></u>, most specifically in <u><i>Edge Computing</i></u>. This <u><i>R&amp;D project</i></u>, in addition to the participation of <u><i>FCT NOVA</i></u>, also had the main participations of <u><i>FCUP (Faculty of Sciences of University of Porto)</i></u> and <u><i>CS-CMU (Carnegie Mellon University's School of Computer Science)</i></u>, among many <u><i>other scientific/industrial collaborations</i></u>. My project was a smaller part/section of the <u><i>Hyrax</i></u> project, called <u><i>DiCE (Distributed Computing at the Edge)</i></u>. My project was supervised by <u><i>Hervé Paulino</i></u> and I finished my participation on this <u><i>R&amp;D project</i></u> with a <u><i>17 of 20</i></u> final grade. 🔍</font></p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h4>September 2013</h4>
      <h5><b><i><u>I entered to the college (Faculty of Sciences and Technology of New University of Lisbon - FCT NOVA) to start my Bachelor degree in Computer Sciences and Engineering!</u></i></b></h5>
      <p align="justify"><font size="2"><b>I entered to the college (Faculty of Sciences and Technology of New University of Lisbon - FCT NOVA) to start my Bachelor degree in Computer Sciences and Engineering!</b> <u><i>After so much work and study to pass through the Math's Exam</i></u> (what was horrible for me at the time) and get a <u><i>good final average grade</i></u> that allows me to enter the <u><i>Academic World</i></u> for the first time, I did it, surprising and shocking everybody! 💪</font></p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h4>July 2012</h4>
      <h5><b><i><u>I finished my Professional Course of Technician of Programming and Management of Computer Systems in High School of Monte de Caparica!</u></i></b></h5>
      <p align="justify"><font size="2"><b>I finished my Professional Course of Technician of Programming and Management of Computer Systems in High School of Monte de Caparica!</b> <u><i>After 3 years, since I started computer programming for the first time in my life</i></u>, I could say at the time, and thereafter, that I was officialy an <u><i>IT/IS Programmer &amp; Technician</i></u>! 🖱️</font></p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h4>September 2009</h4>
      <h5><b><i><u>I started my Professional Course of Technician of Programming and Management of Computer Systems in High School of Monte de Caparica!</u></i></b></h5>
        <p align="justify"><font size="2"><b>I started my Professional Course of Technician of Programming and Management of Computer Systems in High School of Monte de Caparica!</b> How <u><i>I always had a huge interest</i></u> in <u>Informatics</u> and <u>IT/IS</u> area. So, I decided to enter to this course to <u><i>complete high school</i></u> and, at the same time, <u><i>start to learn about computer programming</i></u>! 👨‍💻</font></p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h4>March 1999</h4>
      <h5><b><i><u>I lost my first milk-tooth, as happens to every child!</u></i></b></h5>
        <p align="justify"><font size="2"><b>I lost my first milk-tooth, as happens to every child!</b> When <u><i>I was 6 year old, I started to say goodbye to my child dentition</i></u>. <u><i>I asked a wish to the tooth fairy</i></u> and put my lost tooth under the cushion in my bed <u><i>hoping she would make it come true but she never did</i></u>, for my sadness at the time! 🧚</font></p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h4>September 1998</h4>
      <h5><b><i><u>I started my 1st grade at Elementary School Nº. 1 of Cova da Piedade!</u></i></b></h5>
        <p align="justify"><font size="2"><b>I started my 1st grade at Elementary School Nº. 1 of Cova da Piedade!</b> Was here, where <u><i>I learn to count numbers</i></u> and <u><i>met the alphabet</i></u>, <u><i>among other many basic and elementary things</i></u>, for the first time in my life! 🧒</font></p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h4>December 1993</h4>
      <h5><b><i><u>I started to walk to the whole society and world watch!</u></i></b></h5>
        <p align="justify"><font size="2"><b>I started to walk to the whole society and world watch!</b> <u><i>After many tries and falls</i></u>, I achieved what seemed impossible at the time, and <u><i>started to walk alone without anyone's help</i></u>, for my mother's shock again. 👏</font></p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h4>October 1993</h4>
      <h5><b><i><u>I spoke my first word to the whole society and world listen!</u></i></b></h5>
        <p align="justify"><font size="2"><b>I spoke my first word to the whole society and world listen!</b> The spoken word was "<i><u>Coca-Cola</u></i>" when I asking my mother for one obviously, for her amazement and joy! This happened <u><i>while I was hitting the window of drinks and beverages of a local caffe, to getting her attention</i></u>. 👩‍👦</font></p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h4>November 1992</h4>
      <h5><b><i><u>I was born to be posteriorly, presented to the whole society and world!</u></i></b></h5>
      <p align="justify"><font size="2"><b>I was born to be posteriorly, presented to the whole society and world</b> under the name <b><i><u>Rúben André Letra Barreiro</u></i></b> at <i><u>9:10 am of November 19, 1992</u></i> in <i><u>Maternidade Alfredo da Costa</u></i> in <i><u>São Sebastião da Pedreira</u></i> (<i><u>Avenidas Novas</u></i>, <i><u>Lisbon</u></i>, <i><u>Portugal)</u></i>! 👶</font></p>
    </div>
  </div>
</div>

<br>
<hr/>
<center><font size="1">*** © Rúben André Barreiro - GitHub's Portfolio/Personal Blog - All rights reserved ***</font></center>
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

<p align="justify"><i class="fa fa-caret-right faa-horizontal animated"></i>&nbsp;&nbsp;<i><u>Coming soon...</u></i></p>
