// signin redirect

let sign = document.getElementById("sign");
sign.addEventListener("click", function () {
  window.location.assign("./sign.html");
});

let change = document.querySelectorAll(".change");
change.forEach((item) => {
  item.addEventListener("click", function () {
    window.location.assign("./view.html");
  });
});

// side nav bar functionality

let navicon = document.getElementById("navicon");
let navitem = document.getElementById("navitem");
let isopen = false;
navicon.addEventListener("click", function () {
  if (!isopen) {
    navitem.classList.add("sidebar");
    isopen = true;
  } else {
    navitem.classList.remove("sidebar");
    isopen = false;
  }
});

// scrollbar

let one = document.querySelector(".one");
let toggler = document.getElementById("toggler");

toggler.addEventListener("click", function () {
  one.scrollLeft += 500;
});

// search Functionality

let search = document.getElementById("search");
let product = document.getElementById("product");

let items = product.querySelectorAll("div");

search.addEventListener("keyup", function (event) {
  var enteredValue = event.target.value.toUpperCase();

  for (let i = 0; i < items.length; i++) {
    if (items[i].textContent.toUpperCase().indexOf(enteredValue) < 0) {
      items[i].style.display = "none";
    } else {
      items[i].style.display = "block";
    }
  }
});
