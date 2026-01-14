
const addSkillBtn=document.getElementById("addSkillBtn")
const skillContainer=document.getElementById("skillContainer")
const skillType=document.getElementById("skillType")
const generateBtn=document.getElementById("generateBtn")
const formDatas=document.getElementById("formDatas")
const form=new FormData(formDatas)
addSkillBtn.onclick=()=>{
    skillContainer.insertAdjacentHTML("beforeend",`${skillType.value+","}`)
    skillType.value=""
   
}
generateBtn.onclick=(e)=>{
    e.preventDefault()
    form.append("skills",skillContainer.innerText)
     fetch("https://n8n-7hzw.onrender.com/webhook-test/5c444eef-efe7-4c9b-bc47-a4f4eea4ed23",{
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