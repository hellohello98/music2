const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

menuOpen.addEventListener('click', () => sidebar.style.left = '0');

menuClose.addEventListener('click', () => sidebar.style.left = '-100%');


const logoutBtn = document.createElement('button');
logoutBtn.innerHTML = '<i class="bx bx-log-out"></i> Logout';
logoutBtn.style.background = 'transparent';
logoutBtn.style.border = 'none';
logoutBtn.style.color = '#919191';
logoutBtn.style.cursor = 'pointer';
logoutBtn.style.marginLeft = '20px';

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
});


document.querySelector('.profile').appendChild(logoutBtn);

const username = localStorage.getItem('username');
if(username) {
    document.getElementById('usernameDisplay').textContent = username;
}


function filterSongs() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const songItems = document.querySelectorAll(".music-list .item");

  songItems.forEach(item => {
    const songName = item.querySelector("h5").textContent.toLowerCase();
    const artistName = item.querySelector("p").textContent.toLowerCase();
    
    
    if (songName.includes(searchTerm) || artistName.includes(searchTerm)) {
      item.style.display = "flex"; 
    } else {
      item.style.display = "none"; 
    }
  });
}


document.querySelectorAll('.genres a.item').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    
    document.querySelectorAll('.genre-page').forEach(page => {
      page.style.display = 'none';
    });
    
    
    const genreId = this.getAttribute('href').substring(1);
    document.getElementById(genreId).style.display = 'block';
    
    
    document.querySelector('.playlist').style.display = 'none';
  });
});


function goBack() {
  document.querySelectorAll('.genre-page').forEach(page => {
    page.style.display = 'none';
  });
  document.querySelector('.playlist').style.display = 'flex';
}


document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
audio.addEventListener('play', () => {
  const source = audioCtx.createMediaElementSource(audio);
  source.connect(analyser);
  
});


const audio = new Audio();
function playSong(songPath) {
  audio.src = songPath;
  audio.play();
  document.querySelector('.play-button').classList.replace('bx-play', 'bx-pause');
}