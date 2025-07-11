import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Header from "./components/Header";
import FavoriteColor from './component/FavColor';
import Bike from './component/Bike';
import Scooter from './component/Scooter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FavoriteColor/>
    <Bike/>
    <Scooter/>
  </React.StrictMode>
);


