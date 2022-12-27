import { useNavigate } from 'react-router-dom'
import '../Form.css'

function Register() {

    const navigate = useNavigate()

    const registerUser = async (event) => {
        event.preventDefault()
        const response = await fetch('/auth/user/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": event.target.email.value,
                "password": event.target.password.value
            })
        })
        if (!response.status === 201) {
            alert({"msg": "failed to register new user"})
        } else {
            navigate('/login')
        }
    }

    return (
        <form onSubmit={registerUser}>
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
            <button type="submit" className="btn btn-secondary single-btn">sign up</button>
        </form>
    )
}

export default Register;