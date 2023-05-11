import { useBoundStore } from '@/stores/useBoundStore'
import { type LampMenu } from '@/types/types'
import { useState } from 'react'
import { Button } from './Button'
import { Card } from './Card'

export function Lamp() {
  const lamps = useBoundStore((state) => state.lamps)
  const [lampPicked, setlampPicked] = useState<LampMenu>({
    id: 0,
    title: '',
    canvasUrl: '',
    description: 'Chose your favorite lamp',
  })
  const handleLampClick = (lampItem: LampMenu) => {
    setlampPicked((lamp) => ({ ...lamp, ...lampItem }))
  }
  return (
    <Card title="CHOSE A LAMP">
      <ul
        className="w-full relative flex overflow-auto xs:h-40 h-56 items-center  top-0 bottom-0"
        role="list"
        aria-label="list of lamps"
      >
        <li className="absolute flex flex-nowrap gap-8  justify-center items-center xs:gap-4">
          {lamps ? (
            lamps.map((lamp) => {
              return (
                <button
                  onClick={() => handleLampClick(lamp)}
                  key={lamp.id}
                  className="xs:w-28 w-40 aspect-square border border-green-300"
                >
                  {lamp.title}
                </button>
              )
            })
          ) : (
            <h1>loading</h1>
          )}
        </li>
      </ul>

      <div className="mt-8 text-center">
        <Button
          to={`/Photograph/${lampPicked.id}`}
          disabled={!lampPicked.id ? true : false}
        >
          Next step
        </Button>
      </div>
    </Card>
  )
}
