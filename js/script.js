var a = parseFloat(prompt("Numero: "));
var s = 1;
for (i=1; i<a+1; i++){
    s*=i;
}
document.write("El factoraial de ", a , " es ", s);