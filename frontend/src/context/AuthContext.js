import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    let [authToken, setAuthToken] = useState(
        localStorage.getItem('token') ? localStorage.getItem('token') : null
    )
    let [user, setUser] = useState(
        localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
    )
    const navigate = useNavigate()

    let loginUser = async (e) => {
        e.preventDefault()
        console.log('form submitted')
        let response = await fetch('auth/login/', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify({'email': e.target.email.value, 'password': e.target.password.value})
        })
        let data = await response.json()
        console.log(data)
        if (response.ok) {
            setAuthToken(data.token)
            setUser(data.user)
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
            navigate('/')
        } else {
            alert(JSON.stringify({'msg': 'failed to authenticate user'}))
        }
    }

    let logoutUser = async () => {
        fetch('auth/logout/', {
            'method': 'POST',
            'headers': {
                'Authorization': `Token ${localStorage.getItem('token')}`,
            },
        })
        .then(setAuthToken(null))
        .then(setUser(null))
        .then(localStorage.removeItem('token'))
        .then(localStorage.removeItem('user'))
        .then(navigate('/login'))
    }

    let contextData = {
        user: user,
        loginUser: loginUser,
        logoutUser: logoutUser,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}