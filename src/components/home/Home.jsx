import React from 'react';
import imgall from '../../../public/img/allbeers.png';
import imgrand from '../../../public/img/randombeers.png';

const Home = () => {
    
    return (
        <div>
            <h1>Welcome to Best Beer Website.com</h1>
            <h2>Find your favorite beer and discover new tastes</h2>
            <div>
                <img src={imgall} alt={"All beers picture"}/>
                <br></br>
                <img src={imgrand} alt={"Random beers picture"}/>
            </div>
        </div>
    )
}
export default Home;