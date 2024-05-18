import { useEffect, useState } from "react";
import getDataApi from "../services/api";
import ListUsers from "./Users/ListUsers/ListUsers";
import FilterByCity from "./Filters/FilterByCity/FilterByCity";
import FilterByGender from "./Filters/FilterByGender/FilterByGender";
import { Route, Routes } from "react-router-dom";
import DetailUser from "./Users/Detail/DetailUser";

function App() {
  const [users, setUsers] = useState([]); //array de usuarios
  // valores de los filtros
  const [city, setCity] = useState("all"); //string, madrid o vigo
  const [gender, setGender] = useState([]) //female y male

  // ejecuta 1 sola vez cuando carga la página
  useEffect(() => {
    //pedir los datos a la API
    getDataApi().then((cleanData) => {
      setUsers(cleanData)
    })
  }, [])

  const getCities = () => {
    const cities = users.map((user) => user.city)
    const citiesUnique = new Set(cities)
    const arrayCities = [...citiesUnique];
    return arrayCities
  }

  //cambia la variable de estado gender
  const changeGender = (value) => {
    //si el genero la ya esta en la variable de estado 
    if (gender.includes(value)) {
      //elimino el genero que ya se encuentra en el array
      //filtro retorna todos los generos  diferentes del clicado
      const genders = gender.filter((item) => item !== value)
      // modifico la variable de estado
      setGender(genders)
    } else {
      // añadir el genero clicado que no esta en el array
      setGender([...gender, value])
    }
  }
  const filterUsers = users.filter((user) => {
    if (city === "all") {
      return true; // return user-> retornar todos lo elementos del array
    } else {
      return user.city === city
    }
  }).filter((user) => {
    if (gender.length === 0) {
      return true
    } else {
      return gender.includes(user.gender)
    }
  })
  return (

    <div>
      <h1> Listado de usuarios</h1>

      <Routes>
        <Route path="/" element={
          <>
            <FilterByCity cities={getCities()} setCity={setCity} />
            <FilterByGender changeGender={changeGender} />
            <ListUsers users={filterUsers} />
          </>
        } />
        <Route path="/detail/:idUser" element={<DetailUser data={users} />} />
      </Routes>



    </div>

  );
}

export default App;
