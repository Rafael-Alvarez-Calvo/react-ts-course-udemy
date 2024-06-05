import { useReducer, createContext, ReactNode } from "react";
import { TBudgetActions, TBudgetState, budgetReducer, initialState } from "../reducers/budgetReducer";

type TBudgetContextProps = {
    state: TBudgetState
    dispatch: React.Dispatch<TBudgetActions>
}

type TBudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<TBudgetContextProps>(null!);

export const BudgetProvider = ({ children } : TBudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState);

    return (
        <BudgetContext.Provider value={{state, dispatch}}>
            {children}
        </BudgetContext.Provider>
    )

}