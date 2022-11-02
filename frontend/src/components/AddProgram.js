import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddProgram.css'

function AddProgram() {
    const [formData, setFormData] = useState({
        name: "",
        country: "",
        website: ""
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        postData(formData)
            .then(response => navigate(`/programs/${response.id}`))
    }

    const postData = async () => {
        const response = await fetch('/programs/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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
            <button type="submit" className="btn btn-secondary">save</button>
        </form>
    );
}

export default AddProgram;