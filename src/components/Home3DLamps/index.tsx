import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import {
  AdaptiveDpr,
  BakeShadows,
  Loader,
  PerspectiveCamera,
  ContactShadows,
} from '@react-three/drei'
import {
  Bloom,
  EffectComposer,
  HueSaturation,
} from '@react-three/postprocessing'
import { HomeBackdrop } from './HomeBackdrop'
import { LoaderCanvas } from '../Three/LoaderCanvas'
import { Menu } from '@/components/Menu'
import { MENU_SELECT, MENU_SIZE } from '@/const'
import { GLBLoader } from '../Three/GLBLoader'

import { useCurrentMenuLampHomeAndData } from '@/hooks/useCurrentMenuLampHomeAndData'

export function Home3DLamps() {
  const [currentLampHomeId, homeLamps, gltfLampData] =
    useCurrentMenuLampHomeAndData()

  return (
    <div className="w-full xs:h-[370px] h-[500px] sm:h-[330px] md:h-[500px] relative">
      {currentLampHomeId && homeLamps && (
        <Suspense fallback={<LoaderCanvas caption="Loading 3D Frame" />}>
          <Menu
            direction="flex-col"
            gap="gap-3"
            hasBackground={false}
            menuItems={homeLamps}
            size={MENU_SIZE.SMALL}
            type={MENU_SELECT.HOME}
          />

          <Canvas
            text-aria-label="3d viewport"
            shadows
            dpr={[1, 2]}
            //frameloop="demand"
          >
            {/*
            rota en un solo eje
            <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />*/}
            <group position={[0, -1.8, 0]}>
              <PerspectiveCamera
                makeDefault
                position={[-1, 10.5, 1.5]}
                fov={35}
                castShadow={true}
              />
              {gltfLampData && (
                <GLBLoader
                  urlFile={gltfLampData.urlFile}
                  text3DTest={gltfLampData.text3DTest}
                  isHomeMesh
                />
              )}

              <ambientLight intensity={0.3} />
              <HomeBackdrop />
              <AdaptiveDpr pixelated />
              <EffectComposer>
                <Bloom
                  intensity={1.6}
                  luminanceThreshold={0.38}
                  luminanceSmoothing={1.5}
                  height={100}
                />
                <HueSaturation saturation={0.3} hue={0.1} />
              </EffectComposer>
              <BakeShadows />
              <ContactShadows
                position={[0, -2, 0]}
                opacity={0.5}
                scale={10}
                blur={1.5}
                far={0.8}
              />
            </group>
          </Canvas>
          <Loader
            containerStyles={{ background: '#262726' }}
            dataStyles={{ fontSize: '1rem', color: '#D5FFCC' }}
          />
        </Suspense>
      )}
    </div>
  )
}
