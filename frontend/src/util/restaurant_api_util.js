import axios from 'axios'


export const getRestaurants = (locationId) => {
  return axios({
      "method":"GET",
      "url":"https://tripadvisor1.p.rapidapi.com/restaurants/list",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
      "x-rapidapi-key": `${process.env.REACT_APP_TRIPADVISOR_API_KEY}`,
      "useQueryString":true
      },"params":{
      "lunit":"km",
      "sort": "ranking",
      "limit":"5",
      "min_rating":"5",
      "currency":"USD",
      "lang":"en_US",
      "location_id": `${locationId}`
      }
    })
  // .then((response)=>{
  //   console.log(response)
  // })
  // .catch((error)=>{
  //   console.log(error)
  // })
};