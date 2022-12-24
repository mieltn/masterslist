import { useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import '../Form.css'

function Login() {
    const {loginUser} = useContext(AuthContext)
    return (
        <form onSubmit={loginUser}>
            <div className='form-group'>
                <input
                    className="form-control"
                    placeholder="your email"
                    name="email"
                    type="text"
                />
            </div>
            <div className='form-group'>
                <input
                    className="form-control"
                    placeholder="password"
                    name="password"
                    type="password"
                />
            </div>
            <div className="form-group">new user? create an account <Link to="/register">here</Link></div>
            <button type="submit" className="btn btn-secondary single-btn">login</button>
        </form>
    )
}

export default Login;