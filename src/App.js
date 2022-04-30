import "./App.css";
import CountryList from './component/CountryList'
import CountryDocument from './component/CountryDocument'
import { BrowserRouter as Routes} from "react-router-dom";
function App() {
  return (
  <div className="App">
    <CountryList />
    <CountryDocument />
  </div>
  )
}

export default App;
