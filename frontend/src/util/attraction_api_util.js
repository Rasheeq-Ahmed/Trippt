
import axios from 'axios'



export const getAttractions = (locationId) => {
    return axios({
        "method": "GET",
        "url": "https://tripadvisor1.p.rapidapi.com/attractions/list",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": `${process.env.REACT_APP_TRIPADVISOR_API_KEY}`,
            "useQueryString": true
            }, 
        "params": {
            "lang": "en_US",
            "limit": "3",
            "currency": "USD",
            "sort": "recommended",
            "lunit": "km",
            "location_id": `${locationId}`
            }
        })
        // .then((response) => {
        //     console.log(response)
        // })
        // .catch((error) => {
        //     console.log(error)
    // })

};
