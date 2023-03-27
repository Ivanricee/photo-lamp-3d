import { Layout } from '@/components/Layout'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout title="Photo Lamp 3D">
      <section
        className="relative bg-head-title flex flex-nowrap flex-col h-screen
                   sm:aspect-video sm:flex-wrap sm:flex-row sm:w-screen bg-neonBlue-600                "
      >
        <div
          className="xs:max-h-[10rem] relative flex flex-1 flex-grow-1 items-center w-full max-h-[15rem] px-10
                     sm:3/5"
        >
          <div className="absolute left-0 right-0 top-0 sm:hidden ">
            <Image
              width={500}
              height={310}
              className="w-full"
              quality={100}
              src="https://res.cloudinary.com/ivanrice-c/image/upload/q_50/a_90/v1679549797/Frontend/photo-lamp-3d/1_gkcgii.webp"
              alt="background landing page"
            />
          </div>
          <div className="absolute left-0 right-0 bottom-0 hidden sm:block">
            <Image
              width={310}
              height={500}
              className="h-full"
              quality={100}
              src="https://res.cloudinary.com/ivanrice-c/image/upload/q_100/v1679549797/Frontend/photo-lamp-3d/1_gkcgii.webp"
              alt="background landing page"
            />
          </div>
          <div className="relative z-10">
            <h1 className="xs:text-2xl text-3xl mb-1 font-bold  text-purple-900">
              <span className="font-medium">PHOTO</span> LAMP 3D
            </h1>
            <h2 className="xs:text-xs text-sm mb-5 font-bold  text-purple-900">
              Start Creating your own lamp.
            </h2>
            <p className="xs:text-xs mb-4 text-sm   text-purple-900">
              Transform your favorite photos into unique and custom lamps. You
              can select from a variety of pre-designed 3D frames.
            </p>
            <p className="xs:hidden text-sm  text-purple-900">
              You can preview your photograph in the 3D frame before printing or
              sharing it.
            </p>
          </div>
        </div>
        <div
          className="xs:p-10 xs:min-h-[20rem] relative w-full flex-1 flex-grow-2  flex justify-center items-center min-h-[35rem]
                        sm:2/5"
        >
          <div>
            <p>three js / images sections</p>
          </div>
          <div className="xs:w-1/2 absolute left-0 bottom-0 sm:hidden w-1/3">
            <Image
              width={200}
              height={200}
              className="w-full"
              quality={100}
              src="https://res.cloudinary.com/ivanrice-c/image/upload/q_50/a_90/v1679549797/Frontend/photo-lamp-3d/corner_porvs3.webp"
              alt="background landing page"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
