import React from "react";
import { Routes, Route } from "react-router-dom";
import Decorates from "./Components/Decorates";
import Electricals from "./Components/Electricals";
import Grocery from "./Components/Grocery";

import Home from "./Components/Home";
import LastPage from "./Components/LastPage";




function App() {


  
  return (
    <>
     <Routes>
        <Route path="/decorates" element={<Decorates/>} />
        <Route path="/electricals" element={<Electricals/>} />
        <Route path="/grocery" element={<Grocery/>} />
        <Route path="/lastPage" element={<LastPage/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    
    </>
    
  );
}

export default App;
