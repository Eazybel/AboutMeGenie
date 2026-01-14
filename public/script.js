
const addSkillBtn=document.getElementById("addSkillBtn")
const skillContainer=document.getElementById("skillContainer")
const skillType=document.getElementById("skillType")
const generateBtn=document.getElementById("generateBtn")
const platform=document.getElementById("platform")
const tonality=document.getElementById("tonality")
const formDatas=document.getElementById("formDatas")
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
    e.preventDefault()
    const payload = {
        skills: skillContainer.innerText,
        platform: platform.value,
        tonality: tonality.value 
    };
    form.append("skills",skillContainer.innerText)
   await  fetch("https://n8n-7hzw.onrender.com/webhook-test/08af61a3-6845-4f01-bfff-4d91a5b92dfb",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(payload)
    })
.then(res=>{
    return res.text()
}).then(data=>{
    console.log(data)
})

}


copyBtn.onclick = async () => {
    const textToCopy = resultTextarea.value;

    if (!textToCopy) {
        alert("Nothing to copy yet!");
        return;
    }

    try {
        await navigator.clipboard.writeText(textToCopy);
        
        // Visual Feedback
        copyStatus.innerText = "Copied!";
        copyBtn.classList.add("bg-green-500", "text-white", "border-green-600");
        copyBtn.classList.remove("text-slate-500");

        // Reset button after 2 seconds
        setTimeout(() => {
            copyStatus.innerText = "Copy";
            copyBtn.classList.remove("bg-green-500", "text-white", "border-green-600");
            copyBtn.classList.add("text-slate-500");
        }, 2000);
        
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
};