export const menu = document.getElementById("menu-button");
export const navbar = document.querySelector(".container");
export const menu2 = document.getElementById("menu-button-2");
export const filter3 = document.querySelectorAll(".filter");
export const filter1 = document.querySelectorAll(".filter2");
export const filter4 = document.querySelectorAll(".filter3");
export const entryButton = document.querySelectorAll(".entry-button");

menu.onclick = () => {
  menu.classList.toggle('clicked');
  navbar.classList.toggle('show3');
  applyBlur('blur(1px)');
}

menu2.onclick = () => {
  menu2.classList.toggle('clicked1');
  navbar.classList.toggle('show3');
  applyBlur('none');
}

document.addEventListener('click', (event) => {
  if (!event.target.closest('#menu-button') && !event.target.closest('#menu-button-2') && !event.target.closest('.container')) {
    navbar.classList.remove('show3');
    menu.classList.remove('clicked');
    menu2.classList.remove('clicked1');
    applyBlur('none');
  }
});

export function applyBlur(filterValue) {
  filter3[0].style.filter = filterValue;
  filter1[0].style.filter = filterValue;
  filter4[0].style.filter = filterValue;
} 

