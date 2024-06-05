import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget"
import { ExpenseCardDetail } from "./ExpenseCardDetail";

export const ExpenseList = () => {

    const { state } = useBudget();
    
    const isEmptyExpenseList = useMemo(() => state.expenses.length === 0, [state.expenses]);

    return (
        <div className="mt-10">
            {isEmptyExpenseList 
                ? <p className="text-gray-600 text-2xl font-bold text-center">No hay gastos</p>
                : (
                    <>
                        <p className="text-gray-600 text-2xl font-bold my-5 uppercase">Listado de Gastos</p>
                        <ExpenseCardDetail expenses={state.expenses} />
                    </>
                )
            }
        </div>
    )
}
