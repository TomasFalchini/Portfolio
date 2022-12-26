
import MoreInfo from './MoreInfo'

interface Props {
  size: 'large' | 'cube' | 'max',
  link: string
}

function Images({ size, link }: Props) {
  
  

  return (
    <div><img src="" alt="" />
      <MoreInfo link={link}  />
    </div>
  )
}

export default Images