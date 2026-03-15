import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries;
    console.log(countries);
    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountries = (country) => {
        console.log("HELLO", country);
        const newVisitedCountries = [...visitedCountries,  country]
        setVisitedCountries(newVisitedCountries)
    }
    
    return (
        <div>
<h1>All Countries {countries.length}</h1>
<h2>Total Country Visited: {visitedCountries.length} </h2>

 
   <ol>   {
        visitedCountries.map(country => <li>{country.name.common}</li>)
    }
  </ol>


          <div className='countries-container'> 
            {
                countries.map(country => (
                    <Country key={country.cca3.cca3} country={country}
                handleVisitedCountries={handleVisitedCountries} />
                ))
            }
        </div>
            
        </div>
    );
};

export default Countries;