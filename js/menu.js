export const menu = document.getElementById("menu-button");
export const navbar = document.querySelector(".container");
export const menu2 = document.getElementById("menu-button-2");
export const filter3 = document.querySelectorAll(".filter");
export const filter1 = document.querySelectorAll(".filter2");
export const filter4 = document.querySelectorAll(".filter3");

const applyFilter = (elements, filterValue) => {
  elements.forEach(element => element.style.filter = filterValue);
};

menu.onclick = () => {
  menu.classList.toggle('clicked');
  navbar.classList.toggle('show3');
  filter3.forEach(filter => filter.style.filter = 'blur(5px)');
  filter1.forEach(filter => filter.style.filter = 'blur(5px)');
  filter4.forEach(filter => filter.style.filter = 'blur(5px)');
};

menu2.onclick = () => {
  menu2.classList.toggle('clicked1');
  navbar.classList.toggle('show3');
  filter3.forEach(filter => filter.style.filter = 'blur(5px)');
  filter1.forEach(filter => filter.style.filter = 'blur(5px)');
  filter4.forEach(filter => filter.style.filter = 'blur(5px)');
};



