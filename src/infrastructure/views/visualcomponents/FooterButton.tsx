import React from 'react'

interface Props {
  svg: string,
  link: string
}

function FooterButton({svg, link}: Props) {
  return (
    <a href={link}>
      {svg}
    </a>
  )
}

export default FooterButton