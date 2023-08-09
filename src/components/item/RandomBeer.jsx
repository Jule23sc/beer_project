import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BeerDetails from "./BeerDetails";
import {beerApi} from '../../utilities/Utilities';

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState({});

    useEffect(() => {
        fetch(`${beerApi}/random`)
        .then((response) => {
            if(!response.ok) {
                throw new Error("fetch error random");
            }
            return response.json();
        })
        .then(response => setRandomBeer(response))
        .catch((error) => console.log(error.message));
    }, [])

    return (
        <div>
            <h3>{randomBeer.name}</h3>
            <img src={randomBeer.image_url}/>
            <p>first brewed: {randomBeer.first_brewed}</p>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.description}</p>
            <p>brewers tip: {randomBeer.brewers_tips}</p>
        </div>
    )
}
export default RandomBeer;