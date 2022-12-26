
import { Link } from 'react-router-dom'



interface Props {
  link: string
}

function MoreInfo({link}: Props) {
  return (
    <Link to={link}>
    <div>
      
      </div>
    </Link>
  )
}

export default MoreInfo