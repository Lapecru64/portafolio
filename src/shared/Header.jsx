
import { Link } from "react-router-dom"

const Header = () => {
    return (
     <header>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <nav>
          <ul>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/skills">My Skills</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
          </ul>
        </nav>
     </header>
    )
}

export default Header;
