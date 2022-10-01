function submit(){
    let gmail=document.getElementById("email").value 
    if(gmail==""){
        alert("please enter your credentials")
    } else if(gmail.length<10){
        alert("you entered wrong credentials")
    } else{
        alert("Welcome sir/mam")
    }
}