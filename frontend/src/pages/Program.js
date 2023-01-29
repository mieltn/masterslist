import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../Form.css'
import linkIcon from '../static/icons/link.png'
import { getProgram, deleteProgram } from '../actions/Programs'


function Program() {
    const params = useParams()
    
    const [program, setProgram] = useState({
        name: "",
        university: "",
        country: {
            id: Number,
            name: ""
        },
        subject: {
            id: Number,
            name: ""
        },
        duration: "",
        website: "",
        other: "",
    })
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            setProgram(await getProgram(params.id))
        }
        fetchData()
    }, [])

    const handleEdit = () => {
        const path = window.location.pathname + '/edit'
        navigate(path);
    }

    const handleDelete = async () => {
        await deleteProgram(params.id)
        navigate('/programs')
    }

    return (
        <div className="Program">
            <h1 style={{textAlign: "center"}}>
                {program.name}
                <a href={program.website} target="_blank" rel="noreferrer">
                    <img alt="link-icon" src={linkIcon} width="20" height="20" style={{marginLeft: "10px"}}/>
                </a>
            </h1>
            <h2 style={{textAlign: "center", color: "lightgrey"}}>{program.country.name}</h2>
            <h2 style={{textAlign: "center", color: "lightgrey"}}>{program.subject.name}</h2>
            <p style={{textAlign: "center", paddingTop: "30px"}}>{program.university}</p>
            <p style={{textAlign: "center"}}>{program.duration}</p>
            <p style={{textAlign: "center"}}>{program.other}</p>
            <div className="btn-toolbar">
                <button className="btn btn-danger mult-btn" onClick={handleDelete}>delete</button>
                <button className="btn btn-secondary mult-btn" onClick={handleEdit}>edit</button>
            </div>
        </div>
    )
}

export default Program;