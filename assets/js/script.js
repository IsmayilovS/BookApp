// Modal
const overlay = document.querySelector(".overlay")
const modal = document.querySelector(".join-form-modal")

document.getElementById("user-profile").addEventListener("click",()=>{
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
})

window.addEventListener("keydown",(e)=>{
   if (e.key === "Escape"){
       modal.classList.add("hidden")
       overlay.classList.add("hidden")
   }
})