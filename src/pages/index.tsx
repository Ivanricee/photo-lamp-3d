import { Button } from '@/components/Button'
import { Layout } from '@/components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout title="Home" header={false}>
      <section className="sm:max-w-[768px] bg-gradient-card-1 rounded-3xl drop-shadow-4xl m-8 p-8 xs:m-4 text-center sm:text-left">
        <div className="flex flex-wrap justify-center sm:flex-nowrap">
          <div className="w-full px-12 xs:px-4 sm:px-0 sm:w-3/5 sm:pr-16">
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
          <div className="w-4/5 flex-grow-1 aspect-video border border-green-100 xs:w-full sm:w-2/5">
            <p>three js section</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
