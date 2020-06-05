const axios = require("axios");

export const getNightlife = (locationId) => {
  return axios({
      "method":"GET",
      "url":"https://tripadvisor1.p.rapidapi.com/attractions/list",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"tripadvisor1.p.rapidapi.com",
      "x-rapidapi-key": `${process.env.REACT_APP_TRIPADVISOR_API_KEY}`,
      "useQueryString":true
      },"params":{
      "lang":"en_US",
      "currency":"USD",
      "sort":"ranking",
      "lunit":"km",
      "limit": "1",
      "subcategory":"20",
      "location_id": `${locationId}`
      }
    })

  };