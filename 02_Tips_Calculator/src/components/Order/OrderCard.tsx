import formatCurrency from "../../helpers"

export const OrderCard = ({order, deleteOrder} : TOrderProps) => {

    return order.map((orderItem, index) => {
        const { id, name, price, quantity } = orderItem;

        return (
            <div key={index} id={id.toString()} className="flex flex-col items-center justify-center w-full rounded-lg border border-teal-400">
                <div className="flex justify-between items-center w-full bg-teal-400 px-8 py-2 rounded-tl-lg rounded-tr-lg">
                    <p className="text-white text-md text-semibold">{`#Órden ${index + 1}`}</p>
                    <button className=" bg-red-500 h-6 w-6 rounded-full text-white font-bold" onClick={() => deleteOrder && deleteOrder(id)}>X</button>
                </div>
                <div className="flex flex-row justify-between items-center flex-wrap w-full py-5 px-8">
                    <p className="font-semibold">{name.toUpperCase()}</p>
                    <p>x{quantity}</p>
                    <p className="text-right w-full mt-2 font-semibold border-t border-t-gray-400 pt-3">Precio: {formatCurrency(price * quantity)}</p>
                </div>
            </div>
        )
    })
}
