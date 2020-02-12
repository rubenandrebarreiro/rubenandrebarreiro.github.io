/*

    LEARNING QUANTUM COMPUTING (ONLINE WEB COURSE)
    BLOCH SPHERE/QUBIT AND SINGLE QUANTUM LOGIC GATES/OPERATORS

    AUTHOR:
    - RUBEN ANDRE BARREIRO

    © COPYRIGHTS - ALL RIGHTS RESERVED

*/


// Shows a Message Error, if WebGL it's not available
if(WEBGL.isWebGLAvailable() === false) {
    document.body.appendChild(WEBGL.getWebGLErrorMessage());
}


// Constants/Invariables:

// The X Axis Normalized
const x_axis = new THREE.Vector3(1, 0, 0).normalize();

// The Y Axis Normalized
const y_axis = new THREE.Vector3(0, 1, 0).normalize();

// The Z Axis Normalized
const z_axis = new THREE.Vector3(0, 0, 1).normalize();

const quantum_operator_step = Math.PI / 40;

var qubit_state_result_pos_x_1, qubit_state_result_pos_x_2, qubit_state_result_pos_y_1, qubit_state_result_pos_y_2, qubit_state_result_pos_z_1, qubit_state_result_pos_z_2;

var qubit_state_azimuth, qubit_state_inclination;


// The XZ Axis Grid Helper
var xz_grid = new THREE.GridHelper(3, 3, new THREE.Color(0xff0000), new THREE.Color(0xffff00));        
xz_grid.rotation.x += (Math.PI / 2);

// Global Instance Variables:

// The Camera, the Trackball Controls (Mouse's/TouchPad's Pointer Controls),
// the Scene (Atom Representation Scene),
// the Renderer of the Scene and
// the Stats (Statistics of the Rendering Process)
var camera, controls, atom_representation_scene, renderer, stats;

// The Coordinates of the Projector and Mouse's/TouchPad's Pointer
var projector, mouse = { x: window.innerHeight, y: window.innerWidth };

// The Atom Nucleus' Elements
var atom_nucleus_geometry, atom_nucleus_material, atom_nucleus_mesh, atom_nucleus_pivot;

// The Qubit's State's Elements
var qubit_state_geometry, qubit_state_material, qubit_state_mesh, qubit_state_pivot;


// The Form's Controls/Elements - Radios and Checkboxes for
// controlling some aspects of the Scene (Atom Representation Scene)
var motions_radios, camera_view_radios, atomic_orbits_checked, atom_particle_state_checked_1, atom_particle_state_checked_2, atom_particle_state_checked_3, atom_particle_state_checked_4;


// The Motions' Factor for the Atom Nucleus and its Particles' States'
// rotations' and translactions' movements
var motions_factor;

var hadamard_operator_motion_factor_1, hadamard_operator_motion_factor_2, pauli_x_operator_motion_factor, pauli_y_operator_motion_factor, pauli_z_operator_motion_factor;

var current_step;

THREE.Object3D.DefaultUp = new THREE.Vector3(0,0,1);


// The Calls for Initiation and Animation Methods
init();
animate();


// The Initiation Process Method
function init() {

    // The Motions' Factor for the Atom's Nucleus and Particles' States'
    // rotations' and translactions' movements
    motions_factor = 0.0;
    
    hadamard_operator_motion_factor_1 = hadamard_operator_motion_factor_2 = pauli_x_operator_motion_factor = pauli_y_operator_motion_factor = pauli_z_operator_motion_factor = 0.0;
    
    qubit_state_result_pos_x_1 = qubit_state_result_pos_x_2 = qubit_state_result_pos_y_1 = qubit_state_result_pos_y_2 = qubit_state_result_pos_z_1 = qubit_state_result_pos_z_2 = 0.0;
    
    qubit_state_azimuth = qubit_state_inclination = 0.0;

    // The Boolean value to keep the information about if
    // the Atomic Orbits are checked and, currently showing, or not
    atomic_orbits_checked = true;
    
    // The Boolean values to keep the information about if
    // the Atom's Particles' States are checked and, currently showing, or not
    atom_particle_state_checked_1 = true;
    atom_particle_state_checked_2 = true;
    atom_particle_state_checked_3 = true;
    atom_particle_state_checked_4 = true;
    
    // Resets the Camera
    reset_camera();

    // Starts the Camera in the Perspective's view
    camera_perspective_view();

    // Starts the Trackball Controls
    start_trackball_controls();

    // Sets the Events' Listeners
    set_event_listeners();

    // Creates the Scene (Atom Representation Scene)
    atom_representation_scene = new THREE.Scene();


    // Adds the Elements of the Scene (Atom Representation Scene):
    // - The Atom's Nucleus;
    // - The Atom's Particle's State and its Orbit #1;
    // - The Atom's Particle's State and its Orbit #2;
    // - The Atom's Particle's State and its Orbit #3;
    // - The Atom's Particle's State and its Orbit #4;
    add_elements_to_scene();

    // Adds the Lights (Directional and Ambient Lights) to
    // the Scene (Atom Representation Scene)
    add_lights_to_scene();

    // Creates the renderer for the Scene (Atom Representation Scene)
    create_renderer_of_scene();

    // Adds the Stats (Statistics for the Rendering Process)
    add_stats();

    // Handles/Triggers the cunctions for the Events
    trigger_event_listeners();

    // Starts object to perform world/screen calculations
    projector = new THREE.Projector();

    // Starts the Rendering Process
    render();

}

// Resets the Camera
function reset_camera() {
    camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1, 1000 );
}

// Makes the transformations for the Camera's Top View
function camera_top_view() {
    camera.rotation.x += Math.PI/2;
    camera.position.z = 2.6;
    camera.lookAt(new THREE.Vector3(0,0,0));
}

// Makes the transformations for the Camera's Perspective View
function camera_perspective_view() {
    camera.rotation.z += Math.PI/4;
    camera.position.x = 2.0;
    camera.position.y = 1.0;
    camera.position.z = 0.6;
    camera.lookAt(new THREE.Vector3(0,0,0))    
}

// Starts the Trackball Controls
function start_trackball_controls() {

    controls = new THREE.TrackballControls(camera);

    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;

    controls.noZoom = false;
    controls.noPan = false;

    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;

    controls.keys = [ 65, 83, 68 ];

}

// Sets the Event Listeners
function set_event_listeners() {

    // Gets the Motions' Radio options
    motions_radios = document.getElementsByName("motions_radios");

    // Gets the Camera View's Radio options
    camera_view_radios = document.getElementsByName("camera_view_radios");

    // When the Motions' Radio change, calls the given function
    document.addEventListener('onchange', on_change_motions);

    // When the Camera View's Radio change, calls the given function
    document.addEventListener('onchange', on_change_camera_view);

    // When any change occurs in the Scene (Atom Representation Scene),
    // calls the given function
    controls.addEventListener('change', render);

    // When the window is resized, calls the given function
    window.addEventListener('resize', on_window_resize, false);

    // When the mouse moves, calls the given function
    document.addEventListener('mousemove', on_document_mouse_move, false);

}

// Adds the Elements (Atom's Nucleus and, its Particles' States and Orbits) to
// the Scene (Atom Representation Scene)
function add_elements_to_scene() {

    // Adds the Atom's Nucleus
    add_atom_nucleus_to_scene();
    
    add_qubit_state_to_scene();
    
}

// Adds the Atom's Nucleus to the Scene (Atom Representation Scene)
function add_atom_nucleus_to_scene() {

    // Creates the Geometry of the Sphere representing
    // the Atom's Nucleus
    atom_nucleus_geometry = new THREE.SphereBufferGeometry(1, 80, 80);
    atom_nucleus_geometry.computeBoundingBox();
    
    // Creates the Material of the Sphere representing
    // the Atom's Nucleus

    var atom_nucleus_material = new THREE.ShaderMaterial({
  uniforms: {
    color1: {
      value: new THREE.Color("red")
    },
    color2: {
      value: new THREE.Color("purple")
    },
    bboxMin: {
      value: atom_nucleus_geometry.boundingBox.min
    },
    bboxMax: {
      value: atom_nucleus_geometry.boundingBox.max
    }
  },
  vertexShader: `
    uniform vec3 bboxMin;
    uniform vec3 bboxMax;
  
    varying vec2 vUv;

    void main() {
      vUv.y = (position.y - bboxMin.y) / (bboxMax.y - bboxMin.y);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 color1;
    uniform vec3 color2;
  
    varying vec2 vUv;
    
    void main() {
      
      gl_FragColor = vec4(mix(color1, color2, vUv.y), 0.5);
    }
  `,
  wireframe: false,
  transparent: true,
  opacity: 0.5
});
    

    // Creates the Mesh of the Atom's Nucleus
    atom_nucleus_mesh = new THREE.Mesh(atom_nucleus_geometry, atom_nucleus_material);

    var ring_geometry_1 = new THREE.RingGeometry( 0.995, 1.0, 80 );
    var ring_material_1 = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
    var ring_mesh_1 = new THREE.Mesh( ring_geometry_1, ring_material_1 );
    
    var ring_geometry_2 = new THREE.RingGeometry( 0.995, 1.0, 80 );
    var ring_material_2 = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
    var ring_mesh_2 = new THREE.Mesh( ring_geometry_2, ring_material_2 );
    
    ring_mesh_2.rotation.x += Math.PI / 2;
    
    var ring_geometry_3 = new THREE.RingGeometry( 0.995, 1.0, 80 );
    var ring_material_3 = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
    var ring_mesh_3 = new THREE.Mesh( ring_geometry_3, ring_material_3 );
    
    ring_mesh_3.rotation.y += Math.PI / 2;
    
    var origin = new THREE.Vector3( 0, 0, 0 );
    var length = 1.4;
    var hex = 0xffff00;

    var bloch_sphere_axis_arrow_helper_x = new THREE.ArrowHelper( x_axis, origin, length, hex );
    var bloch_sphere_axis_arrow_helper_y = new THREE.ArrowHelper( y_axis, origin, length, hex );
    var bloch_sphere_axis_arrow_helper_z = new THREE.ArrowHelper( z_axis, origin, length, hex );
    
    atom_nucleus_mesh.add( bloch_sphere_axis_arrow_helper_x );
    atom_nucleus_mesh.add( bloch_sphere_axis_arrow_helper_y );
    atom_nucleus_mesh.add( bloch_sphere_axis_arrow_helper_z );
    
    
    // Creates the group for the Atom's Nucleus' Pivot
    atom_nucleus_pivot = new THREE.Group();

    // Adds the Mesh of the Atom's Nucleus to
    // the group for the Atom's Nucleus' Pivot
    atom_nucleus_pivot.add(atom_nucleus_mesh);

    atom_nucleus_pivot.add(ring_mesh_1);
    atom_nucleus_pivot.add(ring_mesh_2);
    atom_nucleus_pivot.add(ring_mesh_3);
    
    
    // Adds the group for the Atom's Nucleus' Pivot to
    // the Scene (Atom Representation Scene) 
    atom_representation_scene.add(atom_nucleus_pivot);

}

// Adds the Atom's Nucleus to the Scene (Atom Representation Scene)
function add_qubit_state_to_scene() {

    // Creates the Geometry of the Sphere representing
    // the Atom's Nucleus
    qubit_state_geometry = new THREE.SphereGeometry(0.05, 40, 40);

    qubit_state_material = new THREE.MeshBasicMaterial(
        {
            color: 0xdda0dd
        }
    );

    // Creates the Mesh of the Atom's Nucleus
    qubit_state_mesh = new THREE.Mesh(qubit_state_geometry, qubit_state_material);

    qubit_state_mesh.position.z = 1;
    
    // Creates the group for the Atom's Nucleus' Pivot
    qubit_state_pivot = new THREE.Group();

    // Adds the Mesh of the Atom's Nucleus to
    // the group for the Atom's Nucleus' Pivot
    qubit_state_pivot.add(qubit_state_mesh);

    // Adds the group for the Atom's Nucleus' Pivot to
    // the Scene (Atom Representation Scene) 
    atom_representation_scene.add(qubit_state_pivot);

}

// Adds the Lights (Directional and Ambient Lights) to
// the Scene (Atom Representation Scene)
function add_lights_to_scene() {

    // Creates a white directional light
    var directional_light_1 = new THREE.DirectionalLight(0xffffff);

    // Sets the direction/position (x=1, y=1, z=1) of
    // the previously created directional light
    directional_light_1.position.set(1, 1, 1);

    // Adds the previously created directional light to
    // Scene (Atom Representation Scene)
    atom_representation_scene.add(directional_light_1);


    // Creates a blue directional light
    var directional_light_2 = new THREE.DirectionalLight(0x002288);

    // Sets the direction/position (x=-1, y=-1, z=-1) of
    // the previously created directional light
    directional_light_2.position.set(- 1, - 1, - 1);

    // Adds the previously created directional light to
    // Scene (Atom Representation Scene)
    atom_representation_scene.add(directional_light_2);


    // Creates a gray ambient light
    var ambient_light = new THREE.AmbientLight(0x222222);

    // Adds the previously created ambient light to
    // Scene (Atom Representation Scene)
    atom_representation_scene.add(ambient_light);

}

// Creates the Renderer for the Scene (Atom Representation Scene)
function create_renderer_of_scene() {

    renderer = new THREE.WebGLRenderer(
        {
            antialias: true
        }
    );

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

}

// Adds the Stats (Statistics for the Rendering Process) to
// the Scene (Atom Representation Scene)
function add_stats() {

    // Creates the Stats Object
    // (Statistics for the Rendering Process)
    stats = new Stats();

    // Adds the Stats to the Document
    // (Statistics for the Rendering Process)
    document.body.appendChild(stats.dom);

    // Sets the Position of the Stats
    // (Statistics for the Rendering Process),
    // attaching it to the bottom-left corner of the Document
    stats.dom.style.bottom = 0;
    stats.dom.style.left = 0;

}

// Handles/Triggers the cunctions for the Events
function trigger_event_listeners() {

    // Handles/Triggers the Function for
    // changes in the Motions' Radio
    on_change_motions();

    // Handles/Triggers the Function for
    // changes in the Camera View's Radio
    on_change_camera_view();

    // Handles/Triggers the Function for
    // changes in the XZ Grid's Checkbox
    on_check_xz_grid();
    
}


// Calls a given function, when the window is resized
function on_window_resize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    controls.handleResize();

    render();

}

// Calls a given function, the mouse moves
function on_document_mouse_move(event) {

    // The following line would stop any other event handler from firing
    // (such as the mouse's TrackballControls)
    event.preventDefault();

    // Update the mouse variable
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

}

// Calls a given function, when the Motions' Radio change
function on_change_motions() {

    for(var i = 0, length = motions_radios.length; i < length; i++) {
        motions_radios[i].onchange = function() {    

            if(motions_radios[0].checked) {
                motions_factor = 1.0;
            }
            else {
                motions_factor = 0.0;    
            }

            start_trackball_controls();

        }
    }

}

// Calls a given function, when the Camera View's Radio change
function on_change_camera_view() {

    for(var i = 0, length = camera_view_radios.length; i < length; i++) {
        camera_view_radios[i].onchange = function() {    

            if(camera_view_radios[0].checked) {
                reset_camera();

                camera_top_view();
            }
            else {
                reset_camera();

                camera_perspective_view();    
            }

            start_trackball_controls();

        }
    }

}

// Calls a given function, when the XZ Grid's Checkbox change
function on_check_xz_grid() {

    var show_xz_grid = document.getElementById("show_xz_grid");

    show_xz_grid.onchange = function() {
        if(show_xz_grid.checked) {
            atom_representation_scene.add(xz_grid);
        }
        else {
            atom_representation_scene.remove(xz_grid);
        }
    }
}


function on_idle_operator() {

    setTimeout(function() {
        // "Dummy" operation,
        // where the current state it's
        // multiplied by the Identity Matrix,
        // so the current state, it's unchanged
    }, 1000);
    
}


var check_hadamard_operator = setInterval(check_hadamard_operator, 1);

function on_hadamard_operator() {
     
    if( (parseFloat(qubit_state_mesh.position.x.toFixed(8)) == 1) && (parseFloat(qubit_state_mesh.position.y.toFixed(8)) == 0) && (parseFloat(qubit_state_mesh.position.y.toFixed(8)) == 0) ) {
        
        hadamard_operator_motion_factor_1 = 1.0;
        hadamard_operator_motion_factor_2 = 0.0;
        
        qubit_state_azimuth = 0;
        qubit_state_inclination = -(Math.PI / 2);

        qubit_state_result_pos_x_1 = Math.sin(qubit_state_inclination) * Math.cos(qubit_state_azimuth);
        qubit_state_result_pos_y_1 = Math.sin(qubit_state_inclination) * Math.sin(qubit_state_azimuth);
        qubit_state_result_pos_z_1 = Math.cos(qubit_state_inclination);

        qubit_state_result_pos_x_1 = qubit_state_result_pos_x_1.toFixed(8);
        qubit_state_result_pos_y_1 = qubit_state_result_pos_y_1.toFixed(8);
        qubit_state_result_pos_z_1 = qubit_state_result_pos_z_1.toFixed(8);

        qubit_state_azimuth = 0;
        qubit_state_inclination = 0;

        qubit_state_result_pos_x_2 = Math.sin(qubit_state_inclination) * Math.cos(qubit_state_azimuth);
        qubit_state_result_pos_y_2 = Math.sin(qubit_state_inclination) * Math.sin(qubit_state_azimuth);
        qubit_state_result_pos_z_2 = Math.cos(qubit_state_inclination);
        
        qubit_state_result_pos_x_2 = qubit_state_result_pos_x_2.toFixed(8);
        qubit_state_result_pos_y_2 = qubit_state_result_pos_y_2.toFixed(8);
        qubit_state_result_pos_z_2 = qubit_state_result_pos_z_2.toFixed(8);
        
    }
    else if( (parseFloat(qubit_state_mesh.position.x.toFixed(8)) == -1) && (parseFloat(qubit_state_mesh.position.y.toFixed(8)) == 0) && (parseFloat(qubit_state_mesh.position.y.toFixed(8)) == 0) ) {
        
        hadamard_operator_motion_factor_1 = 1.0;
        hadamard_operator_motion_factor_2 = 0.0;
        
        qubit_state_azimuth = 0;
        qubit_state_inclination = (Math.PI / 2);

        qubit_state_result_pos_x_1 = Math.sin(qubit_state_inclination) * Math.cos(qubit_state_azimuth);
        qubit_state_result_pos_y_1 = Math.sin(qubit_state_inclination) * Math.sin(qubit_state_azimuth);
        qubit_state_result_pos_z_1 = Math.cos(qubit_state_inclination);

        qubit_state_result_pos_x_1 = qubit_state_result_pos_x_1.toFixed(8);
        qubit_state_result_pos_y_1 = qubit_state_result_pos_y_1.toFixed(8);
        qubit_state_result_pos_z_1 = qubit_state_result_pos_z_1.toFixed(8);
        
        qubit_state_azimuth = 0;
        qubit_state_inclination = Math.PI;

        qubit_state_result_pos_x_2 = Math.sin(qubit_state_inclination) * Math.cos(qubit_state_azimuth);
        qubit_state_result_pos_y_2 = Math.sin(qubit_state_inclination) * Math.sin(qubit_state_azimuth);
        qubit_state_result_pos_z_2 = Math.cos(qubit_state_inclination);
        
        qubit_state_result_pos_x_2 = qubit_state_result_pos_x_2.toFixed(8);
        qubit_state_result_pos_y_2 = qubit_state_result_pos_y_2.toFixed(8);
        qubit_state_result_pos_z_2 = qubit_state_result_pos_z_2.toFixed(8);
        
    }
    else if( (parseFloat(qubit_state_mesh.position.x.toFixed(8)) == 0) && (parseFloat(qubit_state_mesh.position.y.toFixed(8)) == 1) && (parseFloat(qubit_state_mesh.position.z.toFixed(8)) == 0) ) {
        
        hadamard_operator_motion_factor_1 = 1.0;
        hadamard_operator_motion_factor_2 = 0.0;
        
        qubit_state_azimuth = -(Math.PI / 2);
        qubit_state_inclination = (Math.PI /2);

        qubit_state_result_pos_x_1 = Math.sin(qubit_state_inclination) * Math.cos(qubit_state_azimuth);
        qubit_state_result_pos_y_1 = Math.sin(qubit_state_inclination) * Math.sin(qubit_state_azimuth);
        qubit_state_result_pos_z_1 = Math.cos(qubit_state_inclination);
        
        qubit_state_result_pos_x_1 = qubit_state_result_pos_x_1.toFixed(8);
        qubit_state_result_pos_y_1 = qubit_state_result_pos_y_1.toFixed(8);
        qubit_state_result_pos_z_1 = qubit_state_result_pos_z_1.toFixed(8);
        
        
        qubit_state_azimuth = -(Math.PI / 2);
        qubit_state_inclination = (Math.PI /2);

        qubit_state_result_pos_x_2 = Math.sin(qubit_state_inclination) * Math.cos(qubit_state_azimuth);
        qubit_state_result_pos_y_2 = Math.sin(qubit_state_inclination) * Math.sin(qubit_state_azimuth);
        qubit_state_result_pos_z_2 = Math.cos(qubit_state_inclination);
        
        qubit_state_result_pos_x_2 = qubit_state_result_pos_x_2.toFixed(8);
        qubit_state_result_pos_y_2 = qubit_state_result_pos_y_2.toFixed(8);
        qubit_state_result_pos_z_2 = qubit_state_result_pos_z_2.toFixed(8);
        
    }
    else if( (parseFloat(qubit_state_mesh.position.x.toFixed(8)) == 0) && (parseFloat(qubit_state_mesh.position.y.toFixed(8)) == -1) && (parseFloat(qubit_state_mesh.position.z.toFixed(8)) == 0) ) {
        
        hadamard_operator_motion_factor_1 = 1.0;
        hadamard_operator_motion_factor_2 = 0.0;
        
        qubit_state_azimuth = (Math.PI / 2);
        qubit_state_inclination = (Math.PI /2);

        qubit_state_result_pos_x_1 = Math.sin(qubit_state_inclination) * Math.cos(qubit_state_azimuth);
        qubit_state_result_pos_y_1 = Math.sin(qubit_state_inclination) * Math.sin(qubit_state_azimuth);
        qubit_state_result_pos_z_1 = Math.cos(qubit_state_inclination);

        qubit_state_result_pos_x_1 = qubit_state_result_pos_x_1.toFixed(8);
        qubit_state_result_pos_y_1 = qubit_state_result_pos_y_1.toFixed(8);
        qubit_state_result_pos_z_1 = qubit_state_result_pos_z_1.toFixed(8);
        
        
        qubit_state_azimuth = (Math.PI / 2);
        qubit_state_inclination = (Math.PI /2);

        qubit_state_result_pos_x_2 = Math.sin(qubit_state_inclination) * Math.cos(qubit_state_azimuth);
        qubit_state_result_pos_y_2 = Math.sin(qubit_state_inclination) * Math.sin(qubit_state_azimuth);
        qubit_state_result_pos_z_2 = Math.cos(qubit_state_inclination);
        
        qubit_state_result_pos_x_2 = qubit_state_result_pos_x_2.toFixed(8);
        qubit_state_result_pos_y_2 = qubit_state_result_pos_y_2.toFixed(8);
        qubit_state_result_pos_z_2 = qubit_state_result_pos_z_2.toFixed(8);
        
    }
    else if( (parseFloat(qubit_state_mesh.position.x.toFixed(8)) == 0) && (parseFloat(qubit_state_mesh.position.y.toFixed(8)) == 0) && (parseFloat(qubit_state_mesh.position.z.toFixed(8)) == 1) ) {
        
        hadamard_operator_motion_factor_1 = 1.0;
        hadamard_operator_motion_factor_2 = 0.0;
        
        qubit_state_azimuth = 0;
        qubit_state_inclination = 0;

        qubit_state_result_pos_x_1 = Math.sin(qubit_state_inclination) * Math.cos(qubit_state_azimuth);
        qubit_state_result_pos_y_1 = Math.sin(qubit_state_inclination) * Math.sin(qubit_state_azimuth);
        qubit_state_result_pos_z_1 = Math.cos(qubit_state_inclination);
        
        qubit_state_result_pos_x_1 = qubit_state_result_pos_x_1.toFixed(8);
        qubit_state_result_pos_y_1 = qubit_state_result_pos_y_1.toFixed(8);
        qubit_state_result_pos_z_1 = qubit_state_result_pos_z_1.toFixed(8);
        
        qubit_state_azimuth = 0;
        qubit_state_inclination = (Math.PI / 2);

        qubit_state_result_pos_x_2 = Math.sin(qubit_state_inclination) * Math.cos(qubit_state_azimuth);
        qubit_state_result_pos_y_2 = Math.sin(qubit_state_inclination) * Math.sin(qubit_state_azimuth);
        qubit_state_result_pos_z_2 = Math.cos(qubit_state_inclination);
        
        qubit_state_result_pos_x_2 = qubit_state_result_pos_x_2.toFixed(8);
        qubit_state_result_pos_y_2 = qubit_state_result_pos_y_2.toFixed(8);
        qubit_state_result_pos_z_2 = qubit_state_result_pos_z_2.toFixed(8);
        
    }
    else if( (parseFloat(qubit_state_mesh.position.x.toFixed(8)) == 0) && (parseFloat(qubit_state_mesh.position.y.toFixed(8)) == 0) && (parseFloat(qubit_state_mesh.position.z.toFixed(8)) == -1) ) {
        
        hadamard_operator_motion_factor_1 = 1.0;
        hadamard_operator_motion_factor_2 = 0.0;
        
        qubit_state_azimuth = Math.PI;
        qubit_state_inclination = Math.PI;

        qubit_state_result_pos_x_1 = Math.sin(qubit_state_inclination) * Math.cos(qubit_state_azimuth);
        qubit_state_result_pos_y_1 = Math.sin(qubit_state_inclination) * Math.sin(qubit_state_azimuth);
        qubit_state_result_pos_z_1 = Math.cos(qubit_state_inclination);

        qubit_state_result_pos_x_1 = qubit_state_result_pos_x_1.toFixed(8);
        qubit_state_result_pos_y_1 = qubit_state_result_pos_y_1.toFixed(8);
        qubit_state_result_pos_z_1 = qubit_state_result_pos_z_1.toFixed(8);
        
        
        qubit_state_azimuth = 0;
        qubit_state_inclination = -(Math.PI / 2);

        qubit_state_result_pos_x_2 = Math.sin(qubit_state_inclination) * Math.cos(qubit_state_azimuth);
        qubit_state_result_pos_y_2 = Math.sin(qubit_state_inclination) * Math.sin(qubit_state_azimuth);
        qubit_state_result_pos_z_2 = Math.cos(qubit_state_inclination);
        
        qubit_state_result_pos_x_2 = qubit_state_result_pos_x_2.toFixed(8);
        qubit_state_result_pos_y_2 = qubit_state_result_pos_y_2.toFixed(8);
        qubit_state_result_pos_z_2 = qubit_state_result_pos_z_2.toFixed(8);
        
    }
        
}

function check_hadamard_operator() {
    
    if( (hadamard_operator_motion_factor_1 == 1.0) && (hadamard_operator_motion_factor_2 == 0.0) ) {
        
        if( qubit_state_mesh.position.x.toFixed(8) == -0 ) {
            qubit_state_mesh.position.x = 0;
        }
        
        if( qubit_state_mesh.position.y.toFixed(8) == -0 ) {
            qubit_state_mesh.position.y = 0;
        }
        
        if( qubit_state_mesh.position.z.toFixed(8) == -0 ) {
            qubit_state_mesh.position.z = 0;
        }
        
        
        var is_qubit_state_pos_x_correct_1 = ( parseFloat(qubit_state_mesh.position.x.toFixed(8)) == parseFloat(qubit_state_result_pos_x_1) );
        
        var is_qubit_state_pos_y_correct_1 = ( parseFloat(qubit_state_mesh.position.y.toFixed(8)) == parseFloat(qubit_state_result_pos_y_1) );
        
        var is_qubit_state_pos_z_correct_1 = ( parseFloat(qubit_state_mesh.position.z.toFixed(8)) == parseFloat(qubit_state_result_pos_z_1) );
        
        
        if( is_qubit_state_pos_x_correct_1 && is_qubit_state_pos_y_correct_1 && is_qubit_state_pos_z_correct_1 ) {
            
            hadamard_operator_motion_factor_1 = 0.0;
            hadamard_operator_motion_factor_2 = 1.0;
            
        }
        
    }
    
    if( (hadamard_operator_motion_factor_1 == 0.0) && (hadamard_operator_motion_factor_2 == 1.0) ) {
        
        if( qubit_state_mesh.position.x.toFixed(8) == -0 ) {
            qubit_state_mesh.position.x = 0;
        }
        
        if( qubit_state_mesh.position.y.toFixed(8) == -0 ) {
            qubit_state_mesh.position.y = 0;
        }
        
        if( qubit_state_mesh.position.z.toFixed(8) == -0 ) {
            qubit_state_mesh.position.z = 0;
        }
        
        
        var is_qubit_state_pos_x_correct_2 = ( parseFloat(qubit_state_mesh.position.x.toFixed(8)) == parseFloat(qubit_state_result_pos_x_2) );
        
        var is_qubit_state_pos_y_correct_2 = ( parseFloat(qubit_state_mesh.position.y.toFixed(8)) == parseFloat(qubit_state_result_pos_y_2) );
        
        var is_qubit_state_pos_z_correct_2 = ( parseFloat(qubit_state_mesh.position.z.toFixed(8)) == parseFloat(qubit_state_result_pos_z_2) );
        
        
        if( is_qubit_state_pos_x_correct_2 && is_qubit_state_pos_y_correct_2 && is_qubit_state_pos_z_correct_2 ) {
            
            hadamard_operator_motion_factor_1 = 0.0;
            hadamard_operator_motion_factor_2 = 0.0;
            
        }
        
    }
    
}

function do_hadamard_operation() {
    
    var quaternion_for_hadamard_operator_1 = new THREE.Quaternion();
    quaternion_for_hadamard_operator_1.setFromAxisAngle( z_axis, ( hadamard_operator_motion_factor_1 * quantum_operator_step * 0.08 ) );
        
    // Setting and applying the quarternion's Y Axis for the Atom's State #1
    qubit_state_mesh.position.applyQuaternion(quaternion_for_hadamard_operator_1);
    
    
    var quaternion_for_hadamard_operator_2 = new THREE.Quaternion();
    quaternion_for_hadamard_operator_2.setFromAxisAngle( y_axis, ( hadamard_operator_motion_factor_2 * quantum_operator_step * 0.08 ) );
        
    // Setting and applying the quarternion's Y Axis for the Atom's State #1
    qubit_state_mesh.position.applyQuaternion(quaternion_for_hadamard_operator_2);
    
}


var check_pauli_x_operator = setInterval(check_pauli_x_operator, 1);

function on_pauli_x_operator() {
    
    pauli_x_operator_motion_factor = 1.0;
    
    qubit_state_azimuth -= (Math.PI / 2);
    qubit_state_inclination -= Math.PI;
    
    
    qubit_state_result_pos_x_1 = Math.sin(qubit_state_inclination) * Math.cos(qubit_state_azimuth);
    qubit_state_result_pos_y_1 = Math.sin(qubit_state_inclination) * Math.sin(qubit_state_azimuth);
    qubit_state_result_pos_z_1 = Math.cos(qubit_state_inclination);
 
    qubit_state_result_pos_x_1 = qubit_state_result_pos_x_1.toFixed(8);
    qubit_state_result_pos_y_1 = qubit_state_result_pos_y_1.toFixed(8);
    qubit_state_result_pos_z_1 = qubit_state_result_pos_z_1.toFixed(8);
    
}

function check_pauli_x_operator() {
    
    if(pauli_x_operator_motion_factor == 1.0) {
        
        if( qubit_state_mesh.position.x.toFixed(8) == -0 ) {
            qubit_state_mesh.position.x = 0;
        }
        
        if( qubit_state_mesh.position.y.toFixed(8) == -0 ) {
            qubit_state_mesh.position.y = 0;
        }
        
        if( qubit_state_mesh.position.z.toFixed(8) == -0 ) {
            qubit_state_mesh.position.z = 0;
        }
        
        
        var is_qubit_state_pos_x_correct = ( parseFloat(qubit_state_mesh.position.x.toFixed(8)) == parseFloat(qubit_state_result_pos_x_1) );
        
        var is_qubit_state_pos_y_correct = ( parseFloat(qubit_state_mesh.position.y.toFixed(8)) == parseFloat(qubit_state_result_pos_y_1) );
        
        var is_qubit_state_pos_z_correct = ( parseFloat(qubit_state_mesh.position.z.toFixed(8)) == parseFloat(qubit_state_result_pos_z_1) );
        
        
        if( is_qubit_state_pos_x_correct && is_qubit_state_pos_y_correct && is_qubit_state_pos_z_correct ) {
            
            pauli_x_operator_motion_factor = 0.0;
            
        }
    }
    
}

function do_pauli_x_operation() {
    
    var quaternion_for_pauli_x_operator = new THREE.Quaternion();
    quaternion_for_pauli_x_operator.setFromAxisAngle( x_axis, ( pauli_x_operator_motion_factor * quantum_operator_step * 0.08 ) );
        
    // Setting and applying the quarternion's Y Axis for the Atom's State #1
    qubit_state_mesh.position.applyQuaternion(quaternion_for_pauli_x_operator);
    
}


var check_pauli_y_operator = setInterval(check_pauli_y_operator, 1);

function on_pauli_y_operator() {
    
    pauli_y_operator_motion_factor = 1.0;
    
    qubit_state_azimuth += 0;
    qubit_state_inclination -= Math.PI;
    
    
    qubit_state_result_pos_x_1 = Math.sin(qubit_state_inclination) * Math.cos(qubit_state_azimuth);
    qubit_state_result_pos_y_1 = Math.sin(qubit_state_inclination) * Math.sin(qubit_state_azimuth);
    qubit_state_result_pos_z_1 = Math.cos(qubit_state_inclination);
    
    qubit_state_result_pos_x_1 = qubit_state_result_pos_x_1.toFixed(8);
    qubit_state_result_pos_y_1 = qubit_state_result_pos_y_1.toFixed(8);
    qubit_state_result_pos_z_1 = qubit_state_result_pos_z_1.toFixed(8);
    
}

function check_pauli_y_operator() {
    
    if(pauli_y_operator_motion_factor == 1.0) {
        
        if( qubit_state_mesh.position.x.toFixed(8) == -0 ) {
            qubit_state_mesh.position.x = 0;
        }
        
        if( qubit_state_mesh.position.y.toFixed(8) == -0 ) {
            qubit_state_mesh.position.y = 0;
        }
        
        if( qubit_state_mesh.position.z.toFixed(8) == -0 ) {
            qubit_state_mesh.position.z = 0;
        }
        
        
        var is_qubit_state_pos_x_correct = ( parseFloat(qubit_state_mesh.position.x.toFixed(8)) == parseFloat(qubit_state_result_pos_x_1) );
        
        var is_qubit_state_pos_y_correct = ( parseFloat(qubit_state_mesh.position.y.toFixed(8)) == parseFloat(qubit_state_result_pos_y_1) );
        
        var is_qubit_state_pos_z_correct = ( parseFloat(qubit_state_mesh.position.z.toFixed(8)) == parseFloat(qubit_state_result_pos_z_1) );
        
        
        if( is_qubit_state_pos_x_correct && is_qubit_state_pos_y_correct && is_qubit_state_pos_z_correct ) {
            
            pauli_y_operator_motion_factor = 0.0;
            
        }
    }
    
}

function do_pauli_y_operation() {
    
    var quaternion_for_pauli_y_operator = new THREE.Quaternion();
    quaternion_for_pauli_y_operator.setFromAxisAngle( y_axis, ( pauli_y_operator_motion_factor * quantum_operator_step * 0.08 ) );
        
    // Setting and applying the quarternion's Y Axis for the Atom's State #1
    qubit_state_mesh.position.applyQuaternion(quaternion_for_pauli_y_operator);
    
}


var check_pauli_z_operator = setInterval(check_pauli_z_operator, 1);

function on_pauli_z_operator() {
    
    pauli_z_operator_motion_factor = 1.0;
    
    qubit_state_azimuth += Math.PI;
    qubit_state_inclination += 0;
    
    
    qubit_state_result_pos_x_1 = Math.sin(qubit_state_inclination) * Math.cos(qubit_state_azimuth);
    qubit_state_result_pos_y_1 = Math.sin(qubit_state_inclination) * Math.sin(qubit_state_azimuth);
    qubit_state_result_pos_z_1 = Math.cos(qubit_state_inclination);
    
    qubit_state_result_pos_x_1 = qubit_state_result_pos_x_1.toFixed(8);
    qubit_state_result_pos_y_1 = qubit_state_result_pos_y_1.toFixed(8);
    qubit_state_result_pos_z_1 = qubit_state_result_pos_z_1.toFixed(8);
    
}

function check_pauli_z_operator() {
    
    if(pauli_z_operator_motion_factor == 1.0) {
        
        if( qubit_state_mesh.position.x.toFixed(8) == -0 ) {
            qubit_state_mesh.position.x = 0;
        }
        
        if( qubit_state_mesh.position.y.toFixed(8) == -0 ) {
            qubit_state_mesh.position.y = 0;
        }
        
        if( qubit_state_mesh.position.z.toFixed(8) == -0 ) {
            qubit_state_mesh.position.z = 0;
        }
        
        
        var is_qubit_state_pos_x_correct = ( parseFloat(qubit_state_mesh.position.x.toFixed(8)) == parseFloat(qubit_state_result_pos_x_1) );
        
        var is_qubit_state_pos_y_correct = ( parseFloat(qubit_state_mesh.position.y.toFixed(8)) == parseFloat(qubit_state_result_pos_y_1) );
        
        var is_qubit_state_pos_z_correct = ( parseFloat(qubit_state_mesh.position.z.toFixed(8)) == parseFloat(qubit_state_result_pos_z_1) );
        
        
        if( is_qubit_state_pos_x_correct && is_qubit_state_pos_y_correct && is_qubit_state_pos_z_correct ) {
            
            pauli_z_operator_motion_factor = 0.0;
            
        }
    }
    
}

function do_pauli_z_operation() {
    
    var quaternion_for_pauli_z_operator = new THREE.Quaternion();
    quaternion_for_pauli_z_operator.setFromAxisAngle( z_axis, ( pauli_z_operator_motion_factor * quantum_operator_step * 0.08 ) );
        
    // Setting and applying the quarternion's Y Axis for the Atom's State #1
    qubit_state_mesh.position.applyQuaternion(quaternion_for_pauli_z_operator);
    
}


// The Animation Process Method
function animate() {

    // Calls the Animation Method again
    requestAnimationFrame(animate);
    
    // Updates the Trackball Controls
    controls.update();

    // Updates the Stats (Statistics for the Rendering Process)
    stats.update();

}


// The Atom's Nucleus and Particle's States' rotation movements
function atom_nucleus_and_particles_rotation_movements() {
    
    var atom_nucleus_rotation_speed = ( motions_factor * 0.0001 * 28 );
    var atom_particles_rotation_speed = ( motions_factor * 0.01 * 28 );
    
    atom_nucleus_mesh.rotation.z += atom_nucleus_rotation_speed;
    
}

// The Atom's Particles' States' translaction movements around the Atom's Nucleus
function particles_translaction_movements() {

    // Creating the quarternion for the Atom's State #1
    /*var quaternion_for_atom_state_1 = new THREE.Quaternion();

    // Setting and applying the quarternion's Y Axis for the Atom's State #1
    quaternion_for_atom_state_1.setFromAxisAngle( y_axis, ( motions_factor * 0.02 ) );
    atom_particle_mesh_1.position.applyQuaternion(quaternion_for_atom_state_1);
    
    
    // Creating the quarternion for the Atom's State #2
    var quaternion_for_atom_state_2 = new THREE.Quaternion();

    // Setting and applying the quarternion's X Axis for the Atom's State #2
    quaternion_for_atom_state_2.setFromAxisAngle( x_axis, ( motions_factor * 0.02 ) );
    atom_particle_mesh_2.position.applyQuaternion(quaternion_for_atom_state_2);
    
    
    // Creating the quarternion for the Atom's State #3
    var quaternion_for_atom_state_3 = new THREE.Quaternion();

    // Setting and applying the quarternion's XY Axis for the Atom's State #3
    quaternion_for_atom_state_3.setFromAxisAngle( xy_axis_1, ( motions_factor * 0.02 ) );
    atom_particle_mesh_3.position.applyQuaternion(quaternion_for_atom_state_3);
    
    
    // Creating the quarternion for the Atom's State #4
    var quaternion_for_atom_state_4 = new THREE.Quaternion();

    // Setting and applying the quarternion's XY Axis for the Atom's State #4
    quaternion_for_atom_state_4.setFromAxisAngle( xy_axis_2, ( motions_factor * 0.02 ) );
    atom_particle_mesh_4.position.applyQuaternion(quaternion_for_atom_state_4);
    */
}

// The Rendering Process Method
function render() {

    // The Animation Frame Request Process
    requestAnimationFrame(render);

    // The Atom's Nucleus' and Particles' States' rotation movements
    atom_nucleus_and_particles_rotation_movements();

    // The Atom's Particles' States' translaction movements around the Atom's Nucleus
    particles_translaction_movements();

    do_hadamard_operation();
    
    do_pauli_x_operation();
    do_pauli_y_operation();
    do_pauli_z_operation();
    
    // The Rendering Process, in sucessive repeated calls, in loop
    renderer.render(atom_representation_scene, camera);

}
