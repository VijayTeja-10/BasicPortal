import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <Link className='navbar-brand text-light' to="/">Demo Portal</Link>
            <div>
                <Button text={'Login'} cls={'btn-info'} url='/login' />
                &nbsp;
                <Button text={'Register'} cls={'btn-outline-info'} url='/register' />
            </div>
        </nav>
    </>
  )
}

export default Header