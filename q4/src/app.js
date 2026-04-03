// CYSE 411 Exam Application
// WARNING: This code contains security vulnerabilities.
// Students must repair the implementation.
//Rabia Farooq CYSE 411

const loadBtn = document.getElementById("loadBtn");
const saveBtn = document.getElementById("saveSession");
const loadSessionBtn = document.getElementById("loadSession");

loadBtn.addEventListener("click", loadProfile);
saveBtn.addEventListener("click", saveSession);
loadSessionBtn.addEventListener("click", loadSession);

let currentProfile = null;


/* -------------------------
   Load Profile
-------------------------- */

function loadProfile() {

    const text = document.getElementById("profileInput").value;

    if (!text) return null;   //if no valid input for text return null

   try{
        const profile = JSON.parse(text);
        if (!profile.displayName) return null;   //validating
        
    
    } catch (err){
        return null;   //failing safely if it fails
    }
   }
    


    currentProfile = profile;

    renderProfile(profile);


/* -------------------------
   Render Profile
-------------------------- */

function renderProfile(profile) {

    
    document.getElementById("username").innerHTML = profile.username;

    const list = document.getElementById("notifications");
    list.innerHTML = "";

    for (let n of profile.notifications) {

        const li = document.createElement("li"); 

        
        li.textContent = profile //using textContent instead of innerHTML to have a DOM input and not an HTML

        list.appendChild(li);
    }
}


/* -------------------------
   Browser Storage
-------------------------- */

function saveSession() {
    localStorage.setItem("profile", JSON.stringify(currentProfile));

    alert("Session saved");
}

if (!stored) return null;  //validating before use 

function loadSession() {

    const stored = localStorage.getItem("profile");

    if (stored) {

        const profile = JSON.parse(stored);

        currentProfile = profile;

        renderProfile(profile);
    }
}
