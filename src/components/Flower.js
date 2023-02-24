import React, { useEffect } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import {useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {Mesh } from 'three';


const Flower = () => {
  const gltf = useLoader(GLTFLoader, "/fire_in_the_sky/scene.gltf");

  useEffect(() =>{
		gltf.scene.scale.set(1.8, 1.8, 1.8);
		gltf.scene.position.set(0,-0.59, 0);
		gltf.scene.traverse((object) =>{
			if(object instanceof Mesh){
				object.castShadow = true;
				object.receiveShadow = true;
				object.material.envMapIntensity = 20;
		}
		});
	},[gltf]);

  
  useFrame((state, delta) => {
  const speed = 0.05; // adjust the speed of the rotation
  const amplitude = Math.PI / 1; //  turn angle
  const t = state.clock.elapsedTime * speed;
  gltf.scene.rotation.y = Math.sin(t) * amplitude;
  
});

  return (
  	<>
  	<primitive object={gltf.scene} dispose={null} />
  	<OrbitControls target={[0, 0, 0]} maxPolarAngle={1.45} />
	<PerspectiveCamera makeDefault fov={50} position={[3,2,5]} />

     {/*<color args={[0, 0, 0]} attach='background' />*/}
	
  	</>
  	);
}
	

export default Flower;