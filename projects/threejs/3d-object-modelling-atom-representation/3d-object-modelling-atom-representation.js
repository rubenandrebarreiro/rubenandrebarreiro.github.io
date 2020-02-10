/*

    LEARNING QUANTUM COMPUTING (ONLINE WEB COURSE)
    ATOM REPRESENTATION

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

// The XY Axis Normalized
const xy_axis_1 = new THREE.Vector3(1, 1, 0).normalize();

// The XY Axis Normalized
const xy_axis_2 = new THREE.Vector3(-1, 1, 0).normalize();

// The XZ Axis Grid Helper
const xz_grid = new THREE.GridHelper(8, 8, new THREE.Color(0xff0000), new THREE.Color(0xffff00));        


// Global Instance Variables:

// The Camera, the Trackball Controls (Mouse's/TouchPad's Pointer Controls),
// the Scene (Atom Representation Scene),
// the Renderer of the Scene and
// the Stats (Statistics of the Rendering Process)
var camera, controls, atom_representation_scene, renderer, stats;

// The Coordinates of the Projector and Mouse's/TouchPad's Pointer
var projector, mouse = { x: window.innerHeight, y: window.innerWidth };

// The Intersection of Elements of the Scene (Atom Representation Scene)
// (The Atom Nucleus and, its Orbits and Particles)
var ATOM_NUCLEUS_INTERSECTED, ATOM_ORBIT_INTERSECTED_1, ATOM_ORBIT_INTERSECTED_2, ATOM_ORBIT_INTERSECTED_3, ATOM_ORBIT_INTERSECTED_4;

// The Atom Nucleus' Elements
var atom_nucleus_geometry, atom_nucleus_material, atom_nucleus_mesh, atom_nucleus_pivot;

// The Atom's Particle and Orbit Elements #1
var atom_orbit_geometry_1, atom_orbit_material_1, atom_orbit_mesh_1, atom_particle_geometry_1, atom_particle_material_1, atom_particle_mesh_1, atom_particle_state_pivot_1, atom_state_pivot_1;

// The Atom's Particle and Orbit Elements #2
var atom_orbit_geometry_2, atom_orbit_material_2, atom_orbit_mesh_2, atom_particle_geometry_2, atom_particle_material_2, atom_particle_mesh_2, atom_particle_state_pivot_2, atom_state_pivot_2;

// The Atom's Particle and Orbit Elements #3
var atom_orbit_geometry_3, atom_orbit_material_3, atom_orbit_mesh_3, atom_particle_geometry_3, atom_particle_material_3, atom_particle_mesh_3, atom_particle_state_pivot_3, atom_state_pivot_3;

// The Atom's Particle and Orbit Elements #4
var atom_orbit_geometry_4, atom_orbit_material_4, atom_orbit_mesh_4, atom_particle_geometry_4, atom_particle_material_4, atom_particle_mesh_4, atom_particle_state_pivot_4, atom_state_pivot_4;

// The Form's Controls/Elements - Radios for
// controlling some aspects of the Scene (Atom Representation Scene)
var motions_radios, camera_view_radios;


// The Motions' Factor for the Atom Nucleus and its Particles' States'
// rotations' and translactions' movements
var motions_factor;

// The Calls for Initiation and Animation Methods
init();
animate();


// The Initiation Process Method
function init() {

    // The Motions' Factor for the Atom's Nucleus and Particles' States'
    // rotations' and translactions' movements
    motions_factor = 1.0;

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
    camera.position.y = 6;
    camera.lookAt(new THREE.Vector3(0,0,0));
}

// Makes the transformations for the Camera's Perspective View
function camera_perspective_view() {
    camera.rotation.x += Math.PI/4;
    camera.position.x = -1;
    camera.position.z = 6;
    camera.position.y = -0.4;
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
    
    // Adds the Atom's Particles' States and Orbits
    add_atom_orbit_state_to_scene_1();
    add_atom_orbit_state_to_scene_2();
    add_atom_orbit_state_to_scene_3();
    add_atom_orbit_state_to_scene_4();

}

// Adds the Atom's Nucleus to the Scene (Atom Representation Scene)
function add_atom_nucleus_to_scene() {

    // Creates the Geometry of the Sphere representing
    // the Atom's Nucleus
    atom_nucleus_geometry = new THREE.SphereGeometry(0.6, 40, 40);

    // Creates the Material of the Sphere representing
    // the Atom's Nucleus
    atom_nucleus_material = new THREE.MeshBasicMaterial(
        {
            color: 0xdda0dd
        }
    );

    // Creates the Mesh of the Atom's Nucleus
    atom_nucleus_mesh = new THREE.Mesh(atom_nucleus_geometry, atom_nucleus_material);

    // Creates the group for the Atom's Nucleus' Pivot
    atom_nucleus_pivot = new THREE.Group();

    // Adds the Mesh of the Atom's Nucleus to
    // the group for the Atom's Nucleus' Pivot
    atom_nucleus_pivot.add(atom_nucleus_mesh);

    // Adds the group for the Atom's Nucleus' Pivot to
    // the Scene (Atom Representation Scene) 
    atom_representation_scene.add(atom_nucleus_pivot);

}


// Creates the Atom's Particle's State's Orbit #1
function create_atom_particle_state_orbit_1() {

    // Creates the Geometry of the Ring representing
    // the Atom's Orbit #1
    atom_orbit_geometry_1 = new THREE.RingGeometry(2.5, 2.52, 60);

    // Creates the Material of the Ring representing
    // the Atom's Orbit #1
    atom_orbit_material_1 = new THREE.MeshBasicMaterial(
        {
            color: 0xffffff,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 1.0
        }
    );

    // Creates the Mesh of the Atom's Orbit's Mesh #1
    atom_orbit_mesh_1 = new THREE.Mesh(atom_orbit_geometry_1, atom_orbit_material_1);

    // Rotates the Atom's Orbit's Mesh #1 PI/2
    // (i.e., 90º degrees), regarding the X Axis
    atom_orbit_mesh_1.rotation.x = Math.PI / 2;

}

// Creates the Atom's Particle's State #1
function create_atom_particle_state_1() {

    // Creates the Geometry of the Sphere representing
    // the Atom's Particle #1
    atom_particle_geometry_1 = new THREE.SphereGeometry(0.22, 40, 40);

    // Creates the Material of the Sphere representing
    // the Atom's Particle #1
    atom_particle_material_1 = new THREE.MeshBasicMaterial(
        {
            color: 0xff2200,
            depthTest: true,
            transparent: true,
            opacity: 1.0
        }
    );

    // Creates the Mesh of the Atom's Particle's State #1
    atom_particle_mesh_1 = new THREE.Mesh(atom_particle_geometry_1, atom_particle_material_1);            
    
    // Translates/Moves the Atom's Particle's State #1
    // -2.51 units, regarding the X Axis
    atom_particle_mesh_1.position.x = -2.51;

    // Creates the group for the Atom's Particle's State's Pivot #1
    atom_particle_state_pivot_1 = new THREE.Group();

    // Adds the Mesh of the Atom's Particle's State #1
    // the group for the Atom's Particle's State's Pivot #1
    atom_particle_state_pivot_1.add(atom_particle_mesh_1);

}

// Adds the Atom's Orbit's State #1 to the Scene (Atom Representation Scene)
function add_atom_orbit_state_to_scene_1() {

    // Creates the Atom's Particle's State's Orbit #1
    create_atom_particle_state_orbit_1();

    // Creates the Atom's Particle's State #1
    create_atom_particle_state_1();

    
    // Creates the group for the Atom's State's Pivot #1
    atom_state_pivot_1 = new THREE.Group();

    // Adds the Mesh of the Atom's State's Orbit #1 to
    // the group for the Atom's State's Pivot #1
    atom_state_pivot_1.add(atom_orbit_mesh_1);

    // Adds the Mesh of the Atom's Particle's State's Pivot #1 to
    // the group for the Atom's State's Pivot #1
    atom_state_pivot_1.add(atom_particle_state_pivot_1);

    // Adds the group for the Atom's State's Pivot #1 to
    // the Scene (Atom Representation Scene) 
    atom_representation_scene.add(atom_state_pivot_1);

}


// Creates the Atom's Particle's State's Orbit #2
function create_atom_particle_state_orbit_2() {

    // Creates the Geometry of the Ring representing
    // the Atom's Orbit #2
    atom_orbit_geometry_2 = new THREE.RingGeometry(2.5, 2.52, 60);

    // Creates the Material of the Ring representing
    // the Atom's Orbit #2
    atom_orbit_material_2 = new THREE.MeshBasicMaterial(
        {
            color: 0xffffff,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 1.0
        }
    );

    // Creates the Mesh of the Atom's Orbit's Mesh #2
    atom_orbit_mesh_2 = new THREE.Mesh(atom_orbit_geometry_2, atom_orbit_material_2);

    // Rotates the Atom's Orbit's Mesh #2 PI/2
    // (i.e., 90º degrees), regarding the X Axis
    atom_orbit_mesh_2.rotation.x = Math.PI / 2;
    
    // Rotates the Atom's Orbit's Mesh #2 PI/2
    // (i.e., 90º degrees), regarding the Y Axis
    atom_orbit_mesh_2.rotation.y = Math.PI / 2;

}

// Creates the Atom's Particle's State #2
function create_atom_particle_state_2() {

    // Creates the Geometry of the Sphere representing
    // the Atom's Particle #2
    atom_particle_geometry_2 = new THREE.SphereGeometry(0.22, 40, 40);

    // Creates the Material of the Sphere representing
    // the Atom's Particle #2
    atom_particle_material_2 = new THREE.MeshBasicMaterial(
        {
            color: 0xff2200,
            depthTest: true,
            transparent: true,
            opacity: 1.0
        }
    );

    // Creates the Mesh of the Atom's Particle's State #2
    atom_particle_mesh_2 = new THREE.Mesh(atom_particle_geometry_2, atom_particle_material_2);            

    // Translates/Moves the Atom's Particle's State #2
    // 2.51 units, regarding the Z Axis
    atom_particle_mesh_2.position.z = 2.51;

    // Creates the group for the Atom's Particle's State's Pivot #2
    atom_particle_state_pivot_2 = new THREE.Group();

    // Adds the Mesh of the Atom's Particle's State #2
    // the group for the Atom's Particle's State's Pivot #2
    atom_particle_state_pivot_2.add(atom_particle_mesh_2);

}

// Adds the Atom's Orbit's State #2 to the Scene (Atom Representation Scene)
function add_atom_orbit_state_to_scene_2() {

    // Creates the Atom's Particle's State's Orbit #2
    create_atom_particle_state_orbit_2();

    // Creates the Atom's Particle's State #2
    create_atom_particle_state_2();

    
    // Creates the group for the Atom's State's Pivot #2
    atom_state_pivot_2 = new THREE.Group();

    // Adds the Mesh of the Atom's State's Orbit #2 to
    // the group for the Atom's State's Pivot #2
    atom_state_pivot_2.add(atom_orbit_mesh_2);

    // Adds the Mesh of the Atom's Particle's State's Pivot #1 to
    // the group for the Atom's State's Pivot #2
    atom_state_pivot_2.add(atom_particle_state_pivot_2);
    
    // Rotates the Atom's State's Pivot #2 PI/2
    // (i.e., 90º degrees), regarding the Y Axis 
    atom_state_pivot_2.rotation.x += Math.PI / 2;

    // Adds the group for the Atom's State's Pivot #2 to
    // the Scene (Atom Representation Scene) 
    atom_representation_scene.add(atom_state_pivot_2);

}


// Creates the Atom's Particle's State's Orbit #3
function create_atom_particle_state_orbit_3() {

    // Creates the Geometry of the Ring representing
    // the Atom's Orbit #3
    atom_orbit_geometry_3 = new THREE.RingGeometry(2.5, 2.52, 60);

    // Creates the Material of the Ring representing
    // the Atom's Orbit #3
    atom_orbit_material_3 = new THREE.MeshBasicMaterial(
        {
            color: 0xffffff,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 1.0
        }
    );

    // Creates the Mesh of the Atom's Orbit's Mesh #3
    atom_orbit_mesh_3 = new THREE.Mesh(atom_orbit_geometry_3, atom_orbit_material_3);
    
    // Rotates the Atom's Orbit's Mesh #3 PI/2
    // (i.e., 90º degrees), regarding the X Axis
    atom_orbit_mesh_3.rotation.x = Math.PI / 2;
    
    // Rotates the Atom's Orbit's Mesh #3 PI/4
    // (i.e., -45º degrees), regarding the Y Axis
    atom_orbit_mesh_3.rotation.y = -Math.PI / 4;
    
}

// Creates the Atom's Particle's State #3
function create_atom_particle_state_3() {

    // Creates the Geometry of the Sphere representing
    // the Atom's Particle #3
    atom_particle_geometry_3 = new THREE.SphereGeometry(0.22, 40, 40);

    // Creates the Material of the Sphere representing
    // the Atom's Particle #3
    atom_particle_material_3 = new THREE.MeshBasicMaterial(
        {
            color: 0xff2200,
            depthTest: true,
            transparent: true,
            opacity: 1.0
        }
    );

    // Creates the Mesh of the Atom's Particle's State #3
    atom_particle_mesh_3 = new THREE.Mesh(atom_particle_geometry_3, atom_particle_material_3);            

    // Translates/Moves the Atom's Particle's State #3
    // 2.51 units, regarding the Z Axis
    atom_particle_mesh_3.position.z = 2.51;

    // Creates the group for the Atom's Particle's State's Pivot #3
    atom_particle_state_pivot_3 = new THREE.Group();

    // Adds the Mesh of the Atom's Particle #3
    // the group for the Atom's Particle's State's Pivot #3
    atom_particle_state_pivot_3.add(atom_particle_mesh_3);

}

// Adds the Atom's Orbit's State #3 to the Scene (Atom Representation Scene)
function add_atom_orbit_state_to_scene_3() {

    // Creates the Atom's Particle's State's Orbit #3
    create_atom_particle_state_orbit_3();

    // Creates the Atom's Particle's State #3
    create_atom_particle_state_3();


    // Creates the group for the Atom's State's Pivot #3
    atom_state_pivot_3 = new THREE.Group();

    // Adds the Mesh of the Atom's State's Orbit #3 to
    // the group for the Atom's State's Pivot #3
    atom_state_pivot_3.add(atom_orbit_mesh_3);

    // Adds the Mesh of the Atom's Particle's State's Pivot #3 to
    // the group for the Atom's State's Pivot #3
    atom_state_pivot_3.add(atom_particle_state_pivot_3);
    
    // Adds the group for the Atom's State's Pivot #3 to
    // the Scene (Atom Representation Scene)  
    atom_representation_scene.add(atom_state_pivot_3);

}


// Creates the Atom's Particle's State's Orbit #4
function create_atom_particle_state_orbit_4() {

    // Creates the Geometry of the Ring representing
    // the Atom's Orbit #4
    atom_orbit_geometry_4 = new THREE.RingGeometry(2.5, 2.52, 60);

    // Creates the Material of the Ring representing
    // the Atom's Orbit #4
    atom_orbit_material_4 = new THREE.MeshBasicMaterial(
        {
            color: 0xffffff,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 1.0
        }
    );

    // Creates the Mesh of the Atom's Orbit's Mesh #4
    atom_orbit_mesh_4 = new THREE.Mesh(atom_orbit_geometry_4, atom_orbit_material_4);
    
    // Rotates the Atom's Orbit's Mesh #4 PI/2
    // (i.e., 90º degrees), regarding the X Axis
    atom_orbit_mesh_4.rotation.x = Math.PI / 2;
    
    // Rotates the Atom's Orbit's Mesh #4 PI/4
    // (i.e., 45º degrees), regarding the Y Axis
    atom_orbit_mesh_4.rotation.y = Math.PI / 4;
    
}

// Creates the Atom's Particle's State #4
function create_atom_particle_state_4() {

    // Creates the Geometry of the Sphere representing
    // the Atom's Particle #4
    atom_particle_geometry_4 = new THREE.SphereGeometry(0.22, 40, 40);

    // Creates the Material of the Sphere representing
    // the Atom's Particle #4
    atom_particle_material_4 = new THREE.MeshBasicMaterial(
        {
            color: 0xff2200,
            depthTest: true,
            transparent: true,
            opacity: 1.0
        }
    );

    // Creates the Mesh of the Atom's Particle's State #4
    atom_particle_mesh_4 = new THREE.Mesh(atom_particle_geometry_4, atom_particle_material_4);            

    // Translates/Moves the Atom's Particle's State #4
    // -2.51 units, regarding the Z Axis
    atom_particle_mesh_4.position.z = -2.51;

    // Creates the group for the Atom's Particle's State's Pivot #4
    atom_particle_state_pivot_4 = new THREE.Group();

    // Adds the Mesh of the Atom's Particle #4
    // the group for the Atom's Particle's State's Pivot #4
    atom_particle_state_pivot_4.add(atom_particle_mesh_4);

}

// Adds the Atom's Orbit's State #4 to the Scene (Atom Representation Scene)
function add_atom_orbit_state_to_scene_4() {

    // Creates the Atom's Particle's State's Orbit #4
    create_atom_particle_state_orbit_4();

    // Creates the Atom's Particle's State #4
    create_atom_particle_state_4();


    // Creates the group for the Atom's State's Pivot #4
    atom_state_pivot_4 = new THREE.Group();

    // Adds the Mesh of the Atom's State's Orbit #4 to
    // the group for the Atom's State's Pivot #4
    atom_state_pivot_4.add(atom_orbit_mesh_4);

    // Adds the Mesh of the Atom's Particle's State's Pivot #4 to
    // the group for the Atom's State's Pivot #4
    atom_state_pivot_4.add(atom_particle_state_pivot_4);
    
    // Adds the group for the Atom's State's Pivot #4 to
    // the Scene (Atom Representation Scene)
    atom_representation_scene.add(atom_state_pivot_4);

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

    // Handles/Triggers the Function for
    // changes in the Atomic Orbit's Checkbox
    on_check_atomic_orbits();
    
    
    // Handles/Triggers the Function for
    // changes in the Atom's Particle's State #1 Checkbox
    on_check_atom_particle_state_1();
    
    // Handles/Triggers the Function for
    // changes in the Atom's Particle's State #2 Checkbox
    on_check_atom_particle_state_2();
    
    // Handles/Triggers the Function for
    // changes in the Atom's Particle's State #3 Checkbox
    on_check_atom_particle_state_3();
    
    // Handles/Triggers the Function for
    // changes in the Atom's Particle's State #4 Checkbox
    on_check_atom_particle_state_4();
    
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

// Calls a given function, when the Atomic Orbit's Checkbox change
function on_check_atomic_orbits() {

    var show_atomic_orbits = document.getElementById("show_atomic_orbits");

    show_atomic_orbits.onchange = function() {
        if(show_atomic_orbits.checked) {
            atom_orbit_mesh_1.material.opacity = 1.0;
            electron_excited_state_orbit_mesh.material.opacity = 1.0;
        }
        else {
            atom_orbit_mesh_1.material.opacity = 0.0;
            electron_excited_state_orbit_mesh.material.opacity = 0.0;
        }
    }
}


// Calls a given function, when the Atom's Particle's State #1 Checkbox change
function on_check_atom_particle_state_1() {

    var show_atom_particle_state_1 = document.getElementById("show_atom_particle_state_1");

    show_atom_particle_state_1.onchange = function() {
        if(show_atom_particle_state_1.checked) {
            
            atom_orbit_mesh_1.material.opacity = 1.0;
            atom_orbit_mesh_1.material.depthTest = true;
            
            atom_particle_mesh_1.material.opacity = 1.0;
            atom_particle_mesh_1.material.depthTest = true;
            
        }
        else {
            
            atom_orbit_mesh_1.material.opacity = 0.0;
            atom_orbit_mesh_1.material.depthTest = false;
            
            atom_particle_mesh_1.material.opacity = 0.0;
            atom_particle_mesh_1.material.depthTest = false;
            
        }
    }
}

// Calls a given function, when the Atom's Particle's State #2 Checkbox change
function on_check_atom_particle_state_2() {

    var show_atom_particle_state_2 = document.getElementById("show_atom_particle_state_2");

    show_atom_particle_state_2.onchange = function() {
        if(show_atom_particle_state_2.checked) {
            
            atom_orbit_mesh_2.material.opacity = 1.0;
            atom_orbit_mesh_2.material.depthTest = true;
            
            atom_particle_mesh_2.material.opacity = 1.0;
            atom_particle_mesh_2.material.depthTest = true;
            
        }
        else {
            
            atom_orbit_mesh_2.material.opacity = 0.0;
            atom_orbit_mesh_2.material.depthTest = false;
            
            atom_particle_mesh_2.material.opacity = 0.0;
            atom_particle_mesh_2.material.depthTest = false;
            
        }
    }
}

// Calls a given function, when the Atom's Particle's State #3 Checkbox change
function on_check_atom_particle_state_3() {

    var show_atom_particle_state_3 = document.getElementById("show_atom_particle_state_3");

    show_atom_particle_state_3.onchange = function() {
        if(show_atom_particle_state_3.checked) {
            
            atom_orbit_mesh_3.material.opacity = 1.0;
            atom_orbit_mesh_3.material.depthTest = true;
            
            atom_particle_mesh_3.material.opacity = 1.0;
            atom_particle_mesh_3.material.depthTest = true;
            
        }
        else {
            
            atom_orbit_mesh_3.material.opacity = 0.0;
            atom_orbit_mesh_3.material.depthTest = false;
            
            atom_particle_mesh_3.material.opacity = 0.0;
            atom_particle_mesh_3.material.depthTest = false;
            
        }
    }
}

// Calls a given function, when the Atom's Particle's State #4 Checkbox change
function on_check_atom_particle_state_4() {

    var show_atom_particle_state_4 = document.getElementById("show_atom_particle_state_4");

    show_atom_particle_state_4.onchange = function() {
        if(show_atom_particle_state_4.checked) {
            
            atom_orbit_mesh_4.material.opacity = 1.0;
            atom_orbit_mesh_4.material.depthTest = true;
            
            atom_particle_mesh_4.material.opacity = 1.0;
            atom_particle_mesh_4.material.depthTest = true;
            
        }
        else {
            
            atom_orbit_mesh_4.material.opacity = 0.0;
            atom_orbit_mesh_4.material.depthTest = false;
            
            atom_particle_mesh_4.material.opacity = 0.0;
            atom_particle_mesh_4.material.depthTest = false;
            
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
function atom_nucleus_and_particles_rotation_movements() {
    
    var atom_nucleus_rotation_speed = ( motions_factor * 0.0001 * 28 );
    var atom_particles_rotation_speed = ( motions_factor * 0.01 * 28 );
    
    atom_nucleus_mesh.rotation.y += atom_nucleus_rotation_speed;

    atom_particle_mesh_1.rotation.y += atom_particles_rotation_speed;
    atom_particle_mesh_2.rotation.y += atom_particles_rotation_speed;
    atom_particle_mesh_3.rotation.y += atom_particles_rotation_speed;
    atom_particle_mesh_4.rotation.y += atom_particles_rotation_speed;
    
}

// The Atom's Particles' States' translaction movements around the Atom's Nucleus
function particles_translaction_movements() {

    // Creating the quarternion for the Atom's State #1
    var quaternion_for_atom_state_1 = new THREE.Quaternion();

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
    
}

// The Rendering Process Method
function render() {

    // The Animation Frame Request Process
    requestAnimationFrame(render);

    // The Atom's Nucleus' and Particles' States' rotation movements
    atom_nucleus_and_particles_rotation_movements();

    // The Atom's Particles' States' translaction movements around the Atom's Nucleus
    particles_translaction_movements();

    // The Rendering Process, in sucessive repeated calls, in loop
    renderer.render(atom_representation_scene, camera);

}
