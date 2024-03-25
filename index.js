// Mở phiếu mua hàng khi click mua mèo
const buyBtns = document.querySelectorAll(".js-buy-cat");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const modelClose = document.querySelector(".js-modal-close");

function showBuyCat() {
  modal.classList.add("open");
}
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyCat);
}

function hideBuyCat() {
  modal.classList.remove("open");
}
modelClose.addEventListener("click", hideBuyCat);
modal.addEventListener("click", hideBuyCat);
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;

// Đóng / mở Mobile Menu
mobileMenu.onclick = function () {
  var isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};
// Tự động đóng khi click 1 phần tử trong menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];
  menuItem.onclick = function (event) {
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");
    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}

// SLider
const listImg = document.querySelector(".list-img");
const imgs = document.querySelectorAll(".slider-img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let index = 0;

const handleChangeSlide = () => {
  index = index + 1 < imgs.length ? index + 1 : 0;
  let width = imgs[0].offsetWidth;
  listImg.style.transform = `translateX(-${width * index}px)`;
};

let handleEventChangeSlide = setInterval(() => {
  handleChangeSlide();
}, 4000);

nextBtn.addEventListener("click", function () {
  clearInterval(handleEventChangeSlide);
  handleChangeSlide();
  handleEventChangeSlide = setInterval(() => {
    handleChangeSlide();
  }, 4000);
});

prevBtn.addEventListener("click", function () {
  clearInterval(handleEventChangeSlide);
  index = index - 1 < 0 ? imgs.length - 1 : index - 1;
  let width = imgs[0].offsetWidth;
  listImg.style.transform = `translateX(-${width * index}px)`;
  handleEventChangeSlide = setInterval(() => {
    handleChangeSlide();
  }, 4000);
});
