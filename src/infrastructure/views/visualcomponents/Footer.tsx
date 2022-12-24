import React from 'react'

interface Props {
  children: React.ReactNode
}


function Footer({children}: Props) {
  return (
    <div>
      <div>
        © 2018 All rights reserved. | Tomás Falchini Portfolio
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Footer