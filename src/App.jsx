import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('./pages/Home'))
const CPA = lazy(() => import('./pages/CPA'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p className="text-gray-400">Loading...</p></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cpa" element={<CPA />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
