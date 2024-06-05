import { ChangeEvent, useState } from "react"
import { categories } from "../data/categories"
import { Value, TDraftExpense } from "../types"
import DatePicker from "react-date-picker"

import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'
import { ErrorMessage } from "./ErrorMessage"
import { useBudget } from "../hooks/useBudget"

export const ExpenseForm = () => {

    const { dispatch } = useBudget();

    const [error, setError] = useState("");

    const [expense, setExpense] = useState<TDraftExpense>({
        amount: 0,
        expenseName: "",
        category: "",
        date: new Date()
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        
        const { name, value } = event.target;
        const isAmountField = ["amount"].indexOf(name) > -1;

        setExpense({
            ...expense,
            [name]: isAmountField ? +value : value
        })
    }
    
    const handleChangeDatePicker = (value : Value) => {
        setExpense({
            ...expense,
            date: value
        })
    }

    const OptionSelectCategories = () =>{

        return categories.map(category => {
            return (
                <option key={category.id} value={category.id}>
                    {category.name}
                </option>
            )
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(Object.values(expense).indexOf("") > -1){
            setError("Todos los campos son obligatorios");
            return

        }else{
            dispatch({type: "add-expense", payload: {expense}})
            setError("");
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">Nuevo Gasto</legend>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="expenseName" className="text-xl">Gasto:</label>
                <input 
                    id="expenseName" 
                    name="expenseName"
                    type="text"
                    placeholder="Añade el nombre del gasto"
                    className="bg-slate-100 p-2 rounded-lg border hover:border-blue-600 focus:border-blue-600 active:border-blue-600 transition-all hover:transition-all"
                    value={expense.expenseName} 
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="amount" className="text-xl">
                    Cantidad: 
                </label>
                <input 
                    id="amount" 
                    name="amount"
                    type="number"
                    placeholder="Añade la cantidad del gasto ej. 300, 500..."
                    className="bg-slate-100 p-2 rounded-lg border hover:border-blue-600 focus:border-blue-600 active:border-blue-600 transition-all hover:transition-all"
                    value={expense.amount}
                    onChange={handleChange}
                />
            </div>
            
            <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="category" className="text-xl">
                    Categoría: 
                </label>
                <select 
                    id="category" 
                    name="category"
                    className="bg-slate-100 p-2 rounded-lg border hover:border-blue-600 focus:border-blue-600 active:border-blue-600 transition-all hover:transition-all"
                    value={expense.category}
                    onChange={handleChange}
                >
                    <OptionSelectCategories />
                </select>
            </div>

            <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="date" className="text-xl">
                    Fecha: 
                </label>
                <DatePicker 
                    id="date" 
                    name="date"
                    className="bg-slate-100 p-2 rounded-lg border hover:border-blue-600 focus:border-blue-600 active:border-blue-600 transition-all hover:transition-all"
                    value={expense.date}
                    onChange={handleChangeDatePicker}
                />
            </div>

            <input 
                type="submit"
                className="bg-blue-600 cursor-pointer w-full p-2 mt-8 text-white font-bold rounded-lg uppercase hover:bg-blue-900 active:bg-blue-900 transition-all disabled:opacity-50"
                value="Añadir Gasto"
            />
        </form>
    )
}
