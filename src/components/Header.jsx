import React from 'react'
import webxLogo from '/webx.svg'

export default function Header(){
  return(
    <div>
      <header>
        <div style={{ text-align:left }}>
          <img src={webxLogo} alt="webx logo" style={{ width:60px,padding:10px }}/>
        </div>
      </header>
    </div>
  )
}

export default Header
