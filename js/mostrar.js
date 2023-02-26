const personal = '{"Nombre":"Lucia","Apellido":"Constantine","Edad":"37","Fecha":"8/4/1985","Telefono":"+54 3743-569715","Correo":"lucia@gmail.com","Direccion":"Estrada","Localidad":"Puerto Rico","Provincia":"Misiones","Pais":"Argentina"}';
const objp = JSON.parse(personal);
const exper1 = '{"Empresa":"Grupo Secoex","Año":"2016-2020","Puesto":"Analista de Sistemas de TI"}';
const obj1 = JSON.parse(exper1);
const exper2 = '{"Empresa":"The Whiteam","Año":"2020-Actualidad","Puesto":"Analista de Sistemas"}';
const obj2 = JSON.parse(exper2);
const habil = '{"a":"Interpretación de datos","b":"Control del desarrollo de los sistemas","c":"Configuración de bases de datos","d":"Generación de informes","e":"Pensamiento crítico avanzado"}';
const objh = JSON.parse(habil);

document.getElementById("persona").innerHTML = objp.Nombre+" "+objp.Apellido;
document.getElementById("telefono").innerHTML = " "+objp.Telefono;
document.getElementById("correo").innerHTML = " "+objp.Correo;
document.getElementById("direccion").innerHTML = " "+objp.Direccion+", "+objp.Localidad;

document.getElementById('boton1').addEventListener('click', function(){
    document.getElementById('parrafo').innerHTML = "Nombre: "+objp.Nombre+" "+objp.Apellido+"<br>"+"Edad: "+objp.Edad+" años  "+"Fecha de Nacimiento: "+objp.Fecha+"<br>"+"Telefono: "+objp.Telefono+"<br>"+"Correo: "+objp.Correo+"<br>"+"Dirección: "+objp.Direccion+", "+objp.Localidad+", "+objp.Provincia+", "+objp.Pais;
});

document.getElementById('boton2').addEventListener('click', function(){
    document.getElementById('parrafo').innerHTML = "> Empresa: "+obj1.Empresa+"<br> ("+obj1.Año+") <br>"+obj1.Puesto+"<br><br>"+"> Empresa: "+obj2.Empresa+"<br> ("+obj2.Año+") <br>"+obj2.Puesto;
});

document.getElementById('boton3').addEventListener('click', function(){
    document.getElementById('parrafo').innerHTML = "* "+objh.a+"<br>"+"* "+objh.b+"<br>"+"* "+objh.c+"<br>"+"* "+objh.d+"<br>"+"* "+objh.e;
});