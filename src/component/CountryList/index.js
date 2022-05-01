import { useEffect, useState } from "react";
 import Count from './Count'
import axios from "axios";
function CountryList() {
const [countries,setCountries]=useState([])
const [countFlag,setCountFlag]=useState('')
const [capital,setCapital]=useState('')
const [subregion,setSubregion]=useState('')
const [name,setName]=useState('')

  // useEffect(() =>{
  //   fetch('https://restcountries.com/v2/all')
  //   .then(response=>response.json())
  //   .then(data=>setCountries(data))
  //   .catch(error=>console.log(error))

  // },[])

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
      <div className="country">
      <div style={{marginTop:'5em'}}>
        <h1 className="App-header ">Contries List</h1>
        <div className="country-list" >
        {
          
          countries.map((count)=>(
            <div className='count' onClick={()=>{
             setCountFlag(count.flag);
              setName(count.name);
              setCapital(count.capital);
              setSubregion(count.subregion)
              }} key={count.alpha3Code}>{count.name} <img src={count.flag} /></div>
          ))
         
        }
        </div>
        </div>
        
        <Count name={name} flag={countFlag} capital={capital} subregion={subregion} />
        
      
      </div>
  );
}





export default CountryList
