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