// WebGL Global Variables
var gl, canvas, program, autoInterval;

// Vertex Shader Variables
var vPosition, vColor, vSizeFigureSpeed, vBlurDirection;

// Elements obtained from HTML page
var redColorInUse, greenColorInUse, blueColorInUse, alphaColorInUse;
var figureInUse;
var autoButtonClick;
var blurEffectRadios;
var rotationDirectionRadios;

// WebGL Buffers for attributes of each point
var bufferPoints, bufferColors, bufferSizesFiguresSpeeds, bufferBlursDirections;

// Global Instance Variables
var currentColor;
var currentSizeFigureSpeed = vec3(1.0, 0.0, 1.0);
var autoGenerationOption = false;
var currentBlurDirection = vec2(0.0, -1.0);

// Time spent from the beggining of the program
var time = 0;

// Number of figures drawed
var numFigures = 0;

// Maximum Number of Points to Draw
var NUM_MAX_POINTS = 30000;

// Buffers' Constraints
var NUM_MEMORY_SIZE = 4;
var SIZE_POINT = 2;
var SIZE_COLOR = 4;
var SIZE_SIZEFIGURESPEED = 3;
var SIZE_BLURDIRECTION = 2;

// Other constraints
var FIGURESIZE_FACTOR = 200.0;
var MAX_RGBACOLOR_FACTOR = 255.0;

// Arrays for the attributes of each point
var points = [];
var colors = [];
var sizesFiguresSpeeds = [];
var blursDirections = [];

var newPoint;

window.onload = function init() {

    // CANVAS CLICK EVENT
    canvas = document.getElementById("gl-canvas");
    
    // COLORS CHANGE EVENTS
    redColorInUse = document.getElementById("redFactor");
    greenColorInUse = document.getElementById("greenFactor");
    blueColorInUse = document.getElementById("blueFactor");
    alphaInUse = document.getElementById("alphaFactor");
    
    // FIGURE CHANGE EVENT
    figureInUse = document.getElementById("figureInUse");
    
    // AUTO BUTTON CLICK EVENT
    autoButtonClick = document.getElementById("autoButtonClick");
    
    // BLUR EFFECT RADIO CHANGE EVENT
    blurEffectRadios = document.getElementsByName("blurEffectRadios");
    
    // ROTATION DIRECTION CHANGE EVENT
    rotationDirectionRadios = document.getElementsByName("rotationDirectionsRadios");
    
    gl = WebGLUtils.setupWebGL(canvas);
    
    if(!gl) {
        alert("WebGL isn't available");
    }
    
    // Load shaders and initialize attribute buffers
    program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);
    
    uTime = gl.getUniformLocation(program, "time");
    
    vPosition = gl.getAttribLocation(program, "vPosition");
    vColor = gl.getAttribLocation(program, "vColor");
    vSizeFigureSpeed = gl.getAttribLocation(program, "vSizeFigureSpeed");
    vBlurDirection = gl.getAttribLocation(program, "vBlurDirection");
    
    // EVENT LISTENERS
    // Canvas' Clicks
    canvas.addEventListener('click', newFigureByClick);
    
    // Figures' Colors
    initColors();
    
    // Figures' Choices
    initFigures();
    
    // Blur's and Direction's Choices
    initBlurDirection();
    
    redColorInUse.addEventListener("change", redColorChangeHandler);
    greenColorInUse.addEventListener("change", greenColorChangeHandler);
    blueColorInUse.addEventListener("change", blueColorChangeHandler);
    alphaInUse.addEventListener("change", alphaColorChangeHandler);
    
    // Figures' Shapes
    figureInUse.addEventListener("change", figureChangeHandler);
    
    // Auto Figures' Generation
    autoButtonClick.addEventListener("click", autoButtonClickHandler);
    
    // Blur Effect Option
    blurEffectChangeHandler();
    
    // Rotation Direction Option
    rotationDirectionChangeHandler();
    
    // Configure WebGL
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.5, 0.5, 0.5, 0.6);
    
    bufferPoints = gl.createBuffer();
    bufferColors = gl.createBuffer();
    bufferSizesFiguresSpeeds = gl.createBuffer();
    bufferBlursDirections = gl.createBuffer();
    
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferPoints);
    gl.bufferData(gl.ARRAY_BUFFER, (NUM_MAX_POINTS * NUM_MEMORY_SIZE * SIZE_POINT), gl.DYNAMIC_DRAW);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferColors);
    gl.bufferData(gl.ARRAY_BUFFER, (NUM_MAX_POINTS * NUM_MEMORY_SIZE * SIZE_COLOR), gl.DYNAMIC_DRAW);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferSizesFiguresSpeeds);
    gl.bufferData(gl.ARRAY_BUFFER, (NUM_MAX_POINTS * NUM_MEMORY_SIZE * SIZE_SIZEFIGURESPEED), gl.DYNAMIC_DRAW);    
    
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferBlursDirections);
    gl.bufferData(gl.ARRAY_BUFFER, (NUM_MAX_POINTS * NUM_MEMORY_SIZE * SIZE_BLURDIRECTION), gl.DYNAMIC_DRAW); 
    
    gl.enable(gl.BLEND);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    
    render();
}

function convertCoord(p) {
    var x = (-1.0) + ((2.0 * (p[0]))/canvas.width);
    var y = (-1.0) + ((2.0 * (canvas.height - p[1]))/canvas.height);
    
    return vec2(x, y);
}

function drawFigure(p) {
    var speed = Math.floor(Math.random() * 1.0) + 0.1;
    currentSizeFigureSpeed = vec3((Math.random() * FIGURESIZE_FACTOR), currentSizeFigureSpeed[1], speed);
    
    points.push(p);
    colors.push(currentColor);
    sizesFiguresSpeeds.push(currentSizeFigureSpeed);
    blursDirections.push(currentBlurDirection);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferPoints);
    gl.bufferSubData(gl.ARRAY_BUFFER, (numFigures * NUM_MEMORY_SIZE * SIZE_POINT), flatten(points[numFigures]), gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(vPosition, SIZE_POINT, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferColors);
    gl.bufferSubData(gl.ARRAY_BUFFER, (numFigures * NUM_MEMORY_SIZE * SIZE_COLOR), flatten(colors[numFigures]), gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(vColor, SIZE_COLOR, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vColor);

    gl.bindBuffer(gl.ARRAY_BUFFER, bufferSizesFiguresSpeeds);
    gl.bufferSubData(gl.ARRAY_BUFFER, (numFigures * NUM_MEMORY_SIZE * SIZE_SIZEFIGURESPEED), flatten(sizesFiguresSpeeds[numFigures]), gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(vSizeFigureSpeed, SIZE_SIZEFIGURESPEED, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vSizeFigureSpeed);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferBlursDirections);
    gl.bufferSubData(gl.ARRAY_BUFFER, (numFigures * NUM_MEMORY_SIZE * SIZE_BLURDIRECTION), flatten(blursDirections[numFigures]), gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(vBlurDirection, SIZE_BLURDIRECTION, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vBlurDirection);

    numFigures++;
}

function newFigureByClick(e) {
    if(!autoGenerationOption) {
        var coord = vec2(e.offsetX, e.offsetY);
        newPoint = convertCoord(coord);   
    
        drawFigure(newPoint, false);
    }
}

function initColors() {
    redColorInUse = document.getElementById("redFactor");
    greenColorInUse = document.getElementById("greenFactor");
    blueColorInUse = document.getElementById("blueFactor");
    alphaInUse = document.getElementById("alphaFactor");
    
    currentColor = vec4(redColorInUse.value, greenColorInUse.value, blueColorInUse.value, alphaInUse.value);
    
    var newRGBAValue = 'rgba(' + Math.round((MAX_RGBACOLOR_FACTOR * currentColor[0])) + ', ' + Math.round((MAX_RGBACOLOR_FACTOR * currentColor[1])) + ', ' + Math.round((MAX_RGBACOLOR_FACTOR * currentColor[2])) + ', ' + currentColor[3] + ')';
    
    var preview = document.getElementById('colorPreview');
    preview.style.backgroundColor = newRGBAValue; 
}

function initFigures() {
    figureInUse = document.getElementById("figureInUse");
    
    currentSizeFigureSpeed = vec3(currentSizeFigureSpeed[0], figureInUse.value, currentSizeFigureSpeed[2]);
    
    var blurOptions = document.getElementById('blurOption');
    
    // Hide Blur Option for Figures without Blur Effect
    if(figureInUse.value > 5.1) {    
        blurOptions.style.display = 'none';
    }
    else {
         blurOptions.style.display = 'initial';
    }
}

function initBlurDirection() {
    var blurOptionRadios = document.getElementsByName("blurEffectRadios");
    var directionOptionRadios = document.getElementsByName("rotationDirectionsRadios");
    
    var blurOption = (blurOptionRadios[0].checked) ? 1.0 : 0.0;
    var directionOption = (directionOptionRadios[0].checked) ? -1.0 : 1.0;
    
    currentBlurDirection = vec2(blurOption, directionOption);
}

function redColorChangeHandler(e) {    
    currentColor = vec4(parseFloat(this.value), currentColor[1], currentColor[2], currentColor[3]);
    
    var newRGBAValue = 'rgba(' + Math.round((MAX_RGBACOLOR_FACTOR * currentColor[0])) + ', ' + Math.round((MAX_RGBACOLOR_FACTOR * currentColor[1])) + ', ' + Math.round((MAX_RGBACOLOR_FACTOR * currentColor[2])) + ', ' + currentColor[3] + ')';
    
    var preview = document.getElementById('colorPreview');
    preview.style.backgroundColor = newRGBAValue; 
}

function greenColorChangeHandler(e) {
    currentColor = vec4(currentColor[0], parseFloat(this.value), currentColor[2], currentColor[3]);
    
    var newRGBAValue = 'rgba(' + Math.round((MAX_RGBACOLOR_FACTOR * currentColor[0])) + ', ' + Math.round((MAX_RGBACOLOR_FACTOR * currentColor[1])) + ', ' + Math.round((MAX_RGBACOLOR_FACTOR * currentColor[2])) + ', ' + currentColor[3] + ')';
    
    var preview = document.getElementById('colorPreview');
    preview.style.backgroundColor = newRGBAValue;
}

function blueColorChangeHandler(e) {
    currentColor = vec4(currentColor[0], currentColor[1], parseFloat(this.value), currentColor[3]);
    
    var newRGBAValue = 'rgba(' + Math.round((MAX_RGBACOLOR_FACTOR * currentColor[0])) + ', ' + Math.round((MAX_RGBACOLOR_FACTOR * currentColor[1])) + ', ' + Math.round((MAX_RGBACOLOR_FACTOR * currentColor[2])) + ', ' + currentColor[3] + ')';
    
    var preview = document.getElementById('colorPreview');
    preview.style.backgroundColor = newRGBAValue;
}

function alphaColorChangeHandler(e) {
    currentColor = vec4(currentColor[0], currentColor[1], currentColor[2], parseFloat(this.value));
    
    var newRGBAValue = 'rgba(' + Math.round((MAX_RGBACOLOR_FACTOR * currentColor[0])) + ', ' + Math.round((MAX_RGBACOLOR_FACTOR * currentColor[1])) + ', ' + Math.round((MAX_RGBACOLOR_FACTOR * currentColor[2])) + ', ' + currentColor[3] + ')';
    
    var preview = document.getElementById('colorPreview');
    preview.style.backgroundColor = newRGBAValue;

}

function figureChangeHandler(e) {
    currentSizeFigureSpeed = vec3(currentSizeFigureSpeed[0], parseFloat(this.value), currentSizeFigureSpeed[2]);
    
    var blurOptions = document.getElementById('blurOption');
    
    // Hide Blur Option for Figures without Blur Effect
    if(this.value > 5.1) {    
        blurOptions.style.display = 'none';
    }
    else {
        blurOptions.style.display = 'initial';
    }
}

function autoFiguresGeneration() {
    if(autoGenerationOption) {
        coordX = Math.floor(Math.random() * canvas.width) + 0;
        coordY = Math.floor(Math.random() * canvas.height) + 0;
        
        var coord = vec2(coordX, coordY);
        newPoint = convertCoord(coord);   
    
        drawFigure(newPoint);
    }
}

function autoButtonClickHandler(e) {
    autoGenerationOption = !autoGenerationOption;
    
    if(autoGenerationOption) {
        autoInterval = setInterval(autoFiguresGeneration, 500);
        document.getElementById("autoButtonClick").value = "On";
    }
    else {
        clearInterval(autoInterval);
        document.getElementById("autoButtonClick").value = "Off";
    }
}

function blurEffectChangeHandler() {
    for(var i = 0, length = blurEffectRadios.length; i < length; i++) {
        blurEffectRadios[i].onclick = function() {    
            
            var newBlurOption = currentBlurDirection[0];
            
            if(blurEffectRadios[0].checked) {
                newBlurOption = 1.0;
            }
            else {
                newBlurOption = 0.0;
            }
            currentBlurDirection = vec2(newBlurOption, currentBlurDirection[1]);
        }
    }
}

function rotationDirectionChangeHandler() {
    for(var i = 0, length = rotationDirectionRadios.length; i < length; i++) {
        rotationDirectionRadios[i].onclick = function() { 
            
            var newDirectionOption = currentBlurDirection[1];
            
            if(rotationDirectionRadios[0].checked) {
                newDirectionOption = -1.0;
            }
            else {
                newDirectionOption = 1.0;
            }
            
            currentBlurDirection = vec2(currentBlurDirection[0], newDirectionOption);
        }
    }
}

function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform1f(uTime, time);
    
    if(numFigures > 0 && numFigures < NUM_MAX_POINTS) {
        gl.drawArrays(gl.POINTS, 0, numFigures);
        
        time += 1;
    }
    
    window.requestAnimationFrame(render);
}