document.addEventListener("DOMContentLoaded", function () {
  // Mapeo de clases de tarjeta a sus respectivas páginas
  const tarjetasConfig = {
    tarjeta1: "./components/manometro.html",
    tarjeta2: "./components/ejemplo2.html",
    tarjeta3: "./components/ejemplo3.html",
    tarjeta4: "./components/ejemplo4.html",
  };

  Object.entries(tarjetasConfig).forEach(([clase, url]) => {
    document.querySelectorAll(`.${clase}`).forEach((tarjeta) => {
      tarjeta.addEventListener("click", function () {
        const imagenElement = tarjeta.querySelector(".tarjeta-delante img");
        const descripcionElement = tarjeta.querySelector(".tarjeta-atras p");

        if (!imagenElement || !descripcionElement) {
          console.error("No se encontraron la imagen o la descripción dentro de la tarjeta.");
          return;
        }

        const infoImagen = {
          src: imagenElement.getAttribute("src"),
          descripcion: descripcionElement.textContent,
        };

        localStorage.setItem("infoImagen", JSON.stringify(infoImagen));
        console.log("Imagen guardada en localStorage:", infoImagen);

        window.location.href = url;
      });
    });
  });
});