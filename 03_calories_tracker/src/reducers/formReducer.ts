export type TCaloriesFormActions = 
    { type: 'save-form', payload: { newForm: TCaloriesForm }} |
    { type: 'set-activeId', payload: { id: TCaloriesForm["id"] }} |
    { type: 'remove-activity', payload: { id: TCaloriesForm["id"] }} |
    { type: 'reset-app' }

export type TCaloriesFormState = {
    form : TCaloriesForm[]
    activeId: TCaloriesForm["id"]
}

const localStorageActivities = () : TCaloriesForm[] => {
    const activities = localStorage.getItem("activities");
    return activities ? JSON.parse(activities) : []
}

export const initialState : TCaloriesFormState = {
    form: localStorageActivities(),
    activeId: ""
}

export const formReducer = (
    state: TCaloriesFormState = initialState,
    action: TCaloriesFormActions
) => {

    switch(action.type){
        case "save-form":
            let editedActivity : TCaloriesForm[] = [];

            if(state.activeId)
                editedActivity = state.form.map(activity => activity.id === state.activeId ? action.payload.newForm : activity)

            else
                editedActivity = [...state.form, action.payload.newForm]
            
            return {
                ...state,
                form: editedActivity,
                activeId: ""
            }

        case "set-activeId":
            return {
                ...state,
                activeId: action.payload.id
            }
        

        case "remove-activity":
            return {
                ...state,
                form: state.form.filter(activity => activity.id !== action.payload.id)
            }
        
        case "reset-app":
            return {
                form: [],
                activeId: ""
            }

        default: break;
    }

    return state
}


