import { useState, useEffect } from 'react'

const CountryListItem = ({country, setCountriesToShow}) => {
    return (
        <li>
            {country.name.common}
            <button onClick={() => setCountriesToShow([country])}>Show</button>
            { /* console.log(country)*/ }
        </li>
    )
}

const SingleCountryInfo = ({country, weather}) => {

    return (
        <div>
            <h1>
                {country.name.common}
            </h1>
            <p>
                Capital: {country.capital}
            </p>
            <p>
                Area: {country.area}
            </p>
            <h2>
                Languages
            </h2>
            <ul>
                { /* console.log(country.languages) */ }
                {Object.values(country.languages).map(l => (
                    <li key={l}>{l}</li>
                ))}
            </ul>
            <img src={country.flags.png} style={{ maxWidth: 300, maxHeight: 200, height: 'auto', width: 'auto', display: 'block' }} />
            { /* console.log(country.flags.png) */ }
            <h2>
                Weather in {country.capital}
            </h2>
            <div>
                { /* console.log("weather data is: " + weather) */ }
                <p>Temperature {weather.main.temp} °C</p>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                <p>Wind {weather.wind.speed} m/s</p>
            </div>
        </div>

    )
}

const Countries = ({countriesToShow, setCountriesToShow, weather}) => {
    //console.log("List of countries: ", countries)
    // let countriesToShow = countries.filter(c => c.name.common.toLowerCase().includes(findCountry.toLowerCase()))
    //console.log("Length of country array: ", countriesToShow.length)

    //showCountry('Finland')

    if(countriesToShow.length > 10) {
        return (<div>Too many matches, specify another filter</div>)
    } else if (countriesToShow.length > 1) {
        return (
            <ul>
                {countriesToShow.map(country =>
                    <CountryListItem
                        key={country.name.official}
                        country={country}
                        setCountriesToShow={setCountriesToShow}
                    />
                )}
            </ul>
        )
    } else if (countriesToShow.length === 1) {
        { /* console.log(countriesToShow) */ }
        return (
            <div>
                <SingleCountryInfo country={countriesToShow[0]} weather={weather} />
            </div>
        )
    }
}

export default Countries