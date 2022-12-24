import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

function Home() {
    let {user} = useContext(AuthContext)
    return (
        <div className="Home">
            <h1 style={{textAlign: "center"}}>home</h1>
            {user &&
                <p style={{textAlign: "center"}}>
                    you logged in to masterslist as {user.email}
                </p>
            }
        </div>
    );
}

export default Home;