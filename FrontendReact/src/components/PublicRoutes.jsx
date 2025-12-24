import React, { useContext } from 'react'
import { AuthContext } from './Authprovider'
import { Navigate } from 'react-router-dom'

const PublicRoutes = ({children}) => {
  const {isLoggedIn}=useContext(AuthContext)
    return !isLoggedIn ? (
      children
    ) : (
      <Navigate to='/dashboard' />
    )
}

export default PublicRoutes