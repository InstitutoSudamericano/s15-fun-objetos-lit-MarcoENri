//Crear una función que reciba un objeto literal con nombre y edad de una persona, 
//la función debe validar si la edad aceptado para recibir la vacuna que debe ser 
//para menores a 5 anos o mayor a 65. La salida de la función es un string de
//aceptado y no aceptado.
function validarVacuna(persona) {
    if (!persona || typeof persona !== 'object') {
      return 'No aceptado (datos de persona no válidos)';
    }
  
    if (!persona.nombre || typeof persona.nombre !== 'string' || persona.nombre.trim() === '') {
      return 'No aceptado (nombre inválido)';
    }
  
    if (!persona.edad || typeof persona.edad !== 'number' || persona.edad <= 0) {
      return 'No aceptado (edad inválida)';
    }
  
    if (persona.edad < 5 || persona.edad > 65) {
      return 'Aceptado';
    } else {
      return 'No aceptado (edad no cumple los requisitos)';
    }
  }
  
 
  const persona1 = { nombre: 'Marco', edad: 13 };
  const persona2 = { nombre: 'Cristina', edad: 25 };
  const persona3 = { nombre: 'Pablo', edad: 55 };
  
  console.log(validarVacuna(persona1)); 
  console.log(validarVacuna(persona2)); 
  console.log(validarVacuna(persona3)); 
  