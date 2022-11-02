import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Program() {
    
    const params = useParams();
    const [program, setProgram] = useState([]);

    useEffect(() => {
        getProgram();
    });

    const getProgram = async () => {
        const response = await fetch(`/programs/${params.id}`);
        const data = await response.json();
        setProgram(data);
    }

    return (
        <div className="Program">
            <h1 style={{textAlign: "center"}}>{program.name}</h1>
        </div>
    );
}

export default Program;