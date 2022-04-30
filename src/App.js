import './App.css';
import {useEffect,useState} from 'react'
import axios from 'axios'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  const [countries,setCountries] =useState([])
  // useEffect(() =>{
  //   fetch('https://restcountries.com/v2/all')
  //   .then(response=>response.json())
  //   .then(data=>setCountries(data))
  //   .catch(error=>console.log(error))

  // },[])
  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
    .then(response=>setCountries(response.data))
    .catch(error=>console.log(error))
  },[])
    console.log(countries)
  return (
    <div className="App">
    <h1 className='App-header '>Contries List</h1>
          {
            countries.map((count,i)=>(
              <div className="count" key={i}>{count.name}<img src={count.flag} /></div>
            ))
          }
    </div>
  );
}

export default App;
