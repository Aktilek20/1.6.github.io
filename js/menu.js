export const menu = document.getElementById("menu-button");
export const navbar = document.querySelector(".container");
export const menu2 = document.getElementById("menu-button-2");
export const filter3 = document.querySelectorAll(".filter");
export const filter1 = document.querySelectorAll(".filter2");
export const filter4 = document.querySelectorAll(".filter3");
 const filter = document.querySelectorAll(".filter");
 const filter2 = document.querySelectorAll(".filter2");
 const filter5 = document.querySelectorAll(".filter3");


menu.onclick = () => {
  navbar.classList.toggle('show3');
  toggleBlur();
};

menu2.onclick = () => {
  navbar.classList.toggle('show3');
  toggleBlur(); 
};

function toggleBlur() {
  filter.forEach(element => element.classList.toggle('filter-blur'));
  filter2.forEach(element => element.classList.toggle('filter-blur'));
  filter5.forEach(element => element.classList.toggle('filter-blur'));
}


document.addEventListener('click', (event) => {
  if (!event.target.closest('#menu-button') && !event.target.closest('#menu-button-2') && !event.target.closest('.container')) {
      navbar.classList.remove('show3');
      filter.forEach(element => element.classList.remove('filter-blur'));
      filter2.forEach(element => element.classList.remove('filter-blur'));
      filter5.forEach(element => element.classList.remove('filter-blur'));
  }
});
