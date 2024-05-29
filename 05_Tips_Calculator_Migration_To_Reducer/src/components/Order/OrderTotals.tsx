import useTips from "../../hooks/useTips";
import formatCurrency from "../../helpers";

type TOrderTotalProps = {
    order: TOrderProps['order'],
    tip: TOrderProps['tip']
}

export const OrderTotals = ({ order, tip }: TOrderTotalProps) => {

    const {
        itemCounter, 
        subtotalAmount,
        tipPercentage,
        total} = useTips(order, tip);
        
    return (
        <table className="w-full text-center">
            <thead className="bg-teal-400 h-8">
                <tr>
                    <th>Items</th>
                    <th>Subtotal</th>
                    <th>Propina</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody className="h-8">
                <tr>
                    <td>{itemCounter}</td>
                    <td>{formatCurrency(subtotalAmount)}</td>
                    <td>{tipPercentage}</td>
                    <td>{total}</td>
                </tr>
            </tbody>
        </table>
    )
}
