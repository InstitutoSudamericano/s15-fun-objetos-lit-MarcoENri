//Crear un array con objetos literales, pasar a una funcion como parametro e imprimir la infomracion 
//en pantalla cada elemento del array.
//ejemplo:
//const estudiantes = [{nombre: "Juan", edad: 34},{nombre: "Luis", edad: 25}];
//Salida:
//Mi nombre es Juan y tengo 34 anios
//Mi nombre es Luis y tengo 25 anios
//Nota: Usar FOR

const estudiantes = [{ nombre: "Juan", edad: 34 }, { nombre: "Luis", edad: 25 }];

function informacion(estudiantes) {
  for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    console.log(`Mi nombre es ${estudiante.nombre} y tengo ${estudiante.edad} años`);
  }
}


informacion(estudiantes);

