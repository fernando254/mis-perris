

function mensaje(){
      
    alerta('hola mundo');
}

function validarNombre() {
    
    var nombre = document.getElementById('txtNombre').value;
    if(nombre.trim().length == 0){
        alerta('nombre vacio');
        return false;

    }
    return true;

}
