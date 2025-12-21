import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Register from './components/Register'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Login from './components/Login'
function App() {

  return (
    <>
    <BrowserRouter>
      <Header /> {/** Globalizing Header */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter> */}
    </>
  )
}

export default App