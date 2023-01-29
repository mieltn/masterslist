import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { createProgram } from '../actions/Programs'
import ChoicesContext from '../context/ChoicesContext'
import '../Form.css'


function AddProgram() {

    const {countries, subjects} = useContext(ChoicesContext)

    const [formData, setFormData] = useState({
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

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const changeCountry = (event) => {
        setFormData({ ...formData, [event.target.name]: countries[event.target.value] })
    }

    const changeSubject = (event) => {
        setFormData({ ...formData, [event.target.name]: subjects[event.target.value] })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        createProgram(formData)
            .then(response => navigate(`/programs/${response.id}`))
    }

    const generateOptions = (option) => {
        return (
            <option key={option.id} value={option.id}>{option.name}</option>
        )
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
            <div className="form-group">
                <input
                    onChange={handleChange}
                    className="form-control"
                    placeholder="university"
                    name="university"
                    value={formData.university}
                />
            </div>
            <div className="form-group" onChange={changeCountry}>
                <select className="form-select" name="country">
                    {countries.map(generateOptions)}
                </select>
            </div>
            <div className="form-group" onChange={changeSubject}>
                <select className="form-select" name="subject">
                    {subjects.map(generateOptions)}
                </select>
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange}
                    className="form-control"
                    placeholder="duration"
                    name="duration"
                    value={formData.duration}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange}
                    className="form-control"
                    placeholder="website"
                    name="website"
                    value={formData.website}
                />
            </div>
            <div className="form-group">
                <textarea
                    onChange={handleChange}
                    className="form-control"
                    placeholder="other details"
                    name="other"
                    value={formData.other}
                />
            </div>
            <button type="submit" className="btn btn-secondary single-btn">save</button>
        </form>
    )
}

export default AddProgram