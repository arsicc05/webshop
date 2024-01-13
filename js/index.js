function openForm() {
  document.getElementById("popup").style.display = "block";
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
  registracija = document.getElementById("registracija");
  prijava = document.getElementById("prijava");
  registracija.style.display = "block";
  prijava.style.display = "none";
}
