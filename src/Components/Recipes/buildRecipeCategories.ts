import { clearContainer } from "../app.js";
import { categoryCallback } from "./receivedRecipeData.js";

const app = document.getElementById("app");
const categoriesContainer = document.createElement("div");
categoriesContainer.classList.add("categories-container");
categoriesContainer.innerHTML += `<h2>Categories:</h2>`;

export const buildRecipeCategories = async (categories: any) => {
  const recipeCategories = document.createElement("ul");
  recipeCategories.classList.add("meal-categories");
  categories.map((category: any) => {
    console.log(category);

    const mealCategories = `<li><button class="category-btn">${category}</button></li>`;
    recipeCategories.innerHTML += mealCategories;
    categoriesContainer.appendChild(recipeCategories);
    app?.appendChild(categoriesContainer);

    const categoryBtns = document.querySelectorAll(".category-btn");
    categoryBtns.forEach((btn) => {
      btn.addEventListener("click", async () => {
        let category = btn.textContent || "";

        const recipesContainer = document.querySelector(".selected-recipes");
        if (recipesContainer) {
          app?.removeChild(recipesContainer);
        }

        categoryCallback(category);
      });
    });
  });
};
