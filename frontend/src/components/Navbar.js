import { useContext } from 'react';
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext';

function Navbar() {
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <nav className="navbar navbar-expand bg-light">
            <div className="container-fluid">
                <div className="navbar-nav">
                    <Link className="nav-link" to="/">home</Link>
                    <Link className="nav-link" to="/programs">programs</Link>
                    <Link className="nav-link" to="/programs/new">add program</Link>
                    {user && <Link className="nav-link" onClick={logoutUser}>logout</Link>}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;