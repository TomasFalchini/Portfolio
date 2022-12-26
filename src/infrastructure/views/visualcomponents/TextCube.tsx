import React from 'react'

interface Props {
  text: string,
  children: React.ReactNode
}

function TextCube({text, children}: Props) {
  return (
    <div>
      {children}
      <div>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default TextCube