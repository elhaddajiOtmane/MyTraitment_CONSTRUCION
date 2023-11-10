	
    
    
    
    document.addEventListener("DOMContentLoaded", function () {
        // Function to update the content of #stuff1 with #product-list text content
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
    
        // Call the functions to modify the button text, update #stuff1 with #product-list content, and update #stuff1 with #quintity value
        updateStuff1WithProductListContent();
        updateStuff1WithQuintityValue();
    
        // You can also call the functions on window resize or other relevant events
        window.addEventListener("resize", function () {
            updateStuff1WithProductListContent();
            updateStuff1WithQuintityValue();
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
            // Function to check if the "checkout" button is visible and modify its text
            function modifyCheckoutButtonText() {
                var checkoutButton = document.querySelector("body > header > div.wgl-site-header.mobile_header_custom > div > div > section > div > div.elementor-column.elementor-col-33.elementor-top-column.elementor-element.elementor-element-0b83677 > div > div.elementor-element.elementor-element-6345577.elementor-widget__width-initial.elementor-widget.elementor-widget-wgl-header-cart > div > div > div > div.wgl-woo_mini_cart > div > p.woocommerce-mini-cart__buttons.buttons > a.button.checkout.wc-forward");
    
                if (checkoutButton && getComputedStyle(checkoutButton).display !== "none") {
                    checkoutButton.textContent = "Demand de Devis";
                }
            }
    
            // Call the function to modify the button text
            modifyCheckoutButtonText();
    
            // You can also call the function on window resize or other relevant events
            window.addEventListener("resize", modifyCheckoutButtonText);
        });	