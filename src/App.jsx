
import { Route, Routes } from 'react-router-dom'
import './App.css'
import   HomePage  from './pages/HomePage'
import HotelldPage from './pages/HotelldPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import GeneralHeader from './components/shared/GeneralHeader'
import ReservationPage from './pages/ReservationPage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import FiltradoPage from './components/shared/FiltradoPage'







function App() {

  return (
    <div>

    <div className='container'>
      <GeneralHeader/>

   
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/hotel/:id' element={<HotelldPage />}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route element={<ProtectedRoutes/>}>
              <Route path='/reservation' element={<ReservationPage/>}/>
        </Route>
      </Routes>

      </div>
      <FiltradoPage/>




    </div>
  )
}

export default App
