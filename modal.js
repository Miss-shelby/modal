
const btn = document.querySelector(".btn")
const close = document.querySelector(".close-btn")
const modal = document.querySelector(".modal")

btn.addEventListener("click",openModal);
close.addEventListener("click",closeModal);
modal.addEventListener("click",closeModal);

function openModal(e) {
    e.preventDefault()
    modal.style.display="block"
}

function closeModal() {
   modal.style.display="none"
}