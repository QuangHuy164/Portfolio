import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Radio from '../models/Radio'

      {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center"></div> */}

const Home = () => {
  const adjustRadioForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [10, -50.5, -70];
    let rotation = [0.1, 4.5, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]; 
    } else {
      screenScale = [1, 1, 1];
    }
    return [ screenScale, screenPosition, rotation]
  }
  const [radioScale, radioPosition, radioRotation ] = adjustRadioForScreenSize()
  return (
    <section className="w-full h-screen relative">
      <Canvas className="w-full h-fullscreen bg-transparent"
              camera={{ near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity={10} />
          <ambientLight intensity={4} />
          <pointLight />
          <spotLight />
          <hemisphereLight skyColor='#b1e1ff' intensity={1} />
          <Radio 
            position = {radioPosition}
            scale = {radioScale}
            rotation = {radioRotation}
          />
          </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
