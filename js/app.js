document.addEventListener("DOMContentLoaded", function() {
  // Seleccionamos todos los elementos con la clase "tarjeta"
  const tarjetas = document.querySelectorAll(".tarjeta");

  if (tarjetas.length === 0) {
    console.error("No se encontraron elementos con la clase 'tarjeta'.");
    return;
  }

  tarjetas.forEach(function(tarjeta) {
    tarjeta.addEventListener("click", function() {
      // Obtenemos la imagen de la parte delantera y la descripción de la parte trasera
      const imagenElement = tarjeta.querySelector(".tarjeta-delante img");
      const descripcionElement = tarjeta.querySelector(".tarjeta-atras p");

      // Verificamos que ambos elementos existan
      if (!imagenElement || !descripcionElement) {
        console.error("No se encontraron la imagen o la descripción dentro de la tarjeta.");
        return;
      }

      // Creamos el objeto con la información de la imagen
      const infoImagen = {
        src: imagenElement.getAttribute("src"),
        descripcion: descripcionElement.textContent
      };

      // Guardamos la información en localStorage
      localStorage.setItem("infoImagen", JSON.stringify(infoImagen));
      console.log("Imagen guardada en localStorage:", infoImagen);

      // Redirigimos a ejemplo1.html
      window.location.href = "./components/ejemplo1.html";
    });
  });
});
