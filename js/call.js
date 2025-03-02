const entryButton = document.querySelectorAll(".entry-button");
const entryDisplay = document.querySelectorAll(".entryDisplay");
const entrybutton = document.querySelectorAll(".entrybutton");
const container = document.querySelectorAll(".filter");
const container1 = document.querySelectorAll(".filter2");
const container4 = document.querySelectorAll(".filter3");

const showSideMenu = () => {
  requestAnimationFrame(() => {
    if (entryDisplay[0].classList.contains("show")) {
      entryDisplay[0].classList.remove("show");
      container[0].style.filter = 'none';
      container1[0].style.filter = 'none';
      container4[0].style.filter = 'none';
      entryDisplay[0].style.display = 'none';
    } else {
      entryDisplay[0].classList.add("show");
      container[0].style.filter = 'blur(1px)';
      container1[0].style.filter = 'blur(1px)';
      container4[0].style.filter = 'blur(1px)';
      entryDisplay[0].style.display = 'block';

      document.querySelectorAll('.entryDisplay1').forEach(block => block.classList.remove('show1')); 
      document.querySelectorAll('.entryDisplay1').forEach(block => block.style.display = 'none');
    }
  });
};

entryButton.forEach(element => element.addEventListener("click", showSideMenu));
entrybutton.forEach(element => element.addEventListener("click", showSideMenu));

const entryButton1 = document.querySelectorAll(".entry__button2");
const entryDisplay1 = document.querySelectorAll(".entryDisplay1");
const entrybutton1 = document.querySelectorAll(".entrybutton1");
const container2 = document.querySelectorAll(".filter");
const container3 = document.querySelectorAll(".filter2");
const container5 = document.querySelectorAll(".filter3");

const showMenu = () => {
  requestAnimationFrame(() => {
    if (entryDisplay1[0].classList.contains("show1")) {
      entryDisplay1[0].classList.remove("show1");
      container2[0].style.filter = 'none';
      container3[0].style.filter = 'none';
      container5[0].style.filter = 'none';
      entryDisplay1[0].style.display = 'none';
    } else {
      entryDisplay1[0].classList.add("show1");
      container2[0].style.filter = 'blur(1px)';
      container3[0].style.filter = 'blur(1px)';
      container5[0].style.filter = 'blur(1px)';
      entryDisplay1[0].style.display = 'block';

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
    });
    document.querySelectorAll('.entryDisplay1').forEach(block => {
      block.classList.remove('show1');
      block.style.display = 'none';
    });
    
    container[0].style.filter = 'none';
    container1[0].style.filter = 'none';
    container2[0].style.filter = 'none';
    container3[0].style.filter = 'none';
    container4[0].style.filter = 'none';
    container5[0].style.filter = 'none';
  }
});


entryButton1.forEach(element => element.addEventListener("click", showMenu));
entrybutton1.forEach(element => element.addEventListener("click", showMenu));