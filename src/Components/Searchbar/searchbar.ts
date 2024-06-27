import { recipeSearchCallback } from "../Recipes/receivedRecipeData.js";

const searchbar = document.getElementById("searchbar");
const searchBtn = document.getElementById("search-btn");

export const getSearchedRecipe = async () => {
    searchBtn?.addEventListener("click", () => {
        const userSearch = searchbar?.value || "";
        recipeSearchCallback(userSearch);
    })
}
