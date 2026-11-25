document.addEventListener("DOMContentLoaded", function () {
  var filterButtons = document.querySelectorAll(".filter-btn");
  var productItems = document.querySelectorAll(".product-item");
  var forumCards = document.querySelectorAll(".forum-card");

  if (filterButtons.length && productItems.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterButtons.forEach(function (b) {
          b.classList.remove("active");
      });
        btn.classList.add("active");

        var filter =  btn.getAttribute("data-filter");

        productItems.forEach(function (item) {
          if (filter === "All" || item.classList.contains(filter)) {
            item.style.display = "grid";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }

  var forumFilterButtons = document.querySelectorAll(".forum-filter-btn");
  if (forumFilterButtons.length && forumCards.length) {
    forumFilterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        forumFilterButtons.forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");

        var filter = btn.getAttribute("data-category");

        forumCards.forEach(function (card) {
          if (filter === "all") {
            card.style.display = "block";
          } else {
            if (card.classList.contains(filter)) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          }
        });
      });
    });
  }

  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var nameInput = document.getElementById("fullName");
      var emailInput = document.getElementById("email");
      var phoneInput = document.getElementById("phone");
      var countrySelect = document.getElementById("country");
      var messageInput = document.getElementById("message");
      var termsCheckbox = document.getElementById("terms");

      var isValid = true;

      clearError("nameError");
      clearError("emailError");
      clearError("phoneError");
      clearError("countryError");
      clearError("messageError");
      clearError("termsError");

      var nameValue = nameInput.value.trim();
      if (nameValue.length < 3) {
        showError("nameError", "please enter at least 3 characters!.");
        isValid = false;
      }

      var emailValue = emailInput.value.trim();
      if (emailValue.length === 0) {
        showError("emailError", "Email is required.");
        isValid = false;
      } else {
        var atPos = emailValue.indexOf("@");
        var dotPos = emailValue.lastIndexOf(".");
        if (atPos < 1 || dotPos < atPos + 2 || dotPos === emailValue.length - 1) {
          showError("emailError", "Please enter a valid email address!.");
          isValid = false;
        }
      }

      var phoneValue = phoneInput.value.trim();
      if (phoneValue.length < 8) {
        showError("phoneError", "Phone number should have at least 8 digits!.");
        isValid = false;
      } else {
        var onlyDigits = true;
        for (var i = 0; i < phoneValue.length; i++) {
          var c = phoneValue.charAt(i);
          if (c < "0" || c > "9") {
            onlyDigits = false;
            break;
          }
        }
        if (!onlyDigits) {
          showError("phoneError", "Phone number should only contain digits.");
          isValid = false;
        }
      }

      if (countrySelect.value === "") {
        showError("countryError", "Please choose your country!.");
        isValid = false;
      }

      var messageValue = messageInput.value.trim();
      if (messageValue.length < 10) {
        showError("messageError", "Message should be at least 10 in characters.");
        isValid = false;
      }

      if (!termsCheckbox.checked) {
        showError("termsError", "You need to agree to the Terms of Service.");
        isValid = false;
      }

      if (isValid) {
        alert("thanks for contacting us!");
        contactForm.reset();
      }
    });
  }

  function showError(id, text) {
    var el = document.getElementById(id);
    if (el) {
      el.textContent = text;
    }
  }

  function clearError(id) {
    var el = document.getElementById(id);
    if (el) {
      el.textContent = "";
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("show");
        });
    }
});
