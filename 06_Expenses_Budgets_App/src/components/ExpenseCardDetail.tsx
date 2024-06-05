import { formatDate } from "../helpers"
import { TExpense } from "../types"
import { AmountDisplay } from "./AmountDisplay"
import { categories } from "../data/categories"

type TExpenseCardDetailProps = {
    expenses: TExpense[]
}

export const ExpenseCardDetail = ({expenses}: TExpenseCardDetailProps) => {
    
    return expenses.map(expense => {
        
        let categoryInfo = categories.filter(category => category.id === expense.category)[0];

        return (
            <div key={expense.id} className="flex items-center justify-between gap-5 bg-white shadow-lg p-10 w-full border-b border-gray-300">
                <div>
                    <img 
                        src={`/img/category-icons/icono_${categoryInfo.icon}.svg`}
                        className="w-20"
                        alt={`Imagen de la categoria ${categoryInfo.name}`}
                    />
                </div>
                <div className="space-y-2">
                    <p className="text-sm font-bold uppercase text-slate-500 text-center">{categoryInfo.name}</p>
                    <p className="text-center">{expense.expenseName}</p>
                    <p className="text-slate-600 text-sm text-center">{formatDate(expense.date!.toString())}</p>
                </div>

                <AmountDisplay amount={expense.amount} isExpense={true}/>
            </div>
        )
    })
}