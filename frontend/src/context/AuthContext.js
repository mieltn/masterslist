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

    let loginUser = async (event) => {
        event.preventDefault()
        const response = await fetch('/auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: event.target.email.value, password: event.target.password.value})
        })
        const data = await response.json()
        if (!response.ok) {
            alert(JSON.stringify({'msg': 'failed to authenticate user'}))
        } else {
            setAuthToken(data.token)
            setUser(data.user)
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
            navigate('/')
        }
    }

    let logoutUser = async () => {
        const response = await fetch('/auth/logout/', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`,
            }
        })
        if (response.status !== 204) {
            alert(JSON.stringify({"msg": "failed to logout user"}))
        } else {
            setAuthToken(null)
            setUser(null)
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            navigate('/login')
        }
    }

    const contextData = {
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