const Finder = ({findCountry, handleFindCountry}) => {
  return (
    <div>
      find countries <input
        value={findCountry}
        onChange={handleFindCountry}
      />
    </div>
  )
}

export default Finder