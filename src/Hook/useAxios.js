import axios from "axios";
import React from "react";

export const useAxios = ({url = null, method = null, body = null}) => {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState({});

    const fetchData = async () => {
        try {
            let {data} = await axios({method, body, url})
            setData(data)
            setLoading(false)
            
        } catch (error) {
            console.log(error);
            setError(error)
            setLoading(false)
        }
    }

    React.useEffect(() => {
        if(url && method){
            fetchData()
        }
    },[url,body,method])

    return{
        data,
        loading,
        error
    }
}