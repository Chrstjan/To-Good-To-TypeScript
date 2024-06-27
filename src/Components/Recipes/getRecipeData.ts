import { myFetchData } from "../../Utils/apiUtil.js";
import { receivedRecipeData } from "./receivedRecipeData.js";

export const getRecipes = async () => {
    const endpoint: string = "https://dummyjson.com/recipes?limit=0";
    const data = await myFetchData(endpoint);
    receivedRecipeData(data);
}