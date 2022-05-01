import { useEffect, useState } from "react";
import axios from "axios";
function CountryList() {
const [countries,SetCountries]=useState([])
  // useEffect(() =>{
  //   fetch('https://restcountries.com/v2/all')
  //   .then(response=>response.json())
  //   .then(data=>setCountries(data))
  //   .catch(error=>console.log(error))

  // },[])
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => SetCountries(response.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(countries);
  return (
      <div className="country-list">
        <h1 className="App-header ">Contries List</h1>
        {
          countries.map((count)=>(
            <div className='count' key={count.alpha3Code}>{count.name} <img src={count.flag} /></div>          
          ))
        }
        
      </div>
  );
}


export default CountryList
