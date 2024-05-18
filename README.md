# React + Vite

Directorio de personas, con unos filtros (ciudad, genero, nombre)que permiten seleccionar las personas que aparecen. Para ello vamos a usar un listado de 50 personas con datos aleatorios: https://randomuser.me/api/?results=50. Al hacer click en una persona debe ir a otra pagina para mostrar el detalle de la persona

## Lista de tareas

- instalar dependencia, npm install react-router-dom
- Definir componentes: ListUsers, User, filterbyCity, filterbyGender, filterbyName, DetailUser
- variable de estado: users-> [], gender -> [], city-> "", name -> ""
- Pedir los datos de la API , cuando carga la página
- Pintar los usuarios (recorrer el array de los usuarios coger la info y enviarla por props)
- Filtrar por ciudad (select)-> (obtener las ciudades de los usuarios, pintar las ciudades sin repetir), luego hacer el filtro
- Filtrar por genero (checkbox)-> checkbox, mujer, hombre
- Usando rutas, al clicar en un usuario mostrar la pagina del detalle correspondiente react-router-dom
