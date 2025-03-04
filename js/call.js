import { navbar, filter3, filter1, filter4 } from './menu.js';

const entryButton = document.querySelectorAll(".entry-button");
const entryDisplay = document.querySelectorAll(".entryDisplay");
const entrybutton = document.querySelectorAll(".entrybutton");

const showSideMenu = () => {
  requestAnimationFrame(() => {
    if (entryDisplay[0].classList.contains("show")) {
      entryDisplay[0].classList.remove("show");
      entryDisplay[0].style.display = 'none';
      filter3.forEach(filter => filter.style.filter = 'none');
      filter1.forEach(filter => filter.style.filter = 'none');
      filter4.forEach(filter => filter.style.filter = 'none');
    } else {
      entryDisplay[0].classList.add("show");
      entryDisplay[0].style.display = 'block';
      filter3.forEach(filter => filter.style.filter = 'blur(5px)');
      filter1.forEach(filter => filter.style.filter = 'blur(5px)');
      filter4.forEach(filter => filter.style.filter = 'blur(5px)');

      document.querySelectorAll('.entryDisplay1').forEach(block => block.classList.remove('show'));
      document.querySelectorAll('.entryDisplay1').forEach(block => block.style.display = 'none');
    }
  });
};

entryButton.forEach(element => element.addEventListener("click", showSideMenu));
entrybutton.forEach(element => element.addEventListener("click", showSideMenu));

const entryButton1 = document.querySelectorAll(".entry__button2");
const entryDisplay1 = document.querySelectorAll(".entryDisplay1");
const entrybutton1 = document.querySelectorAll(".entrybutton1");

const showMenu = () => {
  requestAnimationFrame(() => {
    if (entryDisplay1[0].classList.contains("show1")) {
      entryDisplay1[0].classList.remove("show1");
      entryDisplay1[0].style.display = 'none';
      filter3.forEach(filter => filter.style.filter = 'none');
      filter1.forEach(filter => filter.style.filter = 'none');
      filter4.forEach(filter => filter.style.filter = 'none');
    } else {
      entryDisplay1[0].classList.add("show1");
      entryDisplay1[0].style.display = 'block';
      filter3.forEach(filter => filter.style.filter = 'blur(5px)');
      filter1.forEach(filter => filter.style.filter = 'blur(5px)');
      filter4.forEach(filter => filter.style.filter = 'blur(5px)');

      document.querySelectorAll('.entryDisplay').forEach(block => block.classList.remove('show'));
      document.querySelectorAll('.entryDisplay').forEach(block => block.style.display = 'none');
    }
  });
};

document.addEventListener('click', (event) => {
  if (!event.target.closest('.entryDisplay') && !event.target.closest('.entryDisplay1') && !event.target.closest('.entry-button') && !event.target.closest('.entry__button2')) {
    document.querySelectorAll('.entryDisplay').forEach(block => {
    block.classList.remove('show');
    block.style.display = 'none';
    filter3.forEach(filter => filter.style.filter = 'none');
    filter1.forEach(filter => filter.style.filter = 'none');
    filter4.forEach(filter => filter.style.filter = 'none');
    });

    document.querySelectorAll('.entryDisplay1').forEach(block => {
      block.classList.remove('show1');
      block.style.display = 'none';
      filter3.forEach(filter => filter.style.filter = 'none');
      filter1.forEach(filter => filter.style.filter = 'none');
      filter4.forEach(filter => filter.style.filter = 'none');
    });
  }
});

entryButton1.forEach(element => element.addEventListener("click", showMenu));
entrybutton1.forEach(element => element.addEventListener("click", showMenu));

const showRightMenu = () => {
  navbar.classList.remove('show3');

  entryDisplay1[0].classList.toggle("show");
  if (entryDisplay1[0].classList.contains("show")) {
    entryDisplay1[0].style.display = 'block';
    filter3.forEach(filter => filter.style.filter = 'blur(5px)');
    filter1.forEach(filter => filter.style.filter = 'blur(5px)');
    filter4.forEach(filter => filter.style.filter = 'blur(5px)');
  } else {
    entryDisplay1[0].style.display = 'none';
    filter3.forEach(filter => filter.style.filter = 'none');
    filter1.forEach(filter => filter.style.filter = 'none');
    filter4.forEach(filter => filter.style.filter = 'none');
  }

  entryDisplay[0].classList.toggle("show1");
  if (entryDisplay[0].classList.contains("show1")) {
    entryDisplay[0].style.display = 'block';
    filter3.forEach(filter => filter.style.filter = 'blur(5px)');
    filter1.forEach(filter => filter.style.filter = 'blur(5px)');
    filter4.forEach(filter => filter.style.filter = 'blur(5px)');
  } else {
    entryDisplay[0].style.display = 'none';
    filter3.forEach(filter => filter.style.filter = 'none');
    filter1.forEach(filter => filter.style.filter = 'none');
    filter4.forEach(filter => filter.style.filter = 'none');
  }

  
};

document.querySelectorAll(".entry-button").forEach(element => element.addEventListener("click", showRightMenu));
document.querySelectorAll(".entry__button2").forEach(element => element.addEventListener("click", showRightMenu));
