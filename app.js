// Funções de criptografia e descriptografia

function criptografar(texto) {
    const regras = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return texto.split('').map(char => regras[char] || char).join('');
}

function descriptografar(texto) {
    const regras = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    let regex = new RegExp(Object.keys(regras).join('|'), 'g');
    return texto.replace(regex, match => regras[match]);
}

// Função para copiar o texto para a área de transferência

function copiarParaAreaDeTransferencia(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado para a área de transferência!');
    }).catch(err => {
        alert('Falha ao copiar o texto: ', err);
    });
}

// Função principal que manipula os botões e o texto

document.addEventListener('DOMContentLoaded', () => {
    const criptografarBtn = document.querySelector('.cripto__botao');
    const descriptografarBtn = document.querySelector('.decrip__botao');
    const textarea = document.querySelector('.apresentacao__conteudo__texto');
    const resultadoTexto = document.querySelector('.output__Text');
    const resultadoTexto2 = document.querySelector('.output__Text2');

    criptografarBtn.addEventListener('click', () => {
        const texto = textarea.value.toLowerCase();
        if (/^[a-z\s]*$/.test(texto)) {  // Verifica se o texto contém apenas letras minúsculas e espaços
            const resultado = criptografar(texto);
            resultadoTexto.textContent = resultado;
            resultadoTexto2.textContent = '';
        } else {
            alert('Por favor, digite apenas letras minúsculas e sem acento.');
        }
    });

    descriptografarBtn.addEventListener('click', () => {
        const texto = textarea.value.toLowerCase();
        if (/^[a-z\s]*$/.test(texto)) {  // Verifica se o texto contém apenas letras minúsculas e espaços
            const resultado = descriptografar(texto);
            resultadoTexto.textContent = resultado;
            resultadoTexto2.textContent = '';
        } else {
            alert('Por favor, digite apenas letras minúsculas e sem acento.');
        }
    });

    const copiarBtn = document.createElement('button');
    copiarBtn.textContent = 'Copiar';
    copiarBtn.className = 'copiar__botao';
    document.querySelector('.apresentacao__botoes').appendChild(copiarBtn);

    copiarBtn.addEventListener('click', () => {
        copiarParaAreaDeTransferencia(resultadoTexto.textContent || resultadoTexto2.textContent);
    });
});
