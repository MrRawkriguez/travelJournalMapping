import './Header.css'
import logo from '../images/globe.png'

function Header() {
    return (
        <header className='header'>
            <img src={logo} className="logo" alt="logo" />
            <span className='header-text'>my travel journal</span>
        </header>
    )
}

export default Header