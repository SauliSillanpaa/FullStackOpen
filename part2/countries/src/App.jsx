import { useState, useEffect } from 'react'
import Countries from './components/Countries'
import Finder from './components/Finder'
import countryService from './services/countries'

const App = () => {
  const [countries, setCountries] = useState([])
  //const [countriesToShow, setCountriesToShow] = useState(null)
  const [findCountry, setFindCountry] = useState('')

  useEffect(() => {
    console.log('effect')
    countryService
      .getAll()
      .then(initialCountries => {
        console.log('promise fulfilled')
        setCountries(initialCountries)
      })
  }, [])

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
    console.log('Event find country change', event.target.value)
    setFindCountry(event.target.value)
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
        //countriesToShow={countriesToShow}
        //showCountry={showCountry}
      />
    </div>
  )
}

export default App
