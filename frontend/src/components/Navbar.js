import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function Navbar() {
    let {user, logoutUser} = useContext(AuthContext);
    return (
        <nav className="navbar navbar-expand bg-light">
            <div className="container-fluid">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link">home</Link>
                    <Link  to="/programs" className="nav-link">programs</Link>
                    <Link to="/programs/new" className="nav-link">add program</Link>
                    {user && <Link to="/login" className="nav-link" onClick={logoutUser}>logout</Link>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;