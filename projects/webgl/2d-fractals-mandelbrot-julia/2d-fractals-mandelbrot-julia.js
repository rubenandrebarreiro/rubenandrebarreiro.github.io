// FCT NOVA | FCT-UNL (Faculty of Sciences and Technology of New University of Lisbon)
// Integrated Master (BSc./MSc.) of Computer Engineering

// Computer Graphics and Interfaces (2016-2017)

// Lab Work 1 - Fractals - Benoit Mandelbrot & Gaston Julia Sets

// Daniel Filipe Pimenta - no. 45404 - d.pimenta@campus.fct.unl.pt
// Ruben André Barreiro - no. 42648 - r.barreiro@campus.fct.unl.pt

var canvas = null;
var gl = null;

var factorPos = -1;
var scalePos = -1;
var centerPos = -1;
var mandelbrotPos = -1;
var cPos = -1;

var scale = 1.0;

window.onload = function init() {

    canvas = document.getElementById("gl-canvas");
    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl)
        alert("WebGL isn't available");

    var vertices = [
        vec2(-1, -1),
        vec2(1, -1),
        vec2(-1, 1),
        vec2(1, 1)
    ];

     // Configure WebGL
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    // Load shaders and initialize attribute buffers
    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    // Load the data into the GPU
    var bufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);

    // Associate our shader variables with our data buffer
    var vPosition = gl.getAttribLocation(program, "vPosition");
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    // Get uniform variables locations
    mandelbrotPos = gl.getUniformLocation(program, "mandelbrot");
    cPos = gl.getUniformLocation(program, "c");
    factorPos = gl.getUniformLocation(program, "factor");
    centerPos = gl.getUniformLocation(program, "center");
    scalePos = gl.getUniformLocation(program, "scale");


    handleFractalType();

    handleFactor();

    handleDrag();

    handleZoom();


    render();
};

function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    requestAnimFrame(render);
}

// Handle zoom of fractal image
function handleZoom() {
    scale = 1.0;
    setScale();

    window.addEventListener("keydown", zoom);

    function zoom(e) {
        var keyCode = (window.event)? event.keyCode : e.which;
        var key = String.fromCharCode(keyCode);

        switch (key) {
            case "Q":
                scale *= 1.04; break;
            case "A":
                scale *= 0.96; break;
            default:
                return;
        }
        setScale();
    }

    function setScale() {
        gl.uniform1f(scalePos, scale);
    }
}

// Handle drag of fractal image
function handleDrag() {
    var startDragCoordinates = null;
    var dragging = false;
    var dx = 0.0;
    var dy = 0.0;
    var center = { x: 0.0, y: 0.0 };

    setCenter(center.x, center.y);

    canvas.addEventListener("mousedown", startDrag);
    canvas.addEventListener("mousemove", drag);
    window.addEventListener("mouseup", stopDrag);

    function startDrag(e) {
        if (!dragging) {
            startDragCoordinates = (window.event)? screenToWorldCoord(event.x, event.y) : screenToWorldCoord(e.clientX, e.clientY);
	        dragging = true;
        }
    }

    function drag(e) {
        if (dragging) {
            var currentCoordinates = (window.event)?screenToWorldCoord(event.x, event.y) : screenToWorldCoord(e.clientX, e.clientY);

            dx = startDragCoordinates.worldX - currentCoordinates.worldX;
            dy = startDragCoordinates.worldY - currentCoordinates.worldY;

            setCenter(center.x+dx/scale, center.y+dy/scale);
        }
    }

    function stopDrag() {
        if (dragging) {
            dragging = false;
            center.x += dx/scale;
            center.y += dy/scale;
            dx = 0.0;
            dy = 0.0;
        }
    }

    function screenToWorldCoord(screenX, screenY) {
        return { worldX : -1+2*screenX/canvas.width, worldY : -1+2*(canvas.height-screenY)/canvas.height };
    }

    function setCenter(x, y) {
        gl.uniform2fv(centerPos, vec2(x,y));
    }
}


// Handle factor of fractal colors
function handleFactor() {
    var factor = document.getElementById("factor");

    setFactor();

    factor.addEventListener("input", setFactor);

    function setFactor() {
        gl.uniform1f(factorPos, factor.value);
    }
}


// Handle type of fractal (Mandelbrot or Julia)
function handleFractalType() {
    var fractal = document.getElementById("fractal");

    setFractal();

    fractal.addEventListener("change", setFractal);

    function setFractal() {
        var isMandelbrot = fractal.options[fractal.selectedIndex].text.includes("Mandelbrot");
        gl.uniform1f(mandelbrotPos, isMandelbrot);

        var c;
        switch(fractal.selectedIndex) {
            case 0:
                c = vec2(0.0, 0.0); break;
            case 1:
                c = vec2(-0.4, 0.6); break;
            case 2:
                c = vec2(0.285, 0.0); break;
            case 3:
                c = vec2(0.285, 0.01); break;
            case 4:
                c = vec2(0.8, 0.156); break;
            case 5:
                c = vec2(0.0, -0.8); break;
            // extra
            case 6:
                c = vec2(0.45, 0.1428); break;
            case 7:
                c = vec2(-0.70176, -0.3842); break;
            case 8:
                c = vec2(-0.835, -0.2321); break;
            default:
                return;
        }
        gl.uniform2fv(cPos, c);
    }
}
