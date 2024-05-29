import { useMemo } from "react";
import formatCurrency from "../helpers";

export default function useTips(order: TOrderProps['order'], tip: TOrderProps['tip']) {

    const itemCounter: number = order ? order.length : 0;

    const subtotalAmount: number = useMemo(() => {
        return order ? order.reduce((total, item) => total + (item.quantity * item.price), 0) : 0
    }, [order]);

    const tipAmount: number = useMemo(() => {
        return tip ? subtotalAmount * tip : 0
    }, [tip, order]);

    const tipPercentage: string = useMemo(() => {
        return tip ? `${tip * 100}%` : "0%"
    }, [tip, order]);

    const total: string = useMemo(() => {
        return tipAmount ? formatCurrency(subtotalAmount + tipAmount) : "0€"
    }, [tip, order]);

    return {
        itemCounter,
        subtotalAmount,
        tipPercentage,
        total
    }
}
