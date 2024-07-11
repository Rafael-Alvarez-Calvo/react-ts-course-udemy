import { z } from "zod";
import { 
    CategoriesAPIResponseSchema, 
    SearchFilterSchema, 
    CocktailsResponseSchema, 
    CocktailResponseSchema,
    CocktailRecipeSchema,
} from "../schemas/cocktail-schema";

export type TCategories = z.infer<typeof CategoriesAPIResponseSchema>

export type TSearchFilter = z.infer<typeof SearchFilterSchema>

export type TCocktails = z.infer<typeof CocktailsResponseSchema>
export type TCocktail = z.infer<typeof CocktailResponseSchema>

export type TRecipe = z.infer<typeof CocktailRecipeSchema>