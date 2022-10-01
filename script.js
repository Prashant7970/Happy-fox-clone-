let navbar=document.getElementById("navDown")
let navupp=document.getElementById("navUp")
window.onscroll=function(){
    if(window.pageYOffset >= navDown.offsetTop){
        navbar.classList.add("sticky")
    } else{
        navbar.classList.remove("sticky")
    }
}