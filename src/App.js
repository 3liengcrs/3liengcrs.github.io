import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Header from "./components/Header";
import Add from "./components/Add";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";
import GlobalProvider from "./components/context/GlobalContext";


function App() {
  return (
    <div>
      < GlobalProvider>
      <Header/>
      <Routes>
        <Route path="/" element={ <Watchlist/>}/>
        <Route path="/watched" element={ <Watched/>}/>
        <Route path="/add" element={ <Add/>}/>  
      </Routes>
      </GlobalProvider>
    
    </div>
   
  );
}

export default App;
