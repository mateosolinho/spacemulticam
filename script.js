document.addEventListener("DOMContentLoaded", function() {
    const videoGrid = document.getElementById('videoGrid');
    const videoUrls = [
        "https://www.youtube.com/embed/FTw5xuq2swo?si=FEoxfsIpCQhmr4cu",
        "https://www.youtube.com/embed/Rg7kw-KLDL8?si=pABas8Bi4sqLuQnP",
        "https://www.youtube.com/embed/uH1W01t_lGc?si=chERPVJtLTdUGf-Q",
        "https://www.youtube.com/embed/Mu-dvOOnaOw?si=nckTPbwD4RLvVVqF",
        // Agrega más URLs según necesites
    ];

    // Agrega los iframes al contenedor de la cuadrícula
    videoUrls.forEach(url => {
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.className = 'grid-item';
        videoGrid.appendChild(iframe);
    });

    // Calcula el número de columnas y filas
    const numVideos = videoUrls.length;
    const numCols = Math.ceil(Math.sqrt(numVideos));
    const numRows = Math.ceil(numVideos / numCols);

    // Establece el número de columnas y filas en la cuadrícula
    videoGrid.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
    videoGrid.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;
});
