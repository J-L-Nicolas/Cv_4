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
        dark_img.style.backgroundImage  = "url('/assets/images/lg_sun.png')";
        bodyBox.style.setProperty('--body-bg-color', "#111")
        bodyBox.style.setProperty('--mode-texte-color', "#fff")
        bodyBox.style.setProperty('--img-color', "invert(1)")
        bodyBox.style.setProperty('--img-color-hover', "drop-shadow(0px 0px 5px #fff)")
        bodyBox.style.setProperty('--bg-colr-primaery','#090c2f')
        bodyBox.style.setProperty('--bg-colr-secondary','#231f10')
        bodyBox.style.setProperty('--bg-color-fff','#424242')
    }else{
        // light
        dark_text.innerHTML = "Go -> Dark";
        dark_text.style.setProperty('color',"#fff");
        btn_dack.style.setProperty('background-color','#000')
        dark_img.style.backgroundImage  = "url('/assets/images/lg_lune.png')";
        bodyBox.style.setProperty('--body-bg-color', "#95b7c7")
        bodyBox.style.setProperty('--mode-texte-color', "#000")
        bodyBox.style.setProperty('--img-color', "invert(0)")
        bodyBox.style.setProperty('--img-color-hover', "invert(1)")
        bodyBox.style.setProperty('--bg-colr-primaery','#171599')
        bodyBox.style.setProperty('--bg-colr-secondary','#e4e4ff')
        bodyBox.style.setProperty('--bg-color-fff','#ebeaea')
    }
}
// dark mode