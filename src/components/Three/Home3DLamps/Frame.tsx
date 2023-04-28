import { useEffect, useRef, useState } from 'react'
import {
  useGLTF,
  useAnimations,
  PerformanceMonitor,
  Select,
} from '@react-three/drei'
import { GLTF } from 'three-stdlib'
//import { AnimationClip } from 'three'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { TextMesh } from '../TextMesh'
type GLTFResult = GLTF & {
  nodes: {
    frame_1: THREE.Mesh
    frame_1_btns: THREE.Mesh
    frame_1_emissive: THREE.Mesh
    img_frame1: THREE.Mesh
  }
  materials: {
    ['initialShadingGroup.004']: THREE.MeshPhysicalMaterial
    ['initialShadingGroup.005']: THREE.MeshPhysicalMaterial
    rsMaterial7SG: THREE.MeshPhysicalMaterial
    ['initialShadingGroup.007']: THREE.MeshPhysicalMaterial
  }
}

export function Frame(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials, animations } = useGLTF(
    '/gltf/frame1.glb'
  ) as GLTFResult
  /*
  #Start an animation
  const group = useRef<THREE.Group>(null)

  const { actions, mixer } = useAnimations<AnimationClip>(animations, group)
  console.log({ actions, mixer })
  useEffect(() => {
     actions.frame_1Action?.play()
  }, [mixer, actions.frame_1Action, ])*/

  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        Math.sin(state.pointer.x / 4) * 12,
        0.75 + state.pointer.y,
        Math.cos(state.pointer.x / 4) * 6.8,
      ],
      0.4,
      delta
    )
    state.camera.lookAt(0, -0, 0)
  })

  return (
    <group>
      <TextMesh
        title="Framing Life in 3D"
        caption="Capturing life's moments in a 3D  frame."
      />
      <group
        name="Scene"
        //onPointerOver={(e) => (mixer.timeScale = 0)}
        //onPointerLeave={(e) => (mixer.timeScale = 1)}
        //ref={group}
        {...props}
        dispose={null}
        position={[-0.3, -2.5, 0]}
      >
        <mesh
          name="frame_1"
          castShadow
          receiveShadow
          geometry={nodes.frame_1.geometry}
          material={materials['initialShadingGroup.004']}
          position={[0.3, 2.54, -0.8]}
          rotation={[Math.PI / 2, 0, 0.16]}
          scale={1.19}
        >
          <mesh
            name="frame_1_btns"
            castShadow
            receiveShadow
            geometry={nodes.frame_1_btns.geometry}
            material={materials['initialShadingGroup.005']}
            position={[-0.04, 0.06, 0.53]}
          />

          <mesh
            name="frame_1_emissive"
            receiveShadow
            geometry={nodes.frame_1_emissive.geometry}
            material={materials.rsMaterial7SG}
            position={[-0.13, -0.06, 0.49]}
          />

          <mesh
            name="img_frame1"
            receiveShadow
            geometry={nodes.img_frame1.geometry}
            material={materials['initialShadingGroup.007']}
            position={[-0.04999879, 0.08486736, 0.12128516]}
          />
        </mesh>
      </group>
    </group>
  )
}
useGLTF.preload('/gltf/frame1.glb')
