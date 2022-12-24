import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../Form.css'
import linkIcon from '../static/icons/link.png'


function Program() {
    
    const params = useParams();
    const [program, setProgram] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getProgram();
    }, []);

    const getProgram = async () => {
        const response = await fetch(`/api/programs/${params.id}`, {
            'headers': {
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
        });
        const data = await response.json();
        setProgram(data);
    }

    const handleEdit = () => {
        const path = window.location.pathname + '/edit'
        navigate(path);
    }

    const handleDelete = async () => {
        const response = await fetch(`/api/programs/${params.id}`, {
            'method': 'DELETE',
            'headers': {
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
        })
        navigate('/programs')
    }

    return (
        <div className="Program">
            <h1 style={{textAlign: "center"}}>
                {program.name}
                <a href={program.website}>
                    <img src={linkIcon} width="20" height="20" style={{marginLeft: "10px"}}/>
                </a>
            </h1>
            <h2 style={{textAlign: "center", color: "lightgrey"}}>{program.country}</h2>
            <div className="btn-toolbar">
                <button className="btn btn-danger mult-btn" onClick={handleDelete}>delete</button>
                <button className="btn btn-secondary mult-btn" onClick={handleEdit}>edit</button>
            </div>
        </div>
    );
}

export default Program;