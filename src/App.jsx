import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage'
import VideosPage from './pages/VideosPage'
import Footer from './components/Footer/Footer'

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
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
