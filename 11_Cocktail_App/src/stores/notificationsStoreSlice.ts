import { StateCreator } from "zustand";
import { TFavouriteSlice } from "./favouriteStoreSlice";

type TNotification = {
    text: string
    error: boolean
    show: boolean
}

export type TNotificationsSlice = {
    notification: TNotification
    showNotification: (payload: Pick<TNotification, 'text' | 'error'>) => void
    hideNotification: (payload: Pick<TNotification, 'text' | 'error'>) => void
}

export const notificationsStoreSlice : StateCreator<TNotificationsSlice & TFavouriteSlice, [], [], TNotificationsSlice> = (set, get) => ({
    notification: {
        text: '',
        error: false,
        show: false
    },
    showNotification: (payload) => {
        set({
            notification: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        })

        setTimeout(() => {
            get().hideNotification(payload);
        }, 3000);
    },
    hideNotification: (payload) => {
        set({
            notification: {
                text: payload.text,
                show: false,
                error: payload.error
            }
        })
    }
})