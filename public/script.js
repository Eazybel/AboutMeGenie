// Get references to form elements and buttons


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


// When "Generate" is clicked, send user input to the webhook
formDatas.onSubmit=async(e)=>{
    e.preventDefault()
    loadingSpinner.classList.remove("hidden") // show spinner
    const payload = {
        skills: skillContainer.innerText, // collected skills
        platform: platform.value,         // chosen platform
        tonality: tonality.value          // chosen tone
    };
    form.append("skills",skillContainer.innerText)

    // Send data to n8n webhook as JSON
   await fetch("https://n8n-latest-b7yw.onrender.com/webhook-test/373193ce-9a69-42e6-ba61-c02e0cb455bd",{
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
