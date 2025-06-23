function playSound(value) {
  const audio = new Audio(`sounds/${value}.mp3`);
  audio.play();
}