import React, { useContext } from 'react'
import { AuthContext } from './Authprovider'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const {isLoggedIn}=useContext(AuthContext)
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to='/login' />
  )
}

export default PrivateRoutes