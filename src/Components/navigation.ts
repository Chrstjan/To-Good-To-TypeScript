import { clearContainer } from "./app.js";
import { buildRecipeCategories } from "./Recipes/buildRecipeCategories.js";
import { buildSelectedRecipes } from "./Recipes/buildSelectedRecipes.js";
import { mealTypeCategories, randomSelectedRecipes } from "./Recipes/receivedRecipeData.js";

const app = document.getElementById("app");
const headerLogo: HTMLImageElement = document.getElementById("header-logo");
const headerText: HTMLHeadingElement = document.getElementById("header-name");

export const pageNavigation = async () => {
    headerLogo.addEventListener("click", () =>  {
        navigateHome();
    });

    headerText.addEventListener("click", () =>  {
        navigateHome();
    })
}

const navigateHome = async () => {
    clearContainer(app);
    buildRecipeCategories(mealTypeCategories);
    buildSelectedRecipes(randomSelectedRecipes);
}