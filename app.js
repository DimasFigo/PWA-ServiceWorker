if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js') 
      .then(registration => {
        console.log('Service Worker terdaftar dengan scope:', registration.scope);
      })
      .catch(error => {
        console.error('Pendaftaran Service Worker gagal:', error);
      });
  });
}

function playSound(value) {
  const audio = new Audio(`sounds/${value}.mp3`);
  audio.play();
}