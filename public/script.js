
const addSkillBtn=document.getElementById("addSkillBtn")
const skillContainer=document.getElementById("skillContainer")
const skillType=document.getElementById("skillType")
const generateBtn=document.getElementById("generateBtn")
const platform=document.getElementById("platform")
const tonality=document.getElementById("tonality")
const formDatas=document.getElementById("formDatas")
const loadingSpinner=document.getElementById("loadingSpinner")
const copyBtn = document.getElementById("copyBtn");
const resultTextarea = document.getElementById("resultTextarea");
const copyStatus = document.getElementById("copyStatus");
const form=new FormData(formDatas)

addSkillBtn.onclick=()=>{
    skillContainer.insertAdjacentHTML("beforeend",`${skillType.value+","}`)
    skillType.value=""
    skillType.focus()
   
}
// Webhook redirecting starts from here
generateBtn.onclick=async(e)=>{
    loadingSpinner.classList.remove("hidden")
    e.preventDefault()
    const payload = {
        skills: skillContainer.innerText,
        platform: platform.value,
        tonality: tonality.value 
    };
    form.append("skills",skillContainer.innerText)
   await  fetch("https://n8n-7hzw.onrender.com/webhook/08af61a3-6845-4f01-bfff-4d91a5b92dfb",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(payload)
    })
.then(res=>{
    return res.text()
}).then(data=>{
   resultTextarea.innerText=data
    loadingSpinner.classList.add("hidden")
})

}
