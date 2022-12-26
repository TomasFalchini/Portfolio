import React, { useState } from 'react'
import SkillIcon from '../visualcomponents/SkillIcon';

interface State {
  see: boolean
}

const Stars: string[] = ['REACT', 'TYPESCRIPT', 'MONGO DB', 'EXPRESS'];
const AllSkills: string[] = ['REACT', 'TYPESCRIPT', 'MONGO DB', 'EXPRESS', 'NODE.JS', 'FIREBASE', 'TAILWIND', 'POSTGRESQL', 'REDUX', 'JEST', 'JAVASCRIPT', 'GIT', 'GITHUB', 'HTML', 'CSS'];


function TechSkills() {

  const [seeMore, setSeeMore] = useState<State['see']>(false)

  const handleOpen = () => {
    setSeeMore(!seeMore)
  }

  if (!seeMore) {
    return (
      <div>
      <div>
        {Stars.map((el) => {
          return <SkillIcon skill={el} />
        })}
        </div>
        <div>
          <button onClick={handleOpen}>See All</button>
        </div>
        </div>
    )
  }
  else {
    return (
      <div>
      <div>
        {AllSkills.map((el) => {
          return <SkillIcon skill={el} />
        })}
        </div>
        <div>
          <button onClick={handleOpen}>Close</button>
        </div>
        </div>)
  }

}

export default TechSkills