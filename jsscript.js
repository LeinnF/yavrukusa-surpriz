// Sayaç (10 Ekim için)
function countdown() {
  const targetDate = new Date('2025-10-10T00:00:00');
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById('sayac').textContent = "💕 Kavuşma Günü Geldi! 💕";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('sayac').textContent = `Kavuşmamıza ${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye kaldı.`;
}

const interval = setInterval(countdown, 1000);
countdown();


// Fotoğraf ve Video galerisi kaydırma fonksiyonu
function scrollGallery(id, direction) {
  const container = document.getElementById(id);
  const scrollAmount = 240; // Kaydırma mesafesi (px)
  container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

// Anı defteri notlarını localStorage'da saklama
function kaydetNot() {
  const textarea = document.getElementById('defter');
  const not = textarea.value.trim();

  if (!not) {
    alert('Lütfen bir not yazınız!');
    return;
  }

  let notlar = JSON.parse(localStorage.getItem('notlar') || '[]');
  notlar.push(not);
  localStorage.setItem('notlar', JSON.stringify(notlar));

  textarea.value = '';
  alert('Notunuz kaydedildi!');

  gosterNotlar();
}

function gosterNotlar() {
  let notlar = JSON.parse(localStorage.getItem('notlar') || '[]');
  if (notlar
