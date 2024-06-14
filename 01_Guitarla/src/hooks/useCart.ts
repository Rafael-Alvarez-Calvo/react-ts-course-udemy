import { useState, useMemo, useEffect } from "react";

export const useCart = () => {

    const initialCart = () : TCartItem[] => {
        const localStorageCart = localStorage.getItem("cart");
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    }
    
    const [cart, setCart] = useState(initialCart);
    const [total, setTotal] = useState(0);

    const isEmptyCart = useMemo(() => cart.length === 0, [cart]);

    //The useMemo hook is used to optimize the performance of a React component by memoizing (caching) the results of a calculation or function. This can be useful in cases where the calculation or function is expensive, and the result is not likely to change often. Here is an example of how the useMemo hook could be used to optimize the performance of a component that calculates the sum of an array of numbers

    // useMemo(() => {
        
    //     if(cart.length){
    //         setTotal(cart.reduce((total, item) => total + (item.price * item.quantity), 0))
    //     }
        
    // }, [cart]);

    //The useEffect hook is used to perform side effects in a React component. This can include things like making a network request, setting up a subscription, or updating the DOM in response to a change in state.
    useEffect(() => {
        
        if(cart.length){
            setTotal(cart.reduce((total, item) => total + (item.price * item.quantity), 0))
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        
    }, [cart, total])

    const MIN_ITEMS = 0;
    const MAX_ITEMS = 10;

    const addToCart = (guitarData : TGuitar) =>{

        const itemAlreadyExistsIndex = cart.findIndex(item => item.id === guitarData.id);
        
        if(itemAlreadyExistsIndex > -1){

            const updatedCart = [...cart];
            updatedCart[itemAlreadyExistsIndex].quantity++

            setCart(updatedCart);

        }else{
            const itemWithQuanity : TCartItem = { ...guitarData, quantity: 1}
            setCart([...cart, itemWithQuanity]);
        }

    }

    const deleteItemFromCart = (idItem : TGuitarID, clearAll: boolean) =>{
        clearAll && setCart([]);
        
        clearAll || setCart(cart.length ? cart.filter(item => item.id !== idItem) : []);
    };
    
    const substractItemFromCart = (index : TIndexOtherProps) =>{
        const clonedCart = [...cart];
        
        clonedCart[index].quantity--;

        clonedCart[index].quantity <= MIN_ITEMS && deleteItemFromCart(clonedCart[index].id, false);

        clonedCart[index].quantity > 0 && setCart(clonedCart);

    };
    
    const sumItemToCart = (index : TIndexOtherProps) =>{
        const clonedCart = [...cart];

        clonedCart[index].quantity < MAX_ITEMS && clonedCart[index].quantity++;
        clonedCart[index].quantity <= MAX_ITEMS && setCart(clonedCart);

    };
    
    return {
        cart,
        addToCart,
        deleteItemFromCart,
        substractItemFromCart,
        sumItemToCart,
        isEmptyCart,
        total
    }
}
