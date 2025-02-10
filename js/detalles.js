document.addEventListener("DOMContentLoaded", function() {
    // Recupera la información almacenada en localStorage
    const infoImagen = JSON.parse(localStorage.getItem("infoImagen"));
  
    if (infoImagen) {
      document.getElementById("imagen-detalles").src = infoImagen.src;
      document.getElementById("descripcion-detalles").textContent = infoImagen.descripcion;
    } else {
      alert("No se encontró información para este invento");
      window.location.href = "/";
    }
  });
  