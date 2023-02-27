const personal = '{"Nombre":"Lucia","Apellido":"Constantine","Edad":"32","Fecha":"8/4/1990","Telefono":"+54 3743-569715","Correo":"lucia@gmail.com","Direccion":"184 Estrada","Localidad":"Puerto Rico","Provincia":"Misiones","Pais":"Argentina"}';
const objp = JSON.parse(personal);
const exper3 = '{"Empresa":"Banco Santander","Año":"2012-2016","Puesto":"Programador WEB"}';
const obj3 = JSON.parse(exper3);
const exper2 = '{"Empresa":"Grupo Secoex","Año":"2016-2020","Puesto":"Analista de Sistemas de TI"}';
const obj2 = JSON.parse(exper2);
const exper1 = '{"Empresa":"The Whiteam","Año":"2020-Actualidad","Puesto":"Analista de Sistemas"}';
const obj1 = JSON.parse(exper1);
const habil = '{"a":"Interpretación de datos","b":"Control del desarrollo de los sistemas","c":"Configuración de bases de datos","d":"Generación de informes","e":"Pensamiento crítico avanzado"}';
const objh = JSON.parse(habil);

document.getElementById("persona").innerHTML = objp.Nombre+" "+objp.Apellido;
document.getElementById("telefono").innerHTML = " "+objp.Telefono;
document.getElementById("correo").innerHTML = " "+objp.Correo;
document.getElementById("direccion").innerHTML = " "+objp.Direccion+", "+objp.Localidad;

document.getElementById('boton1').addEventListener('click', function(){
    document.getElementById('titulo').innerHTML = "<strong>INFORMACIÓN</strong>";
    document.getElementById('parrafo').innerHTML = "<u>Nombre:</u> "+objp.Nombre+" "+objp.Apellido+"<br>"+"<u>Edad:</u> "+objp.Edad+" años <br>"+"<u>Fecha de Nacimiento:</u> "+objp.Fecha+"<br>"+"<u>Telefono:</u> "+objp.Telefono+"<br>"+"<u>Correo:</u> "+objp.Correo+"<br>"+"<u>Dirección:</u> "+objp.Direccion+", "+objp.Localidad+", "+objp.Provincia+", "+objp.Pais;
});

document.getElementById('boton2').addEventListener('click', function(){
    document.getElementById('titulo').innerHTML = "<strong>EXPERIENCIA</strong>";
    document.getElementById('parrafo').innerHTML = "<i class='bi bi-file-earmark-code-fill'></i>"+" <u>Empresa:</u> "+obj1.Empresa+"<br> <em>("+obj1.Año+") <br>"+obj1.Puesto+"</em> <br><br>"+"<i class='bi bi-file-earmark-code-fill'></i>"+" <u>Empresa:</u> "+obj2.Empresa+"<br> <em>("+obj2.Año+") <br>"+obj2.Puesto+"</em> <br><br>"+"<i class='bi bi-file-earmark-code-fill'></i>"+" <u>Empresa:</u> "+obj3.Empresa+"<br> <em>("+obj3.Año+") <br>"+obj3.Puesto+"</em>";
    document.getElementById('parafo1').innerHTML = " ";
    document.getElementById('parafo2').innerHTML = " ";
});

document.getElementById('boton3').addEventListener('click', function(){
    document.getElementById('titulo').innerHTML = "<strong>HABILIDADES</strong>";
    document.getElementById('parrafo').innerHTML = "<i class='bi bi-arrow-return-right'></i> "+objh.a+"<br>"+"<i class='bi bi-arrow-return-right'></i> "+objh.b+"<br>"+"<i class='bi bi-arrow-return-right'></i> "+objh.c+"<br>"+"<i class='bi bi-arrow-return-right'></i> "+objh.d+"<br>"+"<i class='bi bi-arrow-return-right'></i> "+objh.e;
    document.getElementById('parafo1').innerHTML = " ";
    document.getElementById('parafo2').innerHTML = " ";
});

document.getElementById('boton').addEventListener('click',function(){
    document.getElementById('titulo').innerHTML = "<strong>INFORMACIÓN</strong>";
    document.getElementById('parrafo').innerHTML = "<u>Nombre:</u> "+objp.Nombre+" "+objp.Apellido+"<br>"+"<u>Edad:</u> "+objp.Edad+" años <br>"+"<u>Fecha de Nacimiento:</u> "+objp.Fecha+"<br>"+"<u>Telefono:</u> "+objp.Telefono+"<br>"+"<u>Correo:</u> "+objp.Correo+"<br>"+"<u>Dirección:</u> "+objp.Direccion+", "+objp.Localidad+", "+objp.Provincia+", "+objp.Pais+"<br><br><br>"+"<strong>EXPERIENCIA</strong> <br><br>"+"<i class='bi bi-file-earmark-code-fill'></i>"+" <u>Empresa:</u> "+obj1.Empresa+"<br> <em>("+obj1.Año+") <br>"+obj1.Puesto+"</em> <br><br>"+"<i class='bi bi-file-earmark-code-fill'></i>"+" <u>Empresa:</u> "+obj2.Empresa+"<br> <em>("+obj2.Año+") <br>"+obj2.Puesto+"</em> <br><br>"+"<i class='bi bi-file-earmark-code-fill'></i>"+" <u>Empresa:</u> "+obj3.Empresa+"<br> <em>("+obj3.Año+") <br>"+obj3.Puesto+"</em>"+"<br><br><br><strong>HABILIDADES</strong> <br><br>"+"<i class='bi bi-arrow-return-right'></i> "+objh.a+"<br>"+"<i class='bi bi-arrow-return-right'></i> "+objh.b+"<br>"+"<i class='bi bi-arrow-return-right'></i> "+objh.c+"<br>"+"<i class='bi bi-arrow-return-right'></i> "+objh.d+"<br>"+"<i class='bi bi-arrow-return-right'></i> "+objh.e;
});