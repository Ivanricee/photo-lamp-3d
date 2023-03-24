import Image from 'next/image'

export function Header() {
  return (
    <header
      className="relative bg-head-title
        flex flex-wrap aspect-square  sm:aspect-video"
    >
      <div className="w-2/3 xs:p-5 p-8">
        <div className="w-[83%]">
          <h1 className="xs:text-xl text-3xl mb-1 font-bold  text-purple-900">
            <span className="font-medium">PHOTO</span> LAMP 3D
          </h1>
          <h2 className="xs:text-xs text-sm mb-7 font-bold  text-purple-900">
            Start Creating your own lamp.
          </h2>
          <p className="xs:text-xs mb-4 text-sm   text-purple-900">
            Transform your favorite photos into unique and custom lamps. You can
            select from a variety of pre-designed 3D frames.
          </p>
          <p className="xs:hidden text-sm  text-purple-900">
            You can preview your photograph in the 3D frame before printing or
            sharing it.
          </p>
        </div>
      </div>
      <div className="absolute left-1/3 right-0 bg-red-900">
        <div>
          <p>three js / images sections</p>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 ">
        <Image
          width={500}
          height={310}
          unoptimized
          className="w-full"
          src="https://res.cloudinary.com/ivanrice-c/image/upload/q_50/a_-90/v1679549797/Frontend/photo-lamp-3d/1_gkcgii.webp"
          alt="background landing page"
        />
      </div>
    </header>
  )
}
