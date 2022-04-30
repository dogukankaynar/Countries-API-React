import {useEffect,useState} from 'react'
import axios from 'axios'


function CountryDocument() {
  const [countCode,SetCountCode]=useState({})
  useEffect(() => {
    axios
    .get("https://restcountries.com/v2/alpha/TR")
    .then((response) => SetCountCode(response.data))
    .catch((error) => console.log(error));
  },[])
  console.log(countCode)
  return (
    <div className="country-menu">
        <h1 className='App-header'>{countCode.name}</h1>
        <img className='country-flag' src={countCode.flag} />
        <span>{countCode.subregion}</span><br/>
        <span>Capital :{countCode.capital}</span>
    </div>
  )
}

export default CountryDocument