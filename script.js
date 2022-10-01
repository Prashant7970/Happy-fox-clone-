let navbar=document.querySelector(".navDown")
console.log(navbar)
window.onscroll=function(){
    console.log(window.pageYOffset , navbar.offsetTop)
    if(window.pageYOffset > navbar.offsetTop){

        navbar.classList.add("sticky")
    } else{
        navbar.classList.remove("sticky")
    }
}