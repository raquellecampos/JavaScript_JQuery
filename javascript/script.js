//alert("Olá Raquelle!"); 

var mensagem = "Boa Noite!";
alert(mensagem);


var a = 2;
var b = 3;
var c = "Olá Mundo!";

var soma = a+b;
var sub = a-b;
var mult = a*b;
var div = a/b;

alert(soma);
alert(sub);
alert(mult);
alert(div);

//Estruturas Condicionais
if (c%2 == 1){
    alert("Número Ímpar :)");
}
else if (c%2 ==0){
    alert("Número Par :)")
}
else{
   alert("Valor inválido :(")
}

//estruturas de repetição
//while (enquanto)
var i = 0;

while(i < 3){
    alert(i);
    i++;
}

//for (para)
for (var j = 0; j < 3; j++){
    alert(j);
}

//Array
var lista = ["laranja", "maçã", "banana", 1234];

for (i in lista){
    alert(lista[i]);
}
console.log("Obrigada!")