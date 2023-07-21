//console.log("Rafael Marcelo Reimberg");

document.write("<h1>Jogando JS na tela</h1>");

var nome = "Rafael";
var nome2 = "Reimberg"
//var idade = 36;
//var outraVariavel = true;
var nomeFinal = nome + nome2;
//console.log(nomeFinal);
document.write(`<strong>${nome2}</strong><br><hr>`);

var num1 = 20;
var num2 = 25;
//var resultado = num1 + num2;

//document.write(`O resultado é ${resultado} <br><hr>`);

//if(num1 > num2){
    
   // console.log("verdade");
//}else{
   // console.log("falso");
//}

var frutas = [
        "laranja", 
        "manga", 
        "mamão", 
    ];

let resultado = false;
//let lista = resultado.toLowerCase() == true;
let fruta = value => [true, false].includes(value) ? value === true : null;

    if(frutas.includes("laranja")){

        resultado = 'verdade';
    }else if(frutas.includes("manga")){

        resultado = "verdade";
    }else if(frutas.includes("mamão")){

        resultado = "verdade";
    }else{
        
        resultado = 'falso';
    }

    console.log(resultado);
    document.write(resultado);

    
    // function listas(){
    //    if((frutas !== "") && (frutas !== null) && (frutas !== undefined)){
    //        return false;
    //    }
    // }


//for (var i = 0; i <= 10; i++){
//    console.log(i);
//}

const agradecer = "<br><hr> Obrigado meu bom deus!";

document.write(agradecer);
