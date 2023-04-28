import { AccumulativeShadows, useGLTF } from '@react-three/drei'

export function Backdrop() {
  const { scene } = useGLTF('/gltf/backdrop.glb')

  const stand = scene.getObjectByName('stand') as THREE.Mesh
  stand.castShadow = true
  stand.receiveShadow = true

  const spotBack = scene.getObjectByName('back_spot') as THREE.PointLight
  spotBack.intensity = 1.1
  spotBack.color.r = 0.852498
  spotBack.color.g = 1.1
  spotBack.color.b = 0.852

  const spotLeft = scene.getObjectByName('sp_left') as THREE.SpotLight
  spotLeft.intensity = 0.25
  spotLeft.angle = 0.35
  spotLeft.decay = 2
  spotLeft.castShadow = true
  spotLeft.shadow.mapSize.x = 2048
  spotLeft.shadow.mapSize.y = 2048
  spotLeft.shadow.camera.far = 20
  spotLeft.shadow.camera.near = 8

  const spotRight = scene.getObjectByName('sp_right') as THREE.SpotLight
  spotRight.intensity = 2
  spotRight.angle = 0.1
  spotRight.castShadow = true
  spotRight.shadow.camera.far = 20
  spotRight.shadow.camera.near = 12

  const spotTop = scene.getObjectByName('sp_top') as THREE.SpotLight
  spotTop.intensity = 2.3
  spotTop.angle = 0.25
  spotTop.decay = 3
  spotTop.castShadow = true
  spotTop.shadow.mapSize.x = 2048
  spotTop.shadow.mapSize.y = 2048
  spotTop.shadow.camera.far = 20
  spotTop.shadow.camera.near = 12

  return (
    <group>
      <primitive object={scene} position={[0, -2.5, 0]}></primitive>
    </group>
  )
}
useGLTF.preload('/gltf/backdrop.glb')
