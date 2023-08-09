import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {beerApi} from '../../utilities/Utilities'

const BeerDetails = () => {
    const [beerDetail, setBeerDetail] = useState({});

    const params = useParams();
    const beerId = params.beerId;
    console.log(params);

    useEffect(() => {
        fetch(`${beerApi}/${beerId}`)
        .then((response) => {
            if(!response.ok) {
                throw new Error("fetch Error details");
            }
            return response.json();
        })
        .then((beerDetailData) => {
            setBeerDetail(beerDetailData);
        })
        .catch((error) => console.log(error.message));
    }, [beerId]);

    return (
        <div>
            <h3>{beerDetail.name}</h3>
            <img src={beerDetail.image_url}/>
            <p>{beerDetail.first_brewed}</p>
            <p>{beerDetail.tagline}</p>
            <p>{beerDetail.description}</p>
            <p>{beerDetail.brewers_tips}</p>
        </div>
    )

}
export default BeerDetails;