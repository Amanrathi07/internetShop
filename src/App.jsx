import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Allcards from "./components/Allcards";
import  {data}  from "./data";

function App() {
  const [prodName, setProdName] = useState("");
  const [filtrData, setFiltrData] = useState(data);

  function searchName(e){
    e.preventDefault();
    let newData = data.filter((item) => (item.title.toLocaleLowerCase().includes(prodName.toLocaleLowerCase()))
    );
    setFiltrData(newData);
    setProdName("");
  }

  function nameChange(event){   
    setProdName(event.target.value);
  }


  ;
  
  return (
    <div className="app">
      <div className="navBar">
          <div><h1>internetShop</h1></div>
          <form>
          <input type="text" placeholder="name...." className="searchBar" value={prodName} onChange={nameChange}/>
          <button onClick={searchName} className="searchBtn">search</button>
          </form>
      </div>
      <Allcards data={filtrData}  />      
    </div>
  );
}

export default App;
