import { useMemo } from "react";
import formatCurrency from "../helpers";

type TUseTipsProps = {
    itemCounter: number
    subtotalAmount: number
    tipAmount: number
    tipPercentage: string
    total: string
}

export default function useTips(order: TOrderProps['order'], tip: TOrderProps['tip']) {

    const itemCounter : TUseTipsProps['itemCounter'] = order.length;

    const subtotalAmount : TUseTipsProps['subtotalAmount'] = useMemo(() => {
        return order.reduce((total, item) => total + (item.quantity * item.price), 0)
    }, [order]);

    const tipAmount : TUseTipsProps['tipAmount'] = useMemo(() => {
        return tip ? subtotalAmount * tip : 0
    }, [tip, order]);

    const tipPercentage : TUseTipsProps['tipPercentage'] = useMemo(() => {
        return tip ? `${tip * 100}%` : "0%"
    }, [tip, order]);

    const total : TUseTipsProps['total'] = useMemo(() => {
        return tipAmount ? formatCurrency(subtotalAmount + tipAmount) : "0€"
    }, [tip, order]);

    return {
        itemCounter,
        subtotalAmount,
        tipPercentage,
        total
    }
}
