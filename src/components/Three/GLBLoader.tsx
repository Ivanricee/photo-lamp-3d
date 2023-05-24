import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { type text3DTest } from '@/types/types'
import { easing } from 'maath'
import { TextMesh } from './TextMesh'
interface Props {
  urlFile: string
  text3DTest: text3DTest | null
  isHomeMesh?: boolean
}

export function GLBLoader({ urlFile, text3DTest, isHomeMesh = false }: Props) {
  const groupRef = useRef(null)
  useFrame((state, delta) => {
    if (isHomeMesh) {
      easing.damp3(
        state.camera.position,
        [
          Math.sin(state.pointer.x / 4) * 12,
          1.8 + state.pointer.y,
          Math.cos(state.pointer.x / 4) * 6.8,
        ],
        0.4,
        delta
      )
    }
    state.camera.lookAt(0, 0.5, 0)
  })
  const url = `./gltf/${urlFile}`
  const { scene } = useGLTF(url)

  const sceneChildren = scene.children
  //llamar a un componente que obtenga el gltf con hook o construirlo desde el objeto con prop

  return (
    <group ref={groupRef}>
      {text3DTest && (
        <TextMesh
          title={text3DTest.title}
          caption={text3DTest.caption}
          position={text3DTest.position}
          rotation={text3DTest.rotation}
        />
      )}
      {sceneChildren.map((node) => {
        const { uuid, geometry, material, position, scale, rotation } =
          node as THREE.Mesh
        const materialProp = material as THREE.Material
        const isTransparent = materialProp.depthWrite

        if (isTransparent) {
          return (
            <mesh
              receiveShadow
              castShadow
              key={uuid}
              geometry={geometry}
              material={material}
              position={position}
              scale={scale}
              rotation={rotation}
            />
          )
        }
        return (
          <mesh
            key={uuid}
            geometry={geometry}
            material={material}
            position={position}
            scale={scale}
            rotation={rotation}
          />
        )
      })}
    </group>
  )
}
