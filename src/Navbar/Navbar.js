import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Skills
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Experience
                    </a>
                </li>
            </ul>

        </div>
    )
}
export default Navbar;