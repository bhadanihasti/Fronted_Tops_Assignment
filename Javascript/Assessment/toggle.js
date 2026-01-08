 let toggleBtn = document.getElementById("themeToggle");

      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (this.innerText === "dark") {
          this.innerText = "Light";
        } else {
          this.innerText = "dark";
        }
      });

      