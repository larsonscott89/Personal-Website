import Nav from './Nav'
import HeaderImg from '../assets/Header Banner.png'

export default function Header() {
  return (
    <div className='header'>
      <div className='header-img'>
        <img src={HeaderImg}/>
        <Nav />
      </div>
    </div>
  )
}