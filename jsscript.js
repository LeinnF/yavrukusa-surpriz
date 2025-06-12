function scrollGallery(id, direction) {
  const container = document.getElementById(id);
  const scrollAmount = 270;
  container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

function kaydetNot() {
  const not = document.getElementById('defter').value;
  localStorage.setItem('aniDefteri', not);
}

window.onload = function () {
  // Anı Defteri'ni yükle
  const not = localStorage.getItem('aniDefteri');
  if (not) document.getElementById('defter').value = not;

  // Rastgele sevgi notu göster
  const notlar = [
    "Seninle her şey daha güzel 💖",
    "Birlikte nice anılara 💫",
    "Sana her baktığımda içim ısınıyor 💌",
    "Kalbim hep seninle atıyor 💓",
    "Sonsuza kadar seninle olmak istiyorum 💍"
  ];
  document.getElementById('randomNote').innerText =
    notlar[Math.floor(Math.random() * notlar.length)];

  // Sayaca 10 Ekim'e kalan gün
  const hedefTarih = new Date("2025-10-10");
  const bugun = new Date();
  const fark = hedefTarih - bugun;
  const gun = Math.ceil(fark / (1000 * 60 * 60 * 24));
  document.getElementById("sayac").innerText = `Kavuşmamıza ${gun} gün kaldı 💕`;
};
