var alturaM = 0;
var genero = 0;
var alturaN = 100000000000 ;
var altura_total = 0;
var masculinoTotal = 0;

for (i=0 ; i < 2; i++){
    var pergAltura = parseFloat (prompt("qual a sua altura "));
    var pergGenero = prompt ("qual o seu genero");

    if (pergGenero == "M"){
        altura_total += pergAltura
        masculinoTotal +=1
    };

    if (pergGenero == "F"){
        var contagem = genero+=1
    
    };

    if (pergAltura > alturaM){
        alturaM = pergAltura
    };
    
    if (pergAltura < alturaN){
        alturaN = pergAltura
    };
};

var media = altura_total / masculinoTotal;

console.log ("essa e a media", media);
console.log ("o total feminino e ", contagem);
console.log ("a maior alturs e ", alturaM);
console.log ("a menor altura e ", alturaN);
