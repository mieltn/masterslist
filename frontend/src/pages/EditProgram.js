import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../Form.css'


function EditProgram () {

    const [formData, setFormData] = useState({
        name: "",
        country: "",
        website: ""
    });
    const params = useParams();
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
        const data = await response.json()
        setFormData(data);
    }

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        putData(formData)
            .then(response => navigate(`/programs/${response.id}`))
    }

    const handleCancel = () => {
        navigate(`/programs/${params.id}`)
    }

    const putData = async () => {
        const response = await fetch(`/api/programs/${params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(formData)
        });
        return response.json();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    onChange={handleChange}
                    className="form-control"
                    placeholder="program title"
                    name="name"
                    value={formData.name}
                />
            </div>
            {/* <div className="form-group">
                <input className="form-control" placeholder="university"/>
            </div> */}
            <div className="form-group">
                <input
                    onChange={handleChange}
                    className="form-control"
                    placeholder="country"
                    name="country"
                    value={formData.country}
                />
            </div>
            {/* <div className="form-group">
                <input className="form-control" placeholder="subject"/>
            </div>
            <div className="form-group">
                <input className="form-control" placeholder="duration"/>
            </div> */}
            <div className="form-group">
                <input
                    onChange={handleChange}
                    className="form-control"
                    placeholder="website"
                    name="website"
                    value={formData.website}
                />
            </div>
            {/* <div className="form-group">
                <textarea className="form-control" placeholder="any additional information you might find useful"/>
            </div> */}
            <div className="btn-toolbar">
                <button className="btn btn-light mult-btn" onClick={handleCancel}>cancel</button>
                <button type="submit" className="btn btn-secondary mult-btn">save</button>
            </div>
        </form>
    );
}

export default EditProgram;