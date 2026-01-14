
const addSkillBtn=document.getElementById("addSkillBtn")
const skillContainer=document.getElementById("skillContainer")
const skillType=document.getElementById("skillType")
const generateBtn=document.getElementById("generateBtn")
const formDatas=document.getElementById("formDatas")
const form=new FormData(formDatas)
addSkillBtn.onclick=()=>{
    skillContainer.insertAdjacentHTML("beforeend",`${skillType.value+","}`)
    skillType.value=""
    skillType.focus()
   
}
// Webhook redirecting starts from here
generateBtn.onclick=(e)=>{
    e.preventDefault()
    form.append("skills",skillContainer.innerText)
     fetch("https://n8n-7hzw.onrender.com/webhook/08af61a3-6845-4f01-bfff-4d91a5b92dfb",{
        method:"POST",
        header:{"Content-type":"application/json"},
        body:form
    })
.then(res=>{
    return res.text()
}).then(data=>{
    console.log(data)
})
}