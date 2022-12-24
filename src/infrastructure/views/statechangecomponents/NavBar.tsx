import React from 'react'
import NavButton from '../visualcomponents/NavButton'

const buttons : Array<string> = ['Home', 'About', 'Skills', 'Portfolio', 'Services', 'Contact']

function NavBar() {

  const changeColor = () => {
    
  }

  return (
    <nav onScroll={changeColor}>
      <div>
        {buttons.map((el) => {
          return <NavButton text={el}/>
        })}
      </div>
    </nav>
  )
}

export default NavBar