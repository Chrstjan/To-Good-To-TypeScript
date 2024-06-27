import { recipeInterface } from "../../Utils/interfaces.js";
import { clearContainer } from "../app.js";
import { recipeCallback } from "../Recipes/receivedRecipeData.js";

const app = document.getElementById("app");
const searchResultContainer = document.createElement("div");
searchResultContainer.classList.add("search-result-container");

export const buildSearchResult = async (recipes: recipeInterface[]) => {
    console.log(recipes);
    clearContainer(searchResultContainer);

    searchResultContainer.innerHTML = `
        <header class="btn-container">
            <button class="close-btn">X</button>
        </header>`;

   recipes.map((recipe) => {
        let searchedRecipes = `
            <figure class="searched-recipe" data-recipe-name="${recipe.name}">
             <header>
                <img src="${recipe.image}" alt="${recipe.name}" />
                <h3>${recipe.name}</h3>
             </header>
            </figure>`;

            searchResultContainer.innerHTML += searchedRecipes;
   });
   app?.appendChild(searchResultContainer);

   const closeBtn = document.querySelector(".close-btn");
   closeBtn?.addEventListener("click", () => {
        if (searchResultContainer) {
            app?.removeChild(searchResultContainer);
        }
   });

   const searchedRecipeFigures = document.querySelectorAll(".searched-recipe");
   searchedRecipeFigures.forEach((figure) => {
    figure.addEventListener("click", () => {
        const clickedRecipe = figure.getAttribute("data-recipe-name");
        clearContainer(app);
        recipeCallback(clickedRecipe || "");
    })
   })
}