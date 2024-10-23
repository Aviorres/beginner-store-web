const quantityinput = document.getElementById ("quantityinput");
const stockinfo = document.getElementById ("stockinfo");
const maxstock = 23;

stockinfo.innerText = `available stock = ${maxstock}`;

quantityinput.addEventListener("input", function() {
    let value = parseInt(quantityinput.value);
    if (value < 1){
        quantityinput.value = 1;
    }
    if ( value > maxstock) {
        quantityinput.value = maxstock;
        alert( `AYYO, we only have ${maxstock} item right now man, RIGHT NOW `)
    }
});
let colorinput = document.querySelectorAll(".colour input");

colorinput.forEach((input) => {
    input.addEventListener("change", function() {
        if (this.checked) {
            productImg.src = this.getAttribute("data-image");
        }
    });
});