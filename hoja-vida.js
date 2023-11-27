//Crear variables con diferentes tipos de datos (number, string, array, objetos literales) para almacenar información de una persona, 
//pasar estos como parámetros de una función, que imprimirá en pantalla usando un template string con backcstick (``).



function hojadevida(nombre, edad, direccion, experienciaLaboral, educacion, habilidades) {
    
    let hv = `
      Nombre: ${nombre}
      Edad: ${edad}
      Dirección: ${direccion}
      
      Experiencia Laboral:
      ${experienciaLaboral.join('\n')}
      
      Educación:
      ${educacion.join('\n')}
      
      Habilidades:
      ${habilidades.join(', ')}
    `;
  
    return hv;
  }
  

  const mihv = hojadevida(
    "Marco Enriquez Vinicio Remache",
    18,
    "Calle Tobogan, Cuenca",
    ["Desarrollador Web",],
    ["Grado en Ingeniería Informática", "Máster en Desarrollo de Software"],
    ["JavaScript", "HTML", "CSS", "Python"]
  );
  
  console.log(mihv);


  
