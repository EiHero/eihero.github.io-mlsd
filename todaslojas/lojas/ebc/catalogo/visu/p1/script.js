const productContainer = document.getElementById('product-container');
const mediaFile = 'nome_do_arquivo.ext'; // Substitua pelo nome do seu arquivo de mídia, incluindo a extensão

function loadMedia(file) {
  // Determina o tipo de mídia pela extensão do arquivo
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  const videoExtensions = ['.mp4', '.webm', '.ogg'];

  const extension = file.slice(((file.lastIndexOf(".") - 1) >>> 0) + 2);

  if (imageExtensions.includes(`.${extension}`)) {
    const imgElement = document.createElement('img');
    imgElement.src = file;
    imgElement.alt = 'Descrição do Produto';
    productContainer.appendChild(imgElement);
  } else if (videoExtensions.includes(`.${extension}`)) {
    const videoElement = document.createElement('video');
    videoElement.src = file;
    videoElement.controls = true;
    productContainer.appendChild(videoElement);
  } else {
    console.log('Formato de arquivo não suportado.');
  }
}

loadMedia(mediaFile);
