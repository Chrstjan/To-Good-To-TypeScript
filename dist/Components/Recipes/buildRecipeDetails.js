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
const recipeContainer = document.createElement("div");
recipeContainer.classList.add("recipe-container");
export const buildRecipeDetails = (recipe) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(recipe);
    const categoriesHeader = document.querySelector(".categories-container");
    categoriesHeader === null || categoriesHeader === void 0 ? void 0 : categoriesHeader.classList.toggle("hide-header");
    // clearContainer(app);
    clearContainer(recipeContainer);
    recipeContainer.innerHTML += `
        <button id="back-btn" data-recipe-category="${recipe.mealType[0]}">&larr;</button>`;
    let recipeDetails = `
        <figure class="recipe-figure">
            <img src="${recipe.image}" alt="${recipe.name} image" />
            <figcaption class="recipe-details">
                <header>
                    <span class="overall-info-container">
                        <span class="rating-container">
                            <p>${recipe.rating} &#9733;</p>
                        </span>
                        <p>Prep: ${recipe.prepTimeMinutes} Min</p>
                        <p>Cook: ${recipe.cookTimeMinutes} Min</p>
                        <p>Serving: ${recipe.servings}</p>
                    </span>
                    <h3>${recipe.name}</h3>
                    <span class="additional-info">
                        <p>difficulty: ${recipe.difficulty}</p>
                        <p>${recipe.caloriesPerServing} kcal. per serving</p>
                    </span>
                </header>
                <div class="recipe-steps-container">
                    <span class="btn-container">
                        <button class="ingredients-btn">Ingredients</button>
                        <button class="instructions-btn">Instructions</button>
                    </span>
                    <span class="recipe-info-container"></span>
                </div>
                <footer class="footer-info">
                    <h4>Cuisine: ${recipe.cuisine}</h4>
                    <h4>Meal Type: ${recipe.mealType}</h4>
                    <p>tags: ${recipe.tags}</p>
                </footer>
            </figcaption>
        </figure>`;
    recipeContainer.innerHTML += recipeDetails;
    app === null || app === void 0 ? void 0 : app.appendChild(recipeContainer);
    const backBtn = document.getElementById("back-btn");
    backBtn === null || backBtn === void 0 ? void 0 : backBtn.addEventListener("click", () => {
        const recipeCategory = backBtn.getAttribute("data-recipe-category");
        console.log(recipeCategory);
        categoriesHeader === null || categoriesHeader === void 0 ? void 0 : categoriesHeader.classList.toggle("hide-header");
        categoryCallback(recipeCategory);
        if (recipeContainer) {
            app === null || app === void 0 ? void 0 : app.removeChild(recipeContainer);
        }
    });
    const recipeDetailsContainer = document.querySelector(".recipe-info-container");
    const ingredientsBtn = document.querySelector(".ingredients-btn");
    ingredientsBtn === null || ingredientsBtn === void 0 ? void 0 : ingredientsBtn.addEventListener("click", () => {
        clearContainer(recipeDetailsContainer);
        ingredientsBtn.classList.add("selected-btn");
        direcitonsBtn === null || direcitonsBtn === void 0 ? void 0 : direcitonsBtn.classList.remove("selected-btn");
        const ingredientsList = document.createElement("ul");
        recipe.ingredients.map((ingredient) => {
            return ingredientsList.innerHTML += `<li>${ingredient}</li>`;
        });
        recipeDetailsContainer === null || recipeDetailsContainer === void 0 ? void 0 : recipeDetailsContainer.appendChild(ingredientsList);
    });
    const direcitonsBtn = document.querySelector(".instructions-btn");
    direcitonsBtn === null || direcitonsBtn === void 0 ? void 0 : direcitonsBtn.addEventListener("click", () => {
        clearContainer(recipeDetailsContainer);
        direcitonsBtn.classList.add("selected-btn");
        ingredientsBtn === null || ingredientsBtn === void 0 ? void 0 : ingredientsBtn.classList.remove("selected-btn");
        const instructionsList = document.createElement("ol");
        instructionsList.classList.add("instructions-list");
        recipe.instructions.map((instruction) => {
            return instructionsList.innerHTML += `<li>${instruction}</li>`;
        });
        recipeDetailsContainer === null || recipeDetailsContainer === void 0 ? void 0 : recipeDetailsContainer.appendChild(instructionsList);
    });
});
