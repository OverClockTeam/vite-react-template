import { ReactNode, Suspense } from 'react'

const lazyLoad = (children: ReactNode) => {
  return <Suspense fallback={<div>Loading</div>}>{children}</Suspense>
}

export default lazyLoad
