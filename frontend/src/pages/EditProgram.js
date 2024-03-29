import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProgram, updateProgram } from '../actions/Programs'
import ChoicesContext from '../context/ChoicesContext'
import '../Form.css'


function EditProgram () {

    const {countries, subjects} = useContext(ChoicesContext)

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            setFormData(await getProgram(params.id))
        }
        fetchData()
    }, [])

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

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const changeCountry = (event) => {
        setFormData({ ...formData, [event.target.name]: countries[event.target.value - 1] })
    }

    const changeSubject = (event) => {
        setFormData({ ...formData, [event.target.name]: subjects[event.target.value - 1] })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        updateProgram(params.id, formData)
            .then(response => navigate(`/programs/${response.id}`))
    }

    const handleCancel = () => {
        navigate(`/programs/${params.id}`)
    }

    const generateOptions = (option) => {
        return (
            <option key={option.id} value={option.id}>{option.name}</option>
        )
    }

    const generateSelectedCountry = (option) => {
        if (option.id === formData.country.id) {
            return (
                <option key={option.id} value={option.id} selected>{option.name}</option>
            )
        }
        return generateOptions(option)
    }

    const generateSelectedSubject = (option) => {
        if (option.id === formData.subject.id) {
            return (
                <option key={option.id} value={option.id} selected>{option.name}</option>
            )
        }
        return generateOptions(option)
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
            <div className="form-group">
                <select className="form-select" onChange={changeCountry} name="country">
                    {countries.map(generateSelectedCountry)}
                </select>
            </div>
            <div className="form-group">
                <select className="form-select" onChange={changeSubject} name="subject">
                    {subjects.map(generateSelectedSubject)}
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
            <div className="btn-toolbar">
                <button className="btn btn-light mult-btn" onClick={handleCancel}>cancel</button>
                <button type="submit" className="btn btn-secondary mult-btn">save</button>
            </div>
        </form>
    );
}

export default EditProgram;