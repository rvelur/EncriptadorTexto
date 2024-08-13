function encriptar() {
    let texto = document.getElementById('texto').value;
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    actualizarResultado(textoEncriptado);
}

function desencriptar() {
    let texto = document.getElementById('texto').value;
    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    actualizarResultado(textoDesencriptado);
}

function actualizarResultado(texto) {
    let resultadoDiv = document.getElementById('resultado');
    if (texto.trim() === "") {
        resultadoDiv.innerHTML = `
            <p class="font-weight-bold">Ningún mensaje fue encontrado</p>
            <span>Ingresa el texto que desees encriptar o desencriptar.</span>
        `;
    } else {
        resultadoDiv.textContent = texto;
    }
}
