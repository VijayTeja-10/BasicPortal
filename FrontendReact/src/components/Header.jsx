import React, { useContext } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { AuthContext } from './Authprovider'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const {isLoggedIn,setLoggedIn}=useContext(AuthContext)
  const Navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setLoggedIn(false)
    Navigate('/login')
  }

  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <Link className='navbar-brand text-light' to="/">Demo Portal</Link>

            <div>
                {isLoggedIn ? (
                  <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                ):(
                  <>
                  <Button text={'Login'} cls={'btn-info'} url='/login' />
                  &nbsp;
                  <Button text={'Register'} cls={'btn-outline-info'} url='/register' />
                </>)}
            </div>
        </nav>
    </>
  )
}

export default Header