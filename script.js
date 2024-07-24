const videoUrls = [ 
    "https://www.youtube.com/embed/mhJRzQsLZGg?si=8BPKYoEe7C7L_jYX",
    "https://www.youtube.com/embed/cOmmvhDQ2HM?si=sxVgPt6NgoFhO_78",
    "https://www.youtube.com/embed/Jm8wRjD3xVA?si=Pdu_UE9vCTLT6Weq",
    "https://www.youtube.com/embed/c212qMUTnEs?si=Ny45gTYrlJUn7PYw",
    "https://www.youtube.com/embed/uH1W01t_lGc?si=8vw_TLcuj2ojPLyn",
    "https://www.youtube.com/embed/RsIG9WF-B4s?si=dxcCrThD29IG0faG",
    "https://www.youtube.com/embed/qw3uaLRrYNY?si=LO7Aj-vkxprk2Wxk",
    "https://www.youtube.com/embed/OWCh3wmKtak?si=-kNVydJhfVFLSw5P",
    "https://www.youtube.com/embed/Rg7kw-KLDL8?si=feM0Z4RSwj1tWsig",
    "https://www.youtube.com/embed/IQV0DlS1Ew0?si=mHa3ojQzZIC3LPP0",
    "https://www.youtube.com/embed/tS2PHJmvJzo?si=iQ6LSnNTii6xvG7C",
    "https://www.youtube.com/embed/FTw5xuq2swo?si=74Iod0bXsfevK9JC",
    // Agrega más URLs según se necesite
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