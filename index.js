fetch('https://reqres.in/api/users?page=2') // * FETCH EL CUAL TRAE LA INFO GRACIAS AL ?page=2 TRAE LOS USUARIOS DE LA PAGINA 2 DE SU API
  .then(response => response.json()) // * CUANDO TRAIGA LA INFO LO TRANSFORMA EN UN .JSON
  .then(usuario => { // * CUANDO LO TRANSFORME EL .JSON HACE LA LOGICA DE ABAJO TOMANDO EL .JSON COMO "DATA"
    const container = document.getElementById('container'); // * CREA UNA CONSTANTE LLAMADA CONTAINER QUE ES EL DOCUMENTO CON EL ID "container"
    console.log(usuario)
    usuario.data.forEach(user => { // * POR CADA USUARIO => , si se quiere mostrar un numero especifico de usuarios se usa slice(0, 5).forEach, esto mostraria los primeros 5 usuarios, mientras que (-3) mostraria los ultimos 3
      const userElement = document.createElement('div'); // * CREA UN DIV VACIO 
      userElement.classList.add('user'); // * LE AGREGA LA CLASE USER A ESE USUARIO
      userElement.innerHTML = `
        <h3>${user.first_name} ${user.last_name}</h3>
        <p>Email: ${user.email}</p>
        <img src="${user.avatar}" alt="Avatar">
      `;
      container.appendChild(userElement); // * METE TODO ESE DIV DENTRO DEL CONTENEDOR ANTERIOR
    });
  })
  .catch(error => { // * SI HAY UN ERROR LO INFORMA
    console.log('Ha ocurrido un error:', error); 
});
