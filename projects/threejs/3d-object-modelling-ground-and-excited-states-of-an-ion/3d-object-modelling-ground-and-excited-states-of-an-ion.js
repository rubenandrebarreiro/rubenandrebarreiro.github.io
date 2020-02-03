/*

    LEARNING QUANTUM COMPUTING (ONLINE WEB COURSE)
    GROUND AND EXCITED STATES OF AN ION

    AUTHOR:
    - RUBEN ANDRE BARREIRO

    © COPYRIGHTS - ALL RIGHTS RESERVED

*/


// Shows a Message Error, if WebGL it's not available
if(WEBGL.isWebGLAvailable() === false) {
    document.body.appendChild(WEBGL.getWebGLErrorMessage());
}


// Constants/Invariables:

// The Y Axis Normalized
const y_axis = new THREE.Vector3(0, 1, 0).normalize();

// The XZ Axis Grid Helper
const xz_grid = new THREE.GridHelper(8, 8, new THREE.Color(0xff0000), new THREE.Color(0xffff00));        


// Global Instance Variables:

// The Camera, the Trackball Controls (Mouse's/TouchPad's Pointer Controls),
// the Scene (Bohr's Atom Model),
// the Renderer of the Scene and
// the Stats (Statistics of the Rendering Process)
var camera, controls, bohr_atom_model_scene, renderer, stats;

// The Coordinates of the Projector and Mouse's/TouchPad's Pointer
var projector, mouse = { x: window.innerHeight, y: window.innerWidth };

// The Intersection of Elements of the Scene (Bohr's Atom Model)
// (The Particles, i.e., the Nucleus/Proton and the Electron in Ground/Excited States)
var NUCLEUS_PROTON_INTERSECTED, ELECTRON_GROUND_STATE_INTERSECTED, ELECTRON_EXCITED_STATE_INTERSECTED;

// Nucleus/Proton's Elements
// (The Particle, i.e., the Proton)
var nucleus_proton_geometry, nucleus_proton_material, nucleus_proton_mesh, nucleus_proton_property_keys, nucleus_proton_pivot;

// The Electron's Ground State's Elements
// (The Particle, i.e., the Electron's Ground State and its Orbit)
var electron_ground_state_orbit_geometry, electron_ground_state_orbit_material, electron_ground_state_orbit_mesh, electron_ground_state_geometry, electron_ground_state_material, electron_ground_state_mesh, electron_ground_state_property_keys, electron_ground_superposition_property_keys, electron_ground_state_particle_pivot, electron_ground_state_pivot;

// The Electron's Excited State's Elements
// (The Particle, i.e., the Electron's Excited State and its Orbit)
var electron_excited_state_orbit_geometry, electron_excited_state_orbit_material, electron_excited_state_orbit_mesh, electron_excited_state_geometry, electron_excited_state_material, electron_excited_state_mesh, electron_excited_state_property_keys, electron_excited_superposition_property_keys, electron_excited_state_particle_pivot, electron_excited_state_pivot;

// The Form's Controls/Elements - Radios and Checkboxes for
// controlling some aspects of the Scene (Bohr's Atom Model)
var motions_radios, camera_view_radios, xz_grid_checked, atomic_orbits_checked, electron_states_radios;

// The Motions' Factor for the Nucleus/Proton and Electron's States'
// rotations' and translactions' movements
var motions_factor;

// The boolean value to keep the information about if
// the Electron is in a Quantum Superposition of States
var is_in_quantum_superposition_of_states;


// The Calls for Initiation and Animation Methods
init();
animate();


// The callbacks for load JSONs files:

// Loads the Nucleus/Proton's JSON file
function load_nucleus_proton_json(callback) {   

    var obj = new XMLHttpRequest();

    obj.overrideMimeType("application/json");
    obj.open('GET', 'assets/info/json/nucleus_proton_data.json', true);

    obj.onreadystatechange = function () {

        if (obj.readyState == 4 && obj.status == "200") {
            // Required use of an anonymous callback as .open will
            // NOT return a value but simply returns undefined in
            // asynchronous mode
            callback(obj.responseText);
        }

    };

    obj.send(null);  
}

// Loads the Electron's Ground State's JSON file
function load_electron_ground_state_json(callback) {   

    var obj = new XMLHttpRequest();

    obj.overrideMimeType("application/json");
    obj.open('GET', 'assets/info/json/electron_ground_state_data.json', true);

    obj.onreadystatechange = function () {

        if (obj.readyState == 4 && obj.status == "200") {
            // Required use of an anonymous callback as .open will
            // NOT return a value but simply returns undefined in
            // asynchronous mode
            callback(obj.responseText);
        }

    };

    obj.send(null);  
}

// Loads the Electron's Excited State's JSON file
function load_electron_excited_state_json(callback) {   

    var obj = new XMLHttpRequest();

    obj.overrideMimeType("application/json");
    obj.open('GET', 'assets/info/json/electron_excited_state_data.json', true);

    obj.onreadystatechange = function () {

        if (obj.readyState == 4 && obj.status == "200") {
            // Required use of an anonymous callback as .open will
            // NOT return a value but simply returns undefined in
            // asynchronous mode
            callback(obj.responseText);
        }

    };

    obj.send(null);  
}

// Loads the Electron's Quantum Superposition of States' JSON file
function load_electron_superposition_json(callback) {   

    var obj = new XMLHttpRequest();

    obj.overrideMimeType("application/json");
    obj.open('GET', 'assets/info/json/electron_superposition_data.json', true);

    obj.onreadystatechange = function () {

        if (obj.readyState == 4 && obj.status == "200") {
            // Required use of an anonymous callback as .open will
            // NOT return a value but simply returns undefined in
            // asynchronous mode
            callback(obj.responseText);
        }

    };

    obj.send(null);  
}

// The Initiation Process Method
function init() {

    // The Motions' Factor for the Nucleus/Proton and Electron's States'
    // rotations' and translactions' movements
    motions_factor = 1.0;

    // The boolean value to keep the information about if
    // the Electron is in a Quantum Superposition of States
    is_in_quantum_superposition_of_states = false;

    // Resets the Camera
    reset_camera();

    // Starts the Camera in the From Up's view
    camera_top_view();

    // Starts the Trackball Controls
    start_trackball_controls();

    // Sets the Events' Listeners
    set_event_listeners();

    // Creates the Scene (Bohr's Atom Model)
    bohr_atom_model_scene = new THREE.Scene();


    // Adds the Elements of the Scene (Bohr's Atom Model):
    // - The Nucleus/Proton;
    // - The Electron's Ground State and its Orbit;
    // - The Electron's Excited State and its Orbit;
    add_elements_to_scene();

    // Adds the Lights (Directional and Ambient Lights) to
    // the Scene (Bohr's Atom Model)
    add_lights_to_scene();

    // Creates the renderer for the Scene (Bohr's Atom Model)
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
    camera.position.y = 6;
    camera.lookAt(new THREE.Vector3(0,0,0));
}

// Makes the transformations for the Camera's Perspective View
function camera_perspective_view() {
    camera.rotation.x += Math.PI/4;
    camera.position.z = 6;
    camera.position.y = 2;
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

    // Gets the Electron State's Radio options
    electron_states_radios = document.getElementsByName("electron_states_radios");

    // When the Motions' Radio change, calls the given function
    document.addEventListener('onchange', on_change_motions);

    // When the Camera View's Radio change, calls the given function
    document.addEventListener('onchange', on_change_camera_view);

    // When the Electron State's Radio change, calls the given function
    document.addEventListener('onchange', on_change_electron_states);

    // When any change occurs in the Scene (Bohr's Atom Model),
    // calls the given function
    controls.addEventListener('change', render);

    // When the window is resized, calls the given function
    window.addEventListener('resize', on_window_resize, false);

    // When the mouse moves, calls the given function
    document.addEventListener('mousemove', on_document_mouse_move, false);

}

// Adds the Elements (Nucleus/Proton and the Electron's Ground/Excited State) to
// the Scene (Bohr's Atom Model Scene)
function add_elements_to_scene() {

    add_nucleus_proton_to_scene();
    add_electron_ground_state_to_scene();
    add_electron_excited_state_to_scene();

}

// Adds the Nucleus/Proton to the Scene (Bohr's Atom Model Scene)
function add_nucleus_proton_to_scene() {

    // Creates the Geometry of the Sphere representing
    // the Nucleus/Proton
    nucleus_proton_geometry = new THREE.SphereGeometry(0.6, 40, 40);

    // Creates the Material of the Sphere representing
    // the Nucleus/Proton
    nucleus_proton_material = new THREE.MeshBasicMaterial(
        {
            color: 0xdda0dd
        }
    );

    // Creates the Mesh of the Nucleus/Proton
    nucleus_proton_mesh = new THREE.Mesh(nucleus_proton_geometry, nucleus_proton_material);

    // Loads the JSON data file of the Nucleus/Proton Element
    load_nucleus_proton_json(function(response) {

        // Parses Nucleus'/Proton's JSON string into object
        var nucleus_proton_data_json = JSON.parse(response);

        // Loads the Property Keys' data of
        // the JSON data file of the Nucleus/Proton Element
        nucleus_proton_property_keys = Object.keys(nucleus_proton_data_json);

        // Binds the Property Keys' data of
        // the JSON data file of the Nucleus/Proton Element to
        // the Mesh of the Nucleus/Proton
        for(i = 0; i < nucleus_proton_property_keys.length; i++)
            nucleus_proton_mesh[nucleus_proton_property_keys[i]] = nucleus_proton_data_json[nucleus_proton_property_keys[i]];
    });

    // Creates the group for the Nucleus'/Proton's Pivot
    nucleus_proton_pivot = new THREE.Group();

    // Adds the Mesh of the Nucleus/Proton
    // the group for the Nucleus'/Proton' Pivot
    nucleus_proton_pivot.add(nucleus_proton_mesh);

    // Adds the group for the Nucleus'/Proton' Pivot to
    // the Scene (Bohr's Atom Model) 
    bohr_atom_model_scene.add(nucleus_proton_pivot);

}

// Adds the Electron's Ground State to the Scene (Bohr's Atom Model Scene)
function add_electron_ground_state_to_scene() {

    // Creates the Electron's Ground State's Orbit
    create_electron_ground_state_orbit();

    // Creates the Electron's Ground State
    create_electron_ground_state();


    // Loads the JSON data file of the Electron's Ground State Element
    load_electron_ground_state_json(function(response) {

        // Parses Electron's Ground State's JSON string into object
        var electron_ground_state_data_json = JSON.parse(response);

        // Loads the Property Keys' data of
        // the JSON data file of the Electron's Ground State Element
        electron_ground_state_property_keys = Object.keys(electron_ground_state_data_json);

        // Binds the Property Keys' data of
        // the JSON data file of the Electron's Ground State Element to
        // the Mesh of the Electron's Ground State
        for(i = 0; i < electron_ground_state_property_keys.length; i++)
            electron_ground_state_mesh[electron_ground_state_property_keys[i]] = electron_ground_state_data_json[electron_ground_state_property_keys[i]];

    });


    // Loads the JSON data file of the Electron's Quantum Superposition of States Element
    load_electron_superposition_json(function(response) {

        // Parses Electron's Quantum Superposition of States' JSON string into object
        var electron_ground_superposition_data_json = JSON.parse(response);

        // Loads the Property Keys' data of
        // the JSON data file of the Electron's Quantum Superposition of States Element
        electron_ground_superposition_property_keys = Object.keys(electron_ground_superposition_data_json);

        // Binds the Property Keys' data of
        // the JSON data file of the Electron's Quantum Superposition of States Element to
        // the Mesh of the Electron's Ground State
        for(i = 0; i < electron_ground_superposition_property_keys.length; i++)
            electron_ground_state_mesh[ (electron_ground_state_property_keys.length + electron_ground_superposition_property_keys)[i] ] = electron_ground_superposition_data_json[electron_ground_superposition_property_keys[i]];

    });

    // Creates the group for the Electron's Ground State's Pivot
    electron_ground_state_pivot = new THREE.Group();

    // Adds the Mesh of the Electron's Ground State to
    // the group for the Electron's Ground State's Pivot
    electron_ground_state_pivot.add(electron_ground_state_orbit_mesh);

    // Adds the Mesh of the Electron's Ground State Particle's Pivot to
    // the group for the Electron's Ground State's Pivot
    electron_ground_state_pivot.add(electron_ground_state_particle_pivot);

    // Adds the group for the Electron's Ground State Pivot to
    // the Scene (Bohr's Atom Model) 
    bohr_atom_model_scene.add(electron_ground_state_pivot);

}

// Creates the Electron's Ground State's Orbit
function create_electron_ground_state_orbit() {

    // Creates the Geometry of the Ring representing
    // the Electron's Ground State's Orbit
    electron_ground_state_orbit_geometry = new THREE.RingGeometry(1.5, 1.52, 60);

    // Creates the Material of the Ring representing
    // the Electron's Ground State's Orbit
    electron_ground_state_orbit_material = new THREE.MeshBasicMaterial(
        {
            color: 0xffffff,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 1.0
        }
    );

    // Creates the Mesh of the Electron's Ground State's Orbit
    electron_ground_state_orbit_mesh = new THREE.Mesh(electron_ground_state_orbit_geometry, electron_ground_state_orbit_material);

    // Rotates the Electron's Ground State's Orbit PI/2
    // (i.e., 90º degrees), regarding the X Axis
    electron_ground_state_orbit_mesh.rotation.x = Math.PI / 2;

}

// Creates the Electron's Ground State
function create_electron_ground_state() {

    // Creates the Geometry of the Sphere representing
    // the Electron's Ground State
    electron_ground_state_geometry = new THREE.SphereGeometry(0.22, 40, 40);

    // Creates the Material of the Sphere representing
    // the Electron's Ground State
    electron_ground_state_material = new THREE.MeshBasicMaterial(
        {
            color: 0xff2200,
            depthTest: false,
            transparent: true,
            opacity: 0.0
        }
    );

    // Creates the Mesh of the Electron's Ground State
    electron_ground_state_mesh = new THREE.Mesh(electron_ground_state_geometry, electron_ground_state_material);            

    // Translates/Moves the Electron's Ground State
    // -1.51 units, regarding the Z Axis
    electron_ground_state_mesh.position.z = -1.51;

    // Creates the group for the Electron's Ground State Particle's Pivot
    electron_ground_state_particle_pivot = new THREE.Group();

    // Adds the Mesh of the Electron's Ground State
    // the group for the Electron's Ground State Particle's Pivot
    electron_ground_state_particle_pivot.add(electron_ground_state_mesh);

}

// Adds the Electron's Excited State to the Scene (Bohr's Atom Model Scene)
function add_electron_excited_state_to_scene() {

    // Creates the Electron's Excited State's Orbit
    create_electron_excited_state_orbit();

    // Creates the Electron's Excited State
    create_electron_excited_state();


    // Loads the JSON data file of the Electron's Excited State Element
    load_electron_excited_state_json(function(response) {

        // Parses Electron's Excited State's JSON string into object
        var electron_excited_state_data_json = JSON.parse(response);

        // Loads the Property Keys' data of
        // the JSON data file of the Electron's Excited State Element
        electron_excited_state_property_keys = Object.keys(electron_excited_state_data_json);

        // Binds the Property Keys' data of
        // the JSON data file of the Electron's Excited State Element to
        // the Mesh of the Electron's Excited State
        for(i = 0; i < electron_excited_state_property_keys.length; i++)
            electron_excited_state_mesh[electron_excited_state_property_keys[i]] = electron_excited_state_data_json[electron_excited_state_property_keys[i]];

    });


    // Loads the JSON data file of the Electron's Quantum Superposition of States Element
    load_electron_superposition_json(function(response) {

        // Parses Electron's Quantum Superposition of States' JSON string into object
        var electron_excited_superposition_data_json = JSON.parse(response);

        // Loads the Property Keys' data of
        // the JSON data file of the Electron's Quantum Superposition of States Element
        electron_excited_superposition_property_keys = Object.keys(electron_excited_superposition_data_json);

        // Binds the Property Keys' data of
        // the JSON data file of the Electron's Quantum Superposition of States Element to
        // the Mesh of the Electron's Excited State
        for(i = 0; i < electron_excited_superposition_property_keys.length; i++)
            electron_excited_state_mesh[ (electron_ground_state_property_keys.length + electron_ground_superposition_property_keys) [i]] = electron_excited_superposition_data_json[electron_excited_superposition_property_keys[i]];

    });


    // Creates the group for the Electron's Excited State's Pivot
    electron_excited_state_pivot = new THREE.Group();

    // Adds the Mesh of the Electron's Excited State to
    // the group for the Electron's Excited State's Pivot
    electron_excited_state_pivot.add(electron_excited_state_orbit_mesh);

    // Adds the Mesh of the Electron's Excited State Particle's Pivot to
    // the group for the Electron's Excited State's Pivot
    electron_excited_state_pivot.add(electron_excited_state_particle_pivot);

    // Adds the group for the Electron's Excited State Pivot to
    // the Scene (Bohr's Atom Model) 
    bohr_atom_model_scene.add(electron_excited_state_pivot);

}

// Creates the Electron's Excited State's Orbit
function create_electron_excited_state_orbit() {

    // Creates the Geometry of the Ring representing
    // the Electron's Excited State's Orbit
    electron_excited_state_orbit_geometry = new THREE.RingGeometry(2.5, 2.52, 60);

    // Creates the Material of the Ring representing
    // the Electron's Excited State's Orbit
    electron_excited_state_orbit_material = new THREE.MeshBasicMaterial(
        {
            color: 0xffffff,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 1.0
        }
    );

    // Creates the Mesh of the Electron's Excited State's Orbit
    electron_excited_state_orbit_mesh = new THREE.Mesh(electron_excited_state_orbit_geometry, electron_excited_state_orbit_material);

    // Rotates the Electron's Excited State's Orbit PI/2
    // (i.e., 90º degrees), regarding the X Axis
    electron_excited_state_orbit_mesh.rotation.x = Math.PI / 2;

}

// Creates the Electron's Excited State
function create_electron_excited_state() {

    // Creates the Geometry of the Sphere representing
    // the Electron's Excited State
    electron_excited_state_geometry = new THREE.SphereGeometry(0.22, 40, 40);

    // Creates the Material of the Sphere representing
    // the Electron's Excited State
    electron_excited_state_material = new THREE.MeshBasicMaterial(
        {
            color: 0xff2200,
            depthTest: true,
            transparent: true,
            opacity: 1.0
        }
    );

    // Creates the Mesh of the Electron's Excited State
    electron_excited_state_mesh = new THREE.Mesh(electron_excited_state_geometry, electron_excited_state_material);            

    // Translates/Moves the Electron's Excited State
    // -2.51 units, regarding the Z Axis
    electron_excited_state_mesh.position.z = -2.51;

    // Creates the group for the Electron's Excited State Particle's Pivot
    electron_excited_state_particle_pivot = new THREE.Group();

    // Adds the Mesh of the Electron's Excited State
    // the group for the Electron's Excited State Particle's Pivot
    electron_excited_state_particle_pivot.add(electron_excited_state_mesh);

}

// Adds the Lights (Directional and Ambient Lights) to
// the Scene (Bohr's Atom Model Scene)
function add_lights_to_scene() {

    // Creates a white directional light
    var directional_light_1 = new THREE.DirectionalLight(0xffffff);

    // Sets the direction/position (x=1, y=1, z=1) of
    // the previously created directional light
    directional_light_1.position.set(1, 1, 1);

    // Adds the previously created directional light to
    // Scene (Bohr's Atom Model)
    bohr_atom_model_scene.add(directional_light_1);


    // Creates a blue directional light
    var directional_light_2 = new THREE.DirectionalLight(0x002288);

    // Sets the direction/position (x=-1, y=-1, z=-1) of
    // the previously created directional light
    directional_light_2.position.set(- 1, - 1, - 1);

    // Adds the previously created directional light to
    // Scene (Bohr's Atom Model)
    bohr_atom_model_scene.add(directional_light_2);


    // Creates a gray ambient light
    var ambient_light = new THREE.AmbientLight(0x222222);

    // Adds the previously created ambient light to
    // Scene (Bohr's Atom Model)
    bohr_atom_model_scene.add(ambient_light);

}

// Creates the Renderer for the Scene (Bohr's Atom Model Scene)
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
// the Scene (Bohr's Atom Model Scene)
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

    // Handles/Triggers the Function for
    // changes in the Atomic Orbit's Checkbox
    on_check_atomic_orbits();

    // Handles/Triggers the Function for
    // changes in the Electron States' Radio
    on_change_electron_states();

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
            bohr_atom_model_scene.add(xz_grid);
        }
        else {
            bohr_atom_model_scene.remove(xz_grid);
        }
    }
}

// Calls a given function, when the Atomic Orbit's Checkbox change
function on_check_atomic_orbits() {

    var show_atomic_orbits = document.getElementById("show_atomic_orbits");

    show_atomic_orbits.onchange = function() {
        if(show_atomic_orbits.checked) {
            electron_ground_state_orbit_mesh.material.opacity = 1.0;
            electron_excited_state_orbit_mesh.material.opacity = 1.0;
        }
        else {
            electron_ground_state_orbit_mesh.material.opacity = 0.0;
            electron_excited_state_orbit_mesh.material.opacity = 0.0;
        }
    }
}

// Calls a given function, when the Electron State's Radio change
function on_change_electron_states() {

    // Verifies all the Possible States for the Electron
    // - Ground State;
    // - Excited State;
    // - Quantum Superposition of both Ground and Excited States;
    for(var i = 0, length = electron_states_radios.length; i < length; i++) {
        electron_states_radios[i].onchange = function() {    

            // The Electron it's in Ground State
            if(electron_states_radios[0].checked) {

                electron_ground_state_material.opacity = 1.0;
                electron_ground_state_material.depthTest = true;

                electron_excited_state_material.opacity = 0.0;
                electron_excited_state_material.depthTest = false;

                is_in_quantum_superposition_of_states = false;
            }

            // The Electron it's in Excited State
            if(electron_states_radios[1].checked) {

                electron_ground_state_material.opacity = 0.0;
                electron_ground_state_material.depthTest = false;

                electron_excited_state_material.opacity = 1.0;
                electron_excited_state_material.depthTest = true;

                is_in_quantum_superposition_of_states = false;
            }

            // The Electron it's in a Quantum Superposition of States
            if(electron_states_radios[2].checked) {

                // The 0.5 opacity it's to represent the Quantum Superposition of States,
                // regarding the Electron's Ground State
                electron_ground_state_material.opacity = 0.5;
                electron_ground_state_material.depthTest = false;

                // The 0.5 opacity it's to represent the Quantum Superposition of States,
                // regarding the Electron's Excited State
                electron_excited_state_material.opacity = 0.5;
                electron_excited_state_material.depthTest = false;

                is_in_quantum_superposition_of_states = true;

            }
        }
    }

}


// The Animation Process Method
function animate() {

    // Calls the Animation Method again
    requestAnimationFrame(animate);

    // Finds intersections between the Mouse's Pointer and the Nucleus/Proton
    find_intersections_nucleus_proton();

    // Finds intersections between the Mouse's Pointer and the Electron's Ground State
    find_intersections_electron_ground_state();

    // Finds intersections between the Mouse's Pointer and the Electron's Excited State
    find_intersections_electron_excited_state();

    // Updates the Trackball Controls
    controls.update();

    // Updates the Stats (Statistics for the Rendering Process)
    stats.update();

}


// Finds intersections between the Mouse's Pointer and the Nucleus/Proton
function find_intersections_nucleus_proton() {

    // Creates a Ray with origin at the Mouse's Pointer Position
    // and direction into the Scene (Bohr's Atom Model),
    // i.e., the Camera Position/Direction
    var vector = new THREE.Vector3(mouse.x, mouse.y, 1);

    // Unprojects the Ray's vector previously created
    projector.unprojectVector(vector, camera);

    // Creates the Raycaster from the Camera's Position and its respectively normalized vector
    var ray = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

    // Creates an array containing all objects in the scene with which the ray intersects
    var intersects = ray.intersectObjects(nucleus_proton_pivot.children);

    // NUCLEUS_PROTON_INTERSECTED = the object in the scene currently closest to the camera 
    // and intersected by the Ray projected from the mouse position 	

    // If there is one (or more) intersections
    if(intersects.length > 0) {

        // If the closest object intersected is not the currently stored intersection object
        if(intersects[0].object != NUCLEUS_PROTON_INTERSECTED) {

            // Restores previous intersection object (if it exists) to its original map's texture
            if(NUCLEUS_PROTON_INTERSECTED) {

                // The Nucleus'/Proton's Material needs to be updated
                NUCLEUS_PROTON_INTERSECTED.material.needsUpdate = true;

                // Sets the Nucleus'/Proton's Material Color to Yellow
                NUCLEUS_PROTON_INTERSECTED.material.color.setHex(0xffff00);

                // Clears the Object's Name for the Nucleus/Proton displayed in
                // the left side of the Scene (Bohr's Atom Model)
                document.getElementById("object_name").textContent = "";

                // Clears all the Nucleus'/Proton's Property Keys displayed in
                // the left side of the Scene (Bohr's Atom Model)
                for(i = 1; i < nucleus_proton_property_keys.length; i++) {

                    var div_data_info_elem_id = "object_data_info_" + i;
                    document.getElementById(div_data_info_elem_id).style.display = "none";

                    var span_data_title_elem_id = "object_data_title_" + i;
                    document.getElementById(span_data_title_elem_id).innerHTML = "";
                    document.getElementById(span_data_title_elem_id).style.display = "none";

                    var span_data_content_elem_id = "object_data_content_" + i;
                    document.getElementById(span_data_content_elem_id).innerHTML = "";
                    document.getElementById(span_data_content_elem_id).style.display = "none";

                }
            }

            // Stores the reference to closest object as current intersection object
            NUCLEUS_PROTON_INTERSECTED = intersects[0].object;

            // Sets a new color for closest object
            NUCLEUS_PROTON_INTERSECTED.material.color.setHex(0xffff00);

            // Sets the Object's Name for the Nucleus/Proton displayed in
            // the left side of the Scene (Bohr's Atom Model)
            document.getElementById("object_name").textContent = intersects[0].object[nucleus_proton_property_keys[0]];

            // Sets all the Nucleus'/Proton's Property Keys
            for(i = 1; i < nucleus_proton_property_keys.length; i++) {

                var div_data_info_elem_id = "object_data_info_" + i;
                document.getElementById(div_data_info_elem_id).style.display = "inline";

                var span_data_title_elem_id = "object_data_title_" + i;
                document.getElementById(span_data_title_elem_id).innerHTML = nucleus_proton_property_keys[i];
                document.getElementById(span_data_title_elem_id).style.display = "inline";

                var some_object_data_info = (intersects[0].object[nucleus_proton_property_keys[i]])[0];

                var some_object_data_info_keys = Object.keys(some_object_data_info);

                var current_object_data_info = "";

                // Sets all the current Nucleus'/Proton's Sub-Property Keys
                for(j = 0; j < some_object_data_info_keys.length; j++)
                    current_object_data_info += "- <b><u>" + some_object_data_info_keys[j] + "</u></b>: " + some_object_data_info[some_object_data_info_keys[j]] + "<br/>";

                // Displays the final data/information in
                // the left side of the Scene (Bohr's Atom Model)
                var span_data_content_elem_id = "object_data_content_" + i;
                document.getElementById(span_data_content_elem_id).innerHTML = current_object_data_info;
                document.getElementById(span_data_content_elem_id).style.display = "inline";

            }
        }
    } 
    else { // There are no intersections

        // Restores previous intersection object (if it exists) to its original color
        if(NUCLEUS_PROTON_INTERSECTED) {

            // The Nucleus'/Proton's Material needs to be updated
            NUCLEUS_PROTON_INTERSECTED.material.needsUpdate = true;

            // Sets the Nucleus'/Proton's Material Color to its default
            NUCLEUS_PROTON_INTERSECTED.material.color.setHex(0xdda0dd);

            // Clears the Object's Name for the Nucleus/Proton displayed in
            // the left side of the Scene (Bohr's Atom Model)
            document.getElementById("object_name").textContent = "";

            // Clears all the Nucleus'/Proton's Property Keys displayed in
            // the left side of the Scene (Bohr's Atom Model)
            for(i = 1; i < nucleus_proton_property_keys.length; i++) {

                var div_data_info_elem_id = "object_data_info_" + i;
                document.getElementById(div_data_info_elem_id).style.display = "none";

                var span_data_title_elem_id = "object_data_title_" + i;
                document.getElementById(span_data_title_elem_id).innerHTML = "";
                document.getElementById(span_data_title_elem_id).style.display = "none";

                var span_data_content_elem_id = "object_data_content_" + i;
                document.getElementById(span_data_content_elem_id).innerHTML = "";
                document.getElementById(span_data_content_elem_id).style.display = "none";

            }
        }

        // Remove previous intersection object reference
        // by setting current intersection object to "nothing"
        NUCLEUS_PROTON_INTERSECTED = null;

    }

}

// Finds intersections between the Mouse's Pointer and the Electron's Ground State
function find_intersections_electron_ground_state() {

    // Create a Ray with origin at the mouse position
    // and direction into the scene (camera direction)
    var vector = new THREE.Vector3(mouse.x, mouse.y, 1);
    projector.unprojectVector(vector, camera);

    var ray = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

    // Create an array containing all objects in the scene with which the ray intersects
    var intersects = ray.intersectObjects(electron_ground_state_particle_pivot.children);

    // ELECTRON_GROUND_STATE_INTERSECTED = the object in the scene currently closest to the camera 
    // and intersected by the Ray projected from the mouse position 	

    // If there is one (or more) intersections
    if(intersects.length > 0) {

        // If the closest object intersected is not the currently stored intersection object
        if(intersects[0].object != ELECTRON_GROUND_STATE_INTERSECTED) {

            // Restore previous intersection object (if it exists) to its original map's texture
            if(ELECTRON_GROUND_STATE_INTERSECTED) {

                ELECTRON_GROUND_STATE_INTERSECTED.material.needsUpdate = true;

                ELECTRON_GROUND_STATE_INTERSECTED.material.color.setHex(0xff2200);

                document.getElementById("object_name").textContent = "";

                for(i = 1; i < electron_ground_state_property_keys.length; i++) {

                    var div_data_info_elem_id = "object_data_info_" + i;
                    document.getElementById(div_data_info_elem_id).style.display = "none";

                    var span_data_title_elem_id = "object_data_title_" + i;
                    document.getElementById(span_data_title_elem_id).innerHTML = "";
                    document.getElementById(span_data_title_elem_id).style.display = "none";

                    var span_data_content_elem_id = "object_data_content_" + i;
                    document.getElementById(span_data_content_elem_id).innerHTML = "";
                    document.getElementById(span_data_content_elem_id).style.display = "none";

                }

                for(i = 1; i < electron_ground_superposition_property_keys.length; i++) {

                    var div_data_info_elem_id = "object_data_info_" + i;
                    document.getElementById(div_data_info_elem_id).style.display = "none";

                    var span_data_title_elem_id = "object_data_title_" + i;
                    document.getElementById(span_data_title_elem_id).innerHTML = "";
                    document.getElementById(span_data_title_elem_id).style.display = "none";

                    var span_data_content_elem_id = "object_data_content_" + i;
                    document.getElementById(span_data_content_elem_id).innerHTML = "";
                    document.getElementById(span_data_content_elem_id).style.display = "none";

                }

            }

            // Store reference to closest object as current intersection object
            ELECTRON_GROUND_STATE_INTERSECTED = intersects[0].object;

            // Set a new color for closest object
            ELECTRON_GROUND_STATE_INTERSECTED.material.needsUpdate = true;

            ELECTRON_GROUND_STATE_INTERSECTED.material.color.setHex(0xffff00);
            
            
            if(is_in_quantum_superposition_of_states) {

                document.getElementById("object_name").textContent = intersects[0].object[electron_ground_superposition_property_keys[0]];

                for(i = 1; i < electron_ground_superposition_property_keys.length; i++) {

                    var div_data_info_elem_id = "object_data_info_" + i;
                    document.getElementById(div_data_info_elem_id).style.display = "inline";

                    var span_data_title_elem_id = "object_data_title_" + i;
                    document.getElementById(span_data_title_elem_id).innerHTML = electron_ground_superposition_property_keys[i];
                    document.getElementById(span_data_title_elem_id).style.display = "inline";

                    var some_object_data_info = (intersects[0].object[ (electron_ground_state_property_keys.length + electron_ground_superposition_property_keys)[i] ])[0];

                    var some_object_data_info_keys = Object.keys(some_object_data_info);

                    var current_object_data_info = "";

                    for(j = 0; j < some_object_data_info_keys.length; j++)
                        current_object_data_info += "- <b><u>" + some_object_data_info_keys[j] + "</u></b>: " + some_object_data_info[some_object_data_info_keys[j]] + "<br/>";

                    var span_data_content_elem_id = "object_data_content_" + i;
                    document.getElementById(span_data_content_elem_id).innerHTML = current_object_data_info;
                    document.getElementById(span_data_content_elem_id).style.display = "inline";

                }

            }
            else {

                document.getElementById("object_name").textContent = intersects[0].object[electron_ground_state_property_keys[0]];

                for(i = 1; i < electron_ground_state_property_keys.length; i++) {

                    var div_data_info_elem_id = "object_data_info_" + i;
                    document.getElementById(div_data_info_elem_id).style.display = "inline";

                    var span_data_title_elem_id = "object_data_title_" + i;
                    document.getElementById(span_data_title_elem_id).innerHTML = electron_ground_state_property_keys[i];
                    document.getElementById(span_data_title_elem_id).style.display = "inline";

                    var some_object_data_info = (intersects[0].object[electron_ground_state_property_keys[i]])[0];

                    var some_object_data_info_keys = Object.keys(some_object_data_info);

                    var current_object_data_info = "";

                    for(j = 0; j < some_object_data_info_keys.length; j++)
                        current_object_data_info += "- <b><u>" + some_object_data_info_keys[j] + "</u></b>: " + some_object_data_info[some_object_data_info_keys[j]] + "<br/>";

                    var span_data_content_elem_id = "object_data_content_" + i;
                    document.getElementById(span_data_content_elem_id).innerHTML = current_object_data_info;
                    document.getElementById(span_data_content_elem_id).style.display = "inline";

                }

            }

        }
    } 
    else { // There are no intersections

        // Restore previous intersection object (if it exists) to its original map's texture
        if(ELECTRON_GROUND_STATE_INTERSECTED) {

            ELECTRON_GROUND_STATE_INTERSECTED.material.needsUpdate = true;

            ELECTRON_GROUND_STATE_INTERSECTED.material.color.setHex(0xff2200);

            document.getElementById("object_name").textContent = "";

            for(i = 1; i < electron_ground_state_property_keys.length; i++) {

                var div_data_info_elem_id = "object_data_info_" + i;
                document.getElementById(div_data_info_elem_id).style.display = "none";

                var span_data_title_elem_id = "object_data_title_" + i;
                document.getElementById(span_data_title_elem_id).innerHTML = "";
                document.getElementById(span_data_title_elem_id).style.display = "none";

                var span_data_content_elem_id = "object_data_content_" + i;
                document.getElementById(span_data_content_elem_id).innerHTML = "";
                document.getElementById(span_data_content_elem_id).style.display = "none";

            }

            for(i = 1; i < electron_ground_superposition_property_keys.length; i++) {

                var div_data_info_elem_id = "object_data_info_" + i;
                document.getElementById(div_data_info_elem_id).style.display = "none";

                var span_data_title_elem_id = "object_data_title_" + i;
                document.getElementById(span_data_title_elem_id).innerHTML = "";
                document.getElementById(span_data_title_elem_id).style.display = "none";

                var span_data_content_elem_id = "object_data_content_" + i;
                document.getElementById(span_data_content_elem_id).innerHTML = "";
                document.getElementById(span_data_content_elem_id).style.display = "none";

            }

        }

        // Remove previous intersection object reference
        // by setting current intersection object to "nothing"
        ELECTRON_GROUND_STATE_INTERSECTED = null;

    }

}

// Finds intersections between the Mouse's Pointer and the Electron's Excited State
function find_intersections_electron_excited_state() {

    // Create a Ray with origin at the mouse position
    // and direction into the scene (camera direction)
    var vector = new THREE.Vector3(mouse.x, mouse.y, 1);
    projector.unprojectVector(vector, camera);

    var ray = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

    // Create an array containing all objects in the scene with which the ray intersects
    var intersects = ray.intersectObjects(electron_excited_state_particle_pivot.children);

    // ELECTRON_EXCITED_STATE_INTERSECTED = the object in the scene currently closest to the camera 
    // and intersected by the Ray projected from the mouse position 	

    // If there is one (or more) intersections
    if(intersects.length > 0) {

        // If the closest object intersected is not the currently stored intersection object
        if(intersects[0].object != ELECTRON_EXCITED_STATE_INTERSECTED) {

            // Restores previous intersection object (if it exists) to its original color
            if(ELECTRON_EXCITED_STATE_INTERSECTED) {

                ELECTRON_EXCITED_STATE_INTERSECTED.material.needsUpdate = true;

                ELECTRON_EXCITED_STATE_INTERSECTED.material.color.setHex(0xffff00);

                document.getElementById("object_name").textContent = "";

                for(i = 1; i < electron_excited_state_property_keys.length; i++) {

                    var div_data_info_elem_id = "object_data_info_" + i;
                    document.getElementById(div_data_info_elem_id).style.display = "none";

                    var span_data_title_elem_id = "object_data_title_" + i;
                    document.getElementById(span_data_title_elem_id).innerHTML = "";
                    document.getElementById(span_data_title_elem_id).style.display = "none";

                    var span_data_content_elem_id = "object_data_content_" + i;
                    document.getElementById(span_data_content_elem_id).innerHTML = "";
                    document.getElementById(span_data_content_elem_id).style.display = "none";

                }

                for(i = 1; i < electron_excited_superposition_property_keys.length; i++) {

                    var div_data_info_elem_id = "object_data_info_" + i;
                    document.getElementById(div_data_info_elem_id).style.display = "none";

                    var span_data_title_elem_id = "object_data_title_" + i;
                    document.getElementById(span_data_title_elem_id).innerHTML = "";
                    document.getElementById(span_data_title_elem_id).style.display = "none";

                    var span_data_content_elem_id = "object_data_content_" + i;
                    document.getElementById(span_data_content_elem_id).innerHTML = "";
                    document.getElementById(span_data_content_elem_id).style.display = "none";

                }
            }

            // Store reference to closest object as current intersection object
            ELECTRON_EXCITED_STATE_INTERSECTED = intersects[0].object;

            // Set a new color for closest object
            ELECTRON_EXCITED_STATE_INTERSECTED.material.needsUpdate = true;

            ELECTRON_EXCITED_STATE_INTERSECTED.material.color.setHex(0xffff00);

            
            if(is_in_quantum_superposition_of_states) {

                document.getElementById("object_name").textContent = intersects[0].object[electron_excited_superposition_property_keys[0]];

                for(i = 1; i < electron_excited_superposition_property_keys.length; i++) {

                    var div_data_info_elem_id = "object_data_info_" + i;
                    document.getElementById(div_data_info_elem_id).style.display = "inline";

                    var span_data_title_elem_id = "object_data_title_" + i;
                    document.getElementById(span_data_title_elem_id).innerHTML = electron_excited_superposition_property_keys[i];
                    document.getElementById(span_data_title_elem_id).style.display = "inline";

                    var some_object_data_info = (intersects[0].object[(electron_excited_state_property_keys.length + electron_excited_superposition_property_keys)[i]])[0];

                    var some_object_data_info_keys = Object.keys(some_object_data_info);

                    var current_object_data_info = "";

                    for(j = 0; j < some_object_data_info_keys.length; j++)
                        current_object_data_info += "- <b><u>" + some_object_data_info_keys[j] + "</u></b>: " + some_object_data_info[some_object_data_info_keys[j]] + "<br/>";

                    var span_data_content_elem_id = "object_data_content_" + i;
                    document.getElementById(span_data_content_elem_id).innerHTML = current_object_data_info;
                    document.getElementById(span_data_content_elem_id).style.display = "inline";

                }

            }
            else {

                document.getElementById("object_name").textContent = intersects[0].object[electron_excited_state_property_keys[0]];

                for(i = 1; i < electron_excited_state_property_keys.length; i++) {

                    var div_data_info_elem_id = "object_data_info_" + i;
                    document.getElementById(div_data_info_elem_id).style.display = "inline";

                    var span_data_title_elem_id = "object_data_title_" + i;
                    document.getElementById(span_data_title_elem_id).innerHTML = electron_excited_state_property_keys[i];
                    document.getElementById(span_data_title_elem_id).style.display = "inline";

                    var some_object_data_info = (intersects[0].object[electron_excited_state_property_keys[i]])[0];

                    var some_object_data_info_keys = Object.keys(some_object_data_info);

                    var current_object_data_info = "";

                    for(j = 0; j < some_object_data_info_keys.length; j++)
                        current_object_data_info += "- <b><u>" + some_object_data_info_keys[j] + "</u></b>: " + some_object_data_info[some_object_data_info_keys[j]] + "<br/>";

                    var span_data_content_elem_id = "object_data_content_" + i;
                    document.getElementById(span_data_content_elem_id).innerHTML = current_object_data_info;
                    document.getElementById(span_data_content_elem_id).style.display = "inline";

                }

            }

        }

    } 
    else { // There are no intersections

        // Restore previous intersection object (if it exists) to its original map's texture
        if(ELECTRON_EXCITED_STATE_INTERSECTED) {

            ELECTRON_EXCITED_STATE_INTERSECTED.material.needsUpdate = true;

            ELECTRON_EXCITED_STATE_INTERSECTED.material.color.setHex(0xff2200);

            document.getElementById("object_name").textContent = "";

            for(i = 1; i < electron_excited_state_property_keys.length; i++) {

                var div_data_info_elem_id = "object_data_info_" + i;
                document.getElementById(div_data_info_elem_id).style.display = "none";

                var span_data_title_elem_id = "object_data_title_" + i;
                document.getElementById(span_data_title_elem_id).innerHTML = "";
                document.getElementById(span_data_title_elem_id).style.display = "none";

                var span_data_content_elem_id = "object_data_content_" + i;
                document.getElementById(span_data_content_elem_id).innerHTML = "";
                document.getElementById(span_data_content_elem_id).style.display = "none";

            }

            for(i = 1; i < electron_excited_superposition_property_keys.length; i++) {

                var div_data_info_elem_id = "object_data_info_" + i;
                document.getElementById(div_data_info_elem_id).style.display = "none";

                var span_data_title_elem_id = "object_data_title_" + i;
                document.getElementById(span_data_title_elem_id).innerHTML = "";
                document.getElementById(span_data_title_elem_id).style.display = "none";

                var span_data_content_elem_id = "object_data_content_" + i;
                document.getElementById(span_data_content_elem_id).innerHTML = "";
                document.getElementById(span_data_content_elem_id).style.display = "none";

            }

        }

        // Remove previous intersection object reference
        // by setting current intersection object to "nothing"
        ELECTRON_EXCITED_STATE_INTERSECTED = null;

    }

}

// The Nucleus/Proton and Electron's States' rotation movements
function particles_rotation_rovements() {
    
    var nucleus_proton_rotation_speed = ( motions_factor * 0.0001 * 28 );
    var electron_ground_state_rotation_speed = ( motions_factor * 0.01 * 28 );
    var electron_excited_state_rotation_speed = ( motions_factor * 0.01 * 28 );

    nucleus_proton_mesh.rotation.y += nucleus_proton_rotation_speed;

    electron_ground_state_mesh.rotation.y += electron_ground_state_rotation_speed; 
    electron_excited_state_mesh.rotation.y += electron_excited_state_rotation_speed; 
    
}

// The Electron's States' translaction movements around the Nucleus/Proton
function particles_translaction_movements() {

    // Creating the quarternion for the Electron's Ground State
    var quaternion_for_electron_ground_state = new THREE.Quaternion();

    // Setting and applying the quarternion's Y Axis for the Electron's Ground State
    quaternion_for_electron_ground_state.setFromAxisAngle( y_axis, ( motions_factor * 0.02 ) );
    electron_ground_state_mesh.position.applyQuaternion(quaternion_for_electron_ground_state);

    // Creating the quarternion for the Electron's Excited State
    var quaternion_for_electron_excited_state = new THREE.Quaternion();

    // Setting and applying the quarternion's Y Axis for the Electron's Excited State
    quaternion_for_electron_excited_state.setFromAxisAngle( y_axis, ( motions_factor * -0.02 ) );
    electron_excited_state_mesh.position.applyQuaternion(quaternion_for_electron_excited_state); 
    
}

// The Rendering Process Method
function render() {

    // The Animation Frame Request Process
    requestAnimationFrame(render);

    // The Nucleus/Proton and Electron's States' rotation movements
    particles_rotation_rovements();

    // The Electron's States' translaction movements around the Nucleus/Proton
    particles_translaction_movements();

    // The Rendering Process, in sucessive repeated calls, in loop
    renderer.render(bohr_atom_model_scene, camera);

}