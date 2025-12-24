import React from 'react'
import Button from './Button'
import { AuthContext } from './Authprovider'
import { useContext } from 'react'

const Main = () => {
  const {isLoggedIn,setLoggedIn}=useContext(AuthContext)
  return (
    <>
        <div className='container'>
            <div className='container p-5 text-center bg-light-dark rounded'>
                <h1>This is Demo Portal</h1>
                <p>Your Demo Portal page is ready. It introduces the portal as a safe space for exploring features, testing workflows, and learning through interactive modules. The content highlights key features like a user-friendly interface, secure access, and interactive demos, plus a simple "Getting Started" guide and benefits for new users.</p>
                <div>
                  {isLoggedIn ? (
                  <Button text='Explore Now' cls={'btn-info'} url='/dashboard' />
                ):(
                  <>
                  <Button text={'Login'} cls={'btn-info'} url='/login' />
                </>)}
                </div>
            </div>
        </div>
    </>
  )
}

export default Main