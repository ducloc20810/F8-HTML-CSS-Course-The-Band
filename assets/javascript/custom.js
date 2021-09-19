function slider() {
  const imgArr = document.getElementsByClassName("img-contain");
  let i = 0;

  for (i; i < imgArr.length; i++) {
    const style = getComputedStyle(imgArr[i]);
    if (style.display === "block") {
      let nextIndex = i + 1;
      if (nextIndex >= imgArr.length) nextIndex = 0;
      imgArr[nextIndex].classList.add("cur-slide");
      imgArr[i].classList.remove("cur-slide");
      break;
    }
  }
  setTimeout(slider, 5000);
}

slider();

const buyBtns = document.querySelectorAll(".buy-btn");
const closeBtn = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");
const modalTicketBuy = document.querySelector(".ticket-buy");

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", modalBuy);
}
closeBtn.addEventListener("click", modalClose);
document.querySelector(".close-btn").addEventListener("click", modalClose);
modal.addEventListener("click", modalClose);
modalTicketBuy.addEventListener("click", (event) => {
  event.stopPropagation();
});

function modalBuy() {
  modal.classList.add("open");
}

function modalClose() {
  modal.classList.remove("open");
}

// Bar-menu header
let header = document.querySelector("#header");
let mobileMenu = document.querySelector("#mobile-menu-btn");
let headerHeight = header.clientHeight;

// Open/close Menu
mobileMenu.onclick = () => {
  let isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

//Auto close when choose menu
let menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (let item = 0; item < menuItems.length; item++) {
  const menuItem = menuItems[item];

  menuItem.onclick = (event) => {
    const isParentMenu =
      menuItem.nextElementSibling &&
      menuItem.nextElementSibling.classList.contains("subnav");
    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}
