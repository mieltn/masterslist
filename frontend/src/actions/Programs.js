import { baseUrl } from "./Urls"

const programsList = async () => {
    const response = await fetch(`${baseUrl}/api/programs/`, {
        'headers': {
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    })
    return await response.json()
}

const getProgram = async (programId) => {
    const response = await fetch(`${baseUrl}/api/programs/${programId}`, {
        'headers': {
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    })
    return await response.json()
}

const createProgram = async (formData) => {
    const response = await fetch(`${baseUrl}/api/programs/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData)
    })
    return await response.json()
}

const updateProgram = async (programId, formData) => {
    const response = await fetch(`${baseUrl}/api/programs/${programId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData)
    })
    return await response.json()
}

const deleteProgram = async (programId) => {
    await fetch(`${baseUrl}/api/programs/${programId}`, {
        'method': 'DELETE',
        'headers': {
            'Authorization': `Token ${localStorage.getItem('token')}`
        },
    })
}

export {
    programsList,
    getProgram,
    createProgram,
    updateProgram,
    deleteProgram,
}