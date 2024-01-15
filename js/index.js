function openForm() {
  document.getElementById("popup").style.display = "block";
}
function openPetshopForm() {
  document.getElementById("petShopForm").style.display = "block";
}
function closePetshopForm() {
  document.getElementById("petShopForm").style.display = "none";
}

function closeForm() {
  document.getElementById("popup").style.display = "none";
}
function openFormAddProducts() {
  document.getElementById("add-products").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}
function openFormEditProducts() {
  document.getElementById("edit-products").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closeFormAddProducts() {
  document.getElementById("add-products").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
function closeFormEditProducts() {
  document.getElementById("edit-products").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
function openReg() {
  let registracija = document.getElementById("registracija");
  let prijava = document.getElementById("prijava");
  registracija.style.display = "block";
  prijava.style.display = "none";
}
function openReg2() {
  openForm();
  openReg();
}
function closeForm2() {
  let forma = document.querySelector(".edit-users__form");
  forma.style.display = "none";
}
