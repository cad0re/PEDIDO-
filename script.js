function sim() {
    alert("VOCE DECIDIU SE AFUNDAR EM DIVIDAS MAS ME FEZ FELIZ! ");
    // redireciona 
    location.href = "flower.html";
}

function desvia(btn) {
    // btn declarado na função
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
