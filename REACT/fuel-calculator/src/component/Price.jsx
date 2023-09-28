import axios from 'axios';
import React from 'react'


function Price() {
    const options = {
        method: 'GET',
        url: 'https://daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com/v1/fuel-prices/today/india/kerala',
        headers: {
          'X-RapidAPI-Key': '890eced563mshbef6d4e88c0c2ddp1b8eb3jsndcead849b987',
          'X-RapidAPI-Host': 'daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com'
        }
      };
      
      const vibe= async()=>{
        const response = await axios.request(options);
        console.log(response.data);
   
      }
          vibe()
      
  return (
    <div>Price</div>
  )
}

export default Price