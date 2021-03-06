import axios from 'axios'


export const getAttraction = (locationId) => {

    return axios({
    "method":"GET",
    "url":"https://tripadvisor1.p.rapidapi.com/attractions/get-details",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
    "x-rapidapi-key":`${process.env.REACT_APP_TRIPADVISOR_API_KEY}`,
    "useQueryString":true
    },"params":{
    "currency":"USD",
    "lang":"en_US",
    "location_id":`${locationId}`
    }
    })
  }

