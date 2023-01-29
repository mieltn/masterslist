const getSubjects = async () => {
    const response = await fetch('/api/subjects', {
        headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    })
    return await response.json()
}

export default getSubjects