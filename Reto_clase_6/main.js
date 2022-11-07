const numero1 = document.getElementById("n_1").value
const numero2 = document.getElementById("n_2").value 
const numero3 = document.getElementById("n_3").value 
const form = document.getElementById("form")
const Box = document.getElementById("Box") 
/* ------------------------------------------ */

const block_sum = document.getElementById("boton_1")
const block_rest = document.getElementById("boton_2")
const block_multi = document.getElementById("boton_3")
const block_siv = document.getElementById("boton_4")

/* ------------------------------------------ */
block_sum.addEventListener("click",(e) =>{
    const numero1 = parseInt( document.getElementById("n_1").value)
    const numero2 = parseInt(document.getElementById("n_2").value )
    const numero3 = parseInt(document.getElementById("n_3").value )
    const suma = numero1+numero2+numero3
    Box.innerHTML = `<p>Resultado ${suma}</p>`
    if(numero1 === ""){
        return alert("Ingrese un valor Porfavor")
    }
    if(numero2 === ""){
        return alert("Ingrese un valor Porfavor")
    }
    if(numero3 === ""){
        return alert("Ingrese un valor Porfavor")
    }
})
block_rest.addEventListener("click",(e) =>{
    const numero1 = parseInt( document.getElementById("n_1").value)
    const numero2 = parseInt(document.getElementById("n_2").value )
    const numero3 = parseInt(document.getElementById("n_3").value )
    if(numero1 === ""){
        return alert("Ingrese un valor Porfavor")
    }
    if(numero2 === ""){
        return alert("Ingrese un valor Porfavor")
    }
    if(numero3 === ""){
        return alert("Ingrese un valor Porfavor")
    }
    const resta = numero1-numero2-numero3
    Box.innerHTML = `<p>Resultado ${resta}</p>`

})
block_multi.addEventListener("click",(e) =>{
    const numero1 = parseInt( document.getElementById("n_1").value)
    const numero2 = parseInt(document.getElementById("n_2").value )
    const numero3 = parseInt(document.getElementById("n_3").value )
    if(numero1 === ""){
        return alert("Ingrese un valor Porfavor")
    }
    if(numero2 === ""){
        return alert("Ingrese un valor Porfavor")
    }
    if(numero3 === ""){
        return alert("Ingrese un valor Porfavor")
    }
    const multi = numero1*numero2*numero3
    Box.innerHTML = `<p>Resultado ${multi}</p>`

})
block_siv.addEventListener("click",(e) =>{
    const numero1 = parseInt( document.getElementById("n_1").value)
    const numero2 = parseInt(document.getElementById("n_2").value )
    const numero3 = parseInt(document.getElementById("n_3").value )
    if(numero1 === ""){
        return alert("Ingrese un valor Porfavor")
    }
    if(numero2 === ""){
        return alert("Ingrese un valor Porfavor")
    }
    if(numero3 === ""){
        return alert("Ingrese un valor Porfavor")
    }
    const divicion = numero1/numero2/numero3
    Box.innerHTML = `<p>Resultado ${divicion}</p>`

})
form.addEventListener("submit",(e) => {
    e.preventDefault();
})
