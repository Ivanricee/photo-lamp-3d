/* eslint-disable max-len */
import { Layout } from '@/components/Layout'
import { LampControls } from '@/components/LampControls'
import { useBoundStore } from '@/stores/useBoundStore'
import { useEffect } from 'react'
import { type Lamp } from '@/types/types'
import { ProgressBar } from '@/components/ProgressBar'
import { LampCanvas } from '@/components/Three/LampCanvas'
import { useCurrentLamp } from '@/hooks/useCurrentLamp'

interface Props {
  menuOfLamps: Lamp[]
}

export default function Lamp({ menuOfLamps }: Props) {
  const addLamps = useBoundStore((state) => state.addLamps)
  const currentLamp = useCurrentLamp()
  useEffect(() => {
    addLamps(menuOfLamps)
  }, [addLamps, menuOfLamps])

  return (
    <Layout title="Lamp" header={false}>
      <ProgressBar />
      <div className="w-screen flex box-border xs:p-4 sm:p-8 sm:gap-10">
        <section className=" w-1/2">
          <LampControls />
        </section>
        <section className="border border-green-100 rounded-3xl overflow-hidden sm:w-1/2">
          {currentLamp && <LampCanvas urlFile={currentLamp.urlFile} />}
        </section>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const menuOfLamps: Lamp[] = [
    {
      id: 1,
      caption: 'Insta frame',
      img: 'https://res.cloudinary.com/ivanrice-c/image/upload/c_scale,dpr_auto,h_221,q_auto/v1684188444/Frontend/photo-lamp-3d/sm_lamp_tf4nhy.webp',
      alt: 'Insta Frame',
      size: 200,
      urlFile: 'lamp_insta_l1.glb',
      progressBar: [
        {
          id: 1,
          step: 'lamp',
          name: 'Lamp',
          status: 'fulfilled',
          position: null,
          rotation: null,
        },
        {
          id: 2,
          step: 'img',
          name: 'Image',
          status: 'pending',
          position: null,
          rotation: null,
        },
        {
          id: 3,
          step: 'layer1',
          name: 'Layer 1',
          status: 'pending',
          position: null,
          rotation: null,
        },
        {
          id: 4,
          step: 'layer2',
          name: 'Layer 2',
          status: 'pending',
          position: null,
          rotation: null,
        },
        {
          id: 5,
          step: 'text',
          name: 'Text',
          status: 'pending',
          position: [-0.7, 1, -0.33],
          rotation: [0, 0.363, 0],
          title: 'Title',
          caption: 'Texto de prueba',
        },
      ],
    },
    {
      id: 2,
      caption: 'Prism Glow',
      img: 'https://res.cloudinary.com/ivanrice-c/image/upload/c_scale,dpr_auto,h_221,q_auto/v1684188446/Frontend/photo-lamp-3d/crystal_lamp_rqsnsl.webp',
      alt: 'Prism Glow',
      size: 200,
      urlFile: 'lamp_insta_l1.glb',
      progressBar: null,
    },
  ]
  return {
    props: {
      menuOfLamps,
    },
  }
}
