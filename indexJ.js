    

document.getElementById('boton').addEventListener('click', obtenerdatos);
function obtenerdatos() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'index.json', true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
        let DatosEstudiante = datos.DatosEstudiante;
            console.log(datos);
            let res = document.querySelector('#res');
            res.innerHTML = '';
            for (let item of DatosEstudiante) {
                res.innerHTML += `<tr>
                <td>${item.apellidos}</td>
                <td>${item.nombres}</td>
                <td>${item.semestre}</td>
                <td>${item.paralelo}</td>
                <td>${item.direccion}</td>
                <td>${item.telefono}</td>
                <td>${item.correo}</td>
                </tr>`;
            }
            var table= document.getElementById("buscar");
            
            table.style.display="block"
            
        }
    };
}

const consultarData = (name, apell) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let respuesta = JSON.parse(xhttp.responseText);
        let DatosEstudiante = respuesta.DatosEstudiante;
        DatosEstudiante.map((estudiante) => {
          if (name === estudiante.nombres && apell === estudiante.apellidos) {
            recibirDato(estudiante);
          }
        });
      }
    };
    xhttp.open("GET", "index.json", true);
    xhttp.send();
  };
  const recibirDato = (estudiante) => {
    const { apellidos, nombres, semestre, paralelo, direccion, telefono, correo } =
      estudiante;
    document.getElementById("datos").innerHTML = `
      <div>
          <p> <strong>Nombre: </strong> ${nombres} ${apellidos} </p> 
          <p> <strong>Mail: </strong> ${correo} </p> 
          <p> <strong>Tefelono: </strong> ${telefono} </p> 
          <p> <strong>Direccion: </strong> ${direccion} </p> 
          <p> <strong>Semestre: </strong> ${semestre} </p> 
          <p> <strong>Paralelo: </strong> ${paralelo} </p> 
      </div>
      `;
  };
  const mostrarError = () => {
    document.getElementById("datos").innerHTML = "<p>404 Not Found</p>";
  };
  