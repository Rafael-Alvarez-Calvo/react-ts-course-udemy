import { useState, ChangeEvent, FormEvent, Dispatch, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useData } from "../hooks/useData"
import { TCaloriesFormActions, TCaloriesFormState } from '../reducers/formReducer';

type TCaloriesFormProps = {
    dispatch: Dispatch<TCaloriesFormActions>
    state: TCaloriesFormState
}

export const CaloriesCalculatorForm = ({ dispatch, state }: TCaloriesFormProps) => {

    const initialState: TCaloriesForm = {
        id: uuidv4(),
        category: 1,
        activity: "",
        calories: 0
    }

    const [form, setForm] = useState<TCaloriesForm>(initialState);

    const { category, activity, calories } = form;

    useEffect(() => {

        if (state.activeId) {
            
            const selectedActivity = state.form.filter(activity => activity.id === state.activeId)[0];

            setForm(selectedActivity);
        }

    }, [state.activeId])


    const handleChangeForm = (event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

        const isNumberField = ['category', 'calories'].includes(event.target.id)

        setForm({
            ...form,
            [event.target.id]: isNumberField ? +event.target.value : event.target.value
        })
    }

    const isValidForm = () => {
        return activity.trim() !== "" && calories > 0;
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        dispatch({ type: "save-form", payload: { newForm: form } });

        setForm(initialState);
    }

    const { categories } = useData();

    const OptionsCategories = () => {

        return categories.map(option => <option key={option.id} value={option.id}>{option.name}</option>)
    };


    return (
        <form className="space-y-5 bg-white shadow p-10 rounded-lg" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category">Categoría:</label>
                <select
                    id="category"
                    className="border border-slate-300 p-2 rounded-lg"
                    value={category}
                    onChange={handleChangeForm}
                >
                    <OptionsCategories />
                </select>
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="activity">Actividad:</label>
                <input
                    id="activity"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej. Comida, Jugo de naranja, Ensalada, Ejercicio, Pesas..."
                    value={activity}
                    onChange={handleChangeForm}
                />
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories">Calorías:</label>
                <input
                    id="calories"
                    type="number"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej. 100, 300, 500..."
                    value={calories}
                    onChange={handleChangeForm}
                />
            </div>

            <input
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
                value={category === 1 ? "Guardar comida" : "Guardar Ejercicio"}
                disabled={!isValidForm()}
            />
        </form>
    )
}
