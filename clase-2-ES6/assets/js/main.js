const alumnos = [
    { nombre: 'Rodrigo Andrade', edad: 23 },    
    { nombre: 'Nayla Arroyo Lizzio', edad: 32 },    
    { nombre: 'Marianela De Martino', edad: 20 },    
    { nombre: 'Axel Julian Dumas Cutuli', edad: 19 },    
    { nombre: 'Martina Franco', edad: 22 },    
    { nombre: 'Agustina Garcia Vega', edad: 24 },    
    { nombre: 'María Agustina Mattioli Pacheco', edad: 19 },
    { nombre: 'Franco Picco', edad: 33 },
    { nombre: 'Alva Ramírez', edad: 27 },
    { nombre: 'Diego Salischiker', edad: 29 }];


// EJERCICO 1
const nombres= alumnos.map(objeto => {
    return objeto.nombre;
});
console.log("Ejercicio 1: ",nombres);

// EJERCICIO 2
const mayor= alumnos.filter(objeto => {
    if (objeto.edad > 25) {return objeto}
});
console.log("Ejercicio 2:",mayor);

// EJERCICIO 3
const riot_games= alumnos.reduce((z,x) => {
    return z+x.edad;
},0);
console.log("Ejercicio 3:",riot_games);

// EJERCICIO 4
const moi= alumnos.find(name => name.nombre=='Franco Picco');
console.log("Ejercicio 4: ",moi);

// EJERCICIO 5
const {nombre,edad} = alumnos[0];
console.log(`Ejercicio 5: El primero en la lista es ${nombre} y tiene ${edad} años`);

// EJERCICIO 6
const Mstarters= alumnos.filter(objeto => {
    if (objeto.nombre.substr(0,1)=='M') {return objeto}
});
console.log("Ejercicio 6: Los alumnos que empiezan con M son", Mstarters);

// EJERCICIO 7
const segundoArray= [...alumnos.map(objeto => {
    objeto.universidad="La maimo"; return objeto
})];
console.log("Ejercicio 7:",segundoArray);

// EJERCICIO 8
const promedio= riot_games/alumnos.length;
console.log ("Ejercicio 8: El promedio de edad es ",promedio);

// EJERCICIO 9-10-11
const getDataWithPromises = () => {fetch('https://api.jikan.moe/v3').then(
    resultado => {
        console.log(resultado.json())
    }).catch(
        err => {
            console.log("Hubo un error, ",err)
        }
    )
}
getDataWithPromises();