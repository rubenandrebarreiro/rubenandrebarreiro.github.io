/*

    LEARNING QUANTUM COMPUTING (ONLINE WEB COURSE)
    FLIPPING/SPINNING A COIN (BITCOIN) EXPERIMENT

    AUTHOR:
    - RUBEN ANDRE BARREIRO

    © COPYRIGHTS - ALL RIGHTS RESERVED

*/


// Shows a Message Error, if WebGL it's not available
if(WEBGL.isWebGLAvailable() === false) {
    document.body.appendChild(WEBGL.getWebGLErrorMessage());
}


// Constants/Invariables:


// Global Instance Variables:

// The Camera, the Trackball Controls (Mouse's/TouchPad's Pointer Controls),
// the Scene (Flipping/Spinning a Coin's (Bitcoin's) Experiment Scene),
// the Renderer of the Scene and
// the Stats (Statistics of the Rendering Process)
var camera, controls, flipping_spinning_bitcoin_experiment_scene, renderer, stats;

// The Coordinates of the Projector and Mouse's/TouchPad's Pointer
var projector, mouse = { x: window.innerHeight, y: window.innerWidth };

// 
var loadingManager, colladaLoader;

// The Flipping/Spinning a Coin's (Bitcoin's) Elements
var flipping_spinning_bitcoin_collada, flipping_spinning_bitcoin_pivot;

// The XY Axis Grid Helper
var xz_grid = new THREE.GridHelper(4, 4, new THREE.Color(0xff0000), new THREE.Color(0xffff00));

// The Form's Controls/Elements - Radios and Checkboxes for
// controlling some aspects of the Scene (Flipping/Spinning a Coin's (Bitcoin's) Experiment Scene)
var flipping_spinning_bitcoin_motions_radios, camera_view_radios, bitcoin_state_radios;

// The Motion's Factor for the Flipping/Spinning a Coin's (Bitcoin's) Experiment rotation's movements
var flipping_spinning_bitcoin_motion_factor;


var is_bitcoin_flipping, is_bitcoin_spinning;

var bitcoin_flipping_factor_counter, bitcoin_spinning_factor_counter;


// The Calls for Initiation and Animation Methods
init();
animate();


// The Initiation Process Method
function init() {

    // The Motion's Factor for the Flipping/Spinning a Coin's (Bitcoin's) Experiment rotation's movements
    flipping_spinning_bitcoin_motion_factor = 1.0;
    
    bitcoin_flipping_factor_counter = 0.0;
    bitcoin_spinning_factor_counter = 0.0;
    
    // Resets the Camera
    reset_camera();

    // Starts the Camera in the Perspective's view
    camera_perspective_view();

    // Starts the Trackball Controls
    start_trackball_controls();

    // Sets the Events' Listeners
    set_event_listeners();

    // Creates the Scene (Flipping/Spinning a Coin's (Bitcoin's) Experiment Scene)
    flipping_spinning_bitcoin_experiment_scene = new THREE.Scene();


    // Adds the Elements of the Scene (Bloch Sphere (Qubit) and Single Quantum Logic Gates/Operators Scene):
    // - The Bloch Sphere (Qubit);
    // - The Bloch Sphere's (Qubit's) State;
    add_flipping_spinning_bitcoin_to_scene();

    // Adds the Lights (Directional and Ambient Lights) to
    // the Scene (Bloch Sphere (Qubit) and Single Quantum Logic Gates/Operators Scene)
    add_lights_to_scene();

    // Creates the renderer for the Scene (Bloch Sphere (Qubit) and Single Quantum Logic Gates/Operators Scene)
    create_renderer_of_scene();
    
    // Adds the Stats (Statistics for the Rendering Process)
    add_stats();

    // Handles/Triggers the functions for the Event's Listeners
    trigger_event_listeners();
    
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
    camera.position.y = 3.4;
}

// Makes the transformations for the Camera's Front View
function camera_front_view() {
     camera.position.z = 3.4;
}

// Makes the transformations for the Camera's Perspective View
function camera_perspective_view() {
    camera.rotation.y += Math.PI/4;
    camera.position.x = 2.0;
    camera.position.z = 2.8;
    camera.position.y = 0.6; 
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

    // Gets the Flipping/Spinning Coin's (Bitcoin's) Motions' Radio options
    flipping_spinning_bitcoin_motions_radios = document.getElementsByName("flipping_spinning_bitcoin_motions_radios");

    // Gets the Camera View's Radio options
    camera_view_radios = document.getElementsByName("camera_view_radios");
    
    // Gets the Coin's (Bitcoin's) State's Radio options
    bitcoin_state_radios = document.getElementsByName("bitcoin_state_radios");
    
    
    // When the Flipping/Spinning Coin's (Bitcoin's) Motions' Radio change, calls the given function
    document.addEventListener('onchange', on_change_flipping_spinning_bitcoin_motions);
    
    // When the Camera View's Radio change, calls the given function
    document.addEventListener('onchange', on_change_camera_view);
    
    // When the Coin's (Bitcoin's) State's Radio change, calls the given function
    document.addEventListener('onchange', on_change_bitcoin_state);
    
    
    // When any change occurs in the Scene (Bloch Sphere (Qubit) and Single Quantum Logic Gates/Operators Scene),
    // calls the given function
    controls.addEventListener('change', render);

    // When the window is resized, calls the given function
    window.addEventListener('resize', on_window_resize, false);

    // When the mouse moves, calls the given function
    document.addEventListener('mousemove', on_document_mouse_move, false);

}

// Adds the Flipping/Spinning a Coin's (Bitcoin's) Experiment to the Scene (Flipping/Spinning a Coin's (Bitcoin's) Experiment Scene)
function add_flipping_spinning_bitcoin_to_scene() {

    flipping_spinning_bitcoin_pivot = new THREE.Group();
    
    // Loading manager
    loadingManager = new THREE.LoadingManager(
        function() {
            flipping_spinning_bitcoin_pivot.add(flipping_spinning_bitcoin_collada);
        }
    );
    
    // Collada loader
    colladaLoader = new THREE.ColladaLoader(loadingManager);
    colladaLoader.load('assets/models/collada/bitcoin_1.dae',
        function(collada) {
            flipping_spinning_bitcoin_collada = collada.scene;
        }
    );
 
    flipping_spinning_bitcoin_experiment_scene.add(flipping_spinning_bitcoin_pivot);
    
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
    flipping_spinning_bitcoin_experiment_scene.add(directional_light_1);


    // Creates a blue directional light
    var directional_light_2 = new THREE.DirectionalLight(0x002288);

    // Sets the direction/position (x=-1, y=-1, z=-1) of
    // the previously created directional light
    directional_light_2.position.set(- 1, - 1, - 1);

    // Adds the previously created directional light to
    // Scene (Atom Representation Scene)
    flipping_spinning_bitcoin_experiment_scene.add(directional_light_2);


    // Creates a gray ambient light
    var ambient_light = new THREE.AmbientLight(0x222222);

    // Adds the previously created ambient light to
    // Scene (Atom Representation Scene)
    flipping_spinning_bitcoin_experiment_scene.add(ambient_light);

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
    // changes in the Coin's (Bitcoin's) Motions' Radio
    on_change_flipping_spinning_bitcoin_motions();
    
    // Handles/Triggers the Function for
    // changes in the Camera View's Radio
    on_change_camera_view();

    // Handles/Triggers the Function for
    // changes in the XY Grid's Checkbox
    on_check_xz_grid();
    
    // Handles/Triggers the Function for
    // changes in the Coin's (Bitcoin's) State's Radio
    on_change_bitcoin_state();
       
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
function on_change_flipping_spinning_bitcoin_motions() {

    for(var i = 0, length = flipping_spinning_bitcoin_motions_radios.length; i < length; i++) {
        flipping_spinning_bitcoin_motions_radios[i].onchange = function() {    

            if(flipping_spinning_bitcoin_motions_radios[0].checked) {
                flipping_spinning_bitcoin_motion_factor = 1.0;
            }
            else {
                flipping_spinning_bitcoin_motion_factor = 0.0;    
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

// Calls a given function, when the Camera View's Radio change
function on_change_bitcoin_state() {

    for(var i = 0, length = bitcoin_state_radios.length; i < length; i++) {
        bitcoin_state_radios[i].onchange = function() {
            
            flipping_spinning_bitcoin_collada.rotation.x -= bitcoin_flipping_factor_counter;
            flipping_spinning_bitcoin_collada.rotation.z -= bitcoin_spinning_factor_counter;
            
            if(bitcoin_state_radios[0].checked) {
                
                is_bitcoin_flipping = false;
                is_bitcoin_spinning = false;
                
                flipping_spinning_bitcoin_collada.rotation.z = 0;
                
            }
            else if(bitcoin_state_radios[1].checked) {
                
                is_bitcoin_flipping = false;
                is_bitcoin_spinning = false;
                
                flipping_spinning_bitcoin_collada.rotation.z = 0;
                flipping_spinning_bitcoin_collada.rotation.z += Math.PI;
            
            }
            else if(bitcoin_state_radios[2].checked) {
            
                is_bitcoin_flipping = true;
                is_bitcoin_spinning = false;
                
            }
            else {
                
                is_bitcoin_flipping = false;
                is_bitcoin_spinning = true;
                    
            }  
                
            bitcoin_flipping_factor_counter = 0;
            bitcoin_spinning_factor_counter = 0;
        }
    }

}

// Calls a given function, when the XZ Grid's Checkbox change
function on_check_xz_grid() {

    var show_xz_grid = document.getElementById("show_xz_grid");

    show_xz_grid.onchange = function() {
        if(show_xz_grid.checked) {
            flipping_spinning_bitcoin_experiment_scene.add(xz_grid);
        }
        else {
            flipping_spinning_bitcoin_experiment_scene.remove(xz_grid);
        }
    }
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
function flipping_spinning_bitcoin_rotation_movements() {
    
    var flipping_spinning_bitcoin_rotation_speed = ( flipping_spinning_bitcoin_motion_factor * 1 * 28 );
    
    if(is_bitcoin_flipping) {
        
        bitcoin_flipping_factor_counter += flipping_spinning_bitcoin_rotation_speed;
        flipping_spinning_bitcoin_collada.rotation.x += flipping_spinning_bitcoin_rotation_speed;
        
    }
    
    if(is_bitcoin_spinning) {
        
        bitcoin_spinning_factor_counter += flipping_spinning_bitcoin_rotation_speed;
        flipping_spinning_bitcoin_collada.rotation.z += flipping_spinning_bitcoin_rotation_speed;
        
    }
    
}


// The Rendering Process Method
function render() {

    // The Animation Frame Request Process
    requestAnimationFrame(render);

    // The Atom's Nucleus' and Particles' States' rotation movements
    flipping_spinning_bitcoin_rotation_movements();
    
    // The Rendering Process, in sucessive repeated calls, in loop
    renderer.render(flipping_spinning_bitcoin_experiment_scene, camera);

}