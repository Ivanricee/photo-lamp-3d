import Image from 'next/image'
import { BTN_TYPE, MENU_SIZE } from '@/const'
import { CarouselLamp, type Lamp } from '@/types/types'
import { ButtonAction } from './ButtonAction'
import { useMenuState } from '@/hooks/useMenuState'

interface Props {
  direction: string
  gap: string
  hasBackground: boolean
  menuItems: Lamp[] | CarouselLamp[] | null
  size: symbol
  type: symbol
}
export function Menu({
  direction,
  gap,
  hasBackground,
  menuItems,
  size,
  type,
}: Props) {
  const { SMALL, LARGE } = MENU_SIZE

  const [stateId, action] = useMenuState({ type })

  //styles default / size
  const styles = {
    bg: hasBackground ? 'bg-green-gray-950' : '',
    [SMALL]: {
      div: 'transition-border duration-300  overflow-hidden rounded-2xl group-hover:rounded-md',
      divDisabled: 'rounded-md',
      image: '',
      p: 'hidden',
      ul: 'flex z-10 left-3 top-4  absolute',
      li: `group w-10 h-10 flex items-center justify-center whitespace-nowrap rounded-lg border
      border-gold-200 text-sm font-medium tracking-wide text-gold-200 transition duration-500
      hover:border-gold-500 hover:text-gold-300 focus:border-gold-600 focus:text-gold-600 focus-visible:outline-none
      drop-shadow-btn-xl-gold hover:drop-shadow-btn-hover-xl-gold focus:drop-shadow-btn-hover-xl-gold`,
      liDisabled: 'border-gold-600  drop-shadow-btn-xl-gold-disabled ',
    },
    [LARGE]: {
      div: ' relative ',
      divDisabled: 'rounded-md',
      image: ' h-[130px] w-[130px] ',
      p: `py-2 font-semibold block absolute bg-gold-300 w-full text-gold-950 -bottom-10 rounded-lg
      transition-all duration-300 ease-out group-hover:bottom-7 group-hover:rounded-sm`,
      ul: 'w-max min-w-full inline-flex w-full justify-evenly xs:h-40 h-56 items-center  ',
      li: `h-[150px] aspect-square overflow-hidden group flex items-center justify-center whitespace-nowrap rounded-lg border
      border-gold-200 text-sm font-medium tracking-wide text-gold-200 transition duration-300
      hover:border-gold-500 hover:text-gold-300 focus:border-gold-600 focus:text-gold-600 focus-visible:outline-none
      drop-shadow-btn-xl-gold hover:drop-shadow-btn-hover-xl-gold focus:drop-shadow-btn-hover-xl-gold`,
      liDisabled: 'border-gold-600 drop-shadow-btn-xl-gold-disabled h-[155px] ',
      imgDisabled: 'h-[135px] w-[135px]',
      pDisabled: 'rounded-sm bottom-7',
    },
  }
  const {
    div,
    divDisabled,
    image,
    p,
    ul,
    li,
    liDisabled,
    imgDisabled,
    pDisabled,
  } = styles[size]

  return (
    <nav className="overflow-auto">
      <ul className={`${ul} ${direction} ${gap} ${styles.bg} `}>
        {menuItems?.map((item) => {
          const { alt, caption, id, img, size } = item

          const isDisabled = stateId === id
          const disabledDivStyle = isDisabled ? divDisabled : ''
          const disabledLIStyle = isDisabled ? liDisabled : ''
          const disabledImgStyle = isDisabled ? imgDisabled : ''
          const disabledPStyle = isDisabled ? pDisabled : ''
          return (
            <li key={id} className={`${li} ${disabledLIStyle} `}>
              <ButtonAction
                action={action}
                id={id}
                disabled={isDisabled}
                type={BTN_TYPE.LAMP}
              >
                <div className={`${div} ${disabledDivStyle}`}>
                  <Image
                    src={img}
                    alt={alt}
                    className={`${image} ${disabledImgStyle}`}
                    width={size}
                    height={size}
                  />
                  <p className={` ${p} ${disabledPStyle} `}>{caption}</p>
                </div>
              </ButtonAction>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
