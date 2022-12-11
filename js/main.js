// let swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   loop: true,
//   navigation: {
//     nextEl: ".slideNextBtn",
//     prevEl: ".slidePrevBtn",
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//     375: {
//       slidesPerView: 1,
//     },
//     425: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },

//   },
// });

// const openMenu = document.querySelector("#burgerNav");
// const closeMenu = document.querySelector("#closeNav");
// const mobileMenu = document.querySelector("#mobileNav");

// openMenu.onclick = () => {
//   mobileMenu.classList.remove("hidden");
//   openMenu.classList.add("hidden");
//   closeMenu.classList.remove("hidden");
// };

// closeMenu.onclick = () => {
//   mobileMenu.classList.add("hidden");
//   openMenu.classList.remove("hidden");
//   closeMenu.classList.add("hidden");
// };

// function clickImg(smallImg){
//   let fullImg = document.getElementById("imageBox");
//   fullImg.src = smallImg.src
// }

const iphoneArr = [
  {
    color: "gold",
    img: [
      "img/gold-1.jfif",
      "img/gold-2.jfif",
      "img/gold-3.jfif",
      "img/gold-4.jfif",
    ],
  },
  {
    color: "silver",
    img: [
      "img/silver-1.jfif",
      "img/silver-2.jfif",
      "img/silver-3.jfif",
      "img/silver-4.jfif",
    ],
  },
  {
    color: "space-black",
    img: [
      "img/space-black-1.jfif",
      "img/space-black-2.jfif",
      "img/space-black-3.jfif",
      "img/space-black-4.jfif",
    ],
  },
  {
    color: "purple",
    img: [
      "img/purple-1.jfif",
      "img/purple-2.jfif",
      "img/purple-3.jfif",
      "img/purple-4.jfif",
    ],
  },
];

const prices = {
  esim128gb: 16791500,
  sim128gb: 17965500,
  esim256gb: 18787500,
  sim256gb: 19257000,
  esim512gb: 21723000,
  sim512gb: 22897000,
  esim1tb: 25245500,
  sim1tb: 26419500,
};

const deletedPrices = {
  esim128gb: 20377500,
  sim128gb: 21802500,
  esim256gb: 22800000,
  sim256gb: 23370000,
  esim512gb: 26362500,
  sim512gb: 27787500,
  esim1tb: 30637500,
  sim1tb: 32062500,
};


const memoryBtns = document.querySelectorAll(".memory-btn");
const simBtns = document.querySelectorAll(".sim-btn");
const countMinus = document.querySelector(".count-btn__minus");
const countPlus = document.querySelector(".count-btn__plus");
const imgChooseBtns = document.querySelectorAll(".img-choose__btn");
const imgResult = document.querySelectorAll(".img-result");
const colorBtns = document.querySelectorAll(".color-btn");
const colorBtnImgs = document.querySelectorAll(".img-btn__img");
const sim = document.querySelector(".text-sim");
const memoryResult = document.querySelector(".text-memory");
const colorResult = document.querySelector(".text-color");
const simResult = document.querySelector(".text-sim");
const slider = document.querySelector(".img-slider");
let priceResult = document.querySelector(".price-result");
let countResult = document.querySelector(".count-result");
let deletedResult = document.querySelector(".deleted-result");

memoryResult.textContent = "128GB";
colorResult.textContent = "Gold";
simResult.textContent = "eSIM";

let colorCount = 0;
let imgInd = 0;

countResult.textContent = 1;
priceResult.textContent = prices.esim128gb;
deletedResult.textContent = deletedPrices.esim128gb;

let priceResNum = +priceResult.textContent;
let deletedResNum = +deletedResult.textContent;

simBtns.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    simBtns[0].classList.remove("btn--active");
    simBtns[1].classList.remove("btn--active");

    btn.classList.add("btn--active");

    priceChecking();
    priceResNum = Number(priceResult.textContent);
    countResult.textContent = 1;
  });
});

memoryBtns.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    memoryBtns[0].classList.remove("btn--active");
    memoryBtns[1].classList.remove("btn--active");
    memoryBtns[2].classList.remove("btn--active");
    memoryBtns[3].classList.remove("btn--active");

    btn.classList.add("btn--active");

    priceChecking();
    priceResNum = Number(priceResult.textContent);
    countResult.textContent = 1;
  });
});

function priceChecking() {
  if (
    memoryBtns[0].classList.contains("btn--active") &&
    simBtns[0].classList.contains("btn--active")
  ) {
    priceResult.textContent = prices.esim128gb;
    deletedResult.textContent = deletedPrices.esim128gb;
    simResult.textContent = "eSIM";
    memoryResult.textContent = "128GB";
  } else if (
    memoryBtns[0].classList.contains("btn--active") &&
    simBtns[1].classList.contains("btn--active")
  ) {
    priceResult.textContent = prices.sim128gb;
    deletedResult.textContent = deletedPrices.sim128gb;
    simResult.textContent = "SIM";
    memoryResult.textContent = "128GB";
  }

  if (
    memoryBtns[1].classList.contains("btn--active") &&
    simBtns[0].classList.contains("btn--active")
  ) {
    priceResult.textContent = prices.esim256gb;
    deletedResult.textContent = deletedPrices.esim256gb;
    simResult.textContent = "eSIM";
    memoryResult.textContent = "256GB";
  } else if (
    memoryBtns[1].classList.contains("btn--active") &&
    simBtns[1].classList.contains("btn--active")
  ) {
    priceResult.textContent = prices.sim256gb;
    deletedResult.textContent = deletedPrices.sim256gb;
    simResult.textContent = "SIM";
    memoryResult.textContent = "256GB";
  }

  if (memoryBtns[2].classList.contains("btn--active")) {
    if (
      memoryBtns[2].classList.contains("btn--active") &&
      simBtns[0].classList.contains("btn--active")
    ) {
      priceResult.textContent = prices.esim512gb;
      deletedResult.textContent = deletedPrices.esim512gb;
      simResult.textContent = "eSIM";
      memoryResult.textContent = "512GB";
    } else if (
      memoryBtns[2].classList.contains("btn--active") &&
      simBtns[1].classList.contains("btn--active")
    ) {
      priceResult.textContent = prices.sim512gb;
      deletedResult.textContent = deletedPrices.sim512gb;
      simResult.textContent = "SIM";
      memoryResult.textContent = "512GB";
    }
  }

  if (memoryBtns[3].classList.contains("btn--active")) {
    if (
      memoryBtns[3].classList.contains("btn--active") &&
      simBtns[0].classList.contains("btn--active")
    ) {
      priceResult.textContent = prices.esim1tb;
      deletedResult.textContent = deletedPrices.esim1tb;
      simResult.textContent = "eSIM";
      memoryResult.textContent = "1TB";
    } else if (
      memoryBtns[3].classList.contains("btn--active") &&
      simBtns[1].classList.contains("btn--active")
    ) {
      priceResult.textContent = prices.sim1tb;
      deletedResult.textContent = deletedPrices.sim1tb;
      simResult.textContent = "SIM";
      memoryResult.textContent = "1TB";
    }
  }
}

if (countResult.textContent == 1) {
  countMinus.disabled = true;
}

countMinus.addEventListener("click", (evt) => {
  let countResNum = Number(countResult.textContent);
  countResNum -= 1;
  countResult.textContent = countResNum;

  let NewpriceResNum = Number(priceResult.textContent);
  let NewdeleteResNum = Number(deletedResult.textContent);

  if (countResult.textContent == 1) {
    countMinus.disabled = true;
    priceResult.textContent = NewpriceResNum / 2;
    deletedResult.textContent = NewdeleteResNum / 2;
  }

  if (countResult.textContent > 1) {
    priceResult.textContent = NewpriceResNum - priceResNum;
    deletedResult.textContent = NewdeleteResNum - deletedResNum;
  }
});

countPlus.addEventListener("click", (evt) => {
  let countResNum = Number(countResult.textContent);
  countResNum += 1;
  countResult.textContent = countResNum;

  if (countResult.textContent > 1) {
    countMinus.disabled = false;
  }

  priceResult.textContent = priceResNum * countResNum;
  deletedResult.textContent = deletedResNum * countResNum;
});

imgChooseBtns.forEach((btn, ind) => {
  btn.addEventListener("click", (evt) => {
    imgChooseBtns[0].classList.remove("img--active");
    imgChooseBtns[1].classList.remove("img--active");
    imgChooseBtns[2].classList.remove("img--active");
    imgChooseBtns[3].classList.remove("img--active");

    btn.classList.add("img--active");

    imgInd = ind;
    imgResult.src = iphoneArr[colorCount].img[ind];

    if (
      !document.querySelector(".main").classList.contains("full-screen")
    ) {
      if (imgChooseBtns[0].classList.contains("img--active")) {
        slider.style.transform = `translateX(0)`;
      } else if (imgChooseBtns[1].classList.contains("img--active")) {
        slider.style.transform = `translateX(-${500}px)`;
      } else if (imgChooseBtns[2].classList.contains("img--active")) {
        slider.style.transform = `translateX(-${334 * 3}px)`;
      } else if (imgChooseBtns[3].classList.contains("img--active")) {
        slider.style.transform = `translateX(-${386 * 4}px)`;
      }
    }

    if (
      document.querySelector(".main").classList.contains("full-screen")
    ) {
      if (imgChooseBtns[0].classList.contains("img--active")) {
        slider.style.transform = "translateX(-40px)";
      } else if (imgChooseBtns[1].classList.contains("img--active")) {
        slider.style.transform = `translateX(-${700}px)`;
      } else if (imgChooseBtns[2].classList.contains("img--active")) {
        slider.style.transform = `translateX(-${460 * 3}px)`;
      } else if (imgChooseBtns[3].classList.contains("img--active")) {
        slider.style.transform = `translateX(-${540 * 4}px)`;
      }
    }
  });
});

colorBtns.forEach((btn, ind) => {
  btn.addEventListener("click", (evt) => {
    colorBtns[0].classList.remove("btn--active");
    colorBtns[1].classList.remove("btn--active");
    colorBtns[2].classList.remove("btn--active");
    colorBtns[3].classList.remove("btn--active");

    colorResult.textContent = btn.dataset.color;
    btn.classList.add("btn--active");
    imgResult.src = iphoneArr[ind].img[imgInd];

    colorBtnImgs.forEach((b, i) => {
      b.src = iphoneArr[ind].img[i];
    });
    imgResult.forEach((i, j) => {
      i.src = iphoneArr[ind].img[j];
    });

    if (colorBtns[0].classList.contains("btn--active")) {
      colorCount = 0;
    } else if (colorBtns[1].classList.contains("btn--active")) {
      colorCount = 1;
    } else if (colorBtns[2].classList.contains("btn--active")) {
      colorCount = 2;
    } else if (colorBtns[3].classList.contains("btn--active")) {
      colorCount = 3;
      console.log(colorCount);
    }
  });
});

document.querySelector(".fullscreen-btn").addEventListener("click", (evt) => {
    document.querySelector(".full-view").classList.toggle("hidden");
    document
      .querySelector(".min-view")
      .classList.toggle("hidden");

    document.querySelector(".main").classList.toggle("full-screen");
  });
