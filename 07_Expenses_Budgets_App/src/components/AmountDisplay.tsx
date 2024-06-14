import { formatCurrency } from "../helpers"

type TAmountDisplayProps = {
    label?: string
    amount: number
    isExpense?: boolean
}

export const AmountDisplay = ({ label, amount, isExpense } : TAmountDisplayProps) => {
    return (
        <p className="text-2xl text-blue-600 font-bold">
            {label && `${label}: `}
            <span 
                className={`font-black ${isExpense || amount < 0 ? "text-red-500" : "text-black"}`}
            >
                {isExpense ? "-" : ""}
                {formatCurrency(amount)}
            </span>
        </p>
    )
}
