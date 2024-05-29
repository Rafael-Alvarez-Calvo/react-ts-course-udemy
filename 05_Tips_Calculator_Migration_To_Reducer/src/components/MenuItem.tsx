import { TOrderActions } from "../reducers/orderReducer"

type TMenuItemProps = {
    item: TMenuItem
    dispatch: React.Dispatch<TOrderActions>
}

export const MenuItem = ({item, dispatch} : TMenuItemProps) => {

    return (
        <button 
            key={item.id} 
            className=" border-b-2 border-teal-400 w-full py-4 px-8 flex justify-between items-center hover:bg-teal-100 last-of-type:rounded-br-lg last-of-type:rounded-bl-lg"
            onClick={() => dispatch({type: "add-item", payload: {item}})}>
                <p>{item.name}</p>
                <p className="font-black">{item.price}</p>
        </button>
    )
}
