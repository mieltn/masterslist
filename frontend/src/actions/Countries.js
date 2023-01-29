const getCountries = async () => {
    const response = await fetch('/api/countries', {
        headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    })
    return await response.json()
}

export default getCountries