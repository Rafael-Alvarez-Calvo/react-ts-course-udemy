import { useModal } from "../hooks/useModal"
import { TCategory, TDraftExpense, TExpense } from "../types"
import { v4 as uuidv4 } from 'uuid'

export type TBudgetActions =
    { type: "set-budget", payload: { budget: number } } |
    { type: "add-expense", payload: { expense: TDraftExpense } } |
    { type: "update-expense", payload: { expense: TExpense } } |
    { type: "remove-expense", payload: { id: TExpense['id'] } } |
    { type: "get-expense-by-id", payload: { id: TExpense['id'] } } |
    { type: "filter-by-category", payload: { id: TCategory['id'] } } |
    { type: "show-modal" } |
    { type: "hide-modal" } |
    { type: "clear-budget" }


export type TBudgetState = {
    budget: number
    modal: boolean
    expenses: TExpense[]
    editExpenseId: TExpense['id']
    currenCategory: TCategory['id']
}

const initialBudget = () : number => {
    const localStorageBudget = localStorage.getItem("budget")
    return localStorageBudget ? +localStorageBudget : 0
}

const initialExpenses = () : TExpense[] => {
    const localStorageExpenses = localStorage.getItem("expenses")
    return localStorageExpenses ? JSON.parse(localStorageExpenses) : []
}

export const initialState: TBudgetState = {
    budget: initialBudget(),
    modal: false,
    expenses: initialExpenses(),
    editExpenseId: "",
    currenCategory: ""
}

export const setBudget = (state: TBudgetState, budget: TBudgetState['budget']) => {

    return {
        ...state,
        budget
    }
}

export const addExpense = (state: TBudgetState, expense: TDraftExpense): TBudgetState => {

    const expenseWithId = {
        ...expense,
        id: uuidv4()
    }

    return {
        ...state,
        expenses: [...state.expenses, expenseWithId],
        modal: false
    }
}

export const removeExpense = (state: TBudgetState, id: TExpense['id']): TBudgetState => {

    const expensesWithoutSelectedId = state.expenses.filter((expense) => expense.id !== id)

    return {
        ...state,
        expenses: expensesWithoutSelectedId
    }
}

export const getExpenseById = (state: TBudgetState, id: TExpense['id']): TBudgetState => {

    return {
        ...state,
        modal: true,
        editExpenseId: id
    }
}

export const updateExpense = (state: TBudgetState, expense: TExpense): TBudgetState => {

    const updatedExpense = state.expenses.map(expenseItem => {
        return expenseItem.id === expense.id ? expense : expenseItem;
    })

    return {
        ...state,
        modal: false,
        expenses: updatedExpense,
        editExpenseId: "",
    }
}

export const filterByCategory = (state: TBudgetState, id: TCategory['id']): TBudgetState => {

    return {
        ...state,
        currenCategory: id
    }
}

export const budgetReducer = (
    state: TBudgetState = initialState,
    action: TBudgetActions
) => {

    switch (action.type) {

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

        case "remove-expense":
            return removeExpense(state, action.payload.id);

        case "get-expense-by-id":
            return getExpenseById(state, action.payload.id);

        case "update-expense":
            return updateExpense(state, action.payload.expense);
        
        case "filter-by-category":
            return filterByCategory(state, action.payload.id);
        
        case "clear-budget":
            return {
                ...state,
                budget: 0,
                expenses: [],
            }
    }
}
