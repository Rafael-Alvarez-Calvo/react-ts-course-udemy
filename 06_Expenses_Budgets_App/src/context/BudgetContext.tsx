import { useReducer, createContext, ReactNode, useMemo } from "react";
import { TBudgetActions, TBudgetState, budgetReducer, initialState } from "../reducers/budgetReducer";

type TBudgetContextProps = {
    state: TBudgetState
    dispatch: React.Dispatch<TBudgetActions>
    totalExpenses: number
    remainBudget: number
}

type TBudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<TBudgetContextProps>(null!);

export const BudgetProvider = ({ children } : TBudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState);

    const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])
    const remainBudget = state.budget - totalExpenses;

    return (
        <BudgetContext.Provider value={{state, dispatch, totalExpenses, remainBudget}}>
            {children}
        </BudgetContext.Provider>
    )

}