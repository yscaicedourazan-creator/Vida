function checkPassword() {
  const clave = document.getElementById("password").value;
  if (clave === "1824") {
    document.getElementById("access").style.display = "none";
    document.getElementById("content").style.display = "block";
    //Reproducir Musica //
    const audio = document.getElementById("musica");
    audio.play();

  } else {
    alert("Clave incorrecta. Intenta de nuevo.");
  }
}