var torus_points = [];
var torus_indices = [];
var torus_normals = [];

var torus_points_buffer;
var torus_indices_buffer;
var torus_normals_buffer;


// INIT

function torusInit(gl) {
    torusBuild();
    torusUploadData(gl);
}

function torusBuild() 
{   
    var nPhi = 40; 
    var nTheta = 20;
    var r1 = 0.3; 
    var r2 = 0.55;
   
    var Theta = 0; 
    var Phi = 0;
    var dTheta = 2*Math.PI/nTheta;
    var dPhi = dTheta/nPhi;
    var nn = nTheta * nPhi;
   
    for (var i = 0; i < nTheta*nPhi; i++){
        Theta += dTheta;   
        Phi += dPhi;
        var cosTheta = Math.cos(Theta)
        var sinTheta = Math.sin(Theta);
        var cosPhi = Math.cos(Phi);
        var sinPhi = Math.sin(Phi);   
        var dist = r2 + r1 * cosTheta;
        
        var pt = vec3(cosPhi*dist, -sinPhi*dist, r1*sinTheta);
        torus_points.push(pt);
        var n = vec3(cosPhi*cosTheta, -sinPhi*cosTheta, sinTheta)
        torus_normals.push(n);
        torus_indices.push(i, (i + nTheta) % nn);
    }
    torus_indices.push(0, nTheta);
}   

function torusUploadData(gl)
{
    torus_points_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, torus_points_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(torus_points), gl.STATIC_DRAW); 
    
    torus_indices_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, torus_indices_buffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(torus_indices),gl.STATIC_DRAW);
    
    torus_normals_buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, torus_normals_buffer);
	gl.bufferData(gl.ARRAY_BUFFER, flatten(torus_normals), gl.STATIC_DRAW);
}


// DRAW

function torusDrawWireFrame(gl, program)
{
    gl.useProgram(program);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, torus_points_buffer);
    var vPosition = gl.getAttribLocation(program, 'vPosition');
    gl.vertexAttribPointer(vPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, torus_normals_buffer);
	var vNormal = gl.getAttribLocation(program, "vNormal");
	gl.vertexAttribPointer(vNormal, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vNormal);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, torus_indices_buffer);
    gl.drawElements(gl.LINE_STRIP, torus_indices.length, gl.UNSIGNED_SHORT, 0);
}

function torusDrawFilled(gl, program) 
{
    gl.useProgram(program);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, torus_points_buffer);
    var vPosition = gl.getAttribLocation(program, 'vPosition');
    gl.vertexAttribPointer(vPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, torus_normals_buffer);
	var vNormal = gl.getAttribLocation(program, "vNormal");
	gl.vertexAttribPointer(vNormal, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vNormal);
    
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, torus_indices_buffer);
    gl.drawElements(gl.TRIANGLE_STRIP, torus_indices.length, gl.UNSIGNED_SHORT, 0);
}
