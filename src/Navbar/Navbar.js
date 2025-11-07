import { Link } from "react-router-dom";
import "./Navbar.css" 

function Navbar() {
    return (
        <div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Skils">
                        Skills
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Experience">
                        Experience
                    </Link>
                </li>
            </ul>

        </div>
    )
}
export default Navbar;