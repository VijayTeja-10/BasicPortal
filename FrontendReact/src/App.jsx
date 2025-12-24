import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Register from './components/Register'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Login from './components/Login'
import Authprovider from './components/Authprovider'
import DashBoard from './components/dashboard/DashBoard'
import PrivateRoutes from './components/PrivateRoutes'
import PublicRoutes from './components/PublicRoutes'

function App() {

  return (
    <>
    <Authprovider>
      <BrowserRouter>
        <Header /> {/** Globalizing Header */}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<PublicRoutes> <Register /> </PublicRoutes>} />
          <Route path='/login' element={<PublicRoutes> <Login /> </PublicRoutes>} />
          <Route path='/dashboard' element={<PrivateRoutes> <DashBoard /> </PrivateRoutes>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Authprovider>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter> */}
    </>
  )
}

export default App