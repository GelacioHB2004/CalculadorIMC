function IMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var estatura = parseFloat(document.getElementById('estatura').value);
    var imc = peso / (estatura * estatura);
    var categoria = '';

    if (imc < 18.5) {
        categoria = 'Bajo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        categoria = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        categoria = 'Obesidad grado 1';
    } else if (imc >= 35 && imc < 39.9) {
        categoria = 'Obesidad grado 2';
    } else {
        categoria = 'Obesidad grado 3';
    }

    var resultado = 'Tu IMC es de: ' + imc;
    var resultado2 = 'Perteneces ala categoría : ' + categoria;
    document.getElementById('Respuesta').innerText = resultado;
    document.getElementById('Respuesta1').innerText = resultado2;
}
