let colorText = document.querySelector("#color-text");
let selectedColor = document.querySelectorAll(".size");
let colorList = document.querySelector("#color-list");

//Modal elements
let quantity = document.querySelector("#quantity");
let minusQuantity = document.querySelector("#minus-quantity");
let plusQuantity = document.querySelector("#plus-quantity");
let agreeQuantity = document.querySelector("#agree-quantity");
let cartQuantity = document.querySelector("#cart-quantity");
let btnCart = document.querySelector("#btn-cart");
let modalSelectedColor = document.querySelector("#modal-selected-color");

let currentQuantity = 0;
let selectedColorName = "";
let selectedColorHex = "";
let list = "";

minusQuantity.addEventListener("click", function () {
  currentQuantity--;
  if (currentQuantity < 0) currentQuantity = 0;
  quantity.textContent = currentQuantity;
});

plusQuantity.addEventListener("click", function () {
  currentQuantity++;
  quantity.textContent = currentQuantity;
});

agreeQuantity.addEventListener("click", function () {
  if (currentQuantity != 0) {
    cartQuantity.textContent = currentQuantity;
    btnCart.textContent = "Checkout Now";
    btnCart.style.paddingLeft = "25px";
    btnCart.style.paddingRight = "25px";
    for (let i = 0; i < currentQuantity; i++) {
      list += `<span class="size d-inline-block" style="background-color: ${selectedColorHex};" data-color-hex="${selectedColorHex}" data-color-name ="${selectedColorName}"></span>
        `;
    }
    colorList.innerHTML = list;
  }
});

//End of Modal functionality

selectedColor.forEach(function (clr) {
  clr.addEventListener("click", function (e) {
    selectedColorName = e.currentTarget.dataset.colorName;
    selectedColorHex = e.currentTarget.dataset.colorHex;
    // alert(selectedColorHex);
    colorText.textContent = selectedColorName;
    modalSelectedColor.textContent = selectedColorName;

    //Remove active and Add it
    selectedColor.forEach((node) => {
      node.classList.remove("active");
    });
    e.currentTarget.classList.add("active");

    // const menuCategory = menu.filter(function (menuItem) {
    //   // console.log(menuItem.category);
    //   if (menuItem.category === category) {
    //     return menuItem;
    //   }
  });
  //   if (category === "all") {
  //     diplayMenuItems(menu);
  //   } else {
  //     diplayMenuItems(menuCategory);
  //   }
  //   = selectedColorName;
});
// });

//Change padding of Addtocart on Checkout
// if (btnCart.textContent == "Checkout Now") {
//   console.log("checkout");
// } else {
//   console.log("object");
// }
