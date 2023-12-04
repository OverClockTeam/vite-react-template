import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { useRef } from 'react'
import { selectDemoState, selectLoading } from '../../demoSlice'
import { changeState, getState } from '../../service'

const FeatureComponent = () => {
  const dispatch = useAppDispatch()

  const loading = useAppSelector(selectLoading)
  const demoState = useAppSelector(selectDemoState)

  const numberRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <h1>The Demo Component</h1>
      <p>demoState: {demoState}</p>
      <p>{loading && "Loading"}</p>
      <div>
        <button
          onClick={() => {
            dispatch(getState())
          }}
        >
          Get State
        </button>
        <input ref={numberRef} type='number' />
        <button
          onClick={() => {
            if (numberRef.current?.value)
              dispatch(changeState(Number.parseInt(numberRef.current?.value)))
          }}
        >
          Set State
        </button>
      </div>
    </div>
  )
}

export default FeatureComponent
