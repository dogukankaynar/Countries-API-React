import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Routes} from "react-router-dom";
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
// const getCountryList
  return (
      <div className="App">
        <h1 className="App-header ">Contries List</h1>
        {
          countries.map((count, i) => (
              <div className="count" key={i}>
                {count.name}
                <img src={count.flag} />
              </div>
            ))
          }
        
      </div>
  );
}
export default CountryList