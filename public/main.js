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

document.querySelector('.add__btn').addEventListener('click', function () {
  // this.classList.toggle('btn-active');
  document.querySelector('.overflow-div').classList.add('open');
  document.querySelector('.todo__form').classList.add('form__active');
})
document.querySelector('.overflow-div').addEventListener('click',function(e){

if(e.target.classList.contains('overflow-div')){
  this.classList.remove('open');
  document.querySelector('.todo__form').classList.remove('form__active');

}


})
