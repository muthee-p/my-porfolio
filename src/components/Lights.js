import React, { useEffect } from 'react';
import {useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {Mesh } from 'three';


const Lights =() =>{
  return(
    <>
    <ambientLight intensity={0.3} />
    <directionalLight position={[0,10,0]} intensity={1} />
    <directionalLight position={[0, 10,0]} intensity={1.5} />
    <spotLight intensity={1} position={[1000, 0, 0]} />
    </>
    )
}

export default Lights;