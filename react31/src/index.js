import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Header from "./components/Header";
// import FavoriteColor from './component/FavColor';
// import Timer from './component/Timer';
// import Bike from './component/Bike';
// import Scooter from './component/Scooter';
// import List from './component/List';\

import Greetings from './component/ConditionalRendering';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     <Greetings IsLoggedIn={true}/>
    {/*<FavoriteColor/>
    <Timer/>
     <Bike/>
    <Scooter/>
    <List/> */}
  </>
);


