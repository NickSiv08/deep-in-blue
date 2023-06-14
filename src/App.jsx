import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage'
import VideosPage from './pages/VideosPage'
import Footer from './components/Footer/Footer'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/videos'
          element={
            <div className='flex flex-col items-center'>
              <VideosPage />
            </div>
          }
        />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
