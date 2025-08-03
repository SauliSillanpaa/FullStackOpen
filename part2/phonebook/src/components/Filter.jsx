const Filter = ({findName, handleFindNameChange}) => {
  return (
    <div>
      filter shown with <input
        value={findName}
        onChange={handleFindNameChange}
      />
    </div>
  )
}

export default Filter