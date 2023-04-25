import { Center, Text3D } from '@react-three/drei'

interface Props {
  title: string
  caption: string
}
export function TextMesh({ title, caption }: Props) {
  return (
    <group>
      <Center top left position={[0.1, -1.45, -0.73]} rotation={[0, 0.363, 0]}>
        <Text3D font="fonts/Merienda_Regular.json" size={0.09} height={0.1}>
          {title}
          <meshPhysicalMaterial attach="material" color="#2f411e" />
        </Text3D>
      </Center>
      <Center top left position={[0.92, -1.62, -1.03]} rotation={[0, 0.363, 0]}>
        <Text3D font="fonts/Merienda_Regular.json" size={0.072} height={0.1}>
          {caption}
          <meshPhysicalMaterial attach="material" color="#364b23" />
        </Text3D>
      </Center>
    </group>
  )
}
