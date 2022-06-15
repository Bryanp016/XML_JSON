document.getElementById("CargarDatos").addEventListener("click", CargarDatos);
    


    function CargarDatos(){{
        var xhr =new XMLHttpRequest();
        xhr.onreadystatechange=function (){
            if(this.readyState == 4 && this.status == 200){
                cargarXML(this);
            }
        };
        xhr.open("GET", "catalogo.xml", true);
        xhr.send();
        var datos= docXML.getElementsByTagName("estudiante");
        
    }
    function cargarXML(xml){
        var docXML = xml.responseXML;
        var tabla = "<tr><th>APELLIDOS</th><th>NOMBRES</th><th>SEMESTRE</th><th>PARALELO</th><th>DIRECCION</th><th>TELEFONO</th><th>CORREO</th></tr>";
        var datos= docXML.getElementsByTagName("estudiante");
        for(var i=0; i<datos.length; i++){
            tabla += "<tr><td>";
            tabla += datos [i].getElementsByTagName("apellidos")[0].textContent; 
            tabla += "</td><td>";
            tabla += datos [i].getElementsByTagName("nombres")[0].textContent; 
            tabla += "</td><td>";
            tabla += datos [i].getElementsByTagName("semestre")[0].textContent; 
            tabla += "</td><td>";
            tabla += datos [i].getElementsByTagName("paralelo")[0].textContent; 
            tabla += "</td><td>";
            tabla += datos [i].getElementsByTagName("direccion")[0].textContent; 
            tabla += "</td><td>";
            tabla += datos [i].getElementsByTagName("telefono")[0].textContent; 
            tabla += "</td><td>";
            tabla += datos [i].getElementsByTagName("correo_electronico")[0].textContent; 
            tabla += "</td></tr>"; 
        }
        document.getElementById("demo").innerHTML= tabla;
       
    }
    
    }
 
    const conectarXMLMostrar = () => {
        const xmlhttp = new XMLHttpRequest();
        var cod = document.getElementById("estudiante").value;
        xmlhttp.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
            let docXML = this.responseXML;
            let estudiante = docXML.getElementsByTagName("estudiante");
            for (let i = 0; i < estudiante.length; i++) {
              let NombreXML =
                estudiante[i].getElementsByTagName("nombres")[0].textContent;
              let ApellidoXML =
                estudiante[i].getElementsByTagName("apellidos")[0].textContent;
              let completo = `${NombreXML} ${ApellidoXML}`;
              console.log(completo);
              if (completo == cod) {
                console.log(estudiante[i]);
                cargarXML(estudiante[i]);
              }
            }
          }
        };
        xmlhttp.open("GET", "catalogo.xml", true);
        xmlhttp.send();
      };
      const cargarXML = (estudiante) => {
        console.log(estudiante);
        console.log(estudiante.length);
        let tabla = `<tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Semestre</th>
          <th>Paralelo</th>
          <th>Direccion</th>
          <th>Telefono</th>
          <th class="borde-iz-ar">Correo</th>
      </tr>`;
        if (typeof estudiante.length == "undefined") {
          tabla += `
              <tr >
                  <td>${
                    estudiante.getElementsByTagName("nombres")[0].textContent
                  }</td >
                  <td>${
                    estudiante.getElementsByTagName("apellidos")[0].textContent
                  }</td >
                  <td>${
                    estudiante.getElementsByTagName("semestre")[0].textContent
                  }</td>
                  <td class="centar-text">${
                    estudiante.getElementsByTagName("paralelo")[0].textContent
                  }</td>
                  <td>${
                    estudiante.getElementsByTagName("direccion")[0].textContent
                  }</td>
                  <td>${
                    estudiante.getElementsByTagName("telefono")[0].textContent
                  }</td>
                  <td class="no-capitalizar ">${
                    estudiante.getElementsByTagName("correo_electronico")[0].textContent
                  }</td>
              </tr>
          `;
        }
        for (let i = 0; i < estudiante.length; i++) {
          tabla += `
                  <tr>
                      <td class="centar-text ">${i + 1}</td>
                      <td>${
                        estudiante[i].getElementsByTagName("nombres")[0].textContent
                      }</td >
                      <td>${
                        estudiante[i].getElementsByTagName("apellidos")[0].textContent
                      }</td >
                      <td>${
                        estudiante[i].getElementsByTagName("semestre")[0].textContent
                      }</td>
                      <td class="centar-text">${
                        estudiante[i].getElementsByTagName("paralelo")[0].textContent
                      }</td>
                      <td>${
                        estudiante[i].getElementsByTagName("direccion")[0].textContent
                      }</td>
                      <td>${
                        estudiante[i].getElementsByTagName("telefono")[0].textContent
                      }</td>
                      <td class="no-capitalizar ">${
                        estudiante[i].getElementsByTagName("correo_electronico")[0].textContent
                      }</td>
                  </tr>
              `;
        }
        document.getElementById("data").innerHTML = tabla;
      };
      