import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries;
   
    const [visitedCountries, setVisitedCountries] = useState([])
     const [visitedFalgs, setVisitedFalgs] = useState([])

    const handleVisitedCountries = (country) => {

        const newVisitedCountries = [...visitedCountries,  country]
        setVisitedCountries(newVisitedCountries)
    }
    const handleVisitedFlags = (flag) => {
      
        const newVisitedFlags = [...visitedFalgs, flag]
        setVisitedFalgs(newVisitedFlags)

    }
    
    return (
        <div>
<h1>All Countries {countries.length}</h1>
<h2>Total Country Visited: {visitedCountries.length} </h2>
<h3>Total Flags: {visitedFalgs.length}</h3>

 
   <ol>   {
        visitedCountries.map(country => <li>{country.name.common}</li>)
    }
  </ol>
  <div>
    {
        visitedFalgs.map((flags, index) => <img key={index} src={flags}></img> )
    }
  </div>


          <div className='countries-container'> 
            {
                countries.map(country => (
                    <Country key={country.cca3.cca3} country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags} />
                ))
            }
        </div>
            
        </div>
    );
};

export default Countries;