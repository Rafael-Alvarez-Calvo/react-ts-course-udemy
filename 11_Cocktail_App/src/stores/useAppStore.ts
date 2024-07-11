import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { cocktailStoreSlice, TCocktailSlice } from './cocktailStoreSlice';
import { favouriteStoreSlice, TFavouriteSlice } from './favouriteStoreSlice';
import { notificationsStoreSlice, TNotificationsSlice } from './notificationsStoreSlice';

export const useAppStore = create<TCocktailSlice & TFavouriteSlice & TNotificationsSlice>()(devtools((...a) => ({
    ...cocktailStoreSlice(...a),
    ...favouriteStoreSlice(...a),
    ...notificationsStoreSlice(...a)
})))
