

function FilterByGender({ changeGender }) {

    // se ejecuta al  cambiar el checkbox
    const handleChange = (ev) => {
        //ejecuto la funcion que cambia la variable de estado
        changeGender(ev.target.value)
    }
    return (
        <div>
            <input type="checkbox" name="" id="" value="male" onChange={handleChange} /> Hombre
            <input type="checkbox" name="" id="" value="female" onChange={handleChange} /> Mujer
        </div>
    )
}

export default FilterByGender