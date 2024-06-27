var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { clearContainer } from "../app.js";
import { categoryCallback } from "./receivedRecipeData.js";
const app = document.getElementById("app");
const categoriesContainer = document.createElement("div");
categoriesContainer.classList.add("categories-container");
categoriesContainer.innerHTML += `<h2>Categories:</h2>`;
export const buildRecipeCategories = (categories) => __awaiter(void 0, void 0, void 0, function* () {
    clearContainer(categoriesContainer);
    const recipeCategories = document.createElement("ul");
    recipeCategories.classList.add("meal-categories");
    categories.map((category) => {
        const mealCategories = `<li><button class="category-btn">${category}</button></li>`;
        recipeCategories.innerHTML += mealCategories;
        categoriesContainer.appendChild(recipeCategories);
        app === null || app === void 0 ? void 0 : app.appendChild(categoriesContainer);
        const categoryBtns = document.querySelectorAll(".category-btn");
        categoryBtns.forEach((btn) => {
            btn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
                let category = btn.textContent || "";
                const recipesContainer = document.querySelector(".selected-recipes");
                if (recipesContainer) {
                    app === null || app === void 0 ? void 0 : app.removeChild(recipesContainer);
                }
                categoryCallback(category);
            }));
        });
    });
});
