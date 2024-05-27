import { useDatabase } from "../hooks/useDatabase"
import { TCartItem, TGuitar, TGuitarID } from "../types/types";

const { db } = useDatabase();

export type TCartReduceActions =
    { type: "add-to-cart", payload: { item: TGuitar } } |
    { type: "remove-from-cart", payload: { id: TGuitar['id'] } } |
    { type: "substract-from-cart", payload: { id: TGuitar['id'] } } |
    { type: "sum-to-cart", payload: { item: TGuitar } }

export type TCartReduceState = {
    data: TGuitar[]
    cart: TCartItem[]
}

const initialCart = () : TCartItem[] => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
}

export const initialState: TCartReduceState = {
    data: db,
    cart: initialCart()
}

const MIN_ITEMS = 0;
const MAX_ITEMS = 10;

const addToCart = (state: TCartReduceState, cartItem: TGuitar) => {

    const foundItem = state.cart.find(item => item.id === cartItem.id);

    let updatedCart : TCartItem[] = [];

    if (foundItem) {
        
        updatedCart = state.cart.map(item => {
            if(item.id === cartItem.id && item.quantity < MAX_ITEMS){
                return {...item, quantity: item.quantity + 1}
            }else{
                return item
            }
        })
        

    } else {
        const itemWithQuanity : TCartItem = { ...cartItem, quantity: 1 }
        updatedCart = [...state.cart, itemWithQuanity];
    }

    return {
        ...state,
        cart: updatedCart
    }

}

const deleteItemFromCart = (state: TCartReduceState, idItem : TGuitarID) =>{

    const updatedCart = state.cart.length === 0 || idItem === -1 ? [] : state.cart.filter(item => item.id !== idItem)

    return {
        ...state,
        cart: updatedCart
    }

};

const substractItemFromCart = (state: TCartReduceState, idItem : TGuitarID) =>{

    const updatedCart = state.cart.map(item => {
        if(item.id === idItem && item.quantity > MIN_ITEMS){
            return{
                ...item,
                quantity: item.quantity - 1
            }
        }

        return item;
    })

    return{
        ...state,
        cart: updatedCart.filter(item => item.quantity > MIN_ITEMS)
    }

};

export const cartReducer = (
    state: TCartReduceState = initialState,
    action: TCartReduceActions
) => {

    switch (action.type) {

        case "add-to-cart":
            return addToCart(state, action.payload.item);
        
        case "remove-from-cart":
            return deleteItemFromCart(state, action.payload.id)
        
        case "sum-to-cart":
            return addToCart(state, action.payload.item);
        
        case "substract-from-cart":
            return substractItemFromCart(state, action.payload.id);
    }
}
