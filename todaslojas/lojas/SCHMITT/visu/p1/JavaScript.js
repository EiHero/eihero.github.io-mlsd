function setImage(imageSrc) {
  var img = document.getElementById("myimage");
  img.src = imageSrc;
  // Reinicia o zoom para a nova imagem
  document.querySelector(".img-zoom-lens").remove(); // Remove a lente atual
  imageZoom("myimage", "myresult"); // Inicializa o zoom para a nova imagem
}
