/* Reto-1 */
console.log("--------------------------------------------------")
var comida = ["","taco","enchiladas","tamal","pozole","barbacoa","guacamole"]
contador = 0
for(let i = 1 ; i < comida.length;i++){
        console.log(comida[i])
}
console.log("--------------------------------------------------")
for(let i=0; i<6;i++){
        if(i == 3){
            console.log(comida[i])
        }
        if(i == 4){
            console.log(comida[i])
        }
}
console.log("--------------------------------------------------")
for(let i=0; i<6;i++){
        let imp = i % 2
        if(imp != 0){
            console.log(comida[i])
        }
}
console.log("--------------------------------------------------")
for(let i=0; i<6;i++){
        let imp = i % 2
        if(imp == 0){
            console.log(comida[i])
        }
}
console.log("--------------------------------------------------")
/* Reto-2 */
for(i = 1 ; i < 101 ; i++ ){
        let dos_2 = i % 3
        let uno_1 = i % 5
        if(uno_1 == 0 && dos_2 == 0){
     console.log(i,"FizzBuzz")
        }
        else if(dos_2 == 0){
            console.log(i,"Fizz")
        }
        else if(uno_1 == 0){
            console.log(i,"Buzz")
        }
        else{
            console.log(i)
        }
    }