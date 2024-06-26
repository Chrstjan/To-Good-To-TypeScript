var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { buildCategoryRecipes } from "./buildCategoryRecipes.js";
import { buildRecipeCategories } from "./buildRecipeCategories.js";
import { buildRecipeDetails } from "./buildRecipeDetails.js";
import { buildSelectedRecipes } from "./buildSelectedRecipes.js";
var MealType;
(function (MealType) {
    MealType["Dinner"] = "Dinner";
    MealType["Lunch"] = "Lunch";
    MealType["SideDish"] = "Side Dish";
    MealType["Appetizer"] = "Appetizer";
    MealType["Snacks"] = "Snack";
    MealType["Breakfast"] = "Breakfast";
    MealType["Beverage"] = "Beverage";
    MealType["Dessert"] = "Dessert";
})(MealType || (MealType = {}));
let allRecipesArray = [];
let mealTypeCategories = [];
let randomSelectedRecipes = [];
let dinnerArray = [];
let lunchArray = [];
let sideDishArray = [];
let appetizerArray = [];
let snacksArray = [];
let breakfastArray = [];
let beverageArray = [];
let dessertArray = [];
let miscArray = [];
export const receivedRecipeData = (allRecipes) => __awaiter(void 0, void 0, void 0, function* () {
    allRecipesArray = [...allRecipes.recipes];
    recipeCallback(allRecipesArray); //This makes the allRecies array accessible in the recipeCallback function
    const getMealTypeOnce = (recipes) => {
        const uniqueMealType = new Set();
        recipes.forEach((recipe) => {
            recipe.mealType.forEach((mealType) => {
                uniqueMealType.add(mealType);
            });
        });
        return uniqueMealType;
    };
    const mealCategories = getMealTypeOnce(allRecipes.recipes);
    mealTypeCategories = Array.from(mealCategories); //Converts from set to array
    randomSelectedRecipes.push(allRecipes.recipes[Math.floor(Math.random() * allRecipes.recipes.length)], allRecipes.recipes[Math.floor(Math.random() * allRecipes.recipes.length)], allRecipes.recipes[Math.floor(Math.random() * allRecipes.recipes.length)], allRecipes.recipes[Math.floor(Math.random() * allRecipes.recipes.length)]);
    console.log(randomSelectedRecipes);
    allRecipes.recipes.map((recipe) => {
        let mealTypeArray = recipe.mealType;
        mealTypeArray.forEach((mealType) => {
            const sortMealTypes = (mealType) => {
                switch (mealType) {
                    case MealType.Dinner:
                        dinnerArray.push(recipe);
                        break;
                    case MealType.Lunch:
                        lunchArray.push(recipe);
                        break;
                    case MealType.SideDish:
                        sideDishArray.push(recipe);
                        break;
                    case MealType.Appetizer:
                        appetizerArray.push(recipe);
                        break;
                    case MealType.Snacks:
                        snacksArray.push(recipe);
                        break;
                    case MealType.Breakfast:
                        breakfastArray.push(recipe);
                        break;
                    case MealType.Beverage:
                        beverageArray.push(recipe);
                        break;
                    case MealType.Dessert:
                        dessertArray.push(recipe);
                        break;
                    default:
                        miscArray.push(recipe);
                        break;
                }
            };
            sortMealTypes(mealType);
        });
    });
    buildRecipeCategories(mealTypeCategories);
    buildSelectedRecipes(randomSelectedRecipes);
});
export const categoryCallback = (clickedCategory) => __awaiter(void 0, void 0, void 0, function* () {
    const findCategory = (category) => {
        switch (category) {
            case MealType.Dinner:
                buildCategoryRecipes(dinnerArray, "Dinner");
                break;
            case MealType.Lunch:
                buildCategoryRecipes(lunchArray, "Lunch");
                break;
            case MealType.Snacks:
                buildCategoryRecipes(snacksArray, "Snacks");
                break;
            case MealType.Dessert:
                buildCategoryRecipes(dessertArray, "Desserts");
                break;
            case MealType.SideDish:
                buildCategoryRecipes(sideDishArray, "Side Dish");
                break;
            case MealType.Appetizer:
                buildCategoryRecipes(appetizerArray, "Appetizer");
                break;
            case MealType.Beverage:
                buildCategoryRecipes(beverageArray, "Beverage");
                break;
            case MealType.Breakfast:
                buildCategoryRecipes(breakfastArray, "Breakfast");
                break;
            default:
                console.log("Category not found!");
                break;
        }
    };
    findCategory(clickedCategory);
});
export const recipeCallback = (clickedRecipe) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(clickedRecipe);
    allRecipesArray.map((recipe) => {
        if (clickedRecipe === recipe.name) {
            buildRecipeDetails(recipe);
        }
        else {
            //console.error("Recipe not found");
        }
    });
});
