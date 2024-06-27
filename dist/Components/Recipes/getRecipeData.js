var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { myFetchData } from "../../Utils/apiUtil.js";
import { receivedRecipeData } from "./receivedRecipeData.js";
export const getRecipes = () => __awaiter(void 0, void 0, void 0, function* () {
    const endpoint = "https://dummyjson.com/recipes?limit=0";
    const data = yield myFetchData(endpoint);
    receivedRecipeData(data);
});
