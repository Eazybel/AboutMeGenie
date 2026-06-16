// Get references to form elements and buttons
const userAboutText = document.getElementById("userAboutText"); // Updated to match your textarea ID
const generateBtn = document.getElementById("generateBtn");
const platform = document.getElementById("platform");
const tonality = document.getElementById("tonality");
const formDatas = document.getElementById("formDatas");
const loadingSpinner = document.getElementById("loadingSpinner");
const copyBtn = document.getElementById("copyBtn");
const resultTextarea = document.getElementById("resultTextarea");
const copyStatus = document.getElementById("copyStatus");

// Corrected to lowercase .onsubmit or standard addEventListener
formDatas.onsubmit = async (e) => {
    e.preventDefault(); // Move this to the absolute top to stop reloads instantly!
    
    loadingSpinner.classList.remove("hidden"); // show spinner

    // Build payload using your new textarea description value
    const payload = {
        about: userAboutText.value,  // your new user description field
        platform: platform.value,    // chosen platform
        tonality: tonality.value     // chosen tone
    };

    try {
        // Send data to n8n webhook as JSON
        const res = await fetch("https://n8n-latest-b7yw.onrender.com/webhook/373193ce-9a69-42e6-ba61-c02e0cb455bd", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const data = await res.text(); // get raw response text
        
        // Show result securely inside textarea
        resultTextarea.value = ""; 
        resultTextarea.value = data; 
        
    } catch (error) {
        console.error("Webhook processing error:", error);
    } finally {
        loadingSpinner.classList.add("hidden"); // always hide spinner when done
    }
};
