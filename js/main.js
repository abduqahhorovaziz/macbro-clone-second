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

const previewSalary = document.querySelector(".preview-salary");
const closeBtn = document.querySelector(".close-btn");
const modalWrap = document.querySelector(".modal-wrap");

memoryResult.textContent = "128GB";
colorResult.textContent = "Gold";
simResult.textContent = "eSIM";

let salePriceEsim = 999;
let deletedPriceEsim = 1009;

let salePriceSim = 1009;
let deletedPriceSim = 1019;

let colorCount = 0;
let imgInd = 0;

countResult.textContent = 1;
priceResult.textContent = salePriceEsim;
deletedResult.textContent = deletedPriceEsim;

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
    priceResult.textContent = salePriceEsim;
    deletedResult.textContent = deletedPriceEsim;
    simResult.textContent = "eSIM";
    memoryResult.textContent = "128GB";
  } else if (
    memoryBtns[0].classList.contains("btn--active") &&
    simBtns[1].classList.contains("btn--active")
  ) {
    priceResult.textContent = salePriceSim;
    deletedResult.textContent = deletedPriceSim;
    simResult.textContent = "SIM";
    memoryResult.textContent = "128GB";
  }

  if (
    memoryBtns[1].classList.contains("btn--active") &&
    simBtns[0].classList.contains("btn--active")
  ) {
    priceResult.textContent = salePriceEsim + 100;
    deletedResult.textContent = deletedPriceEsim + 100;
    simResult.textContent = "eSIM";
    memoryResult.textContent = "256GB";
  } else if (
    memoryBtns[1].classList.contains("btn--active") &&
    simBtns[1].classList.contains("btn--active")
  ) {
    priceResult.textContent = salePriceSim + 100;
    deletedResult.textContent = deletedPriceSim + 100;
    simResult.textContent = "SIM";
    memoryResult.textContent = "256GB";
  }

  if (memoryBtns[2].classList.contains("btn--active")) {
    if (
      memoryBtns[2].classList.contains("btn--active") &&
      simBtns[0].classList.contains("btn--active")
    ) {
      priceResult.textContent = salePriceEsim + 200;
      deletedResult.textContent = deletedPriceEsim + 200;
      simResult.textContent = "eSIM";
      memoryResult.textContent = "512GB";
    } else if (
      memoryBtns[2].classList.contains("btn--active") &&
      simBtns[1].classList.contains("btn--active")
    ) {
      priceResult.textContent = salePriceSim + 200;
      deletedResult.textContent = deletedPriceSim + 200;
      simResult.textContent = "SIM";
      memoryResult.textContent = "512GB";
    }
  }

  if (memoryBtns[3].classList.contains("btn--active")) {
    if (
      memoryBtns[3].classList.contains("btn--active") &&
      simBtns[0].classList.contains("btn--active")
    ) {
      priceResult.textContent = salePriceEsim + 300;
      deletedResult.textContent = deletedPriceEsim + 300;
      simResult.textContent = "eSIM";
      memoryResult.textContent = "1TB";
    } else if (
      memoryBtns[3].classList.contains("btn--active") &&
      simBtns[1].classList.contains("btn--active")
    ) {
      priceResult.textContent = salePriceSim + 300;
      deletedResult.textContent = deletedPriceSim + 300;
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

    if (!document.querySelector(".main").classList.contains("full-screen")) {
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

    if (document.querySelector(".main").classList.contains("full-screen")) {
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
  document.querySelector(".min-view").classList.toggle("hidden");

  document.querySelector(".main").classList.toggle("full-screen");
});

// MODAL
const modal = document.querySelector(".salary-modal");
const modalBtn = document.querySelector(".modal-btn");
const initialPayInput = document.querySelector("#initialFee");
const procentInput = document.querySelector("#procent");
let monthlyPaymentResult = document.querySelector(".monthly-payment");
let allPaymentResult = document.querySelector(".all-payment");
const monthlyBtns = document.querySelectorAll(".monthly-btn");

previewSalary.addEventListener("click", () => {
  modal.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

let newPriceResult = Math.floor(priceResNum + priceResNum * 0.1);

const monthlyPrices = {
  oneMonth: newPriceResult,
  twoMonth: newPriceResult + 1 * (priceResNum * 0.1),
  threeMonth: newPriceResult + 2 * (priceResNum * 0.1),
  fourMonth: newPriceResult + 3 * (priceResNum * 0.1),
  fiveMonth: newPriceResult + 4 * (priceResNum * 0.1),
  sixMonth: newPriceResult + 5 * (priceResNum * 0.1),
  sevenMonth: newPriceResult + 6 * (priceResNum * 0.1),
  eightMonth: newPriceResult + 7 * (priceResNum * 0.1),
  nineMonth: newPriceResult + 8 * (priceResNum * 0.1),
  tenMonth: newPriceResult + 9 * (priceResNum * 0.1),
  elevenMonth: newPriceResult + 10 * (priceResNum * 0.1),
  twelveMonth: newPriceResult + 11 * (priceResNum * 0.1),
};

monthlyPaymentResult.textContent = Math.floor(monthlyPrices.oneMonth);
monthlyPaymentResult.textContent = Math.floor(monthlyPrices.twoMonth / 1) - initialPayInput.value;
initialPayInput.addEventListener("input", () => {
monthlyPaymentResult.textContent =
  Math.floor(monthlyPrices.twoMonth / 2) - initialPayInput.value;
});
allPaymentResult.textContent = Math.floor(monthlyPrices.oneMonth);

monthlyBtns.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    monthlyBtns[0].classList.remove("btn--activee");
    monthlyBtns[1].classList.remove("btn--activee");
    monthlyBtns[2].classList.remove("btn--activee");
    monthlyBtns[3].classList.remove("btn--activee");
    monthlyBtns[4].classList.remove("btn--activee");
    monthlyBtns[5].classList.remove("btn--activee");
    monthlyBtns[6].classList.remove("btn--activee");
    monthlyBtns[7].classList.remove("btn--activee");
    monthlyBtns[8].classList.remove("btn--activee");
    monthlyBtns[9].classList.remove("btn--activee");
    monthlyBtns[10].classList.remove("btn--activee");
    monthlyBtns[11].classList.remove("btn--activee");

    monthlyPaymentResult.textContent = Math.floor(monthlyPrices.oneMonth);
    allPaymentResult.textContent = Math.floor(monthlyPrices.oneMonth);

    btn.classList.add("btn--activee");
    paymentCheck();
  });
});

function paymentCheck() {
  if (monthlyBtns[1].classList.contains("btn--activee")) {
    // monthlyPaymentResult.textContent = Math.floor(monthlyPrices.twoMonth / 2);
    monthlyPaymentResult.textContent =
      Math.floor(monthlyPrices.twoMonth / 2) - initialPayInput.value;
    initialPayInput.addEventListener("input", () => {
      monthlyPaymentResult.textContent =
        Math.floor(monthlyPrices.twoMonth / 2) - initialPayInput.value;
    });
    allPaymentResult.textContent = Math.floor(monthlyPrices.twoMonth);
  } else if (monthlyBtns[2].classList.contains("btn--activee")) {
    // monthlyPaymentResult.textContent = Math.floor(monthlyPrices.threeMonth / 3);
    monthlyPaymentResult.textContent =
      Math.floor(monthlyPrices.threeMonth / 3) - initialPayInput.value;
    initialPayInput.addEventListener("input", () => {
      monthlyPaymentResult.textContent =
        Math.floor(monthlyPrices.threeMonth / 3) - initialPayInput.value;
    });
    allPaymentResult.textContent = Math.floor(monthlyPrices.threeMonth);
  } else if (monthlyBtns[3].classList.contains("btn--activee")) {
    // monthlyPaymentResult.textContent = Math.floor(monthlyPrices.fourMonth / 4);
    monthlyPaymentResult.textContent =
      Math.floor(monthlyPrices.fourMonth / 4) - initialPayInput.value;
    initialPayInput.addEventListener("input", () => {
      monthlyPaymentResult.textContent =
        Math.floor(monthlyPrices.fourMonth / 4) - initialPayInput.value;
    });
    allPaymentResult.textContent = Math.floor(monthlyPrices.fourMonth);
  } else if (monthlyBtns[4].classList.contains("btn--activee")) {
    // monthlyPaymentResult.textContent = Math.floor(monthlyPrices.fiveMonth / 5);
    monthlyPaymentResult.textContent =
      Math.floor(monthlyPrices.fiveMonth / 5) - initialPayInput.value;
    initialPayInput.addEventListener("input", () => {
      monthlyPaymentResult.textContent =
        Math.floor(monthlyPrices.fiveMonth / 5) - initialPayInput.value;
    });
    allPaymentResult.textContent = Math.floor(monthlyPrices.fiveMonth);
  } else if (monthlyBtns[5].classList.contains("btn--activee")) {
    // monthlyPaymentResult.textContent = Math.floor(monthlyPrices.sixMonth / 6);
    monthlyPaymentResult.textContent =
      Math.floor(monthlyPrices.sixMonth / 6) - initialPayInput.value;
    initialPayInput.addEventListener("input", () => {
      monthlyPaymentResult.textContent =
        Math.floor(monthlyPrices.sixMonth / 6) - initialPayInput.value;
    });
    allPaymentResult.textContent = Math.floor(monthlyPrices.sixMonth);
  } else if (monthlyBtns[6].classList.contains("btn--activee")) {
    // monthlyPaymentResult.textContent = Math.floor(monthlyPrices.sevenMonth / 7);
    monthlyPaymentResult.textContent =
      Math.floor(monthlyPrices.sevenMonth / 7) - initialPayInput.value;
    initialPayInput.addEventListener("input", () => {
      monthlyPaymentResult.textContent =
        Math.floor(monthlyPrices.sevenMonth / 7) - initialPayInput.value;
    });
    allPaymentResult.textContent = Math.floor(monthlyPrices.sevenMonth);
  } else if (monthlyBtns[7].classList.contains("btn--activee")) {
    // monthlyPaymentResult.textContent = Math.floor(monthlyPrices.eightMonth / 8);
    monthlyPaymentResult.textContent =
      Math.floor(monthlyPrices.eightMonth / 8) - initialPayInput.value;
    initialPayInput.addEventListener("input", () => {
      monthlyPaymentResult.textContent =
        Math.floor(monthlyPrices.eightMonth / 8) - initialPayInput.value;
    });
    allPaymentResult.textContent = Math.floor(monthlyPrices.eightMonth);
  } else if (monthlyBtns[8].classList.contains("btn--activee")) {
    // monthlyPaymentResult.textContent = Math.floor(monthlyPrices.nineMonth / 9);
    monthlyPaymentResult.textContent =
      Math.floor(monthlyPrices.nineMonth / 9) - initialPayInput.value;
    initialPayInput.addEventListener("input", () => {
      monthlyPaymentResult.textContent =
        Math.floor(monthlyPrices.nineMonth / 9) - initialPayInput.value;
    });
    allPaymentResult.textContent = Math.floor(monthlyPrices.nineMonth);
  } else if (monthlyBtns[9].classList.contains("btn--activee")) {
    // monthlyPaymentResult.textContent = Math.floor(monthlyPrices.tenMonth / 10);
    monthlyPaymentResult.textContent =
      Math.floor(monthlyPrices.tenMonth / 10) - initialPayInput.value;
    initialPayInput.addEventListener("input", () => {
      monthlyPaymentResult.textContent =
        Math.floor(monthlyPrices.tenMonth / 10) - initialPayInput.value;
    });
    allPaymentResult.textContent = Math.floor(monthlyPrices.tenMonth);
  } else if (monthlyBtns[10].classList.contains("btn--activee")) {
    // monthlyPaymentResult.textContent = Math.floor(monthlyPrices.elevenMonth / 11);
    monthlyPaymentResult.textContent =
      Math.floor(monthlyPrices.elevenMonth / 11) - initialPayInput.value;
    initialPayInput.addEventListener("input", () => {
      monthlyPaymentResult.textContent =
        Math.floor(monthlyPrices.elevenMonth / 11) - initialPayInput.value;
    });
    allPaymentResult.textContent = Math.floor(monthlyPrices.elevenMonth);
  } else if (monthlyBtns[11].classList.contains("btn--activee")) {
    // monthlyPaymentResult.textContent = Math.floor(monthlyPrices.twelveMonth / 12);
    monthlyPaymentResult.textContent =
      Math.floor(monthlyPrices.twelveMonth / 12) - initialPayInput.value;
    initialPayInput.addEventListener("input", () => {
      monthlyPaymentResult.textContent =
        Math.floor(monthlyPrices.twelveMonth / 12) - initialPayInput.value;
    });
    allPaymentResult.textContent = Math.floor(monthlyPrices.twelveMonth);
  }
}

// initialPayInput.addEventListener("input", function () {
//   monthlyPaymentResult.textContent = newPriceResult - initialPayInput.value;
// });
