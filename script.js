let text = document.getElementById("main_text");

window.addEventListener("scroll", () =>{
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + "px";
});