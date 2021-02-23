const showModal = document.querySelector("#showModal");
const closeModal = document.querySelector("#closeModal");


showModal.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);


function toggleModal() {
    const modalOverlay = document.querySelector("#overlay");
    modalOverlay.classList.toggle("visible"); 
}

