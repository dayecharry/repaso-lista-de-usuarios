// peticion al servidor
const getDataApi = () => {
  return fetch('https://randomuser.me/api/?results=50')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((item) => {
        return {
          name: item.name.first + ' ' + item.name.last,
          city: item.location.city,
          gender: item.gender,
          image: item.picture.large,
          phone: item.phone,
          id: item.login.uuid,
          email: item.email,
        };
      });
      return cleanData;
    });
};

export default getDataApi;
