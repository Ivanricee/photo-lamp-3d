import { Button } from '@/components/Button'
import { Layout } from '@/components/Layout'
import { Landing3DFrames } from '@/components/Three/Landing3DFrame/Index'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout title="Home" header={false}>
      <section
        className="inline-block w-full bg-gradient-card-1 drop-shadow-4xl rounded-3xl m-8 p-8 text-center
      sm:text-left md:max-w-[1024px] overflow-hidden"
      >
        <div
          className="flex flex-wrap justify-center items-center
        xs-m-4 sm:flex-nowrap sm:w-full"
        >
          <div className="w-full px-12 xs:px-4 sm:px-0 sm:pr-8 md:px-16">
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
              You can preview your photograph in the 3D frame before printing or
              sharing it.
            </p>
            <div className="w-full my-8 sm:mb-0">
              <Button to="/Lamp" disabled={false}>
                Start creating your own lamp
              </Button>
            </div>
          </div>
          <div
            className="w-full h-[31rem] flex-grow-1  border border-green-100 rounded-3xl overflow-hidden
          xs:w-full"
          >
            <div className="w-full ">
              <Landing3DFrames />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
