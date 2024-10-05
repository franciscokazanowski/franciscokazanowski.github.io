// API para mostrar letras de músicas
const lyricsContainer = document.getElementById('lyrics');

fetch('https://api.lyrics.ovh/v1/coldplay/yellow') // Exemplo de API de letras
    .then(response => response.json())
    .then(data => {
        lyricsContainer.textContent = `"${data.lyrics.substring(0, 300)}..."`; // Mostra apenas parte da letra
    })
    .catch(error => {
        lyricsContainer.textContent = "Desculpe, não foi possível carregar as letras no momento.";
    });
