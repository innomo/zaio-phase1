let colorText = document.querySelector("#color-text");
let selectedColor = document.querySelectorAll(".size");
let colorList = document.querySelector("#color-list");
let priceTotal = document.querySelector("#price-total");
let priceItem = document.querySelector("#price-item");
let toltip = document.querySelector("#tooltip");

//Modal elements
let quantity = document.querySelector("#quantity");
let minusQuantity = document.querySelector("#minus-quantity");
let plusQuantity = document.querySelector("#plus-quantity");
let agreeQuantity = document.querySelector("#agree-quantity");
let cartQuantity = document.querySelector("#cart-quantity");
let btnCart = document.querySelector("#btn-cart");
let modalSelectedColor = document.querySelector("#modal-selected-color");

//Checkout modal elements
let productName = document.querySelector("#product-name");
let product = document.querySelector("#product");
let productPrice = document.querySelector("#product-price");
let productQuantity = document.querySelector("#product-quantity");
let productTotal = document.querySelector("#product-total");
let checkoutClose = document.querySelector("#checkout-close");

let currentQuantity = 0;
let selectedColorName = "";
let selectedColorHex = "";
let list = "";
let selectedItemPrice;
let selectedTotalPrice;

minusQuantity.addEventListener("click", function () {
  currentQuantity--;
  if (currentQuantity < 0) currentQuantity = 0;
  quantity.textContent = currentQuantity;
});

plusQuantity.addEventListener("click", function () {
  currentQuantity++;
  quantity.textContent = currentQuantity;
});

agreeQuantity.addEventListener("click", function (e) {
  if (currentQuantity != 0) {
    cartQuantity.textContent = currentQuantity;
    btnCart.textContent = "Checkout Now";
    btnCart.dataset.bsTarget = "#checkoutModal";
    tooltip.dataset.bsToggle = "";
    tooltip.dataset.bsPlacement = "";
    tooltip.dataset.bsOriginalTitle = "";
    btnCart.style.paddingLeft = "25px";
    btnCart.style.paddingRight = "25px";
    for (let i = 0; i < currentQuantity; i++) {
      list += `<marquee behavior="slide" direction="left" class="size d-inline-block" style="background-color: ${selectedColorHex};" data-color-hex="${selectedColorHex}" data-color-name ="${selectedColorName}"></marquee>
        `;
    }
    selectedTotalPrice =
      "$" + (Number(currentQuantity) * Number(selectedItemPrice)).toFixed(2);
    priceTotal.textContent = selectedTotalPrice;
    productName.textContent = "  " + selectedColorName;
    product.innerHTML =
      "  " +
      `<marquee behavior="slide" direction="left" class="size d-inline-block" style="background-color: ${selectedColorHex};" data-color-hex="${selectedColorHex}" data-color-name ="${selectedColorName}"></marquee>`;
    productPrice.textContent = "  $" + selectedItemPrice;
    productQuantity.textContent = "  " + currentQuantity;
    productTotal.textContent = "  " + selectedTotalPrice;
    colorList.innerHTML = list;
  }
});

//End of Modal functionality

selectedColor.forEach(function (clr) {
  clr.addEventListener("click", function (e) {
    selectedColorName = e.currentTarget.dataset.colorName;
    selectedColorHex = e.currentTarget.dataset.colorHex;
    selectedItemPrice = e.currentTarget.dataset.price;
    //alert(selectedColorHex);
    colorText.textContent = selectedColorName;
    modalSelectedColor.textContent = selectedColorName;
    priceItem.textContent = "$" + selectedItemPrice;
    btnCart.disabled = false;
    //Remove active and Add it
    selectedColor.forEach((node) => {
      node.classList.remove("active");
    });

    e.currentTarget.classList.add("active");
  });
});

//Checkout Close
checkoutClose.addEventListener("click", function () {
  location.reload();
});

//Disable add to cart if color is not selected
btnCart.disabled = true;

//Tooltip
function initializeTooltip() {
  let tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

initializeTooltip();
