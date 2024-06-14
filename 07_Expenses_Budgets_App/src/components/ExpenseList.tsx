import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget"
import { ExpenseCardDetail } from "./ExpenseCardDetail";

export const ExpenseList = () => {

    const { state } = useBudget();

    const filteredExpenses = state.currenCategory ? state.expenses.filter(expense => expense.category === state.currenCategory) : state.expenses;

    const isEmptyExpenseList = useMemo(() => filteredExpenses.length === 0, [filteredExpenses]);

    return (
        <div className="mt-10">
            {isEmptyExpenseList 
                ? <p className="text-gray-600 text-2xl font-bold text-center">No hay gastos</p>
                : (
                    <>
                        <p className="text-gray-600 text-2xl font-bold my-5 uppercase">Listado de Gastos</p>
                        <ExpenseCardDetail filteredExpenses={filteredExpenses} />
                    </>
                )
            }
        </div>
    )
}
