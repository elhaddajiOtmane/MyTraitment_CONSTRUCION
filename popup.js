// Function to update the value of #stuff1 with #product-list content
function updateStuff1WithProductListContent() {
    var productList = document.querySelector("#product-list");
    var stuff1 = document.querySelector("#stuff1");

    if (productList && stuff1) {
        stuff1.textContent = productList.textContent;
    }
}

// Function to update the value of #stuff1 with #quintity value
function updateStuff1WithQuintityValue() {
    var quintity = document.querySelector("#quintity");
    var stuff1 = document.querySelector("#stuff1");

    if (quintity && stuff1) {
        stuff1.textContent = quintity.value;
    }
}

// Function to check if the element with the selector #elementor-popup-modal-13597 > div > div.dialog-message.dialog-lightbox-message > div has display block style
function checkElementDisplay() {
    var element = document.querySelector("#elementor-popup-modal-13597 > div > div.dialog-message.dialog-lightbox-message > div");
    if (element && element.style.display === "block") {
        updateStuff1WithProductListContent();
        updateStuff1WithQuintityValue()
        
    }
}

checkElementDisplay();
