
import { Link } from "react-router-dom"
import './style/GeneralHeader.css'



const GeneralHeader = () => {
    

  return (
    <header className="header-nav">
        <h1 className="h1-nav"><Link className="nav-title" to='/'>Hotels <span>App</span></Link></h1>
        <nav className="nav-nav">
            <ul className="nav-ul">
                <li className="nav-li">
                    <Link className="nav-Link" to='/reservation'>Reservations</Link>
                </li>
                <li>
                    <Link  className="nav-Link" to='/register'>Register</Link>
                </li>
                <li>
                    <Link  className="nav-Link" to='/login'>Login</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default GeneralHeader
