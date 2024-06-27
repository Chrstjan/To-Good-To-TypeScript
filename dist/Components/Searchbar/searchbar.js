var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { recipeSearchCallback } from "../Recipes/receivedRecipeData.js";
const searchbar = document.getElementById("searchbar");
const searchBtn = document.getElementById("search-btn");
export const getSearchedRecipe = () => __awaiter(void 0, void 0, void 0, function* () {
    searchBtn === null || searchBtn === void 0 ? void 0 : searchBtn.addEventListener("click", () => {
        const userSearch = (searchbar === null || searchbar === void 0 ? void 0 : searchbar.value) || "";
        recipeSearchCallback(userSearch);
    });
});
