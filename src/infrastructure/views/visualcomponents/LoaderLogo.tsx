
import s from '../styles/LoaderLogo.module.css'
import imagedark from '../../../images/dark.jpg'

function LoaderLogo() {
  return (
    <div className={s.loader}><img src={imagedark} alt="logo light" /></div>
  )
}

export default LoaderLogo