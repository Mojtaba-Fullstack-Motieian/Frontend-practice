const profileCard = document.querySelector("#profile_card");
const openProfile = document.querySelector("#open_modal_btn button");
const closeProfile = document.querySelector("#close_btn");

openProfile.addEventListener('click', ()=>{
    profileCard.classList.add("active");
})

closeProfile.addEventListener('click', ()=>{
    profileCard.classList.remove("active");
})