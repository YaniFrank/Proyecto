const p = '{"Nombre":"Lucia","Apellido":"Constantine","Edad":"37","Fecha de Nacimiento":"8/4/1985","Telefono":"+54 3743-569715","Correo":"lucia@gmail.com","Direccion":"Estrada","Localidad":"Puerto Rico","Provincia":"Misiones","Pais":"Argentina"}';
const obj = JSON.parse(p);
document.getElementById("persona").innerHTML = obj.Nombre+" "+obj.Apellido;
console.log(obj.Nombre);
document.getElementById("telefono").innerHTML = obj.Telefono;
document.getElementById("correo").innerHTML = obj.Correo;
document.getElementById("direccion").innerHTML = obj.Direccion+", "+obj.Localidad;