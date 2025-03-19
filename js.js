
function criptografar() {
    const texto = document.getElementById('texto').value;
    if (!texto) {
        alert("Por favor, insira um texto para criptografar.");
        return;
    }

    const textoCriptografado = cifraDeCesar(texto, 3); 
    document.getElementById('resultado').textContent = textoCriptografado;
}


function descriptografar() {
    const texto = document.getElementById('texto').value;
    if (!texto) {
        alert("Por favor, insira um texto para descriptografar.");
        return;
    }

    const textoDescriptografado = cifraDeCesar(texto, -3); 
    document.getElementById('resultado').textContent = textoDescriptografado;
}


function cifraDeCesar(texto, deslocamento) {
    return texto
        .split('')
        .map((caractere) => {
            if (caractere.match(/[a-z]/i)) {
                const codigo = caractere.charCodeAt(0);
                const base = codigo >= 65 && codigo <= 90 ? 65 : 97; 
                return String.fromCharCode(((codigo - base + deslocamento + 26) % 26 + base));
            }
            return caractere; 
        })
        .join('');
}