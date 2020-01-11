console.log('hola me falto este mensaje');
// vamos a hacer una suma y devolverla en el console
var a = 10 ;
var b = 20 ;

var suma = a + b;
var resta = a - b;
var multiplicacion = a * b;

function devuelve()
{
document.getElementById("demo suma").innerHTML= suma;
document.getElementById("demo resta").innerHTML= resta;
document.getElementById("demo multiplicacion").innerHTML= multiplicacion;

}