/* ------------------------------------------------------------------------- */
/* Reto_1 */
/* ------------------------------------------------------------------------- */
const flechaResta = (n1 , n2) =>{
    resta = n1 - n2 
    return resta
}
flechaResta(3,6)

/* ------------------------------------------------------------------------- */
const flechaMultiplicacion = (n1 , n2) =>{
    multiplicacion = n1 - n2 
    return multiplicacion
}
flechaMultiplicacion(2,3)

/* ------------------------------------------------------------------------- */
/* Reto_2 */
/* ------------------------------------------------------------------------- */
n1 = prompt("ingrese la base de la figura")
n2 = prompt("ingrese la altura de la figura")
function areas(n1,n2){
    let areaTriangulo = n1 * n2 / 2
    let areaRectangulo = n1 * n2
    let Cadrado = n1 * n2 
    let areaCuadrado = Cadrado**2
    return areaTriangulo , areaRectangulo , areaCuadrado
}