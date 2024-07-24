const videoUrls = [
    "https://www.youtube.com/embed/FTw5xuq2swo?si=FEoxfsIpCQhmr4cu",
    "https://www.youtube.com/embed/Rg7kw-KLDL8?si=pABas8Bi4sqLuQnP",
    "https://www.youtube.com/embed/uH1W01t_lGc?si=chERPVJtLTdUGf-Q",
    "https://www.youtube.com/embed/Mu-dvOOnaOw?si=nckTPbwD4RLvVVqF",
    "https://www.youtube.com/embed/c212qMUTnEs?si=_bkJR78bOx2cX9FX",
    "https://www.youtube.com/embed/uH1W01t_lGc?si=4UxhxVaKVJpspE1_",
    "https://www.youtube.com/embed/RsIG9WF-B4s?si=ETIOowfqVKEUaDBX",
    "https://www.youtube.com/embed/qw3uaLRrYNY?si=0epRebxN6olWaEP9",
    "https://www.youtube.com/embed/OWCh3wmKtak?si=t3fjjjb8e5cE90Gv",
    "https://www.youtube.com/embed/OWCh3wmKtak?si=t3fjjjb8e5cE90Gv",
    "https://www.youtube.com/embed/OWCh3wmKtak?si=t3fjjjb8e5cE90Gv",
    "https://www.youtube.com/embed/OWCh3wmKtak?si=t3fjjjb8e5cE90Gv",
    "https://www.youtube.com/embed/OWCh3wmKtak?si=t3fjjjb8e5cE90Gv",
    "https://www.youtube.com/embed/OWCh3wmKtak?si=t3fjjjb8e5cE90Gv",
    "https://www.youtube.com/embed/OWCh3wmKtak?si=t3fjjjb8e5cE90Gv",
    "https://www.youtube.com/embed/OWCh3wmKtak?si=t3fjjjb8e5cE90Gv",
    "https://www.youtube.com/embed/OWCh3wmKtak?si=t3fjjjb8e5cE90Gv",
    "https://www.youtube.com/embed/OWCh3wmKtak?si=t3fjjjb8e5cE90Gv",
    "https://www.youtube.com/embed/OWCh3wmKtak?si=t3fjjjb8e5cE90Gv",
    "https://www.youtube.com/embed/OWCh3wmKtak?si=t3fjjjb8e5cE90Gv",
    // Agrega más URLs según necesites
];

function createIframes(videoUrls) {
    const videoGrid = document.getElementById('videoGrid');
    videoUrls.forEach((url, index) => {
        const iframeContainer = document.createElement('div');
        iframeContainer.id = 'player' + index;
        iframeContainer.className = 'grid-item';
        videoGrid.appendChild(iframeContainer);
    });
}

createIframes(videoUrls);

function onYouTubeIframeAPIReady() {
    videoUrls.forEach((url, index) => {
        new YT.Player('player' + index, {
            height: '100%',
            width: '100%',
            videoId: extractVideoID(url),
            playerVars: {
                'autoplay': 1,
                'mute': 1
            }
        });
    });
}

function extractVideoID(url) {
    const urlObj = new URL(url);
    return urlObj.searchParams.get('v') || urlObj.pathname.split('/').pop();
}

document.addEventListener("DOMContentLoaded", function() {
    const videoGrid = document.getElementById('videoGrid');

    const numVideos = videoUrls.length;
    const numCols = Math.ceil(Math.sqrt(numVideos));
    const numRows = Math.ceil(numVideos / numCols);

    videoGrid.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
    videoGrid.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;
});