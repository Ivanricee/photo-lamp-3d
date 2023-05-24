import { useCurrentLamp } from '@/hooks/useCurrentLamp'
import { useBoundStore } from '@/stores/useBoundStore'
import { type ProgressBar } from '@/types/types'
import { useEffect, useState } from 'react'
export function ProgressBar() {
  const [progressSteps, setProgressSteps] = useState<ProgressBar[] | null>(null)
  const currentLamp = useCurrentLamp()
  const currentProgressStep = useBoundStore(
    (state) => state.currentProgressStep
  )

  useEffect(() => {
    if (currentLamp) setProgressSteps(currentLamp?.progressBar)
  }, [currentLamp])

  return (
    <section className="w-full flex justify-center">
      <div className="w-max flex-wrap flex flex-col justify-center items-center">
        <div
          className="flex justify-center items-center w-[100px] aspect-square
        border border-green-200 rounded-full text-green-200"
        >
          {currentProgressStep.name}
        </div>

        <ul className="steps">
          {progressSteps?.map((step: ProgressBar) => {
            const isfulfilled =
              step.status === 'fulfilled' ? 'step-primary' : ''
            return (
              <li className={`step ${isfulfilled}`} key={step.id}>
                <p className="text-green-200">{step.name}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
