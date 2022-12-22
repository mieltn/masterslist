import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext';
import '../Form.css'

function Login() {
    let {loginUser} = useContext(AuthContext)
    // const [loginData, setLoginData] = useState({
    //     email: "",
    //     password: ""
    // });
    // const navigate = useNavigate();

    // const handleChange = (event) => {
    //     setLoginData({ ...loginData, [event.target.name]: event.target.value });
    // }

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     postData(loginData)
    //         .then(response => localStorage.setItem('accessToken', response.token))
    //         .then(response => navigate('/'))
    // }

    // const postData = async () => {
    //     const response = await fetch('/auth/login/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(loginData)
    //     });
    //     return response.json();
    // }

    return (
        <form onSubmit={loginUser}>
            <div className='form-group'>
                <input
                    // onChange={handleChange}
                    className="form-control"
                    placeholder="your email"
                    name="email"
                    type="text"
                    // value={loginData.email}
                />
            </div>
            <div className='form-group'>
                <input
                    // onChange={handleChange}
                    className="form-control"
                    placeholder="password"
                    name="password"
                    type="password"
                    // value={loginData.email}
                />
            </div>
            <button type="submit" className="btn btn-secondary single-btn">login</button>
        </form>
    )

    // return (
    //     <form onSubmit={handleSubmit}>
    //         <div className="form-group">
    //             <input
    //                 onChange={handleChange}
    //                 className="form-control"
    //                 placeholder="your email"
    //                 name="email"
    //                 value={loginData.email}
    //             />
    //         </div>
    //         <div className="form-group">
    //             <input
    //                 onChange={handleChange}
    //                 className="form-control"
    //                 placeholder="password"
    //                 name="password"
    //                 type="password"
    //                 value={loginData.password}
    //             />
    //         </div>
    //         <button type="submit" className="btn btn-secondary single-btn">login</button>
    //     </form>
    // );
}

export default Login;