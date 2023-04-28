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
import { Frame } from './Frame'
import { Backdrop } from './Backdrop'
import { LoaderCanvas } from '../LoaderCanvas'
import { Menu } from '@/components/Menu'
import { MENU_SELECT, MENU_SIZE } from '@/consts'
import { type Lamp } from '@/types/types'
import { useBoundStore } from '@/stores/useBoundStore'

interface Props {
  lamps: Lamp[]
}
export function Home3DLamps({ lamps }: Props) {
  const lampHome = useBoundStore((state) => state.lampHome)
  console.log({ lampHome })
  return (
    <div className="w-full h-[500px] relative">
      <Suspense fallback={<LoaderCanvas caption="Loading 3D Frame" />}>
        <Menu
          direction="flex-col"
          gap="gap-3"
          hasBackground={false}
          menuItems={lamps}
          size={MENU_SIZE.SMALL}
          type={MENU_SELECT.HOME}
        />

        <Canvas
          text-aria-label="3d viewport"
          shadows
          dpr={[1, 2]}
          //frameloop="demand"
        >
          <PerspectiveCamera
            makeDefault
            position={[-1, 0.5, 1.5]}
            fov={35}
            castShadow={true}
          />
          {/*
            rota en un solo eje
            <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />*/}
          <BakeShadows />
          <Frame />
          <ambientLight intensity={0.2} />
          <Backdrop />
          <AdaptiveDpr pixelated />
          <EffectComposer>
            <Bloom
              intensity={1.5}
              luminanceThreshold={0.38}
              luminanceSmoothing={1}
              height={200}
            />
            <HueSaturation saturation={0.2} hue={0.1} />
          </EffectComposer>
          <ContactShadows
            position={[0, -0.8, 0]}
            opacity={0.25}
            scale={10}
            blur={1.5}
            far={0.8}
          />
        </Canvas>
        <Loader
          containerStyles={{ background: '#262726' }}
          dataStyles={{ fontSize: '1rem', color: '#D5FFCC' }}
        />
      </Suspense>
    </div>
  )
}
