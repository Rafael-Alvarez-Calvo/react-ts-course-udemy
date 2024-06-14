import { useEffect, useState } from "react"

export default function useOrder() {

    const [order, setOrder] = useState<TOrderItem[]>([]);
    const [tip, setTip] = useState(0);

    useEffect(() =>{
        order.length === 0 && setTip(0);
    }, [order])

    const addItem = (item : TMenuItem) =>{

        if(item){
            
            const itemExist = order.find(orderItem => orderItem.id === item.id);

            if(itemExist){
                const updatedOrder = order.map(orderItem =>{
                    return orderItem.id === item.id 
                        ? { ...orderItem, quantity: orderItem.quantity + 1 } 
                        : orderItem
                }) 

                setOrder(updatedOrder);

            }else{

                const newItem : TOrderItem = {...item, quantity: 1}
                setOrder([...order, newItem])
            }
        }
    }

    const deleteOrder = (id: TMenuItem['id']) =>{
        setOrder(order.filter( item => item.id !== id));
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        deleteOrder
    }
}
