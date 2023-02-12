import React from 'react';

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