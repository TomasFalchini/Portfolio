import React from 'react'

interface Props {
  text: string
}

function NavButton({text}: Props) {
  return (
    <button>{text}</button>
  )
}

export default NavButton