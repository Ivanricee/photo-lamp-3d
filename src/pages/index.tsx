import { useEffect } from 'react'
import { Button } from '@/components/Button'
import { Layout } from '@/components/Layout'
import { Home3DLamps } from '@/components/Three/Home3DLamps'
import { useBoundStore } from '@/stores/useBoundStore'
import { type text3DTest, type Lamp } from '@/types/types'
interface Props {
  text3DTest: text3DTest[]
  homeLamps: Lamp[]
}
export default function Home({ homeLamps }: Props) {
  const setHomeLamps = useBoundStore((state) => state.setHomeLamps)
  const selectMenuHome = useBoundStore((state) => state.selectMenuHome)

  useEffect(() => {
    setHomeLamps(homeLamps)
    selectMenuHome(homeLamps[0].id)
  }, [homeLamps, selectMenuHome, setHomeLamps])

  return (
    <Layout title="Home" header={false}>
      <section
        className="inline-block w-full bg-gradient-card-1 drop-shadow-4xl rounded-3xl m-8 p-4 text-center
      sm:p-8 sm:text-left md:max-w-[1024px] overflow-hidden"
      >
        <div
          className="flex flex-wrap justify-center items-center
        xs-m-4 sm:flex-nowrap sm:w-full"
        >
          <div className="flex justify-center items-center w-full sm:w-6/12 p-8 xs:pb-2 sm:pl-2 ">
            <div className="w-72">
              <h1
                className="text-3xl mb-1 font-bold text-green-100 border-st
                         xs:text-xl"
              >
                <span className="font-medium">PHOTO</span> LAMP 3D
              </h1>
              <h2 className="text-xs mb-8 font-bold text-green-200 xs:mb-4">
                Start Creating your own lamp.
              </h2>
              <p className="text-xs xs:text-[0.6rem] mb-4 text-green-50">
                Transform your favorite photos into unique and custom lamps. You
                can select from a variety of pre-designed 3D frames.
              </p>
              <p className="text-xs xs:text-[0.6rem] text-green-50 xs:hidden ">
                You can preview your photograph in the 3D frame before printing
                or sharing it.
              </p>
              <div className="w-full my-8 sm:mb-0">
                <Button to="/LampBuilder" disabled={false}>
                  Start creating your own lamp
                </Button>
              </div>
            </div>
          </div>
          <div
            className="w-full sm:w-7/12 flex-grow-1  border border-green-100 rounded-3xl overflow-hidden
          xs:w-full"
          >
            <div className="w-full">
              <Home3DLamps />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {
  const homeLamps = await [
    {
      id: 1,
      img: 'https://res.cloudinary.com/ivanrice-c/image/upload/v1680642524/Frontend/photo-lamp-3d/5447782_uncobk.jpg',
      alt: 'Social media lamp with photo',
      size: 30,
      caption: null,
      urlFile: 'frame1.glb',
      text3DTest: {
        id: 1,
        title: 'Framing Life in 3D',
        caption: "Capturing life's moments in a 3D  frame.",
        position: [-0.7, 1, -0.33],
        rotation: [0, 0.363, 0],
      },
    },
    {
      id: 2,
      img: 'https://res.cloudinary.com/ivanrice-c/image/upload/v1680642524/Frontend/photo-lamp-3d/5447782_uncobk.jpg',
      alt: 'Glass lamp with photo',
      size: 30,
      caption: null,
      urlFile: 'glass_lamp.glb',
      text3DTest: null,
    },
  ]
  return {
    props: { homeLamps },
  }
}
