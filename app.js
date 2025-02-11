alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute for diferente do numero secreto
while(chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break
    } else {
        if (chute < numeroSecreto) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O numero secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'; 
alert(`Isso ai! Você descobriu o  número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}.`);

/*
if (tentativas > 1) {
    alert(`Isso ai! Você descobriu o  número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Isso ai! Você descobriu o  número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}
*/
