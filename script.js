document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("#recipe-list input");
  const tableRows = document.querySelectorAll("#recipe-list table tr");

  // Search functionality
  searchInput.addEventListener("keyup", () => {
    const filter = searchInput.value.toLowerCase();
    tableRows.forEach((row, index) => {
      if (index === 0) return;
      const name = row.cells[1].textContent.toLowerCase();
      const category = row.cells[2].textContent.toLowerCase();
      if (name.includes(filter) || category.includes(filter)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });

  // Add Recipe form
  const addRecipeForm = document.querySelector("#add-recipe form");
  addRecipeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = addRecipeForm.querySelector("input[type=text]").value;
    const description = addRecipeForm.querySelector("textarea").value;

    if (!name || !description) {
      alert("Please fill all fields");
      return;
    }

    alert("Recipe saved: " + name);
    addRecipeForm.reset();
  });

  // Add Ingredient form
  const addIngredientForm = document.querySelector("#add-ingredient form");
  addIngredientForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const ingName = addIngredientForm.querySelectorAll("input")[0].value;
    const unit = addIngredientForm.querySelectorAll("input")[1].value;

    if (!ingName || !unit) {
      alert("Please fill all fields");
      return;
    }

    alert("Ingredient saved: " + ingName + " (" + unit + ")");
    addIngredientForm.reset();
  });

  // Login form
  const loginForm = document.querySelector("#login form");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = loginForm.querySelector("input[type=text]").value;
    const password = loginForm.querySelector("input[type=password]").value;

    if (username === "admin" && password === "1234") {
      alert("Login successful!");
    } else {
      alert("Invalid login");
    }
  });
});
