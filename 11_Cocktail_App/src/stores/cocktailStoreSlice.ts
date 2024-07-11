import { StateCreator } from "zustand"
import { getCategories, getCocktails, getCocktailRecipe } from "../services/CocktailService"
import type { TCategories, TCocktail, TCocktails, TRecipe, TSearchFilter } from "../types"

export type TCocktailSlice = {
    categories: TCategories
    cocktails: TCocktails
    searchFilters: TSearchFilter
    cocktailRecipe: TRecipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchCocktails: (searchFilters: TSearchFilter) => Promise<void>
    fetchCocktailRecipe: (idDrink: TCocktail['idDrink']) => Promise<void>
    closeModal: () => void
}

export const cocktailStoreSlice : StateCreator<TCocktailSlice> = (set) => ({
    searchFilters: {} as TSearchFilter,
    cocktailRecipe: {} as TRecipe,
    categories: {
        drinks: []
    },
    cocktails: {
        drinks: []
    },
    modal: false,
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchCocktails: async (searchFilters) => {
        const cocktails = await getCocktails(searchFilters);
        set({
            cocktails,
            searchFilters
        })
    },
    fetchCocktailRecipe: async (idDrink) => {
        const cocktailRecipe = await getCocktailRecipe(idDrink);
        set({
            cocktailRecipe,
            modal: true
        })
    },
    closeModal: () => {
        set({
            modal: false,
            cocktailRecipe: {} as TRecipe
        })
    }
})
