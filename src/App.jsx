import { HashRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('./pages/Home'))
const CPA = lazy(() => import('./pages/CPA'))

export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cpa" element={<CPA />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}
