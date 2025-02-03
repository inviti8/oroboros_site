---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Oroboros"
  text: "XRO Network Documentation"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Tokenomics
      link: /Tokenomics/Token Specs
    - theme: alt
      text: API
      link: /Getting Started/Getting Started

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
<script setup>
import { ref } from 'vue'
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const count = ref(0)
const clock = new THREE.Clock();
let camera, scene, renderer;

init();

function init() {
  const hero = document.getElementsByClassName('VPHero VPHomeHero');
	const threeContainer = document.createElement( 'div' );
  threeContainer.classList.add('three_js');


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


		render();
        hero[0].appendChild( threeContainer );
        //animate();
			
	} );

	renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1;
	threeContainer.appendChild( renderer.domElement );

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
    //renderer.setAnimationLoop( animate );
	render();

}			

			//

function render() {

	renderer.render( scene, camera );

}
</script>