var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { clearContainer } from "./app.js";
const app = document.getElementById("app");
const searchResultContainer = document.createElement("div");
searchResultContainer.classList.add("search-result-container");
export const buildSearchResult = (recipes) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(recipes);
    clearContainer(searchResultContainer);
    searchResultContainer.innerHTML = `
        <header class="btn-container">
            <button class="close-btn">X</button>
        </header>`;
    recipes.map((recipe) => {
        let searchedRecipes = `
            <figure class="searched-recipe">
             <header>
                <img src="${recipe.image}" alt="${recipe.name}" />
                <h3>${recipe.name}</h3>
             </header>
            </figure>`;
        searchResultContainer.innerHTML += searchedRecipes;
    });
    app === null || app === void 0 ? void 0 : app.appendChild(searchResultContainer);
    const closeBtn = document.querySelector(".close-btn");
    closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", () => {
        if (searchResultContainer) {
            app === null || app === void 0 ? void 0 : app.removeChild(searchResultContainer);
        }
    });
});
