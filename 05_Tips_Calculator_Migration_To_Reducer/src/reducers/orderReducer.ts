export type TOrderActions = 
    {type: "add-item", payload: {item: TMenuItem}} |
    {type: "remove-item", payload: {id: TMenuItem['id']}} |
    {type: "add-tip", payload: {value: number}}

export type TOrderState = {
    order: TOrderItem[],
    tip: number
}

export const initialState : TOrderState = {
    order: [],
    tip: 0
};

const addItem = (state: TOrderState, item : TMenuItem) =>{

    const itemExist = state.order.find(orderItem => orderItem.id === item.id);
    let updatedOrder : TOrderItem[] = []

    if(itemExist){
        updatedOrder = state.order.map(orderItem =>{
            return orderItem.id === item.id 
                ? { ...orderItem, quantity: orderItem.quantity + 1 } 
                : orderItem
        }) 

    }else{

        const newItem : TOrderItem = {...item, quantity: 1}
        updatedOrder = [...state.order, newItem];
    }

    return {
        ...state,
        order: updatedOrder
    }
}

const removeItem = (state: TOrderState, id: TMenuItem['id']) =>{

    return{
        ...state,
        order: state.order.filter( item => item.id !== id)
    }
}

const addTip = (state: TOrderState, value: TOrderState['tip']) =>{

    return{
        ...state,
        tip: value
    }
}

export const orderReducer = (
    state: TOrderState = initialState,
    action:  TOrderActions
) =>{

    switch(action.type){

        case "add-item":
            return addItem(state, action.payload.item);
        case "remove-item":
            return removeItem(state, action.payload.id);
        case "add-tip":
            return addTip(state, action.payload.value);
        default:
            return state
    }
}