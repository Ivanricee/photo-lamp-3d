import { Button } from '@/components/Button'
import { Layout } from '@/components/Layout'
import { useState } from 'react'
import { Card } from '@/components/Card'
type MenuLamp = {
  id: number | null
  title: string | null
  canvasUrl: string | null
  description: string
}

interface Props {
  menuOfLamps: MenuLamp[]
}
/**

 */
export default function Lamp({ menuOfLamps }: Props) {
  const [lampPicked, setlampPicked] = useState<MenuLamp>({
    id: null,
    title: null,
    canvasUrl: null,
    description: 'Chose your favorite lamp',
  })
  const handleLampClick = (lampItem: MenuLamp) => {
    setlampPicked((lamp) => ({ ...lamp, ...lampItem }))
  }

  return (
    <Layout title="Lamp" header={true}>
      <Card title="CHOSE A LAMP">
        <ul
          className="w-full relative flex overflow-auto xs:h-40 h-56 items-center  top-0 bottom-0"
          role="list"
          aria-label="list of lamps"
        >
          <li className="absolute flex flex-nowrap gap-8  justify-center items-center xs:gap-4">
            {menuOfLamps.map((lamp) => {
              return (
                <button
                  onClick={() => handleLampClick(lamp)}
                  key={lamp.id}
                  className="xs:w-28 w-40 aspect-square border border-green-300"
                >
                  {lamp.title}
                </button>
              )
            })}
          </li>
        </ul>
        <div
          className="w-full aspect-video border border-green-300"
          aria-label="canvas 3D lamp"
        >
          {lampPicked.description}
        </div>
        <div className="mt-8 text-center">
          <Button
            to={`/Photograph/${lampPicked.id}`}
            disabled={!lampPicked.id ? true : false}
          >
            Next step
          </Button>
        </div>
      </Card>
    </Layout>
  )
}

export async function getServerSideProps() {
  const menuOfLamps: MenuLamp[] = await [
    {
      id: 1,
      title: 'marco tipo red social',
      canvasUrl: 'img provisional 1',
      description: 'a',
    },
    {
      id: 2,
      title: 'frame crystal',
      canvasUrl: 'img provisional 2',
      description: 'b',
    },
  ]
  return {
    props: {
      menuOfLamps,
    },
  }
}
