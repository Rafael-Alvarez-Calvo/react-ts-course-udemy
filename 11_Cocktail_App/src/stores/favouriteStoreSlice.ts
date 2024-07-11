import { StateCreator } from "zustand";
import { TRecipe } from "../types";
import { notificationsStoreSlice, TNotificationsSlice } from "./notificationsStoreSlice";

export type TFavouriteSlice = {
    favourites: TRecipe[]
    onInitFavourites: () => void
    handleClickFavorite: (cocktailRecipe: TRecipe) => void
    favoriteExists: (idDrink: TRecipe['idDrink']) => boolean
}

export const favouriteStoreSlice : StateCreator<TFavouriteSlice & TNotificationsSlice, [], [], TFavouriteSlice> = (set, get, api) => ({
    favourites: [],
    onInitFavourites: () => {
        const storedFavouritesCocktails = localStorage.getItem('favouritesCocktails');

        storedFavouritesCocktails && 
            set({
                favourites: JSON.parse(storedFavouritesCocktails)
            })
    },
    handleClickFavorite: (cocktailRecipe) => {
        if(get().favoriteExists(cocktailRecipe.idDrink)){
            set((state) => ({
                favourites: state.favourites.filter((favourite) => favourite.idDrink !== cocktailRecipe.idDrink)
            }));
            notificationsStoreSlice(set, get, api).showNotification({
                text: `Se eliminó ${cocktailRecipe.strDrink} de favoritos`,
                error: false
            })
        }
        else{
            set((state) => ({
                favourites: [ ...state.favourites, cocktailRecipe ]
            }));
            notificationsStoreSlice(set, get, api).showNotification({
                text: `Se agregó ${cocktailRecipe.strDrink} a favoritos`,
                error: false
            })
        }

        localStorage.setItem('favouritesCocktails', JSON.stringify(get().favourites));
    },
    favoriteExists: (idDrink) => {
        return get().favourites.some(favourite => favourite.idDrink === idDrink)
    }
})
