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
const app = document.getElementById("app");
const recipeContainer = document.createElement("div");
recipeContainer.classList.add("recipe-container");
recipeContainer.innerHTML += `<button id="back-btn">&larr;</button>`;
export const buildRecipeDetails = (recipe) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(recipe);
    clearContainer(app);
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
                </header>
            </figcaption>
        </figure>`;
    recipeContainer.innerHTML += recipeDetails;
    app === null || app === void 0 ? void 0 : app.appendChild(recipeContainer);
});
