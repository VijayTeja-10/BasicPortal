import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Button = (props) => {
  return (
    <>
        <Link className={`btn ${props.cls}`} type={props.type} to={props.url}>{props.text}</Link>
    </>
  )
}

export default Button