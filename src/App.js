import React from 'react';
import data from "./components/back/Data/Data";
import Header from "./components/front/Header/Header";
import Routes from "./components/front/Routes/Routes";
import{BrowserRouter as Router} from "react-router-dom";

const App = () => {
  const { productItems } = data;
  return (
    <div>
      <Router>
      <Header/>
      <Routes/>
      </Router>
      </div>
  );
}

export default App;