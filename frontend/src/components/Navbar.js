import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand bg-light">
      <div className="container-fluid">
        <div className="navbar-nav">
          <Link className="nav-link" to="/">home</Link>
          <Link className="nav-link" to="/programs">programs</Link>
          <Link className="nav-link" to="/programs/new">add program</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;