// Get references to form elements and buttons
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

// When "Add Skill" is clicked, add the skill text into the container
addSkillBtn.onclick=()=>{
    skillContainer.insertAdjacentHTML("beforeend",`${skillType.value+","}`)
    skillType.value=""
    skillType.focus()
}

// When "Generate" is clicked, send user input to the webhook
generateBtn.onclick=async(e)=>{
    loadingSpinner.classList.remove("hidden") // show spinner
    e.preventDefault()
    const payload = {
        skills: skillContainer.innerText, // collected skills
        platform: platform.value,         // chosen platform
        tonality: tonality.value          // chosen tone
    };
    form.append("skills",skillContainer.innerText)

    // Send data to n8n webhook as JSON
   await fetch("https://n8n-7hzw.onrender.com/webhook/08af61a3-6845-4f01-bfff-4d91a5b92dfb",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(payload)
    })
    .then(res=>res.text())               // get response text
    .then(data=>{
       resultTextarea.innerText=data     // show result in textarea
       loadingSpinner.classList.add("hidden") // hide spinner
    })
}
