// Inicializar a biblioteca Sal.js
sal();

// Chamar a função para revelar as imagens
function revealImages() {
  const revealImages = document.querySelectorAll('.reveal-img');
  
  for (const img of revealImages) {
    img.classList.add('sal'); // Adicionar classe "sal" para habilitar a animação
  }
}

// Chamar a função quando a página é carregada para revelar imagens inicialmente visíveis
revealImages();
