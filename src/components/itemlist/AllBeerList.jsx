import { useEffect, useState } from 'react';
import BeerItem from '../item/BeerItem';
import Navbar from '../nav/Navbar';
import './AllBeerList.scss';
import {beerApi} from '../../utilities/Utilities'

const AllBeerList = () => {
    const [allBeer, setAllBeer] = useState([]);
    //[] leer weil standardwert

    useEffect(() => {
        fetch(beerApi)
        .then((response) => response.json())
        .then(data => setAllBeer(data))
    }, [])

    return (
        <div className='all_beers'>
            {allBeer.map((info) => 
            <BeerItem 
            key={info._id} 
            id={info._id} 
            image={info.image_url} 
            name={info.name} 
            tagline={info.tagline} 
            first_brewed={info.first_brewed}/>
            )}
            <Navbar/>
        </div>
    )
}
export default AllBeerList;