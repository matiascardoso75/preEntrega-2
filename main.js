function iniciarCompra(){
    alert("Bienvenido a la tienda de componentes para PC")
    let consulta = confirm("Quieres comprar nuevos componentes para tu PC?")
    if (consulta === true){
        buscarComponente()
    } else{
        alert("Gracias por visitarnos!")
    }
}

iniciarCompra()

function buscarComponente(){
    let seguirBuscando = true
    while(seguirBuscando){
        let categoria = prompt("Que tipo de componente queres comprar? Escriba A para CPU. B para GPU. C para MOTHERBOARD").toUpperCase()
        let componente
        let marca

        switch (categoria.toUpperCase()){

            case 'A':
                componente = "CPU"
                marca = buscarMarca("CPU")
                break

            case 'B':
                componente = "GPU"
                marca = buscarMarca("GPU")
                break
    
            case 'C':
                componente = "MOTHERBOARD"
                marca = buscarMarca("MOTHERBOARD")
                break
            
            default:
                alert("Por favor, digite A para CPU. B para GPU. C para MOTHERBOARD").toUpperCase()
            continue
        }

        alert("Contamos con " + componente + " de la marca " + marca)

        let comprar = confirm("Queres comprar: " + componente + " " + marca + ". Confirmar")

        if(comprar){
            alert("Gracias por comprar!")
            seguirBuscando = false
        } else{
            seguirBuscando = confirm("Queres seguir buscando otros componentes?")
        }
    }
}

function buscarMarca(tipoComponentes) {

    let marcasDisponibles

    switch(tipoComponentes){

        case "CPU":
            marcasDisponibles = ["Intel", "AMD"]
            break

        case "GPU":
            marcasDisponibles = ["RTX", "GTX", "Radeon", "RX"]
            break

        case "MOTHERBOARD":
            marcasDisponibles = ["Gigabyte", "Asus Prime"]
            break

        default:
            marcasDisponibles = []
            break
    }

    let marcaSeleccionada
    let marcaEncontrada = false

    while (!marcaEncontrada){
        marcaSeleccionada = prompt("Has seleccionado " + tipoComponentes + ".  Que tipo de marcas buscas? Tenemos: " + marcasDisponibles.join(", ")).toUpperCase()

        if (!marcasDisponibles.includes(marcaSeleccionada)){
            alert("No contamos con esa marca para " + tipoComponentes)
        } else{
            marcaEncontrada = true
        }
    }

    return marcaSeleccionada
}

function filtrarProductos(){
    let palabraClave = prompt("ingresa tu busqueda").toUpperCase().trim()
    let resultado = lista.filter((x)=>x.marcasDisponibles.toUpperCase().includes(palabraClave))

    if(resultado.lenght > 0){
        console.table(resultado)
    }else{
        alert("no contamos con ese producto")
    }
}


function agregarProducto(){

    let tipoComponente = prompt("ingresa el tipo del componente").toUpperCase
    let nombreComponente = prompt("ingresa el nombre del producto").toUpperCase

    if(tipoComponente=="" || nombreComponente==""){
        alert("ingresa datos valiudos")
        return
    }

    let producto = new Componente (tipoComponente, nombreComponente)

    if(lista.some((x)=>x.marcasDisponibles === producto.nombreComponente) ){
        alert("Ya contamos con ese componente")
        return
    }

    lista.push(producto)
    console.table(lista)
}