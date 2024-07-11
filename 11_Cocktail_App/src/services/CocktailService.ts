import axios from "axios";
import { CategoriesAPIResponseSchema, CocktailsResponseSchema, CocktailRecipeSchema } from "../schemas/cocktail-schema";
import { TCocktail, TSearchFilter } from "../types";



export const getCategories = async () => {
    
    const CocktailCategoriesUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

    const { data: cocktailCategoriesData} = await axios.get(CocktailCategoriesUrl);
    const { data: cocktailCategoriesResult, success} = CategoriesAPIResponseSchema.safeParse(cocktailCategoriesData);

    if(success)
        return cocktailCategoriesResult;
    
}

export const getCocktails = async ({ingredient, category}: TSearchFilter) => {
    
    const cocktailsListUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.trim()}&i=${ingredient.trim()}`;

    const { data: cocktailsListData} = await axios.get(cocktailsListUrl);

    const { data: cocktailsListResult, success} = CocktailsResponseSchema.safeParse(cocktailsListData);

    if(success)
        return cocktailsListResult;
    
}

export const getCocktailRecipe = async (idDrink: TCocktail['idDrink']) => {

    const cocktailRecipeUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;

    const { data: cocktailsRecipeData} = await axios.get(cocktailRecipeUrl);

    const { data: cocktailsRecipeResult, success} = CocktailRecipeSchema.safeParse(cocktailsRecipeData.drinks[0]);

    if(success)
        return cocktailsRecipeResult;
    
}
