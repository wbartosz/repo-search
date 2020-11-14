const CustomSelect = (props) => {
  const options = props.options.map((o) => (
    <option key={o.value} value={o.value}>
      {o.description}
    </option>
  ));

  function handleChange(event) {
    props.valueChange(event);
  }

  return (
    <select value={props.value} onChange={handleChange}>
      {options}
    </select>
  )
}

export default CustomSelect;