import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Finder from './components/Finder'
import countryService from './services/countries'
import weatherService from './services/weather'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const [findCountry, setFindCountry] = useState('')
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // console.log('effect')
    countryService
      .getAll()
      .then(initialCountries => {
        console.log('promise fulfilled')
        setCountries(initialCountries)
      })
  }, [])

  useEffect(() => {
    // console.log('effect run, weather is now', weather)
    // console.log("Countries to show: " + countriesToShow)

    if(countriesToShow.length > 0) {
        // console.log("Singe country is: " + countriesToShow[0])

        const city = countriesToShow[0].capital
        weatherService
          .get(city)
          .then(data => {
            setWeather(data)
          })
    }
  }, [countriesToShow])

  /*
  const showCountry = (name) => {
    console.log('Choosing to show ', name)
    countryService
      .getOne(name)
      .then(selectedCountry => {
        setCountryToShow(selectedCountry)
      })
    console.log(countryToShow)
  }
    */

  const handleFindCountry = (event) => {
    // console.log('Event find country change', event.target.value)
    setFindCountry(event.target.value)
    // console.log("find countries is: " + event.target.value.toLowerCase())
    setCountriesToShow(countries.filter(c => c.name.common.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  return (
    <div>
      <Finder
        findCountry={findCountry}
        handleFindCountry={handleFindCountry}
      />
      <Countries
        countries={countries}
        findCountry={findCountry}
        countriesToShow={countriesToShow}
        setCountriesToShow={setCountriesToShow}
        weather={weather}
      />
    </div>
  )
}

export default App
