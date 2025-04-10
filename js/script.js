const cameraConfigs = {
  // config1: [
  //   "https://www.youtube.com/embed/mhJRzQsLZGg?si=8BPKYoEe7C7L_jYX", // Starbase NSF
  //   "https://www.youtube.com/embed/cOmmvhDQ2HM?si=sxVgPt6NgoFhO_78", // McGregor NSF
  //   "https://www.youtube.com/embed/Jm8wRjD3xVA?si=Pdu_UE9vCTLT6Weq", // Space Coast NSF
  //   "https://www.youtube.com/embed/tFA8jo0Ejf8?si=LwYEzorIuGzV7YIz", // Nerdle Cam Starbase LabPadre
  //   "https://www.youtube.com/embed/uH1W01t_lGc?si=8vw_TLcuj2ojPLyn", // Cape Cam KSC LabPadre
  //   "https://www.youtube.com/embed/lDdHE8XkU34?si=4gKlmvQr2Gdc2ZE3", // Starbase The Launch Pad
  //   "https://www.youtube.com/embed/tS2PHJmvJzo?si=iQ6LSnNTii6xvG7C", // Rover 2.0 Cam Starbase LabPadre
  //   "https://www.youtube.com/embed/qw3uaLRrYNY?si=LO7Aj-vkxprk2Wxk", // Rocket Ranch Cam Starbase LabPadre
  //   "https://www.youtube.com/embed/2TYo1btp740?si=dLSQ0DbQX4Q8-TV2", // ISS Live The Launch Pad
  //   "https://www.youtube.com/embed/hAQ0rWK5j-U?si=DjoAkRN9UecadwOI", // Plex Cam Starbase LabPadre
  //   "https://www.youtube.com/embed/IQV0DlS1Ew0?si=mHa3ojQzZIC3LPP0", // Sentinel Cam Starbase LabPadre
  //   "https://www.youtube.com/embed/FTw5xuq2swo?si=74Iod0bXsfevK9JC", // SpaceX port Cape Canaveral LabPadre
  // ],
  config1: [
    "https://www.youtube.com/embed/mhJRzQsLZGg?si=8BPKYoEe7C7L_jYX", // Starbase NSF
    "https://www.youtube.com/embed/vd4uGm1_xt0?si=Hnr1Z-fZDhEjKg5a", // Nerdle Cam Starbase LabPadre
    "https://www.youtube.com/embed/qw3uaLRrYNY?si=LO7Aj-vkxprk2Wxk", // Rocket Ranch Cam Starbase LabPadre
    "https://www.youtube.com/embed/lDdHE8XkU34?si=4gKlmvQr2Gdc2ZE3", // Starbase The Launch Pad
    "https://www.youtube.com/embed/ATP6_fFLFp0?si=oFtmBVMK_52PHnmo",  // Plex Cam Starbase LabPadre
    "https://www.youtube.com/embed/jy4uGOu7N4g?si=w0D_VBNiGBD_igTX", // Rover Cam Labpadre
    "https://www.youtube.com/embed/IQV0DlS1Ew0?si=mHa3ojQzZIC3LPP0", // Sentinel Cam Starbase LabPadre
    "https://www.youtube.com/embed/tS2PHJmvJzo?si=iQ6LSnNTii6xvG7C", // Rover 2.0 Cam Starbase LabPadre
    "https://www.youtube.com/embed/U3ERnA7MJuI?si=epu1AzNlF7JMoYSM", // SpaceX Starbase What abaout it?
    "https://www.youtube.com/embed/FTw5xuq2swo?si=wHO9ncnhNCsNXgRw", // Gator Cam
    "https://www.youtube.com/embed/H7SvvCDNb_s?si=n5qPjAffA613jd7r", // Shappire Cam Starbase LabPadre
    
    // Cambiar
    "https://www.youtube.com/embed/cOmmvhDQ2HM?si=sxVgPt6NgoFhO_78", // McGregor NSF

    // No funcionan
    // "https://www.youtube.com/embed/9b7Nh0iTGT4?si=8ksQYk0QWWRw4P3G", // Starbase Live Rocket Ranch
  ],
  // config2: [
  //   "https://www.youtube.com/embed/cOmmvhDQ2HM?si=sxVgPt6NgoFhO_78", // McGregor NSF
  //   "https://www.youtube.com/embed/Jm8wRjD3xVA?si=Pdu_UE9vCTLT6Weq", // Space Coast NSF
  //   "https://www.youtube.com/embed/uH1W01t_lGc?si=8vw_TLcuj2ojPLyn", // Cape Cam KSC LabPadre
  //   "https://www.youtube.com/embed/FTw5xuq2swo?si=74Iod0bXsfevK9JC", // SpaceX port Cape Canaveral LabPadre
  //   "https://www.youtube.com/embed/GN_j_kVsbpI?si=4cJiMh-sjA3RoRGZ", // James Web Live Data
  //   "https://www.youtube.com/embed/gMLwtXCfo_w?si=li_JcfcEw13MlUIr", // Starman Live Data
  //   "https://www.youtube.com/embed/bQxEcdz_g8g?si=hLafO12LGZCDbHua", // Betelgeuse Live
  //   "https://www.youtube.com/embed/xRPjKQtRXR8?si=68MC_3YOs0Q5oI4S", // ISS Live Stream afarTV
  //   "https://www.youtube.com/embed/VdFK-xs_r-4?si=iZ9kjNz4VLUqsRi-", // NASA ISS LIVE
  //   "https://www.youtube.com/embed/DfEr5XCFNWM?si=IvEgBSoJaYWLxnAW", // NASA ISS VIEWS
  //   "https://www.youtube.com/embed/jKHvbJe9c_Y?si=wzmnq-D1A139l47V", // NASA ISS
  //   "https://www.youtube.com/embed/H999s0P1Er0?si=FXz5P_rjHflof8a2", // ISS LIVE VIEWS
  // ],
};

function createIframes(videoUrls) {
  const videoGrid = document.getElementById("videoGrid");
  videoGrid.innerHTML = ""; // Limpiar el grid antes de añadir nuevos iframes
  videoUrls.forEach((url, index) => {
    const iframeContainer = document.createElement("div");
    iframeContainer.id = "player" + index;
    iframeContainer.className = "grid-item";
    videoGrid.appendChild(iframeContainer);
  });
}

function onYouTubeIframeAPIReady() {
  initCameraConfig("config1");
  document
    .getElementById("cameraConfig")
    .addEventListener("change", (event) => {
      initCameraConfig(event.target.value);
    });
}

function initCameraConfig(config) {
  const videoUrls = cameraConfigs[config];
  createIframes(videoUrls);
  videoUrls.forEach((url, index) => {
    new YT.Player("player" + index, {
      height: "100%",
      width: "100%",
      videoId: extractVideoID(url),
      playerVars: {
        autoplay: 1,
        mute: 1,
      },
    });
  });
  updateGridLayout(videoUrls.length);
}

function extractVideoID(url) {
  const urlObj = new URL(url);
  return urlObj.searchParams.get("v") || urlObj.pathname.split("/").pop();
}

function updateGridLayout(numVideos) {
  const videoGrid = document.getElementById("videoGrid");
  const numCols = Math.ceil(Math.sqrt(numVideos));
  const numRows = Math.ceil(numVideos / numCols);

  videoGrid.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
  videoGrid.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;
}

document.addEventListener("DOMContentLoaded", function () {
  const videoGrid = document.getElementById("videoGrid");

  document.getElementById("cameraConfig").value = "config1";

  // Modal functionality
  const modal = document.getElementById("infoModal");
  const btn = document.querySelector(".info-btn");
  const span = document.querySelector(".close-btn");

  btn.onclick = function () {
    modal.style.display = "flex";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
