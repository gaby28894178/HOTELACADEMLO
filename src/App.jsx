
import { Route, Routes } from 'react-router-dom'
import './App.css'
import   HomePage  from './pages/HomePage'
import HotelldPage from './pages/HotelldPage'






function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/hotel/:id' element={<HotelldPage />}/>




      </Routes>





    </div>
  )
}

export default App
