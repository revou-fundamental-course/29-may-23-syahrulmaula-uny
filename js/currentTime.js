const currentTimeElement = document.getElementById('current-time');

function updateCurrentTime() {
  const currentTime = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const formattedTime = currentTime.toLocaleString('id-ID', options);
  currentTimeElement.textContent = formattedTime;
}

// Panggil fungsi updateCurrentTime() untuk menampilkan waktu saat ini pada awalnya
updateCurrentTime();

// Kemudian panggil fungsi updateCurrentTime() setiap detik untuk memperbarui waktu saat ini
setInterval(updateCurrentTime, 1000);
