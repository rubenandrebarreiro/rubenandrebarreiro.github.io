/*

    LEARNING QUANTUM COMPUTING (ONLINE WEB COURSE)
    SPIN OF A PARTICLE

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
var camera, controls, spin_particle_scene, renderer, stats;

// The Coordinates of the Projector and Mouse's/TouchPad's Pointer
var projector, mouse = { x: window.innerHeight, y: window.innerWidth };

// The Intersection of Elements of the Scene (Bohr's Atom Model)
// (The Particles, i.e., the Nucleus/Proton and the Electron in Ground/Excited States)
var PARTICLE_INTERSECTED, SPIN_DOWN_INTERSECTED, SPIN_UP_INTERSECTED;

// Nucleus/Proton's Elements
// (The Particle, i.e., the Proton)
var particle_geometry, particle_material, particle_mesh, particle_property_keys, particle_pivot;


// The Electron's Ground State's Elements
// (The Particle, i.e., the Electron's Ground State and its Orbit)
var particle_spin_up_orbit_ring_geometry, particle_spin_up_orbit_ring_material, particle_spin_up_orbit_ring_mesh;


var particle_spin_up_orbit_cone_geometry, particle_spin_up_orbit_cone_material, particle_spin_up_orbit_cone_mesh;


var particle_spin_up_arrow_cylinder_geometry, particle_spin_up_arrow_cylinder_material, particle_spin_up_arrow_cylinder_mesh;


var particle_spin_up_arrow_cone_geometry, particle_spin_up_arrow_cone_material, particle_spin_up_arrow_cone_mesh;


var particle_spin_up_property_keys, particle_spin_up_superposition_property_keys, particle_spin_up_pivot;


var particle_spin_up_motion_pivot, particle_spin_up_arrow_pivot, particle_spin_up_pivot;



// The Electron's Ground State's Elements
// (The Particle, i.e., the Electron's Ground State and its Orbit)
var particle_spin_down_orbit_ring_geometry, particle_spin_down_orbit_ring_material, particle_spin_down_orbit_ring_mesh;


var particle_spin_down_orbit_cone_geometry, particle_spin_down_orbit_cone_material, particle_spin_down_orbit_cone_mesh;


var particle_spin_down_arrow_cylinder_geometry, particle_spin_down_arrow_cylinder_material, particle_spin_down_arrow_cylinder_mesh;


var particle_spin_down_arrow_cone_geometry, particle_spin_down_arrow_cone_material, particle_spin_down_arrow_cone_mesh;


var particle_spin_down_property_keys, particle_spin_down_superposition_property_keys, particle_spin_down_pivot;


var particle_spin_down_motion_pivot, particle_spin_down_arrow_pivot, particle_spin_down_pivot;



// The Form's Controls/Elements - Radios and Checkboxes for
// controlling some aspects of the Scene (Bohr's Atom Model)
var motions_radios, camera_view_radios, xz_grid_checked, spins_motions_checked, particle_spins_radios;

// The Motions' Factor for the Nucleus/Proton and Electron's States'
// rotations' and translactions' movements
var motions_factor;

// The boolean value to keep the information about if
// the Electron is in a Quantum Superposition of States
var quantum_state_of_spins;


// The Calls for Initiation and Animation Methods
init();
animate();


// The callbacks for load JSONs files:

// Loads the Nucleus/Proton's JSON file
function load_particle_json(callback) {   

    var obj = new XMLHttpRequest();

    obj.overrideMimeType("application/json");
    obj.open('GET', 'assets/info/json/particle_data.json', true);

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
function load_particle_spin_down_json(callback) {   

    var obj = new XMLHttpRequest();

    obj.overrideMimeType("application/json");
    obj.open('GET', 'assets/info/json/particle_spin_up_data.json', true);

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
function load_particle_spin_up_json(callback) {   

    var obj = new XMLHttpRequest();

    obj.overrideMimeType("application/json");
    obj.open('GET', 'assets/info/json/particle_spin_up_data.json', true);

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
function load_particle_spins_superposition_json(callback) {   

    var obj = new XMLHttpRequest();

    obj.overrideMimeType("application/json");
    obj.open('GET', 'assets/info/json/particle_spins_superposition_data.json', true);

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

    // The integer value to keep the information about if
    // the Particle's Spin it's currently:
    // - 0: Spinning Down;
    // - 1: Spinning Up; 
    // - 2: Quantum Superposition of both Spins;
    quantum_state_of_spins = 1;

    // Resets the Camera
    reset_camera();

    // Starts the Camera in the From Up's view
    camera_top_view();

    // Starts the Trackball Controls
    start_trackball_controls();

    // Sets the Events' Listeners
    set_event_listeners();

    // Creates the Scene (Bohr's Atom Model)
    spin_particle_scene = new THREE.Scene();


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
    particle_spins_radios = document.getElementsByName("particle_spins_radios");

    // When the Motions' Radio change, calls the given function
    document.addEventListener('onchange', on_change_motions);

    // When the Camera View's Radio change, calls the given function
    document.addEventListener('onchange', on_change_camera_view);

    // When the Electron State's Radio change, calls the given function
    document.addEventListener('onchange', on_change_particle_spins);

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
    
    add_particle_to_scene();
    add_particle_spin_down_to_scene();
    add_particle_spin_up_to_scene();
    
}

// Adds the Nucleus/Proton to the Scene (Bohr's Atom Model Scene)
function add_particle_to_scene() {

    // Creates the Geometry of the Sphere representing
    // the Nucleus/Proton
    particle_geometry = new THREE.SphereGeometry(0.6, 40, 40);

    // Creates the Material of the Sphere representing
    // the Nucleus/Proton
    particle_material = new THREE.MeshBasicMaterial(
        {
            color: 0xdda0dd
        }
    );

    // Creates the Mesh of the Nucleus/Proton
    particle_mesh = new THREE.Mesh(particle_geometry, particle_material);

    // Loads the JSON data file of the Nucleus/Proton Element
    load_particle_json(function(response) {

        // Parses Nucleus'/Proton's JSON string into object
        var particle_data_json = JSON.parse(response);

        // Loads the Property Keys' data of
        // the JSON data file of the Nucleus/Proton Element
        particle_property_keys = Object.keys(particle_data_json);

        // Binds the Property Keys' data of
        // the JSON data file of the Nucleus/Proton Element to
        // the Mesh of the Nucleus/Proton
        for(i = 0; i < particle_property_keys.length; i++)
            particle_mesh[particle_property_keys[i]] = particle_data_json[particle_property_keys[i]];
    });

    // Creates the group for the Nucleus'/Proton's Pivot
    particle_pivot = new THREE.Group();

    // Adds the Mesh of the Nucleus/Proton
    // the group for the Nucleus'/Proton' Pivot
    particle_pivot.add(particle_mesh);

    // Adds the group for the Nucleus'/Proton' Pivot to
    // the Scene (Bohr's Atom Model) 
    spin_particle_scene.add(particle_pivot);

}


// Adds the Electron's Ground State to the Scene (Bohr's Atom Model Scene)
function add_particle_spin_down_to_scene() {

    // Creates the Electron's Ground State's Orbit
    create_particle_spin_down_motion();

    // Creates the Electron's Ground State
    create_particle_spin_down_arrow();


    // Loads the JSON data file of the Electron's Ground State Element
    load_particle_spin_down_json(function(response) {

        // Parses Electron's Ground State's JSON string into object
        var particle_spin_down_data_json = JSON.parse(response);

        // Loads the Property Keys' data of
        // the JSON data file of the Electron's Ground State Element
        particle_spin_down_property_keys = Object.keys(particle_spin_down_data_json);

        // Binds the Property Keys' data of
        // the JSON data file of the Electron's Ground State Element to
        // the Mesh of the Electron's Ground State
        for(i = 0; i < particle_spin_down_property_keys.length; i++)
            particle_spin_down_arrow_mesh[particle_spin_down_property_keys[i]] = particle_spin_down_data_json[particle_spin_down_property_keys[i]];

    });


    // Loads the JSON data file of the Electron's Quantum Superposition of States Element
    load_particle_superposition_json(function(response) {

        // Parses Electron's Quantum Superposition of States' JSON string into object
        var particle_spin_down_superposition_data_json = JSON.parse(response);

        // Loads the Property Keys' data of
        // the JSON data file of the Electron's Quantum Superposition of States Element
        particle_spin_down_superposition_property_keys = Object.keys(particle_spin_down_superposition_data_json);

        // Binds the Property Keys' data of
        // the JSON data file of the Electron's Quantum Superposition of States Element to
        // the Mesh of the Electron's Ground State
        for(i = 0; i < particle_spin_down_superposition_property_keys.length; i++)
            particle_spin_down_arrow_mesh[ (particle_spin_down_property_keys.length + particle_spin_down_superposition_property_keys)[i] ] = particle_spin_down_superposition_data_json[particle_spin_down_superposition_property_keys[i]];

    });

    // Creates the group for the Electron's Ground State's Pivot
    particle_spin_down_pivot = new THREE.Group();

    // Adds the Mesh of the Electron's Ground State to
    // the group for the Electron's Ground State's Pivot
    particle_spin_down_pivot.add(particle_spin_down_motion_pivot);

    // Adds the Mesh of the Electron's Ground State Particle's Pivot to
    // the group for the Electron's Ground State's Pivot
    particle_spin_down_pivot.add(particle_spin_down_arrow_pivot);
    
    // Adds the group for the Electron's Ground State Pivot to
    // the Scene (Bohr's Atom Model) 
    spin_particle_scene.add(particle_spin_down_pivot);

}

// Creates the Electron's Ground State's Orbit
function create_particle_spin_down_motion() {

    // Creates the Geometry of the Ring representing
    // the Electron's Ground State's Orbit
    particle_spin_down_orbit_ring_geometry = new THREE.RingGeometry(2.5, 2.52, 60);

    // Creates the Material of the Ring representing
    // the Electron's Ground State's Orbit
    particle_spin_down_orbit_ring_material = new THREE.MeshBasicMaterial(
        {
            color: 0xffffff,
            depthTest: false,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.0
        }
    );

    // Creates the Mesh of the Electron's Ground State's Orbit
    particle_spin_down_orbit_ring_mesh = new THREE.Mesh(particle_spin_down_orbit_ring_geometry, particle_spin_down_orbit_ring_material);

    // Rotates the Electron's Ground State's Orbit PI/2
    // (i.e., 90º degrees), regarding the X Axis
    particle_spin_down_orbit_ring_mesh.rotation.x = Math.PI / 2;
    
    
    // Creates the Geometry of the Sphere representing
    // the Electron's Ground State
    particle_spin_down_orbit_cone_geometry = new THREE.ConeGeometry( 0.2, 0.2, 40 );

    // Creates the Material of the Sphere representing
    // the Electron's Ground State
    particle_spin_down_orbit_cone_material = new THREE.MeshBasicMaterial(
        {
            color: 0xffffff,
            depthTest: false,
            transparent: true,
            opacity: 0.0
        }
    );

    // Creates the Mesh of the Electron's Ground State
    particle_spin_down_orbit_cone_mesh = new THREE.Mesh(particle_spin_down_orbit_cone_geometry, particle_spin_down_orbit_cone_material);            
    
    // Translates/Moves the Electron's Ground State
    // -2.51 units, regarding the Z Axis
    particle_spin_down_orbit_cone_mesh.rotation.z += Math.PI / 2;
    
    // Translates/Moves the Electron's Ground State
    // -2.51 units, regarding the Z Axis
    particle_spin_down_orbit_cone_mesh.position.z = -2.51;
    
    
    // Creates the group for the Electron's Ground State Particle's Pivot
    particle_spin_down_motion_pivot = new THREE.Group();

    // Adds the Mesh of the Electron's Ground State
    // the group for the Electron's Ground State Particle's Pivot
    particle_spin_down_motion_pivot.add(particle_spin_down_orbit_ring_mesh);

    // Adds the Mesh of the Electron's Ground State
    // the group for the Electron's Ground State Particle's Pivot
    particle_spin_down_motion_pivot.add(particle_spin_down_orbit_cone_mesh);
    
    
    //particle_spin_down_motion_pivot.position.y = -0.25;

}

// Creates the Electron's Ground State
function create_particle_spin_down_arrow() {

    // Creates the Geometry of the Ring representing
    // the Electron's Ground State's Orbit
    particle_spin_down_arrow_cylinder_geometry = new THREE.CylinderGeometry( 0.2, 0.2, 3.5, 32 );

    // Creates the Material of the Ring representing
    // the Electron's Ground State's Orbit
    particle_spin_down_arrow_cylinder_material = new THREE.MeshBasicMaterial(
        {
            color: 0xf88000,
            depthTest: false,
            transparent: true,
            opacity: 0.0
        }
    );

    // Creates the Mesh of the Electron's Ground State's Orbit
    particle_spin_down_arrow_cylinder_mesh = new THREE.Mesh(particle_spin_down_arrow_cylinder_geometry, particle_spin_down_arrow_cylinder_material);
    
    
    // Creates the Geometry of the Sphere representing
    // the Electron's Ground State
    particle_spin_down_arrow_cone_geometry = new THREE.ConeGeometry( 0.4, 0.4, 40 );

    // Creates the Material of the Sphere representing
    // the Electron's Ground State
    particle_spin_down_arrow_cone_material = new THREE.MeshBasicMaterial(
        {
            color: 0xf22000,
            depthTest: false,
            transparent: true,
            opacity: 0.0
        }
    );

    // Creates the Mesh of the Electron's Ground State
    particle_spin_down_arrow_cone_mesh = new THREE.Mesh(particle_spin_down_arrow_cone_geometry, particle_spin_down_arrow_cone_material);
    
    particle_spin_down_arrow_cone_mesh.rotation.x += Math.PI;
    
    // Translates/Moves the Electron's Ground State
    // 2 units, regarding the Y Axis
    particle_spin_down_arrow_cone_mesh.position.y = -1.85;
    

    // Creates the group for the Electron's Ground State Particle's Pivot
    particle_spin_down_arrow_pivot = new THREE.Group();

    // Adds the Mesh of the Electron's Ground State
    // the group for the Electron's Ground State Particle's Pivot
    particle_spin_down_arrow_pivot.add(particle_spin_down_arrow_cylinder_mesh);

    // Adds the Mesh of the Electron's Ground State
    // the group for the Electron's Ground State Particle's Pivot
    particle_spin_down_arrow_pivot.add(particle_spin_down_arrow_cone_mesh);

}


// Adds the Electron's Ground State to the Scene (Bohr's Atom Model Scene)
function add_particle_spin_up_to_scene() {

    // Creates the Electron's Ground State's Orbit
    create_particle_spin_up_motion();

    // Creates the Electron's Ground State
    create_particle_spin_up_arrow();


    // Loads the JSON data file of the Electron's Ground State Element
    /*load_particle_spin_up_json(function(response) {

        // Parses Electron's Ground State's JSON string into object
        var particle_spin_up_data_json = JSON.parse(response);

        // Loads the Property Keys' data of
        // the JSON data file of the Electron's Ground State Element
        particle_spin_up_property_keys = Object.keys(particle_spin_up_data_json);

        // Binds the Property Keys' data of
        // the JSON data file of the Electron's Ground State Element to
        // the Mesh of the Electron's Ground State
        for(i = 0; i < particle_spin_up_property_keys.length; i++)
            particle_spin_up_arrow_mesh[particle_spin_up_property_keys[i]] = particle_spin_up_data_json[particle_spin_up_property_keys[i]];

    });*/


    // Loads the JSON data file of the Electron's Quantum Superposition of States Element
    /*load_particle_superposition_json(function(response) {

        // Parses Electron's Quantum Superposition of States' JSON string into object
        var particle_spin_up_superposition_data_json = JSON.parse(response);

        // Loads the Property Keys' data of
        // the JSON data file of the Electron's Quantum Superposition of States Element
        particle_spin_up_superposition_property_keys = Object.keys(particle_spin_up_superposition_data_json);

        // Binds the Property Keys' data of
        // the JSON data file of the Electron's Quantum Superposition of States Element to
        // the Mesh of the Electron's Ground State
        for(i = 0; i < particle_spin_up_superposition_property_keys.length; i++)
            particle_spin_up_arrow_mesh[ (particle_spin_up_property_keys.length + particle_spin_up_superposition_property_keys)[i] ] = particle_spin_up_superposition_data_json[particle_spin_up_superposition_property_keys[i]];

    });*/

    // Creates the group for the Electron's Ground State's Pivot
    particle_spin_up_pivot = new THREE.Group();

    // Adds the Mesh of the Electron's Ground State to
    // the group for the Electron's Ground State's Pivot
    particle_spin_up_pivot.add(particle_spin_up_motion_pivot);

    // Adds the Mesh of the Electron's Ground State Particle's Pivot to
    // the group for the Electron's Ground State's Pivot
    particle_spin_up_pivot.add(particle_spin_up_arrow_pivot);
    
    // Adds the group for the Electron's Ground State Pivot to
    // the Scene (Bohr's Atom Model) 
    spin_particle_scene.add(particle_spin_up_pivot);

}

// Creates the Electron's Ground State's Orbit
function create_particle_spin_up_motion() {

    // Creates the Geometry of the Ring representing
    // the Electron's Ground State's Orbit
    particle_spin_up_orbit_ring_geometry = new THREE.RingGeometry(2.5, 2.52, 60);

    // Creates the Material of the Ring representing
    // the Electron's Ground State's Orbit
    particle_spin_up_orbit_ring_material = new THREE.MeshBasicMaterial(
        {
            color: 0xffffff,
            depthTest: true,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 1.0
        }
    );

    // Creates the Mesh of the Electron's Ground State's Orbit
    particle_spin_up_orbit_ring_mesh = new THREE.Mesh(particle_spin_up_orbit_ring_geometry, particle_spin_up_orbit_ring_material);

    // Rotates the Electron's Ground State's Orbit PI/2
    // (i.e., 90º degrees), regarding the X Axis
    particle_spin_up_orbit_ring_mesh.rotation.x = Math.PI / 2;
    
    
    // Creates the Geometry of the Sphere representing
    // the Electron's Ground State
    particle_spin_up_orbit_cone_geometry = new THREE.ConeGeometry( 0.2, 0.2, 40 );

    // Creates the Material of the Sphere representing
    // the Electron's Ground State
    particle_spin_up_orbit_cone_material = new THREE.MeshBasicMaterial(
        {
            color: 0xffffff,
            depthTest: true,
            transparent: true,
            opacity: 1.0
        }
    );

    // Creates the Mesh of the Electron's Ground State
    particle_spin_up_orbit_cone_mesh = new THREE.Mesh(particle_spin_up_orbit_cone_geometry, particle_spin_up_orbit_cone_material);            
    
    // Translates/Moves the Electron's Ground State
    // -2.51 units, regarding the Z Axis
    particle_spin_up_orbit_cone_mesh.rotation.z -= Math.PI / 2;
    
    // Translates/Moves the Electron's Ground State
    // -2.51 units, regarding the Z Axis
    particle_spin_up_orbit_cone_mesh.position.z = -2.51;
    
    
    // Creates the group for the Electron's Ground State Particle's Pivot
    particle_spin_up_motion_pivot = new THREE.Group();

    // Adds the Mesh of the Electron's Ground State
    // the group for the Electron's Ground State Particle's Pivot
    particle_spin_up_motion_pivot.add(particle_spin_up_orbit_ring_mesh);

    // Adds the Mesh of the Electron's Ground State
    // the group for the Electron's Ground State Particle's Pivot
    particle_spin_up_motion_pivot.add(particle_spin_up_orbit_cone_mesh);
    
    
    //particle_spin_up_motion_pivot.position.y = 0.25;

}

// Creates the Electron's Ground State
function create_particle_spin_up_arrow() {

    // Creates the Geometry of the Ring representing
    // the Electron's Ground State's Orbit
    particle_spin_up_arrow_cylinder_geometry = new THREE.CylinderGeometry( 0.2, 0.2, 3.5, 32 );

    // Creates the Material of the Ring representing
    // the Electron's Ground State's Orbit
    particle_spin_up_arrow_cylinder_material = new THREE.MeshBasicMaterial(
        {
            color: 0xf88000,
            depthTest: true,
            transparent: true,
            opacity: 1.0
        }
    );

    // Creates the Mesh of the Electron's Ground State's Orbit
    particle_spin_up_arrow_cylinder_mesh = new THREE.Mesh(particle_spin_up_arrow_cylinder_geometry, particle_spin_up_arrow_cylinder_material);
    
    
    // Creates the Geometry of the Sphere representing
    // the Electron's Ground State
    particle_spin_up_arrow_cone_geometry = new THREE.ConeGeometry( 0.4, 0.4, 40 );

    // Creates the Material of the Sphere representing
    // the Electron's Ground State
    particle_spin_up_arrow_cone_material = new THREE.MeshBasicMaterial(
        {
            color: 0xf22000,
            depthTest: true,
            transparent: true,
            opacity: 1.0
        }
    );

    // Creates the Mesh of the Electron's Ground State
    particle_spin_up_arrow_cone_mesh = new THREE.Mesh(particle_spin_up_arrow_cone_geometry, particle_spin_up_arrow_cone_material);
    
    // Translates/Moves the Electron's Ground State
    // 2 units, regarding the Y Axis
    particle_spin_up_arrow_cone_mesh.position.y = 1.85;
    

    // Creates the group for the Electron's Ground State Particle's Pivot
    particle_spin_up_arrow_pivot = new THREE.Group();

    // Adds the Mesh of the Electron's Ground State
    // the group for the Electron's Ground State Particle's Pivot
    particle_spin_up_arrow_pivot.add(particle_spin_up_arrow_cylinder_mesh);

    // Adds the Mesh of the Electron's Ground State
    // the group for the Electron's Ground State Particle's Pivot
    particle_spin_up_arrow_pivot.add(particle_spin_up_arrow_cone_mesh);

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
    spin_particle_scene.add(directional_light_1);


    // Creates a blue directional light
    var directional_light_2 = new THREE.DirectionalLight(0x002288);

    // Sets the direction/position (x=-1, y=-1, z=-1) of
    // the previously created directional light
    directional_light_2.position.set(- 1, - 1, - 1);

    // Adds the previously created directional light to
    // Scene (Bohr's Atom Model)
    spin_particle_scene.add(directional_light_2);


    // Creates a gray ambient light
    var ambient_light = new THREE.AmbientLight(0x222222);

    // Adds the previously created ambient light to
    // Scene (Bohr's Atom Model)
    spin_particle_scene.add(ambient_light);

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
    on_check_particle_spins_motions();

    // Handles/Triggers the Function for
    // changes in the Electron States' Radio
    on_change_particle_spins();

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
            spin_particle_scene.add(xz_grid);
        }
        else {
            spin_particle_scene.remove(xz_grid);
        }
    }
}

// Calls a given function, when the Atomic Orbit's Checkbox change
function on_check_particle_spins_motions() {

    var show_particle_spins_motions = document.getElementById("show_particle_spins_motions");

    show_particle_spins_motions.onchange = function() {
        
        if(show_particle_spins_motions.checked) {
        
            if(quantum_state_of_spins == 0) {

                particle_spin_down_orbit_ring_mesh.material.opacity = 1.0;           
                particle_spin_down_orbit_ring_mesh.material.depthTest = true;
                particle_spin_down_orbit_cone_mesh.material.opacity = 1.0;
                particle_spin_down_orbit_cone_mesh.material.depthTest = true;

                particle_spin_up_orbit_ring_mesh.material.opacity = 0.0;           
                particle_spin_up_orbit_ring_mesh.material.depthTest = false;
                particle_spin_up_orbit_cone_mesh.material.opacity = 0.0;
                particle_spin_up_orbit_cone_mesh.material.depthTest = false;
            
            }
            
            if(quantum_state_of_spins == 1) {
                
                particle_spin_down_orbit_ring_mesh.material.opacity = 0.0;           
                particle_spin_down_orbit_ring_mesh.material.depthTest = false;
                particle_spin_down_orbit_cone_mesh.material.opacity = 0.0;
                particle_spin_down_orbit_cone_mesh.material.depthTest = false;

                particle_spin_up_orbit_ring_mesh.material.opacity = 1.0;           
                particle_spin_up_orbit_ring_mesh.material.depthTest = true;
                particle_spin_up_orbit_cone_mesh.material.opacity = 1.0;
                particle_spin_up_orbit_cone_mesh.material.depthTest = true;
                
            }
            
            if(quantum_state_of_spins == 2) {
                
                particle_spin_down_orbit_ring_mesh.material.opacity = 0.5;           
                particle_spin_down_orbit_ring_mesh.material.depthTest = false;
                particle_spin_down_orbit_cone_mesh.material.opacity = 0.5;
                particle_spin_down_orbit_cone_mesh.material.depthTest = false;

                particle_spin_up_orbit_ring_mesh.material.opacity = 0.5;           
                particle_spin_up_orbit_ring_mesh.material.depthTest = false;
                particle_spin_up_orbit_cone_mesh.material.opacity = 0.5;
                particle_spin_up_orbit_cone_mesh.material.depthTest = false;
                
            }
            
        }
        else {
        
            particle_spin_up_orbit_ring_mesh.material.opacity = 0.0;           
            particle_spin_up_orbit_ring_mesh.material.depthTest = false;
            particle_spin_up_orbit_cone_mesh.material.opacity = 0.0;           
            particle_spin_up_orbit_cone_mesh.material.depthTest = false;
            
            particle_spin_down_orbit_ring_mesh.material.opacity = 0.0;           
            particle_spin_down_orbit_ring_mesh.material.depthTest = false;
            particle_spin_down_orbit_cone_mesh.material.opacity = 0.0;
            particle_spin_down_orbit_cone_mesh.material.depthTest = false;
        
        }
        
    }
}

// Calls a given function, when the Electron State's Radio change
function on_change_particle_spins() {

    // Verifies all the Possible States for the Electron
    // - Ground State;
    // - Excited State;
    // - Quantum Superposition of both Ground and Excited States;
    for(var i = 0, length = particle_spins_radios.length; i < length; i++) {
        particle_spins_radios[i].onchange = function() {    

            // The Electron it's in Ground State
            if(particle_spins_radios[0].checked) {

                particle_material.opacity = 1.0;
                particle_material.depthTest = true;
                
                
                particle_spin_down_motion_pivot.position.y = 0;
                particle_spin_up_motion_pivot.position.y = 0;
                
                particle_spin_down_orbit_ring_material.opacity = 1.0;
                particle_spin_down_orbit_ring_material.depthTest = true;
                
                particle_spin_down_orbit_cone_material.opacity = 1.0;
                particle_spin_down_orbit_cone_material.depthTest = true;
                
                particle_spin_down_arrow_cylinder_material.opacity = 1.0;
                particle_spin_down_arrow_cylinder_material.depthTest = true;
                
                particle_spin_down_arrow_cone_material.opacity = 1.0;
                particle_spin_down_arrow_cone_material.depthTest = true;
                
                
                particle_spin_up_orbit_ring_material.opacity = 0.0;
                particle_spin_up_orbit_ring_material.depthTest = false;
                
                particle_spin_up_orbit_cone_material.opacity = 0.0;
                particle_spin_up_orbit_cone_material.depthTest = false;
                
                particle_spin_up_arrow_cylinder_material.opacity = 0.0;
                particle_spin_up_arrow_cylinder_material.depthTest = false;
                
                particle_spin_up_arrow_cone_material.opacity = 0.0;
                particle_spin_up_arrow_cone_material.depthTest = false;
                

                quantum_state_of_spins = 0;
            }

            // The Electron it's in Excited State
            if(particle_spins_radios[1].checked) {

                particle_material.opacity = 1.0;
                particle_material.depthTest = true;
                
                
                particle_spin_down_motion_pivot.position.y = 0;
                particle_spin_up_motion_pivot.position.y = 0;
                
                particle_spin_down_orbit_ring_material.opacity = 0.0;
                particle_spin_down_orbit_ring_material.depthTest = false;
                
                particle_spin_down_orbit_cone_material.opacity = 0.0;
                particle_spin_down_orbit_cone_material.depthTest = false;
                
                particle_spin_down_arrow_cylinder_material.opacity = 0.0;
                particle_spin_down_arrow_cylinder_material.depthTest = false;
                
                particle_spin_down_arrow_cone_material.opacity = 0.0;
                particle_spin_down_arrow_cone_material.depthTest = false;
                
                
                particle_spin_up_orbit_ring_material.opacity = 1.0;
                particle_spin_up_orbit_ring_material.depthTest = true;
                
                particle_spin_up_orbit_cone_material.opacity = 1.0;
                particle_spin_up_orbit_cone_material.depthTest = true;
                
                particle_spin_up_arrow_cylinder_material.opacity = 1.0;
                particle_spin_up_arrow_cylinder_material.depthTest = true;
                
                particle_spin_up_arrow_cone_material.opacity = 1.0;
                particle_spin_up_arrow_cone_material.depthTest = true;
                
                
                quantum_state_of_spins = 1;
            }

            // The Electron it's in a Quantum Superposition of States
            if(particle_spins_radios[2].checked) {

                particle_material.opacity = 0.5;
                particle_material.depthTest = false;
                
                
                particle_spin_down_motion_pivot.position.y = -0.25;
                particle_spin_up_motion_pivot.position.y = 0.25;
                
                particle_spin_down_orbit_ring_material.opacity = 0.5;
                particle_spin_down_orbit_ring_material.depthTest = false;
                
                particle_spin_down_orbit_cone_material.opacity = 0.5;
                particle_spin_down_orbit_cone_material.depthTest = false;
                
                particle_spin_down_arrow_cylinder_material.opacity = 0.5;
                particle_spin_down_arrow_cylinder_material.depthTest = false;
                
                particle_spin_down_arrow_cone_material.opacity = 0.5;
                particle_spin_down_arrow_cone_material.depthTest = false;
                
                
                particle_spin_up_orbit_ring_material.opacity = 0.5;
                particle_spin_up_orbit_ring_material.depthTest = false;
                
                particle_spin_up_orbit_cone_material.opacity = 0.5;
                particle_spin_up_orbit_cone_material.depthTest = false;
                
                particle_spin_up_arrow_cylinder_material.opacity = 0.5;
                particle_spin_up_arrow_cylinder_material.depthTest = false;
                
                particle_spin_up_arrow_cone_material.opacity = 0.5;
                particle_spin_up_arrow_cone_material.depthTest = false;
                
                
                quantum_state_of_spins = 2;
                
            }
        }
    }

}


// The Animation Process Method
function animate() {

    // Calls the Animation Method again
    requestAnimationFrame(animate);

    // Finds intersections between the Mouse's Pointer and the Nucleus/Proton
    find_intersections_particle();

    // Finds intersections between the Mouse's Pointer and the Electron's Ground State
    find_intersections_spin_down();

    // Finds intersections between the Mouse's Pointer and the Electron's Excited State
    //find_intersections_spin_up();

    // Updates the Trackball Controls
    controls.update();

    // Updates the Stats (Statistics for the Rendering Process)
    stats.update();

}


// Finds intersections between the Mouse's Pointer and the Nucleus/Proton
function find_intersections_particle() {

    // Creates a Ray with origin at the Mouse's Pointer Position
    // and direction into the Scene (Bohr's Atom Model),
    // i.e., the Camera Position/Direction
    var vector = new THREE.Vector3(mouse.x, mouse.y, 1);

    // Unprojects the Ray's vector previously created
    projector.unprojectVector(vector, camera);

    // Creates the Raycaster from the Camera's Position and its respectively normalized vector
    var ray = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

    // Creates an array containing all objects in the scene with which the ray intersects
    var intersects = ray.intersectObjects(particle_pivot.children);

    // PARTICLE_INTERSECTED = the object in the scene currently closest to the camera 
    // and intersected by the Ray projected from the mouse position 	

    // If there is one (or more) intersections
    if(intersects.length > 0) {

        // If the closest object intersected is not the currently stored intersection object
        if(intersects[0].object != PARTICLE_INTERSECTED) {

            // Restores previous intersection object (if it exists) to its original map's texture
            if(PARTICLE_INTERSECTED) {

                // The Nucleus'/Proton's Material needs to be updated
                PARTICLE_INTERSECTED.material.needsUpdate = true;

                // Sets the Nucleus'/Proton's Material Color to Yellow
                PARTICLE_INTERSECTED.material.color.setHex(0xffff00);

                // Clears the Object's Name for the Nucleus/Proton displayed in
                // the left side of the Scene (Bohr's Atom Model)
                document.getElementById("object_name").textContent = "";

                // Clears all the Nucleus'/Proton's Property Keys displayed in
                // the left side of the Scene (Bohr's Atom Model)
                for(i = 1; i < particle_property_keys.length; i++) {

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
            PARTICLE_INTERSECTED = intersects[0].object;

            // Sets a new color for closest object
            PARTICLE_INTERSECTED.material.color.setHex(0xffff00);

            // Sets the Object's Name for the Nucleus/Proton displayed in
            // the left side of the Scene (Bohr's Atom Model)
            document.getElementById("object_name").textContent = intersects[0].object[particle_property_keys[0]];

            // Sets all the Nucleus'/Proton's Property Keys
            for(i = 1; i < particle_property_keys.length; i++) {

                var div_data_info_elem_id = "object_data_info_" + i;
                document.getElementById(div_data_info_elem_id).style.display = "inline";

                var span_data_title_elem_id = "object_data_title_" + i;
                document.getElementById(span_data_title_elem_id).innerHTML = particle_property_keys[i];
                document.getElementById(span_data_title_elem_id).style.display = "inline";

                var some_object_data_info = (intersects[0].object[particle_property_keys[i]])[0];

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
        if(PARTICLE_INTERSECTED) {

            // The Nucleus'/Proton's Material needs to be updated
            PARTICLE_INTERSECTED.material.needsUpdate = true;

            // Sets the Nucleus'/Proton's Material Color to its default
            PARTICLE_INTERSECTED.material.color.setHex(0xdda0dd);

            // Clears the Object's Name for the Nucleus/Proton displayed in
            // the left side of the Scene (Bohr's Atom Model)
            document.getElementById("object_name").textContent = "";

            // Clears all the Nucleus'/Proton's Property Keys displayed in
            // the left side of the Scene (Bohr's Atom Model)
            for(i = 1; i < particle_property_keys.length; i++) {

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
        PARTICLE_INTERSECTED = null;

    }

}

// Finds intersections between the Mouse's Pointer and the Electron's Ground State
function find_intersections_spin_down() {

    // Create a Ray with origin at the mouse position
    // and direction into the scene (camera direction)
    var vector = new THREE.Vector3(mouse.x, mouse.y, 1);
    projector.unprojectVector(vector, camera);

    var ray = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

    // Create an array containing all objects in the scene with which the ray intersects
    var intersects = ray.intersectObjects(particle_spin_down_arrow_pivot.children);
    
    // SPIN_DOWN_INTERSECTED = the object in the scene currently closest to the camera 
    // and intersected by the Ray projected from the mouse position 	

    // If there is one (or more) intersections
    if(intersects.length > 0) {
        
        // If the closest object intersected is not the currently stored intersection object
        if(intersects[0].object != SPIN_DOWN_INTERSECTED) {

            // Restore previous intersection object (if it exists) to its original map's texture
            if(SPIN_DOWN_INTERSECTED) {

                particle_spin_down_orbit_ring_mesh.material.needsUpdate = true;
                particle_spin_down_orbit_cone_mesh.material.needsUpdate = true;
                particle_spin_down_arrow_cylinder_mesh.material.needsUpdate = true;
                particle_spin_down_arrow_cone_mesh.material.needsUpdate = true;
                             
                particle_spin_down_orbit_ring_mesh.material.color.setHex(0xffffff);
                particle_spin_down_orbit_cone_mesh.material.color.setHex(0xffffff);
                particle_spin_down_arrow_cylinder_mesh.material.color.setHex(0xf88000);
                particle_spin_down_arrow_cone_mesh.material.color.setHex(0xf22000);
                
                document.getElementById("object_name").textContent = "";

                for(i = 1; i < particle_spin_down_property_keys.length; i++) {

                    var div_data_info_elem_id = "object_data_info_" + i;
                    document.getElementById(div_data_info_elem_id).style.display = "none";

                    var span_data_title_elem_id = "object_data_title_" + i;
                    document.getElementById(span_data_title_elem_id).innerHTML = "";
                    document.getElementById(span_data_title_elem_id).style.display = "none";

                    var span_data_content_elem_id = "object_data_content_" + i;
                    document.getElementById(span_data_content_elem_id).innerHTML = "";
                    document.getElementById(span_data_content_elem_id).style.display = "none";

                }

                for(i = 1; i < particle_spin_down_superposition_property_keys.length; i++) {

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
            SPIN_DOWN_INTERSECTED = intersects[0].object;

            // Set a new color for closest object
            particle_spin_down_orbit_ring_mesh.material.needsUpdate = true;
            particle_spin_down_orbit_cone_mesh.material.needsUpdate = true;
            particle_spin_down_arrow_cylinder_mesh.material.needsUpdate = true;
            particle_spin_down_arrow_cone_mesh.material.needsUpdate = true;

            particle_spin_down_orbit_ring_mesh.material.color.setHex(0xffff00);
            particle_spin_down_orbit_cone_mesh.material.color.setHex(0xffff00);
            particle_spin_down_arrow_cylinder_mesh.material.color.setHex(0xffff00);
            particle_spin_down_arrow_cone_mesh.material.color.setHex(0xffff00);
            
            
            if(quantum_state_of_spins == 2) {

                document.getElementById("object_name").textContent = intersects[0].object[particle_spin_down_superposition_property_keys[0]];

                for(i = 1; i < particle_spin_down_superposition_property_keys.length; i++) {

                    var div_data_info_elem_id = "object_data_info_" + i;
                    document.getElementById(div_data_info_elem_id).style.display = "inline";

                    var span_data_title_elem_id = "object_data_title_" + i;
                    document.getElementById(span_data_title_elem_id).innerHTML = particle_spin_down_superposition_property_keys[i];
                    document.getElementById(span_data_title_elem_id).style.display = "inline";

                    var some_object_data_info = (intersects[0].object[ (particle_spin_down_property_keys.length + particle_spin_down_superposition_property_keys)[i] ])[0];

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

                document.getElementById("object_name").textContent = intersects[0].object[particle_spin_down_property_keys[0]];

                for(i = 1; i < particle_spin_down_property_keys.length; i++) {

                    var div_data_info_elem_id = "object_data_info_" + i;
                    document.getElementById(div_data_info_elem_id).style.display = "inline";

                    var span_data_title_elem_id = "object_data_title_" + i;
                    document.getElementById(span_data_title_elem_id).innerHTML = particle_spin_down_property_keys[i];
                    document.getElementById(span_data_title_elem_id).style.display = "inline";

                    var some_object_data_info = (intersects[0].object[particle_spin_down_property_keys[i]])[0];

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
        if(SPIN_DOWN_INTERSECTED) {

            particle_spin_down_orbit_ring_mesh.material.needsUpdate = true;
            particle_spin_down_orbit_cone_mesh.material.needsUpdate = true;
            particle_spin_down_arrow_cylinder_mesh.material.needsUpdate = true;
            particle_spin_down_arrow_cone_mesh.material.needsUpdate = true;

            particle_spin_down_orbit_ring_mesh.material.color.setHex(0xffffff);
            particle_spin_down_orbit_cone_mesh.material.color.setHex(0xffffff);
            particle_spin_down_arrow_cylinder_mesh.material.color.setHex(0xf88000);
            particle_spin_down_arrow_cone_mesh.material.color.setHex(0xf22000);

            document.getElementById("object_name").textContent = "";

            for(i = 1; i < particle_spin_down_property_keys.length; i++) {

                var div_data_info_elem_id = "object_data_info_" + i;
                document.getElementById(div_data_info_elem_id).style.display = "none";

                var span_data_title_elem_id = "object_data_title_" + i;
                document.getElementById(span_data_title_elem_id).innerHTML = "";
                document.getElementById(span_data_title_elem_id).style.display = "none";

                var span_data_content_elem_id = "object_data_content_" + i;
                document.getElementById(span_data_content_elem_id).innerHTML = "";
                document.getElementById(span_data_content_elem_id).style.display = "none";

            }

            for(i = 1; i < particle_spin_down_superposition_property_keys.length; i++) {

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
        SPIN_DOWN_INTERSECTED = null;

    }

}

// Finds intersections between the Mouse's Pointer and the Electron's Excited State
function find_intersections_spin_up() {

    // Create a Ray with origin at the mouse position
    // and direction into the scene (camera direction)
    var vector = new THREE.Vector3(mouse.x, mouse.y, 1);
    projector.unprojectVector(vector, camera);

    var ray = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

    // Create an array containing all objects in the scene with which the ray intersects
    var intersects = ray.intersectObjects(particle_spin_up_pivot.children);

    // SPIN_UP_INTERSECTED = the object in the scene currently closest to the camera 
    // and intersected by the Ray projected from the mouse position 	

    // If there is one (or more) intersections
    if(intersects.length > 0) {

        // If the closest object intersected is not the currently stored intersection object
        if(intersects[0].object != SPIN_UP_INTERSECTED) {

            // Restores previous intersection object (if it exists) to its original color
            if(SPIN_UP_INTERSECTED) {

                SPIN_UP_INTERSECTED.material.needsUpdate = true;

                SPIN_UP_INTERSECTED.material.color.setHex(0xffff00);

                document.getElementById("object_name").textContent = "";

                for(i = 1; i < particle_spin_up_property_keys.length; i++) {

                    var div_data_info_elem_id = "object_data_info_" + i;
                    document.getElementById(div_data_info_elem_id).style.display = "none";

                    var span_data_title_elem_id = "object_data_title_" + i;
                    document.getElementById(span_data_title_elem_id).innerHTML = "";
                    document.getElementById(span_data_title_elem_id).style.display = "none";

                    var span_data_content_elem_id = "object_data_content_" + i;
                    document.getElementById(span_data_content_elem_id).innerHTML = "";
                    document.getElementById(span_data_content_elem_id).style.display = "none";

                }

                for(i = 1; i < particle_spin_up_superposition_property_keys.length; i++) {

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
            SPIN_UP_INTERSECTED = intersects[0].object;

            // Set a new color for closest object
            SPIN_UP_INTERSECTED.material.needsUpdate = true;

            SPIN_UP_INTERSECTED.material.color.setHex(0xffff00);

            
            if(quantum_state_of_spins == 2) {

                document.getElementById("object_name").textContent = intersects[0].object[particle_spin_up_superposition_property_keys[0]];

                for(i = 1; i < particle_spin_up_superposition_property_keys.length; i++) {

                    var div_data_info_elem_id = "object_data_info_" + i;
                    document.getElementById(div_data_info_elem_id).style.display = "inline";

                    var span_data_title_elem_id = "object_data_title_" + i;
                    document.getElementById(span_data_title_elem_id).innerHTML = particle_spin_up_superposition_property_keys[i];
                    document.getElementById(span_data_title_elem_id).style.display = "inline";

                    var some_object_data_info = (intersects[0].object[(particle_spin_up_property_keys.length + particle_spin_up_superposition_property_keys)[i]])[0];

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

                document.getElementById("object_name").textContent = intersects[0].object[particle_spin_up_property_keys[0]];

                for(i = 1; i < particle_spin_up_property_keys.length; i++) {

                    var div_data_info_elem_id = "object_data_info_" + i;
                    document.getElementById(div_data_info_elem_id).style.display = "inline";

                    var span_data_title_elem_id = "object_data_title_" + i;
                    document.getElementById(span_data_title_elem_id).innerHTML = particle_spin_up_property_keys[i];
                    document.getElementById(span_data_title_elem_id).style.display = "inline";

                    var some_object_data_info = (intersects[0].object[particle_spin_up_property_keys[i]])[0];

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
        if(SPIN_UP_INTERSECTED) {

            SPIN_UP_INTERSECTED.material.needsUpdate = true;

            SPIN_UP_INTERSECTED.material.color.setHex(0xff2200);

            document.getElementById("object_name").textContent = "";

            for(i = 1; i < particle_spin_up_property_keys.length; i++) {

                var div_data_info_elem_id = "object_data_info_" + i;
                document.getElementById(div_data_info_elem_id).style.display = "none";

                var span_data_title_elem_id = "object_data_title_" + i;
                document.getElementById(span_data_title_elem_id).innerHTML = "";
                document.getElementById(span_data_title_elem_id).style.display = "none";

                var span_data_content_elem_id = "object_data_content_" + i;
                document.getElementById(span_data_content_elem_id).innerHTML = "";
                document.getElementById(span_data_content_elem_id).style.display = "none";

            }

            for(i = 1; i < particle_spin_up_superposition_property_keys.length; i++) {

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
        SPIN_UP_INTERSECTED = null;

    }

}

// The Nucleus/Proton and Electron's States' rotation movements
function particle_rotation_movement() {
    
    var particle_rotation_speed = ( motions_factor * 0.0001 * 28 );
    
    particle_mesh.rotation.y += particle_rotation_speed;
    
}

// The Electron's States' translaction movements around the Nucleus/Proton
function particle_spins_translaction_movements() {

    // Creating the quarternion for the Electron's Ground State
    var quaternion_for_particle_spin_down = new THREE.Quaternion();

    // Setting and applying the quarternion's Y Axis for the Electron's Ground State
    quaternion_for_particle_spin_down.setFromAxisAngle( y_axis, ( motions_factor * 0.02 ) );
    particle_spin_down_pivot.applyQuaternion(quaternion_for_particle_spin_down);
    
    
    // Creating the quarternion for the Electron's Ground State
    var quaternion_for_particle_spin_up = new THREE.Quaternion();

    // Setting and applying the quarternion's Y Axis for the Electron's Ground State
    quaternion_for_particle_spin_up.setFromAxisAngle( y_axis, ( motions_factor * -0.02 ) );
    particle_spin_up_pivot.applyQuaternion(quaternion_for_particle_spin_up);
    
}

// The Rendering Process Method
function render() {

    // The Animation Frame Request Process
    requestAnimationFrame(render);

    // The Nucleus/Proton and Electron's States' rotation movements
    particle_rotation_movement();

    // The Electron's States' translaction movements around the Nucleus/Proton
    particle_spins_translaction_movements();

    // The Rendering Process, in sucessive repeated calls, in loop
    renderer.render(spin_particle_scene, camera);

}