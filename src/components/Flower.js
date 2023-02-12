import React, { useEffect } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import {useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {Mesh } from 'three';


const Flower = () => {
  const gltf = useLoader(GLTFLoader, "/flower/scene.gltf");

  useEffect(() =>{
		gltf.scene.scale.set(0.08, 0.08, 0.08);
		gltf.scene.position.set(0,-0.09, 0);
		gltf.scene.traverse((object) =>{
			if(object instanceof Mesh){
				object.castShadow = true;
				object.receiveShadow = true;
				object.material.envMapIntensity = 20;
		}
		});
	},[gltf]);

  
  useFrame(() => gltf.scene.rotation.y += 0.002);

  return (
  	<>
  	<primitive object={gltf.scene} dispose={null} />
  	<OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
	<PerspectiveCamera makeDefault fov={50} position={[3,2,5]} />
     {/*<color args={[0, 0, 0]} attach='background' />*/}
	
  	</>
  	);
}
	

export default Flower;