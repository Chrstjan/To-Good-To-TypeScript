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
import { recipeCallback } from "./receivedRecipeData.js";
const app = document.getElementById("app");
const recipesContainer = document.createElement("div");
recipesContainer.classList.add("category-recipes-container");
const figureContainer = document.createElement("span");
figureContainer.classList.add("figure-container");
export const buildCategoryRecipes = (recipes, categoryName) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(recipes);
    clearContainer(figureContainer);
    clearContainer(recipesContainer);
    recipesContainer.innerHTML += `
    <header>
        <h2>Category: ${categoryName}</h2>
    </header>`;
    recipes.map((recipe) => {
        let recipeFigure = `
        <figure class="recipe-figure" data-recipe="${recipe.name}">
            <header class="recipe-header">
                <img src="${recipe.image}" alt="${recipe.name}" />
                <h3>${recipe.name}</h3>
            </header>
            <figcaption>
                <span class="ratings-container">
                    <p>${recipe.rating} Stars</p>
                    <p>(${recipe.reviewCount} Reviews)</p>
                </span>
                <span class="info-container">
                    <p>Servings: ${recipe.servings}</p>
                    <p>Difficulty: ${recipe.difficulty}</p>
                </span>
                <span class="tags-container">
                    <p>Tags: ${recipe.tags}</p>
                </span>
            </figcaption>
        </figure>`;
        figureContainer.innerHTML += recipeFigure;
    });
    recipesContainer.appendChild(figureContainer);
    app === null || app === void 0 ? void 0 : app.appendChild(recipesContainer);
    const recipeFigures = document.querySelectorAll(".recipe-figure");
    recipeFigures.forEach((figure) => {
        figure.addEventListener("click", () => {
            const figureName = figure.getAttribute("data-recipe");
            recipeCallback(figureName || "");
        });
    });
});
