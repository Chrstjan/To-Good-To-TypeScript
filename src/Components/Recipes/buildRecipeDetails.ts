import { clearContainer } from "../app.js";

const app = document.getElementById("app");
const recipeContainer = document.createElement("div");
recipeContainer.classList.add("recipe-container");

recipeContainer.innerHTML += `<button id="back-btn">&larr;</button>`;

export const buildRecipeDetails = async (recipe: any) => {
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
    app?.appendChild(recipeContainer);
}