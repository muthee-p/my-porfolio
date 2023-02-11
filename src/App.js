import React, {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import Flower from './components/Flower';
import Nav from './components/Nav';
import Lights from './components/Lights';
import './App.css';


const Content = () =>{
  return(
    //<mesh position={[0, -0.50, 0]}>
    <>
    <Flower />
    </>
    )
}
function App(){
  return(
    <>
    <Nav />
    <Suspense fallback={null}>
      <Canvas>
        <Lights />
        <Content />
      </Canvas>
    </Suspense>
    </>
    )
}

export default App;








// function Box() {
//   return (
//     <>
//     <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
//     <PerspectiveCamera makeDefault fov={50} position={[3,2,5]} />
//     <color args={[0, 0, 0]} attach='background' />
//     {/*<spotlight
//       color={[1, 0.25, 0.7]}
//       intensity ={1.5}
//       angle={0.6}
//       penumbra={0.5}
//       position={[5, 5, 0]}
//       castShadow shadow-bios={-0.0001}
//       />*/}
//     <mesh>
//       <boxGeometry arg={[1, 1, 1]}/>
//       <meshBasicMaterial color={ 'red'}/>
//     </mesh>
//     {/*<Flower />*/}
//     </>
//   )
// }

// const Flower =() =>{
//   const gltf = useLoader(GLTFLoader, "/flower/scene.gltf");
//   return <primitive object={gltf.scene} dispose={null} />;
// }
// const Lights =() =>{
//   return(
//     <>
//     <ambientLight intensity={0.3} />
//     <directionalLight position={[0,10,0]} intensity={1} />
//     <directionalLight position={[0, 10,0]} intensity={1.5} />
//     <spotLight intensity={1} position={[1000, 1000, 0]} />
//     </>
//     )
// }