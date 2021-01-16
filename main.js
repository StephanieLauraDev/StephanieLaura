function toggleNavbar(collapseID) {
  document.getElementById(collapseID).classList.toggle("hidden");
  document.getElementById(collapseID).classList.toggle("block");
}


AOS.init({
  duration: 1000,
  delay: 500,
  once: true
});