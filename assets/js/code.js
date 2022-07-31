// progress
function loadAtributWidth(){
    var progressAll = document.querySelectorAll(".progress2");
    progressAll.forEach(prog => {
        const attribut  = prog.getAttribute("perct")
        const colorbar  = prog.getAttribute("colorbar")
        prog.style.setProperty('--level-progress2', attribut)
        prog.style.setProperty('--color-progress', colorbar)
    })
}
loadAtributWidth();

function reveal() {

    var reveals = document.querySelectorAll(".progress2");
    var windowHeight = window.innerHeight;
    var elementVisible = 20;

    reveals.forEach(reveal => {
        
        var elementTop = reveal.getBoundingClientRect().top;
    
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("active");
        } else {
            reveal.classList.remove("active");
        }
    });
}
window.addEventListener("scroll", reveal);
// progress

// dark mode
const btn_dack = document.querySelector(".btn_dark");
const dark_text = document.querySelector(".dark_text");
const dark_img = document.querySelector(".dark_img");
const bodyBox = document.querySelector("body");
let modeDarck = false;

btn_dack.addEventListener("click", ()=>{
    modeDarck = !modeDarck;
    toggleMode()
})

const toggleMode = () =>{
    if (modeDarck){
        // dark
        dark_text.innerHTML = "Go -> Light";
        dark_text.style.setProperty('color',"#000");
        btn_dack.style.setProperty('background-color','#fff')
        dark_img.style.backgroundImage  = "url('assets/images/lg_sun.png')";
        bodyBox.style.setProperty('--body-bg-color', "#111")
        bodyBox.style.setProperty('--mode-texte-color', "#fff")
        bodyBox.style.setProperty('--img-color', "invert(1)")
        bodyBox.style.setProperty('--img-color-hover', "drop-shadow(0px 0px 5px #fff)")
        bodyBox.style.setProperty('--bg-colr-primaery','#1A244A') //#090c2f
        bodyBox.style.setProperty('--bg-colr-secondary','#21212c')
        bodyBox.style.setProperty('--bg-color-fff','#424242')
    }else{
        // light
        dark_text.innerHTML = "Go -> Dark";
        dark_text.style.setProperty('color',"#fff");
        btn_dack.style.setProperty('background-color','#000')
        dark_img.style.backgroundImage  = "url('assets/images/lg_lune.png')";
        bodyBox.style.setProperty('--body-bg-color', "#95b7c7")
        bodyBox.style.setProperty('--mode-texte-color', "#000")
        bodyBox.style.setProperty('--img-color', "invert(0)")
        bodyBox.style.setProperty('--img-color-hover', "invert(1)")
        bodyBox.style.setProperty('--bg-colr-primaery','#475dbf')
        bodyBox.style.setProperty('--bg-colr-secondary','#e4e4ff')
        bodyBox.style.setProperty('--bg-color-fff','#ebeaea')
    }
}
// dark mode

  // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  var player;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
      height: '315',
      width: '560',
      videoId: 'nfK3TK_aRCg',
    });
  }

//optimisation load image gif
const imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
      image.removeAttribute('data-src');
    };
};

const containerLoader = document.querySelector("#loading")
const containerHeader = document.querySelector(".containerHeader")
const pictureAvatar = document.querySelector(".picture-Avatar")

onload = (event) =>{
    imagesToLoad.forEach((img) => {
        loadImages(img);
        containerLoader.style.display = "none"
        pictureAvatar.style.animationName = "coin-avatar"
        containerHeader.style.animationName = "open-head"
    });
}