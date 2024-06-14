type TMenuItemProps = {
    item: TMenuItem
    addItem: (item: TMenuItem) => void
}

export const MenuItem = ({item, addItem} : TMenuItemProps) => {


    return (
        <button 
            key={item.id} 
            className=" border-b-2 border-teal-400 w-full py-4 px-8 flex justify-between items-center hover:bg-teal-100 last-of-type:rounded-br-lg last-of-type:rounded-bl-lg"
            onClick={() => addItem(item)}>
                <p>{item.name}</p>
                <p className="font-black">{item.price}</p>
        </button>
    )
}
