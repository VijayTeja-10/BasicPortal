import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <a className='navbar-brand text-light' href="">Demo Portal</a>
            <div>
                <Button text={'Login'} cls={'btn-info'}  />
                &nbsp;
                <Button text={'Register'} cls={'btn-outline-info'} />
            </div>
        </nav>
    </>
  )
}

export default Header