let movieData= document.querySelector("#form")
let movieArr=JSON.parse(localStorage.getItem("movie-list"))||[];
let count=0;
movieData.addEventListener("submit",function(el){
el.preventDefault();
if(movieData.name.value==""){
alert("please fill all the details")
} else{
    count++;
    localStorage.setItem("count",count)
    let obj={
        movie_name:movieData.name.value,
      
    }
    movieArr.push(obj)
    localStorage.setItem("movie-list",JSON.stringify(movieArr))
  
}
   
})