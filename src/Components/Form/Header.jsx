import React from 'react'
import "./header.css"

function Header({setShow, loginShow}) {
  return (
    loginShow && (
      <div className='header'>
          <div>
              <button className='login-button' onClick={()=>setShow(true)}>Login</button>
          </div>
      </div>
    )
  )
}

export default Header
