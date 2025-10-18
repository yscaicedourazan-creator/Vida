function checkPassword() {
  const clave = document.getElementById("password").value;
  if (clave === "1824") {
    document.getElementById("access").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    alert("Clave incorrecta. Intenta de nuevo.");
  }
}