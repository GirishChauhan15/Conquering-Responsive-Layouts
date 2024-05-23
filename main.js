let toggle__navEl = document.querySelector(".toggle__nav");
      let navEl = document.querySelector(".nav");

      toggle__navEl.addEventListener("click", () => {
        navEl.classList.toggle("nav--visible");
      });