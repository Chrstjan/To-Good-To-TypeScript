import { clearContainer } from "../app.js";

const app = document.getElementById("app");
const recipesContainer = document.createElement("div");
recipesContainer.classList.add("category-recipes-container");

const figureContainer = document.createElement("span");
figureContainer.classList.add("figure-container");

export const buildCategoryRecipes = async (
  recipes: any[],
  categoryName: string
) => {
  console.log(recipes);
  clearContainer(figureContainer);
  clearContainer(recipesContainer);

  recipesContainer.innerHTML += `
    <header>
        <h2>Category: ${categoryName}</h2>
    </header>`;

  recipes.map((recipe) => {
    let recipeFigure = `
        <figure class="recipe-figure">
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
  app?.appendChild(recipesContainer);
};