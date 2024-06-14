import { OrderCard } from "./OrderCard"
import { OrderTotals } from "./OrderTotals"
import { TipForm } from "./TipForm"

export const Order = ({ order, deleteOrder, tip, setTip }: TOrderProps ) => {

    return (
        <>
            <h2 className="bg-teal-400 text-white w-full text-center p-3 rounded-tl-lg rounded-tr-lg font-semibold text-2xl">Órdenes</h2>

            <div className={`flex flex-col items-center h-full py-6 px-8 ${order.length === 0 ? "justify-center" : "justify-start gap-6 overflow-y-auto max-h-[555px]"}`}>
                {order.length === 0
                    ? <p className=" text-gray-400 text-6xl text-center -mt-8">No hay órdenes</p>
                    : <OrderCard order={order} deleteOrder={deleteOrder}/>
                }
            </div>

            <div className="flex justify-center pb-5">
                <TipForm order={order} tip={tip} setTip={setTip}/>
            </div>
            
            <div className="flex justify-center pb-5 border-t-teal-400 border rounded-bl-lg rounded-br-lg">
                <OrderTotals order={order} tip={tip}/>
            </div>
        </>
    )
}
