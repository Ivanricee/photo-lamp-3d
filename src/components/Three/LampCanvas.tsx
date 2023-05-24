import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { GLBLoader } from './GLBLoader'

interface Props {
  urlFile: string
}
export function LampCanvas({ urlFile }: Props) {
  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        position={[-1, 10.5, 1.5]}
        fov={35}
        castShadow={true}
      />
      <GLBLoader urlFile={urlFile} text3DTest={null} />
    </Canvas>
  )
}
