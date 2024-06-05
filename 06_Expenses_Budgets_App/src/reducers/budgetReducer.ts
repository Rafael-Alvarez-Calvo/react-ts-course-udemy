import { useModal } from "../hooks/useModal"
import { TDraftExpense, TExpense } from "../types"
import { v4 as uuidv4 } from 'uuid'

export type TBudgetActions =
    { type: "set-budget", payload: { budget: number }} |
    { type: "clear-budget", payload: { budget: number }} |
    { type: "show-modal" } |
    { type: "hide-modal" } |
    { type: "add-expense", payload: { expense: TDraftExpense }} 


export type TBudgetState = {
    budget: number
    modal: boolean
    expenses: TExpense[]
}

export const initialState: TBudgetState = {
    budget: 0,
    modal: false,
    expenses: []
}

export const setBudget = (state: TBudgetState, budget: TBudgetState['budget']) => {

    return{
        ...state,
        budget
    }
    
}

export const addExpense = (state: TBudgetState, expense: TDraftExpense) : TBudgetState => {

    const expenseWithId = {
        ...expense,
        id: uuidv4()
    }

    return{
        ...state,
        expenses: [...state.expenses, expenseWithId],
        modal: false
    }
}

export const budgetReducer = (
    state: TBudgetState = initialState,
    action: TBudgetActions
) => {

    switch(action.type){

        case "set-budget":
            return setBudget(state, action.payload.budget);
        
        case "show-modal":
            const { showModal } = useModal(state);
            return showModal();
        
        case "hide-modal":
            const { hideModal } = useModal(state);
            return hideModal();
        
        case "add-expense":
            return addExpense(state, action.payload.expense);
    }
}
