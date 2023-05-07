import { Center, Text3D } from '@react-three/drei'

interface Props {
  title: string
  caption: string
  position: [number, number, number]
  rotation: [number, number, number]
}
export function TextMesh({ title, caption, position, rotation }: Props) {
  return (
    <group position={position} rotation={rotation}>
      <Center top right>
        <Text3D font="fonts/Merienda_Regular.json" size={0.09} height={0.1}>
          {title}
          <meshPhysicalMaterial attach="material" color="#2f411e" />
        </Text3D>
      </Center>
      <Center top right position={[0, -0.2, 0]}>
        <Text3D font="fonts/Merienda_Regular.json" size={0.072} height={0.1}>
          {caption}
          <meshPhysicalMaterial attach="material" color="#364b23" />
        </Text3D>
      </Center>
    </group>
  )
}
