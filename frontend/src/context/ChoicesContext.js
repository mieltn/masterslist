import { createContext, useState, useEffect } from 'react'
import getSubjects from '../actions/Subjects';
import getCountries from '../actions/Countries'

const ChoicesContext = createContext()

export default ChoicesContext

export const ChoicesProvider = ({children}) => {

    let [countries, setCountries] = useState([])
    let [subjects, setSubjects] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setCountries([
                {id: 0, name: "-- country --"},
                ...await getCountries()
            ])
            
            setSubjects([
                {id: 0, name: "-- subject --"},
                ...await getSubjects()
            ])
        }
        fetchData()
    }, [])

    const contextData = {
        countries: countries,
        subjects: subjects,
    }

    return (
        <ChoicesContext.Provider value={contextData}>
            {children}
        </ChoicesContext.Provider>
    )
}