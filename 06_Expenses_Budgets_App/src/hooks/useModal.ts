import { TBudgetState } from "../reducers/budgetReducer"

export const useModal = (state: TBudgetState) => {
    
    const showModal = () =>{
        return{
            ...state,
            modal: true
        }
    }
    
    const hideModal = () =>{
        return{
            ...state,
            modal: false
        }
    }
    
    return {
        showModal,
        hideModal
    }
}
