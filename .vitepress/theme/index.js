// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const clock = new THREE.Clock();
let camera, scene, renderer;

init();

function init() {
    const x = document.getElementsByClassName('VPHero VPHomeHero');
	const container = document.createElement( 'div' );
    container.classList.add('three_d');


	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
	camera.position.set( - 1.8, 0.6, 2.7 );

	scene = new THREE.Scene();
    const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( light );

	const loader = new GLTFLoader().setPath( '/' );
	    loader.load( 'bg_model.glb', async function ( gltf ) {

		const model = gltf.scene;

		// wait until the model can be added to the scene without blocking due to shader compilation

		await renderer.compileAsync( model, camera, scene );

		scene.add( model );

        console.log(model)

		render();
        console.log(x);
        x[0].appendChild( container );
			
	} );

	renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1;
	container.appendChild( renderer.domElement );

	const controls = new OrbitControls( camera, renderer.domElement );
	controls.addEventListener( 'change', render ); // use if there is no animation loop
	controls.minDistance = 2;
	controls.maxDistance = 10;
	controls.target.set( 0, 0, - 0.2 );
	controls.update();

	window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0x000000, 0 );
    renderer.setAnimationLoop( animate );
	//render();

}			

			//

function render() {

	renderer.render( scene, camera );

}

function animate() {

    //const delta = clock.getDelta();

    renderer.render( scene, camera );

}

export default DefaultTheme