/* eslint-disable max-len */
import { Button } from '@/components/Button'
import { Layout } from '@/components/Layout'
import { LampControls } from '@/components/LampControls'
import { useBoundStore } from '@/stores/useBoundStore'
import { useEffect } from 'react'
import { type Lamp } from '@/types/types'

interface Props {
  menuOfLamps: Lamp[]
}

export default function Lamp({ menuOfLamps }: Props) {
  const addLamps = useBoundStore((state) => state.addLamps)

  useEffect(() => {
    addLamps(menuOfLamps)
  }, [addLamps, menuOfLamps])

  return (
    <Layout title="Lamp" header={false}>
      <section className="border border-green-500 w-full flex justify-center">
        <div className="w-[300px] flex-wrap border border-green-400 flex justify-center items-center">
          <div className="flex  justify-center items-center w-[100px] aspect-square bg-green-200">
            img
          </div>
          <h2 className="w-full  text-center">progress bar</h2>
        </div>
      </section>
      <div className="w-screen flex box-border xs:p-4 sm:p-8 sm:gap-10">
        <section className=" w-1/2">
          <LampControls />
        </section>
        <section className="border border-green-100 rounded-3xl overflow-hidden sm:w-1/2">
          <h2>3D result</h2>
          <div
            className="w-full border border-green-300"
            aria-label="canvas 3D lamp"
          >
            descripcion
          </div>
        </section>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const menuOfLamps: Lamp[] = [
    {
      id: 1,
      caption: 'marco tipo red social',
      img: 'https://res.cloudinary.com/ivanrice-c/image/upload/c_scale,dpr_auto,h_221,q_auto/v1683835486/Frontend/photo-lamp-3d/sm_lamp_wlzaaa.webp',
      alt: 'marco tipo red social',
      size: 200,
      urlFile: 'url del mesh',
      text3DTest: null,
    },
    {
      id: 2,
      caption: 'frame crystal',
      img: 'https://res.cloudinary.com/ivanrice-c/image/upload/c_scale,dpr_auto,h_221,q_auto/v1683835485/Frontend/photo-lamp-3d/crystal_lamp_vnzbpr.webp',
      alt: 'frame crystal',
      size: 200,
      urlFile: 'url del mesh',
      text3DTest: null,
    },
  ]
  return {
    props: {
      menuOfLamps,
    },
  }
}
