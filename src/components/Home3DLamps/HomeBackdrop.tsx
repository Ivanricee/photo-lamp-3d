import { AccumulativeShadows, useGLTF } from '@react-three/drei'

export function HomeBackdrop() {
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
  spotLeft.intensity = 0.4
  spotLeft.angle = 0.35
  spotLeft.decay = 2
  spotLeft.castShadow = true
  spotLeft.shadow.mapSize.x = 2048
  spotLeft.shadow.mapSize.y = 2048
  spotLeft.shadow.camera.far = 20
  spotLeft.shadow.camera.near = 8

  const spotRight = scene.getObjectByName('sp_right') as THREE.SpotLight
  spotRight.intensity = 6
  spotRight.angle = 0.115
  spotRight.castShadow = true
  spotRight.shadow.camera.far = 20
  spotRight.shadow.camera.near = 12

  const spotTop = scene.getObjectByName('sp_top') as THREE.SpotLight
  spotTop.intensity = 1
  spotTop.angle = 0.22
  spotTop.decay = 2
  spotTop.castShadow = true
  spotTop.shadow.mapSize.x = 2048
  spotTop.shadow.mapSize.y = 2048
  spotTop.shadow.camera.far = 20
  spotTop.shadow.camera.near = 12

  return (
    <group>
      <primitive object={scene}></primitive>
    </group>
  )
}
useGLTF.preload('/gltf/backdrop.glb')
