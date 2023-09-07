var Nome = document.getElementById("nome")
var Altura = document.getElementById("altura")
var Peso = document.getElementById("peso")
var resultado = document.getElementById("resultado")
function calcular() {
    if (Nome.value !== "" && Altura.value !== "" && Peso.value !== "") {
        var imc = (((Peso.value) / (Math.pow((Altura.value), 2))).toFixed(2))

        if (imc < 16) {
            var saude = ("em magreza grave")
        }
        else if (imc < 17) {
            var saude = ("em magreza moderada")
        }
        else if (imc < 18.5) {
            var saude = ("em magreza leve")
        }
        else if (imc < 25) {
            var saude = ("saudável")
        }
        else if (imc < 30) {
            var saude = ("em sobrepeso")
        }
        else if (imc < 35) {
            var saude = ("em obesidade Grau 1")
        }
        else if (imc <= 40) {
            var saude = ("em obesidade Grau 2")
        }
        else if (imc > 40) {
            var saude = ("em obesidade Grau 3")
        }

        resultado.innerHTML = (`${Nome.value} seu imc é ${imc} e você está ${saude}`)
    }

    else {
        var campos = alert("preencha os campos")
    }

}








// Menor que 16 - Magreza grave
// 16 a menor que 17 -
// 17 a menor que 18,5 - Magreza leve
// 18,5 a menor que 25 - Saudável
// 25 a menor que 30 - Sobrepeso
// 30 a menor que 35 - Obesidade Grau I
// 35 a menor que 40 - Obesidade Grau II (considerada severa)
// Maior que 40 - Obesidade Grau III (considerada mórbida)