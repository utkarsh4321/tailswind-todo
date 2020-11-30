document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');

  }

})


document.getElementById('toogleBtn').addEventListener('click', () => {
  if (document.documentElement.classList.contains('dark')) {
    localStorage.theme = 'light';
  } else {
    localStorage.theme = 'dark';

  }
  document.documentElement.classList.toggle('dark');
})