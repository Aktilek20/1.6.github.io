const menu = document.getElementById("menu-button");
const navbar = document.querySelector(".container");
const menu2 = document.getElementById("menu-button-2");
const filter3 = document.querySelectorAll(".filter");
const filter1 = document.querySelectorAll(".filter2");
const filter4 = document.querySelectorAll(".filter3");

menu.onclick = () => {
    menu.classList.toggle('clicked');
    navbar.classList.toggle('show3');
    filter3[0].style.filter = 'blur(1px)';
    filter1[0].style.filter = 'blur(1px)';
    filter4[0].style.filter = 'blur(1px)';
}

menu2.onclick=()=>{
    menu2.classList.toggle('clicked1');
    navbar.classList.toggle('show3');
    filter3[0].style.filter = 'none';
    filter1[0].style.filter = 'none';
    filter4[0].style.filter = 'none';
}

