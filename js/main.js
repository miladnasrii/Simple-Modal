let modal = document.querySelector(".modal-container");
let open = document.querySelector(".open");
let close = document.querySelector(".modal-btn")

open.addEventListener("click",function(){
    modal.classList.add("show");
})

close.addEventListener("click",function(){
    modal.classList.remove("show");
})