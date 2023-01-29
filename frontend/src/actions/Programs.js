const PROGRAMS_URL = '/api/programs'

const getProgram = async (programId) => {
    const response = await fetch(`${PROGRAMS_URL}/${programId}`, {
        'headers': {
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    })
    return await response.json()
}

const createProgram = async (formData) => {
    const response = await fetch(`${PROGRAMS_URL}/`, {
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
    const response = await fetch(`${PROGRAMS_URL}/${programId}`, {
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
    await fetch(`${PROGRAMS_URL}/${programId}`, {
        'method': 'DELETE',
        'headers': {
            'Authorization': `Token ${localStorage.getItem('token')}`
        },
    })
}

export { getProgram, createProgram, updateProgram, deleteProgram }