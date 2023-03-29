import { Layout } from '@/components/Layout'

export default function Lamp() {
  return (
    <Layout title="Lamp" header>
      <section
        className="w-full flex flex-col bg-gradient-card-2 rounded-3xl drop-shadow-dark-4xl m-8 p-8 text-center
        xs:m-4 sm:text-left sm:max-w-7xl"
      >
        <h2 className="w-full text-green-200 text-center text-xl">
          CHOSE A LAMP
        </h2>
        <div className="w-full relative flex overflow-auto xs:h-40 h-56 items-center  top-0 bottom-0">
          <div className="absolute flex flex-nowrap gap-8  justify-center items-center xs:gap-4">
            <div className="xs:w-28 w-40 aspect-square border border-green-300"></div>
            <div className="xs:w-28 w-40 aspect-square border border-green-300"></div>
          </div>
        </div>
        <div className="w-full aspect-video border border-green-300"></div>
      </section>
    </Layout>
  )
}
