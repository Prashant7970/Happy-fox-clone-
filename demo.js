let publicData= document.querySelector("#form")
let publicArr=JSON.parse(localStorage.getItem("users"))||[];

publicData.addEventListener("submit",function(el){
el.preventDefault();
if(publicData.name.value==""||publicData.email.value==""||publicData.phone.value==""||publicData.size.value=="company size"){
alert("please fill all the details")
} else{
   
    let obj={
        name:publicData.name.value,
        email:publicData.email.value,
        mob:publicData.phone.value,
        company:publicData.company.value,
        Csize:publicData.size.value,
        indusName:publicData.industry.value,
        agents:publicData.Agent.value,
        area:publicData.PROCESSING_INSTRUCTION_NODE.value

      
    }
    publicArr.push(obj)
    localStorage.setItem("users",JSON.stringify(publicArr))
  
}
   
})