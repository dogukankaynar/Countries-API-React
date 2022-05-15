import "./App.css";
import CountryList from './component/CountryList'
import{useState,useEffect} from 'react'
import Theme from './component/Theme'

function App() {
  const [theme,setTheme]=useState('light')
  useEffect(()=>{
    document.body.className=theme
  },[theme])
  return (
  <div className="App">
    <Theme theme={theme} setTheme={setTheme} />
    <CountryList />
  </div>
  )
}

export default App;
