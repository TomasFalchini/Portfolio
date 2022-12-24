import React from 'react'


interface Props {
  title: string,
  index: number,
  color: string
}

function DinamicCube({title, index, color}: Props) {
  return (
    <div>
      <div>
        {index}
      </div>
      <div>
        {title}
      </div>
    </div>
  )
}

export default DinamicCube