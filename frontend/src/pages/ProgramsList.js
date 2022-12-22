import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProgramsList() {

    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        getPrograms();
    }, []);

    const getPrograms = async () => {
        const response = await fetch('/api/programs/', {
            'headers': {
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
        });
        const json = await response.json();
        setPrograms(json);
    }

    return (
        <div className="Programs">
            <h1 style={{textAlign: "center"}}>programs</h1>
            {programs.map(program => {
                return (
                <div
                    className="card"
                    style={{margin: "10px 25% 10px 25%"}}
                    key={program.id}
                >
                    <div className="card-body">
                    <Link className="card-title" to={`/programs/${program.id}`}>
                        {program.name}
                    </Link>
                    </div>
                </div>
                );
            })}
        </div>
    );
}

export default ProgramsList;