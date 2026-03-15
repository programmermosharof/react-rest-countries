import React, { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    // console.log(country);
    const [visited , setVisited] = useState(false)


    
    return (
        <div className={`country ${visited && 'countryVisited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h4>Name: {country.name.common}</h4>
            <p>Population: {country.population.population}</p>
            <p>area: {country.area.area} {country.area.area > 30000 ? "Big Country": "Small Country"}</p>
            <button onClick={()=> setVisited(!visited)}>{visited ? "Visited" : "Not Visited"}</button>
            
        </div>
    );
};

export default Country;