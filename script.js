var menuSubmit = document.getElementById("menu-submit");
var reviewSubmit = document.getElementById("review-submit");




menuSubmit.addEventListener("click", () => {
    var menuInput = document.getElementById("menu-input");
    var menu = document.querySelector("#menu-list");
    var newMenu = `<li">${menuInput.value}</li>`
    menu.innerHTML += newMenu;
    menuInput.value = "";
})

reviewSubmit.addEventListener("click", () => {
    var reviewInput = document.getElementById("review-input");
    var review = document.querySelector("#review-list");
    var newReview = document.createElement("li");
    newReview.innerText = reviewInput.value;
    //newReview.style.color = "red";
    review.appendChild(newReview);
    reviewInput.value = "";
})


