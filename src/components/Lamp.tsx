import { useBoundStore } from '@/stores/useBoundStore'
import { type Lamp } from '@/types/types'
import { useState } from 'react'
import { Button } from './Button'
import { Card } from './Card'
import { Menu } from './Menu'
import { MENU_SELECT, MENU_SIZE } from '@/const'

export function Lamp() {
  const lamps = useBoundStore((state) => state.lamps)

  const [lampPicked, setlampPicked] = useState<Lamp | null>(null)

  const handleLampClick = (lampItem: Lamp) => {
    setlampPicked((lamp) => ({ ...lamp, ...lampItem }))
  }

  return (
    <Card title="CHOSE A LAMP">
      <Menu
        direction="flex-row"
        gap="gap-3"
        hasBackground={false}
        menuItems={lamps}
        size={MENU_SIZE.LARGE}
        type={MENU_SELECT.LAMP}
      />

      <div className="mt-8 text-center">
        {/*<Button
          to={`/Photograph/${lampPicked.id}`}
          disabled={!lampPicked.id ? true : false}
        >
          Next step
        </Button>*/}
      </div>
    </Card>
  )
}
