
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ConsultingPage from './pages/ConsultingPage'
import HomePage from './pages/HomePage'
import VideosPage from './pages/VideosPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consulting" element={<ConsultingPage />} />
        <Route path="/videos" element={<VideosPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
