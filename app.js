const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let isError = false;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const foodItem = document.getElementById("foodItem").value;
  const quantity = document.getElementById("quantity").value;

  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required.";
    isError = true;
  }
  if (phone === "" || phone.length != 11 || isNaN(phone)) {
    document.getElementById("phoneError").innerText =
      "Phone must be 11 digits and only numbers.";
    isError = true;
  }
  if (email === "" || !email.includes("@")) {
    document.getElementById("emailError").innerText = "Enter a valid email.";
    isError = true;
  }
  if (foodItem === "") {
    document.getElementById("foodError").innerText =
      "Please select a food item.";
    isError = true;
  }
  if (quantity === "" || quantity < 1) {
    document.getElementById("quantityError").innerText =
      "Enter a valid quantity.";
    isError = true;
  }
  console.log(
    `name: ${name} email: ${email} phone: ${phone} foodItem: ${foodItem} quantity: ${quantity}`
  );
  if (!isError) {
    alert("Order placed successfully!");
    e.target.reset();
  }
});
$(document).ready(function () {
  $("a.nav-link").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      let target = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        800 // Speed in ms
      );
    }
  });
});

$(document).ready(function () {
  $("#themeToggle").click(function () {
    $("body").toggleClass("dark-theme");
    if ($("body").hasClass("dark-theme")) {
      $(this).text("Light Mode");
    } else {
      $(this).text("Dark Mode");
    }
  });
});
