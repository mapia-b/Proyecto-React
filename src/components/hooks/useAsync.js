import { useState, useEffect } from 'react'

export const useAsync = (customHookFunction, dependencies = []) => {
    //estado de datos
    const [data, setData] = useState()
   
    const [loading, setLoading] = useState(true)
    //en caso de error
    const [error, setError] = useState(null)


    //useEffect que se sincronizará al cambiar la dependencia
    useEffect(() => {
        
        setLoading(true)

        customHookFunction()
            .then(result => {
                setData(result)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, dependencies)

    return {
        data, 
        loading,
        error
    }
}