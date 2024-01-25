import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import { Island } from "../models/Island";
import Bird from "../models/Bird";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -56.5, -220];
    let rotation = [0.4, 0, 0];

    if (window.innerWidth < 768) {
      // screenScale = [0.1, 0.1, 0.1];
      screenScale = [0.4, 0.4, 0.4];
    } else {
      screenScale = [0.4, 0.4, 0.4];
    }
    return [screenPosition, screenScale, rotation];
  };
  const [isLandPosition, islandScale, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        sss
      </div> */}
      <Canvas
        className={`w-full h-screen bg-transparent  ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        } `}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000"
            intensity={1}
          />
          <Bird />
          <Island
            position={isLandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
