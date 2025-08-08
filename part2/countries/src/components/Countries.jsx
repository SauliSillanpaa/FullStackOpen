const CountryListItem = ({country}) => {
    return (
        <li>
            {country.name.common}
        </li>
    )
}

const SingleCountryInfo = ({country}) => {
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
                {console.log(country.languages)}
                {Object.values(country.languages).map(l => (
                    <li key={l}>{l}</li>
                ))}
            </ul>
            <img src={country.flags.png} height="200" width="300"/>
            {console.log(country.flags.png)}
        </div>

    )
}

const Countries = ({countries, findCountry}) => {
    //console.log("List of countries: ", countries)
    let countriesToShow = countries.filter(c => c.name.common.toLowerCase().includes(findCountry.toLowerCase()))
    console.log("Length of country array: ", countriesToShow.length)

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
                    />
                )}
            </ul>
        )
    } else if (countriesToShow.length === 1) {
        {console.log(countriesToShow)}
        return (
            <div>
                <SingleCountryInfo country={countriesToShow[0]} />
            </div>
        )
    }
}

export default Countries