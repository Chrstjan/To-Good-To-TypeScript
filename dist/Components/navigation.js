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
import { buildRecipeCategories } from "./Recipes/buildRecipeCategories.js";
import { buildSelectedRecipes } from "./Recipes/buildSelectedRecipes.js";
import { mealTypeCategories, randomSelectedRecipes } from "./Recipes/receivedRecipeData.js";
const app = document.getElementById("app");
const headerLogo = document.getElementById("header-logo");
const headerText = document.getElementById("header-name");
export const pageNavigation = () => __awaiter(void 0, void 0, void 0, function* () {
    headerLogo.addEventListener("click", () => {
        navigateHome();
    });
    headerText.addEventListener("click", () => {
        navigateHome();
    });
});
const navigateHome = () => __awaiter(void 0, void 0, void 0, function* () {
    clearContainer(app);
    buildRecipeCategories(mealTypeCategories);
    buildSelectedRecipes(randomSelectedRecipes);
});
