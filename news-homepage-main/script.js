const menuIcon = document.querySelector('[alt="icon-menu"]');
const navMenu = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
  navMenu.style.display = 'block';
});

// menuIcon.onclick = function () {
//   if (navMenu) {
//     navMenu.style.display = 'block';
//   }
// }






// const button = document.querySelector("button");
// const modalContainer = document.querySelector(".modal-container");
// const closeIcon = document.querySelector(".modal-container > span");
// const form = document.querySelector("form");
// const titleInput = document.getElementsByClassName("title");
// const textarea = document.querySelector("textarea");
// const colorInput = document.querySelector("input[type=color]");
// const notesContainer = document.querySelector(".container");

// button.onclick = function () {
//     modalContainer.style.display = "block";
//     const submitForm = modalContainer.querySelector("input[type=submit]");
//     submitForm.value = "Add New Note";
//     formCondition = "create";
// }
// closeIcon.onclick = function () {
//     modalContainer.style.display = "none";
// }