import React, { useEffect, useRef } from "react";

import birdScene from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);

  const rotationSpeed = 0.15;
  const flightSpeed = 0.4; // Adjust the flight speed as needed
  const flightRadius = 5.0; // Adjust the flight radius as needed

  useFrame((state, delta) => {
    // Rotate the bird
    birdRef.current.rotation.y += rotationSpeed * delta;

    // Simulate flight away from the camera towards the island, around it, and back towards the camera
    const elapsedTime = state.clock.getElapsedTime();
    const birdPosition = birdRef.current.position;

    // // Flight away from the camera towards the island
    if (elapsedTime < 6) {
      birdPosition.z = -5 + elapsedTime * flightSpeed * 2;
    }
    // Circular flight around the island
    // else if (elapsedTime < 12) {
    //   birdPosition.z = 8 - (elapsedTime - 6) * flightSpeed;
    // }
    // Flight back towards the camera
    else {
      birdPosition.x = Math.cos((elapsedTime - 3) * flightSpeed) * flightRadius;
      birdPosition.z =
        Math.sin((elapsedTime - 3) * flightSpeed) * flightRadius - 5;
    }
    // Look at the island's position
    birdRef.current.lookAt(0, 0, -5);
  });
  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene}></primitive>
    </mesh>
  );
};

export default Bird;
