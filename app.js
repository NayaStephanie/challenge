const criptografarBtn = document.getElementById('cripto__botao');
const descriptografarBtn = document.getElementById('decrip__botao');
const textArea = document.getElementById('message_area');
const resultado = document.getElementsByClassName('textoResult');
const copiar = document.getElementById('btn-copiar');
const preResposta = document.getElementsByClassName('pre-respostas');
const resposta = document.getElementsByClassName('resposta');
const alerta = document.getElementsByClassName('avisos');
const colar = document.getElementById('btn-colar');

// criptografar
criptografarBtn.addEventListener('click', () => {
    if (textArea.value === '') {
        alerta[0].innerHTML = 'Digite algo para ser criptografado';
        alerta[0].style.display = 'block';
        alerta[0].classList.add('error');
        setTimeout(() => {
            alerta[0].style.display = 'none';
        }, 3000);
        return;
    } else {
        const frase = textArea.value;
        const fraseMinuscula = frase.toLowerCase();
        const criptografada = fraseMinuscula.replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        
        resultado[0].innerHTML = criptografada;

        preResposta[0].style.display = 'none';
        resposta[0].style.display = 'flex';

        textArea.value = '';
    }
});

// descriptografar
descriptografarBtn.addEventListener('click', () => {
    if (textArea.value === '') {
        alerta[0].innerHTML = 'Digite algo para ser descriptografado';
        alerta[0].style.display = 'block';
        alerta[0].classList.add('error');
        setTimeout(() => {
            alerta[0].style.display = 'none';
        }, 3000);
        return;
    } else {
        const frase = textArea.value;
        const descriptografada = frase.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
        
        resultado[0].innerHTML = descriptografada;

        preResposta[0].style.display = 'none';
        resposta[0].style.display = 'flex';

        textArea.value = '';
    }
});

// copiar
copiar.addEventListener('click', () => {
    const copiado = resultado[0].innerText;
    navigator.clipboard.writeText(copiado);
    copiar.innerHTML = 'Copiado!';
});

// colar
colar.addEventListener('click', () => {
    navigator.clipboard.readText().then(text => {
        textArea.value = text;
    }).catch(() => {
        alerta[0].innerHTML = 'Não foi possível colar';
        alerta[0].style.display = 'block';
        alerta[0].classList.add('error');
        setTimeout(() => {
            alerta[0].style.display = 'none';
        }, 3000);
    });
});
