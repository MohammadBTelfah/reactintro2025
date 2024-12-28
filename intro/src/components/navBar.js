import '../style/nav.css'
import logo from '../logo.svg';

export default function Home(){
    return(
        <>
        <div className='container'>
  <div className='navbar'>
    <div className='logo'>
      <img src={logo} alt="Logo" />
    </div>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact Us</a></li>
    </ul>
  </div>
</div>

        </>
    )
}