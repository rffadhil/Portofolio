/** @format */

// Fungsi untuk menampilkan alert kontak
function showAlert() {
  alert(
    "Halo! Saya Rafi Fadhil Amanullah\nNIM: 241011400893\n\nTerima kasih telah mengunjungi website saya! 😊"
  );
}

// Fungsi untuk mengubah tema
let isDarkTheme = false;
function changeTheme() {
  const body = document.body;
  if (!isDarkTheme) {
    body.style.background =
      "linear-gradient(135deg, #000000ff 0%, #000000ff 100%)";
    isDarkTheme = true;
  } else {
    body.style.background =
      "linear-gradient(135deg, #00082cff 0%, #00082cff 100%)";
    isDarkTheme = false;
  }
}

// Fungsi untuk animasi profil
function animateProfile() {
  const avatar = document.getElementById("avatar");
  const name = document.getElementById("name");
  const nim = document.getElementById("nim");

  avatar.classList.add("animate-pulse");
  name.style.color = "#e74c3c";
  nim.style.background = "linear-gradient(135deg, #e74c3c, #c0392b)";

  setTimeout(() => {
    avatar.classList.remove("animate-pulse");
    name.style.color = "#ffffffff";
    nim.style.background = "linear-gradient(135deg, #000000ff, #764ba2)";
  }, 3000);
}

// Animasi saat halaman dimuat
window.addEventListener("load", function () {
  const cards = document.querySelectorAll(".info-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "all 0.6s ease";
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 100);
    }, index * 200);
  });
});

// Efek hover pada avatar
document.getElementById("avatar").addEventListener("mouseover", function () {
  this.style.transform = "scale(1.1) rotate(5deg)";
});

document.getElementById("avatar").addEventListener("mouseout", function () {
  this.style.transform = "scale(1) rotate(0deg)";
});

// Jam digital (bonus)
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("id-ID");
  document.title = `${timeString} - Rafi Fadhil Amanullah`;
}

setInterval(updateTime, 1000);
updateTime();
