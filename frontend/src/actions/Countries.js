import { baseUrl } from "./Urls"

const getCountries = async () => {
    const response = await fetch(`${baseUrl}/api/countries/`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`
        }
    })
    return await response.json()
}

export default getCountries