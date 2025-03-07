document.addEventListener("DOMContentLoaded", function() {
  // Seleccionamos todos los elementos con la clase "tarjeta"
  const tarjeta1 = document.querySelectorAll(".tarjeta1");
  const tarjeta2 = document.querySelectorAll(".tarjeta2");
  const tarjeta3 = document.querySelectorAll(".tarjeta3");
  const tarjeta4 = document.querySelectorAll(".tarjeta4");

//  if (tarjeta1.length === 0 || tarjeta2.length === 0) {
//    console.error("No se encontraron elementos con la clase 'tarjeta'.");
//    return;
//  }

  tarjeta1.forEach(function(tarjeta) {
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

  tarjeta2.forEach(function(tarjeta) {
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
      window.location.href = "./components/ejemplo2.html";
    });
  });

  tarjeta3.forEach(function(tarjeta) {
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
      window.location.href = "./components/ejemplo3.html";
    });
  });

  tarjeta4.forEach(function(tarjeta) {
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
      window.location.href = "./components/ejemplo4.html";
    });
  });
});
