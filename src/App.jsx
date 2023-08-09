import './App.scss'
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import AllBeerList from './components/itemlist/AllBeerList';
import BeerDetails from './components/item/BeerDetails';
import Navbar from './components/nav/Navbar';
import RandomBeer from './components/item/RandomBeer';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/beers" element={<AllBeerList/>}/>
      <Route path="/beers/details/:beerId" element={<BeerDetails/>}/>
      <Route path="/random" element={<RandomBeer/>}/>
      </Routes>
    </>
  )
}

export default App;