import React from 'react'

interface Props {
  children: React.ReactNode
}

function SectionSideForCube({children}: Props) {
  return (
    <section>
      <div>
        {children}
      </div>
    </section>
  )
}

export default SectionSideForCube