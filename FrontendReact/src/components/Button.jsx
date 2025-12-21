import React, { useState } from 'react'

const Button = (props) => {
  return (
    <>
        <a className={`btn ${props.cls}`} type={props.type}>{props.text}</a>
    </>
  )
}

export default Button