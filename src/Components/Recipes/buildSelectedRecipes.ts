import { recipeCallback } from "./receivedRecipeData.js";

const app = document.getElementById("app");
const recipesContainer = document.createElement("div");
recipesContainer.innerHTML += `<header><h2>Popular Meals:</h2></header>`;
recipesContainer.classList.add("selected-recipes");

const figureContainer = document.createElement("span");
figureContainer.classList.add("figure-container");

export const buildSelectedRecipes = async (recipes: any[]) => {
  console.log(recipes);

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
  app?.appendChild(recipesContainer);

  const recipeFigure = document.querySelectorAll(".recipe-figure");
  recipeFigure.forEach((figure) => {
    figure.addEventListener("click", (e) => {
        const figureName = figure.getAttribute("data-recipe");
        recipeCallback(figureName);
    })
  })
};
