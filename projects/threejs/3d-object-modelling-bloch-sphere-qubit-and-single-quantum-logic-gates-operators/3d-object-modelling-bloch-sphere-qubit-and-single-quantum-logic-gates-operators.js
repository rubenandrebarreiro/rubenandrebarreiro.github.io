/*

    LEARNING QUANTUM COMPUTING (ONLINE WEB COURSE)
    BLOCH SPHERE (QUBIT) AND SINGLE QUANTUM LOGIC GATES/OPERATORS

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

// The step of the Quantum Logic Gates/Operators, on the current Bit's state
const quantum_operator_step = Math.PI / 40;


// Global Instance Variables:

// The Camera, the Trackball Controls (Mouse's/TouchPad's Pointer Controls),
// the Scene (Bloch Sphere (Qubit) and Single Quantum Logic Gates/Operators),
// the Renderer of the Scene and
// the Stats (Statistics of the Rendering Process)
var camera, controls, bloch_sphere_qubit_scene, renderer, stats;

// The Coordinates of the Projector and Mouse's/TouchPad's Pointer
var projector, mouse = { x: window.innerHeight, y: window.innerWidth };

// The Bloch Sphere's (Qubit's) Elements
var bloch_sphere_qubit_geometry, bloch_sphere_qubit_material, bloch_sphere_qubit_mesh, bloch_sphere_qubit_pivot;

// The Bloch Sphere's (Qubit's) Axis' Arrows' Helpers
var bloch_sphere_axis_arrow_helper_x, bloch_sphere_axis_arrow_helper_y, bloch_sphere_axis_arrow_helper_z;

// The Bloch Sphere's (Qubit's) XY Plane Circumference's Elements
var bloch_sphere_qubit_xy_plane_circumference_geometry, bloch_sphere_qubit_xy_plane_circumference_material, bloch_sphere_qubit_xy_plane_circumference_mesh;

// The Bloch Sphere's (Qubit's) XZ Plane Circumference's Elements
var bloch_sphere_qubit_xz_plane_circumference_geometry, bloch_sphere_qubit_xz_plane_circumference_material, bloch_sphere_qubit_xz_plane_circumference_mesh;

// The Bloch Sphere's (Qubit's) YZ Plane Circumference's Elements
var bloch_sphere_qubit_yz_plane_circumference_geometry, bloch_sphere_qubit_yz_plane_circumference_material, bloch_sphere_qubit_yz_plane_circumference_mesh;

// The Qubit's State's Elements
var qubit_state_geometry, qubit_state_material, qubit_state_mesh;

// The Azimuth and Inclination Angles of the Qubit's State
var qubit_state_azimuth, qubit_state_inclination;

// The position (x, y, z) of the Qubit's State, after performing a Quantum Logic Gate/Operation
var qubit_state_result_pos_x_1, qubit_state_result_pos_x_2, qubit_state_result_pos_y_1, qubit_state_result_pos_y_2, qubit_state_result_pos_z_1, qubit_state_result_pos_z_2;

// The Qubit's State's Amplitudes (Alpha and Beta Values)
var qubit_state_amplitude_alpha, qubit_state_amplitude_beta;

// The Qubit's States' (States |0⟩ and |1⟩) Probability Values
var qubit_state_0_probability_value, qubit_state_1_probability_value;

// The XY Axis Grid Helper
var xy_grid = new THREE.GridHelper(3, 3, new THREE.Color(0xff0000), new THREE.Color(0xffff00));

// The Form's Controls/Elements - Radios and Checkboxes for
// controlling some aspects of the Scene (Bloch Sphere (Qubit) and Single Quantum Logic Gates/Operators Scene)
var bloch_sphere_qubit_motions_radios, quantum_operations_bit_motions_radios, camera_view_radios, bloch_sphere_qubit_wireframe_radios;

// The Motion's Factor for the Bloch Sphere (Qubit) rotation's movements
var bloch_sphere_qubit_motion_factor;

// The Motion's Factor for the Bloch Sphere's State (Qubit's State) translactions' movements
var quantum_operations_bit_motion_factor;

// The Motions' Factors for the Quantum Logic Gates/Operators
var hadamard_operator_motion_factor_1, hadamard_operator_motion_factor_2, pauli_x_operator_motion_factor, pauli_y_operator_motion_factor, pauli_z_operator_motion_factor, phase_pi_2_operator_motion_factor, phase_pi_4_operator_motion_factor;



// The Calls for Initiation and Animation Methods
init();
animate();


// The Initiation Process Method
function init() {

    // The definition of the Default Up Vector as the Z axis
    THREE.Object3D.DefaultUp = new THREE.Vector3(0,0,1);
    
    // The rotation of the XY Grid by PI/2 (i.e., 90 degrees), in X axis
    xy_grid.rotation.x += (Math.PI / 2);
    
    // The Motion's Factor for the Bloch Sphere's (Qubit's) rotation's movements
    bloch_sphere_qubit_motion_factor = 0.0;
    
    // The Motion's Factor for the Bloch Sphere's (Qubit's) State's translactions' movements
    quantum_operations_bit_motion_factor = 1.0;
    
    
    // Resets the Camera
    reset_camera();

    // Starts the Camera in the Perspective's view
    camera_perspective_view();

    // Starts the Trackball Controls
    start_trackball_controls();

    // Sets the Events' Listeners
    set_event_listeners();

    // Creates the Scene (Bloch Sphere (Qubit) and Single Quantum Logic Gates/Operators Scene)
    bloch_sphere_qubit_scene = new THREE.Scene();


    // Adds the Elements of the Scene (Bloch Sphere (Qubit) and Single Quantum Logic Gates/Operators Scene):
    // - The Bloch Sphere (Qubit);
    // - The Bloch Sphere's (Qubit's) State;
    add_elements_to_scene();

    // Adds the Lights (Directional and Ambient Lights) to
    // the Scene (Bloch Sphere (Qubit) and Single Quantum Logic Gates/Operators Scene)
    add_lights_to_scene();

    // Creates the renderer for the Scene (Bloch Sphere (Qubit) and Single Quantum Logic Gates/Operators Scene)
    create_renderer_of_scene();
    
    // Adds the Stats (Statistics for the Rendering Process)
    add_stats();

    // Handles/Triggers the functions for the Event's Listeners
    trigger_event_listeners();

    // Resets the Bloch Sphere's (Qubit's) State
    on_reset();
    
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

// Makes the transformations for the Camera's Front View
function camera_front_view() {
    camera.position.x = 2.6;
    camera.position.z = 0.4;
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

    // Gets the Bloch Sphere's (Qubit's) Motions' Radio options
    bloch_sphere_qubit_motions_radios = document.getElementsByName("bloch_sphere_qubit_motions_radios");

    // Gets the Quantum Operations' (Bit's) Motions' Radio options
    quantum_operations_bit_motions_radios = document.getElementsByName("quantum_operations_bit_motions_radios");

    // Gets the Camera View's Radio options
    camera_view_radios = document.getElementsByName("camera_view_radios");

    // Gets the Bloch Sphere's (Qubit's) Wireframe's Radio options
    bloch_sphere_qubit_wireframe_radios = document.getElementsByName("bloch_sphere_qubit_wireframe_radios");

    
    // When the Bloch Sphere's (Qubit's) Motions' Radio change, calls the given function
    document.addEventListener('onchange', on_change_bloch_sphere_qubit_motions);
    
    // When the Quantum Operations' (Bit's) Motions' Radio change, calls the given function
    document.addEventListener('onchange', on_change_quantum_operations_bit_motions);

    // When the Camera View's Radio change, calls the given function
    document.addEventListener('onchange', on_change_camera_view);

    // When the Bloch Sphere's (Qubit's) Wireframe's Radio change, calls the given function
    document.addEventListener('onchange', on_change_bloch_sphere_qubit_motions);
    
    // When any change occurs in the Scene (Bloch Sphere (Qubit) and Single Quantum Logic Gates/Operators Scene),
    // calls the given function
    controls.addEventListener('change', render);

    // When the window is resized, calls the given function
    window.addEventListener('resize', on_window_resize, false);

    // When the mouse moves, calls the given function
    document.addEventListener('mousemove', on_document_mouse_move, false);

}

// Adds the Elements (Bloch Sphere (Qubit) and Bloch Sphere's (Qubit's) State) to
// the Scene (Bloch Sphere (Qubit) and Single Quantum Logic Gates/Operators Scene)
function add_elements_to_scene() {

    // Adds Bloch Sphere (Qubit)
    add_bloch_sphere_qubit();
    
    // Adds Bloch Sphere's (Qubit's) Plane Circumferences
    add_bloch_sphere_qubit_plane_circumferences();
    
    // Adds Bloch Sphere's (Qubit's) Axis' Arrows' Helpers
    add_bloch_sphere_qubit_axis_arrows_helpers();
    
    // Adds Bloch Sphere's (Qubit's) State 
    add_qubit_state();
    
    // Adds the group for the Bloch Sphere's (Qubit's) Pivot to
    // the Scene (Bloch Sphere (Qubit) and Single Quantum Logic Gates/Operators Scene) 
    bloch_sphere_qubit_scene.add(bloch_sphere_qubit_pivot);
    
}

// Adds the Bloch Sphere (Qubit) to the Scene (Bloch Sphere (Qubit) and Single Quantum Logic Gates/Operators Scene)
function add_bloch_sphere_qubit() {

    // Creates the Geometry of the Sphere representing
    // the Bloch Sphere (Qubit)
    bloch_sphere_qubit_geometry = new THREE.SphereBufferGeometry(1, 80, 80);
    bloch_sphere_qubit_geometry.computeBoundingBox();
    
    // Creates the Material of the Sphere representing
    // the Bloch Sphere (Qubit)
    bloch_sphere_qubit_material = new THREE.ShaderMaterial({
        uniforms: {
            color_1: {
                value: new THREE.Color("red")
            },
            color_2: {
                value: new THREE.Color("purple")
            },
            b_box_min: {
                value: bloch_sphere_qubit_geometry.boundingBox.min
            },
            b_box_max: {
              value: bloch_sphere_qubit_geometry.boundingBox.max
            }
        },
        vertexShader: `
            uniform vec3 b_box_min;
            uniform vec3 b_box_max;
  
            varying vec2 v_u_v;

            void main() {
                v_u_v.y = (position.y - b_box_min.y) / (b_box_max.y - b_box_min.y);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform vec3 color_1;
            uniform vec3 color_2;
  
            varying vec2 v_u_v;
    
            void main() {
                gl_FragColor = vec4(mix(color_1, color_2, v_u_v.y), 0.5);
            }
        `,
        wireframe: false,
        transparent: true,
        opacity: 0.5
    });
    

    // Creates the Mesh of Bloch Sphere (Qubit)
    bloch_sphere_qubit_mesh = new THREE.Mesh(bloch_sphere_qubit_geometry, bloch_sphere_qubit_material);
    
    // Creates the group for the Atom's Nucleus' Pivot
    bloch_sphere_qubit_pivot = new THREE.Group();

    // Adds the Mesh of the Atom's Nucleus to
    // the group for the Atom's Nucleus' Pivot
    bloch_sphere_qubit_pivot.add(bloch_sphere_qubit_mesh);
    
}

// Adds Bloch Sphere's (Qubit's) Plane Circumferences
function add_bloch_sphere_qubit_plane_circumferences() {
    
    // The Bloch Sphere's (Qubit's) Plane XY Circumference
    bloch_sphere_qubit_xy_plane_circumference_geometry = new THREE.RingGeometry( 0.995, 1.0, 80 );
    bloch_sphere_qubit_xy_plane_circumference_material = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide, transparent: false, opacity: 1.0 } );
    bloch_sphere_qubit_xy_plane_circumference_mesh = new THREE.Mesh( bloch_sphere_qubit_xy_plane_circumference_geometry, bloch_sphere_qubit_xy_plane_circumference_material );
    
    
    // The Bloch Sphere's (Qubit's) Plane XZ Circumference
    bloch_sphere_qubit_xz_plane_circumference_geometry = new THREE.RingGeometry( 0.995, 1.0, 80 );
    bloch_sphere_qubit_xz_plane_circumference_material = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide, transparent: false, opacity: 1.0 } );
    bloch_sphere_qubit_xz_plane_circumference_mesh = new THREE.Mesh( bloch_sphere_qubit_xz_plane_circumference_geometry, bloch_sphere_qubit_xz_plane_circumference_material );
    
    bloch_sphere_qubit_xz_plane_circumference_mesh.rotation.x += Math.PI / 2;
    
    
    // The Bloch Sphere's (Qubit's) Plane YZ Circumference
    bloch_sphere_qubit_yz_plane_circumference_geometry = new THREE.RingGeometry( 0.995, 1.0, 80 );
    bloch_sphere_qubit_yz_plane_circumference_material = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide, transparent: false, opacity: 1.0 } );
    bloch_sphere_qubit_yz_plane_circumference_mesh = new THREE.Mesh( bloch_sphere_qubit_yz_plane_circumference_geometry, bloch_sphere_qubit_yz_plane_circumference_material );
    
    bloch_sphere_qubit_yz_plane_circumference_mesh.rotation.y += Math.PI / 2;
    
    // Adds the Bloch Sphere's (Qubit's) Plane Circumferences to
    // the Mesh of the Bloch Sphere (Qubit)
    bloch_sphere_qubit_mesh.add(bloch_sphere_qubit_xy_plane_circumference_mesh);
    bloch_sphere_qubit_mesh.add(bloch_sphere_qubit_xz_plane_circumference_mesh);
    bloch_sphere_qubit_mesh.add(bloch_sphere_qubit_yz_plane_circumference_mesh);

}

// Adds Bloch Sphere's (Qubit's) Axis' Arrows' Helpers
function add_bloch_sphere_qubit_axis_arrows_helpers() {
    
    var origin = new THREE.Vector3( 0, 0, 0 );
    var length = 1.4;
    var hex = 0xffff00;

    bloch_sphere_axis_arrow_helper_x = new THREE.ArrowHelper( x_axis, origin, length, hex );
    bloch_sphere_axis_arrow_helper_y = new THREE.ArrowHelper( y_axis, origin, length, hex );
    bloch_sphere_axis_arrow_helper_z = new THREE.ArrowHelper( z_axis, origin, length, hex );
    
    bloch_sphere_qubit_mesh.add( bloch_sphere_axis_arrow_helper_x );
    bloch_sphere_qubit_mesh.add( bloch_sphere_axis_arrow_helper_y );
    bloch_sphere_qubit_mesh.add( bloch_sphere_axis_arrow_helper_z );
    
}

// Adds the Atom's Nucleus to the Scene (Atom Representation Scene)
function add_qubit_state() {

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
    
    // Adds the Mesh of the Atom's Nucleus to
    // the group for the Atom's Nucleus' Pivot
    bloch_sphere_qubit_mesh.add(qubit_state_mesh);

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
    bloch_sphere_qubit_scene.add(directional_light_1);


    // Creates a blue directional light
    var directional_light_2 = new THREE.DirectionalLight(0x002288);

    // Sets the direction/position (x=-1, y=-1, z=-1) of
    // the previously created directional light
    directional_light_2.position.set(- 1, - 1, - 1);

    // Adds the previously created directional light to
    // Scene (Atom Representation Scene)
    bloch_sphere_qubit_scene.add(directional_light_2);


    // Creates a gray ambient light
    var ambient_light = new THREE.AmbientLight(0x222222);

    // Adds the previously created ambient light to
    // Scene (Atom Representation Scene)
    bloch_sphere_qubit_scene.add(ambient_light);

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
    // changes in the Bloch Sphere's (Qubit's) Motions' Radio
    on_change_bloch_sphere_qubit_motions();

    // Handles/Triggers the Function for
    // changes in the Quantum Operations' (Bit's) Motions' Radio
    on_change_quantum_operations_bit_motions();
    
    // Handles/Triggers the Function for
    // changes in the Camera View's Radio
    on_change_camera_view();

    // Handles/Triggers the Function for
    // changes in the Bloch Sphere's (Qubit's) Wireframe's Radio
    on_change_bloch_sphere_qubit_wireframe();
    
    // Handles/Triggers the Function for
    // changes in the XY Grid's Checkbox
    on_check_xy_grid();
    
    // Handles/Triggers the Function for
    // changes in the Axis' Arrows' Helpers' Checkbox
    on_check_axis_arrows_helpers();
    
    // Handles/Triggers the Function for
    // changes in the XY Plane Circumference's Checkbox
    on_check_xy_plane_circumference();
    
    // Handles/Triggers the Function for
    // changes in the XZ Plane Circumference's Checkbox
    on_check_xz_plane_circumference();
    
    // Handles/Triggers the Function for
    // changes in the YZ Plane Circumference's Checkbox
    on_check_yz_plane_circumference();
    
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

// Calls a given function, when the Bloch Sphere's (Qubit's) Motions' Radio change
function on_change_bloch_sphere_qubit_motions() {

    for(var i = 0, length = bloch_sphere_qubit_motions_radios.length; i < length; i++) {
        bloch_sphere_qubit_motions_radios[i].onchange = function() {    

            if(bloch_sphere_qubit_motions_radios[0].checked) {
                bloch_sphere_qubit_motion_factor = 1.0;
            }
            else {
                bloch_sphere_qubit_motion_factor = 0.0;    
            }

            start_trackball_controls();

        }
    }

}

// Calls a given function, when the Quantum Operations' (Qubit's) Motions' Radio change
function on_change_quantum_operations_bit_motions() {

    for(var i = 0, length = quantum_operations_bit_motions_radios.length; i < length; i++) {
        quantum_operations_bit_motions_radios[i].onchange = function() {    

            if(quantum_operations_bit_motions_radios[0].checked) {
                quantum_operations_bit_motion_factor = 1.0;
            }
            else {
                quantum_operations_bit_motion_factor = 0.0;    
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
            else if(camera_view_radios[1].checked) {
                reset_camera();

                camera_front_view();    
            }
            else {
                reset_camera();

                camera_perspective_view();    
            }

            start_trackball_controls();

        }
    }

}

// Calls a given function, when the Bloch Sphere's (Qubit's) Wireframe's Radio change
function on_change_bloch_sphere_qubit_wireframe() {

    for(var i = 0, length = bloch_sphere_qubit_wireframe_radios.length; i < length; i++) {
        bloch_sphere_qubit_wireframe_radios[i].onchange = function() {    

            if(bloch_sphere_qubit_wireframe_radios[0].checked) {
                bloch_sphere_qubit_mesh.material.wireframe = true;
            }
            else {
                bloch_sphere_qubit_mesh.material.wireframe = false;
            }

            start_trackball_controls();

        }
    }

}

// Calls a given function, when the XZ Grid's Checkbox change
function on_check_xy_grid() {

    var show_xy_grid = document.getElementById("show_xy_grid");

    show_xy_grid.onchange = function() {
        if(show_xy_grid.checked) {
            bloch_sphere_qubit_scene.add(xy_grid);
        }
        else {
            bloch_sphere_qubit_scene.remove(xy_grid);
        }
    }
}

// Calls a given function, when the Axis' Arrows' Helpers' Checkbox change
function on_check_axis_arrows_helpers() {

    var show_axis_arrows_helpers = document.getElementById("show_axis_arrows_helpers");

    show_axis_arrows_helpers.onchange = function() {
        if(show_axis_arrows_helpers.checked) {
            bloch_sphere_qubit_mesh.add( bloch_sphere_axis_arrow_helper_x );
            bloch_sphere_qubit_mesh.add( bloch_sphere_axis_arrow_helper_y );
            bloch_sphere_qubit_mesh.add( bloch_sphere_axis_arrow_helper_z );
        }
        else {
            bloch_sphere_qubit_mesh.remove( bloch_sphere_axis_arrow_helper_x );
            bloch_sphere_qubit_mesh.remove( bloch_sphere_axis_arrow_helper_y );
            bloch_sphere_qubit_mesh.remove( bloch_sphere_axis_arrow_helper_z );
        }
    }
}

// Calls a given function, when the XY Plane Circumference's Checkbox change
function on_check_xy_plane_circumference() {

    var show_xy_plane_circumference = document.getElementById("show_xy_plane_circumference");

    show_xy_plane_circumference.onchange = function() {
        if(show_xy_plane_circumference.checked) {
            bloch_sphere_qubit_xy_plane_circumference_mesh.material.transparent = false;
            bloch_sphere_qubit_xy_plane_circumference_mesh.material.opacity = 1.0;
        }
        else {
            bloch_sphere_qubit_xy_plane_circumference_mesh.material.transparent = true;
            bloch_sphere_qubit_xy_plane_circumference_mesh.material.opacity = 0.0;
        }
    }
}

// Calls a given function, when the XZ Plane Circumference's Checkbox change
function on_check_xz_plane_circumference() {

    var show_xz_plane_circumference = document.getElementById("show_xz_plane_circumference");

    show_xz_plane_circumference.onchange = function() {
        if(show_xz_plane_circumference.checked) {
            bloch_sphere_qubit_xz_plane_circumference_mesh.material.transparent = false;
            bloch_sphere_qubit_xz_plane_circumference_mesh.material.opacity = 1.0;
        }
        else {
            bloch_sphere_qubit_xz_plane_circumference_mesh.material.transparent = true;
            bloch_sphere_qubit_xz_plane_circumference_mesh.material.opacity = 0.0;
        }
    }
}

// Calls a given function, when the YZ Plane Circumference's Checkbox change
function on_check_yz_plane_circumference() {

    var show_yz_plane_circumference = document.getElementById("show_yz_plane_circumference");

    show_yz_plane_circumference.onchange = function() {
        if(show_yz_plane_circumference.checked) {
            bloch_sphere_qubit_yz_plane_circumference_mesh.material.transparent = false;
            bloch_sphere_qubit_yz_plane_circumference_mesh.material.opacity = 1.0;
        }
        else {
            bloch_sphere_qubit_yz_plane_circumference_mesh.material.transparent = true;
            bloch_sphere_qubit_yz_plane_circumference_mesh.material.opacity = 0.0;
        }
    }
}


function on_pauli_i_operator() {

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
    quaternion_for_hadamard_operator_1.setFromAxisAngle( z_axis, ( quantum_operations_bit_motion_factor * hadamard_operator_motion_factor_1 * quantum_operator_step * 0.08 ) );
        
    // Setting and applying the quarternion's Y Axis for the Atom's State #1
    qubit_state_mesh.position.applyQuaternion(quaternion_for_hadamard_operator_1);
    
    
    var quaternion_for_hadamard_operator_2 = new THREE.Quaternion();
    quaternion_for_hadamard_operator_2.setFromAxisAngle( y_axis, ( quantum_operations_bit_motion_factor * hadamard_operator_motion_factor_2 * quantum_operator_step * 0.08 ) );
        
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
    quaternion_for_pauli_x_operator.setFromAxisAngle( x_axis, ( quantum_operations_bit_motion_factor * pauli_x_operator_motion_factor * quantum_operator_step * 0.08 ) );
        
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
    quaternion_for_pauli_y_operator.setFromAxisAngle( y_axis, ( quantum_operations_bit_motion_factor * pauli_y_operator_motion_factor * quantum_operator_step * 0.08 ) );
        
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
    quaternion_for_pauli_z_operator.setFromAxisAngle( z_axis, ( quantum_operations_bit_motion_factor * pauli_z_operator_motion_factor * quantum_operator_step * 0.08 ) );
        
    // Setting and applying the quarternion's Y Axis for the Atom's State #1
    qubit_state_mesh.position.applyQuaternion(quaternion_for_pauli_z_operator);
    
}


var check_phase_pi_2_operator = setInterval(check_phase_pi_2_operator, 1);

function on_phase_pi_2_operator() {
    
    phase_pi_2_operator_motion_factor = 1.0;
    
    qubit_state_azimuth += ( Math.PI/2 );
    qubit_state_inclination += 0;
    
    
    qubit_state_result_pos_x_1 = Math.sin(qubit_state_inclination) * Math.cos(qubit_state_azimuth);
    qubit_state_result_pos_y_1 = Math.sin(qubit_state_inclination) * Math.sin(qubit_state_azimuth);
    qubit_state_result_pos_z_1 = Math.cos(qubit_state_inclination);
    
    qubit_state_result_pos_x_1 = qubit_state_result_pos_x_1.toFixed(8);
    qubit_state_result_pos_y_1 = qubit_state_result_pos_y_1.toFixed(8);
    qubit_state_result_pos_z_1 = qubit_state_result_pos_z_1.toFixed(8);
    
}

function check_phase_pi_2_operator() {
    
    if(phase_pi_2_operator_motion_factor == 1.0) {
        
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
            
            phase_pi_2_operator_motion_factor = 0.0;
            
        }
    }
    
}

function do_phase_pi_2_operation() {
    
    var quaternion_for_phase_pi_2_operator = new THREE.Quaternion();
    quaternion_for_phase_pi_2_operator.setFromAxisAngle( z_axis, ( quantum_operations_bit_motion_factor * phase_pi_2_operator_motion_factor * quantum_operator_step * 0.08 ) );
        
    // Setting and applying the quarternion's Y Axis for the Atom's State #1
    qubit_state_mesh.position.applyQuaternion(quaternion_for_phase_pi_2_operator);
    
}


var check_phase_pi_4_operator = setInterval(check_phase_pi_4_operator, 1);

function on_phase_pi_4_operator() {
    
    phase_pi_4_operator_motion_factor = 1.0;
    
    qubit_state_azimuth += ( Math.PI/4 );
    qubit_state_inclination += 0;
    
    
    qubit_state_result_pos_x_1 = Math.sin(qubit_state_inclination) * Math.cos(qubit_state_azimuth);
    qubit_state_result_pos_y_1 = Math.sin(qubit_state_inclination) * Math.sin(qubit_state_azimuth);
    qubit_state_result_pos_z_1 = Math.cos(qubit_state_inclination);
    
    qubit_state_result_pos_x_1 = qubit_state_result_pos_x_1.toFixed(8);
    qubit_state_result_pos_y_1 = qubit_state_result_pos_y_1.toFixed(8);
    qubit_state_result_pos_z_1 = qubit_state_result_pos_z_1.toFixed(8);
    
}

function check_phase_pi_4_operator() {
    
    if(phase_pi_4_operator_motion_factor == 1.0) {
        
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
            
            phase_pi_4_operator_motion_factor = 0.0;
            
        }
    }
    
}

function do_phase_pi_4_operation() {
    
    var quaternion_for_phase_pi_4_operator = new THREE.Quaternion();
    quaternion_for_phase_pi_4_operator.setFromAxisAngle( z_axis, ( quantum_operations_bit_motion_factor * phase_pi_4_operator_motion_factor * quantum_operator_step * 0.08 ) );
        
    // Setting and applying the quarternion's Y Axis for the Atom's State #1
    qubit_state_mesh.position.applyQuaternion(quaternion_for_phase_pi_4_operator);
    
}


function on_reset() {
    
    // The initial position of the Qubit's State (x = 0, y = 0, z = 1)
    qubit_state_mesh.position.x = qubit_state_mesh.position.y = 0.0;
    qubit_state_mesh.position.z = 1.0;
    
    // The Motions' Factors for the Quantum Login Gates/Operators
    hadamard_operator_motion_factor_1 = hadamard_operator_motion_factor_2 = pauli_x_operator_motion_factor = pauli_y_operator_motion_factor = pauli_z_operator_motion_factor = phase_pi_2_operator_motion_factor = phase_pi_4_operator_motion_factor = 0.0;

    // The Azimuth and Inclination Angles of the Qubit's State    
    qubit_state_azimuth = qubit_state_inclination = 0.0;

    // The position (x, y, z) of the Qubit's State, after performing a Quantum Logic Gate/Operation    
    qubit_state_result_pos_x_1 = qubit_state_result_pos_x_2 = qubit_state_result_pos_y_1 = qubit_state_result_pos_y_2 = qubit_state_result_pos_z_1 = qubit_state_result_pos_z_2 = 0.0;
    
    // The Qubit's State's Amplitudes (Alpha and Beta Values)
    qubit_state_amplitude_alpha = 1.0;
    qubit_state_amplitude_beta = 0.0;
    
    // The Qubit's States' (States |0⟩ and |1⟩) Probability Values
    qubit_state_0_probability_value = 1.0;
    qubit_state_1_probability_value = 0.0;
    
}


function on_measurement() {
    
    qubit_state_inclination = Math.atan( Math.sqrt( Math.pow(qubit_state_mesh.position.x, 2.0) + Math.pow(qubit_state_mesh.position.y, 2.0) ) / qubit_state_mesh.position.z );
    
    qubit_state_azimuth = Math.atan( qubit_state_mesh.position.y / qubit_state_mesh.position.x );
    
    // The Qubit's State's Amplitudes (Alpha and Beta Values)
    qubit_state_amplitude_alpha = Math.cos( qubit_state_inclination / 2 );
    
    import { Complex } from './math.js';
    
    var complex_i = new Complex('i');
    
    alert(Math.pow(complex_i, 2.0));
    
    qubit_state_amplitude_beta = Math.pow(Math.E, (math.i * qubit_state_azimuth) ) * Math.sin( qubit_state_inclination / 2 );
    
    // The Qubit's States' (States |0⟩ and |1⟩) Probability Values
    qubit_state_0_probability_value = Math.pow( Math.abs(qubit_state_amplitude_alpha), 2.0 );
    qubit_state_1_probability_value = Math.pow( Math.abs(qubit_state_amplitude_beta), 2.0 );
    
    var measurement_result_string = "Measurement of the Qubit Performed!!!\n\nResult of the Measurement:\n- |0⟩ (" + qubit_state_0_probability_value + " | " + qubit_state_0_probability_value * 100 + "%)\n- |1⟩ (" + qubit_state_1_probability_value + " | " + qubit_state_1_probability_value * 100 + "%)";
    
    alert(measurement_result_string);
    
    var measurement_final_message_string = "After a Measurement, the Quantum State of the Qubit (Quantum Bit)\ncollapses in a irreversible way!!!\n\nThe Quantum System for the Qubit (Quantum Bit) needs to be reseted!!!";
    
    on_reset();
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
    
    var atom_nucleus_rotation_speed = ( bloch_sphere_qubit_motion_factor * 0.0001 * 28 );
    
    bloch_sphere_qubit_mesh.rotation.z += atom_nucleus_rotation_speed;
    
}


// The Rendering Process Method
function render() {

    // The Animation Frame Request Process
    requestAnimationFrame(render);

    // The Atom's Nucleus' and Particles' States' rotation movements
    atom_nucleus_and_particles_rotation_movements();
    
    
    do_hadamard_operation();
    
    do_pauli_x_operation();
    do_pauli_y_operation();
    do_pauli_z_operation();
    
    do_phase_pi_2_operation();
    do_phase_pi_4_operation();
    
    
    // The Rendering Process, in sucessive repeated calls, in loop
    renderer.render(bloch_sphere_qubit_scene, camera);

}
