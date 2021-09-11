
const calcular = document.getElementById('calcular');


function imc(){
    
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //validar dados digitados
    if(nome !== '' && altura !== '' && peso !== ''){
        const valorImc = (peso / (altura*altura)).toFixed(2);
        
        let classificacao = "";
        if (valorImc < 18.5){
            classificacao = "Você pode estar abaixo do peso ideal. "
        }else if(valorImc < 25){
            classificacao = "Você aparenta estar no peso normal. "
        }
        else if(valorImc < 30 ){
            classificacao = "Você pode estar acima do peso. "
        }else if(valorImc > 30 ){
            classificacao = "Você pode estar com obesidade. "
        }
        resultado.textContent = `Olá ${nome}! Seu IMC é de ${valorImc}. ${classificacao}. Procure orientação médica para avaliação mais completa.`

    }
    else{
        resultado.textContent = 'Preencha todos os campos';
    }
}

calcular.addEventListener('click', imc);