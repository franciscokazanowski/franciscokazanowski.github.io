async function getRandomLyrics() {
    const songs = [
        { artist: "The Beatles", song: "Hey Jude" },
        { artist: "Adele", song: "Someone Like You" },
        { artist: "Bob Dylan", song: "Blowin' in the Wind" },
        { artist: "Taylor Swift", song: "Love Story" },
        { artist: "Eminem", song: "Lose Yourself" }
    ];

    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    
    try {
        const response = await fetch(`https://api.lyrics.ovh/v1/${randomSong.artist}/${randomSong.song}`);
        
        if (response.ok) {
            const data = await response.json();
            const lyrics = data.lyrics.replace(/(?:\r\n|\r|\n)/g, '<br>'); // Formatação para quebra de linha
            document.getElementById('quote').innerHTML = lyrics;
            document.getElementById('artist-name').innerText = randomSong.artist; // Atualiza o nome do artista
            document.getElementById('song-name').innerText = randomSong.song; // Atualiza o nome da música
        } else {
            document.getElementById('quote').innerText = 'Letra não encontrada.';
            console.error('Erro na API:', response.statusText);
        }
    } catch (error) {
        document.getElementById('quote').innerText = 'Erro ao buscar a letra.';
        console.error('Erro:', error);
    }
}

document.getElementById('newQuoteBtn').addEventListener('click', getRandomLyrics);

// Chamada inicial para carregar uma letra
getRandomLyrics();
