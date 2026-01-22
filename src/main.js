import './main.scss' 

const themeToggle = document.querySelector('#theme-toggle');
const html = document.querySelector('html');

// Cek preferensi user saat halaman dimuat
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  html.classList.add('dark');
  themeToggle.innerHTML = '☀️'; 
} else {
  html.classList.remove('dark');
  themeToggle.innerHTML = '🌙'; 
}

// Logika saat tombol diklik
themeToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  
  if (html.classList.contains('dark')) {
    localStorage.theme = 'dark';
    themeToggle.innerHTML = '☀️';
  } else {
    localStorage.theme = 'light';
    themeToggle.innerHTML = '🌙';
  }
});