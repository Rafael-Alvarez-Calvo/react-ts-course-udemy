import { formatDate } from "../helpers"
import { TExpense } from "../types"
import { AmountDisplay } from "./AmountDisplay"
import { categories } from "../data/categories"
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list";

import "react-swipeable-list/dist/styles.css";
import { useBudget } from "../hooks/useBudget";
import { Fragment } from "react/jsx-runtime";

type TExpenseCardDetailProps = {
    filteredExpenses: TExpense[]
}

export const ExpenseCardDetail = ({ filteredExpenses }: TExpenseCardDetailProps) => {

    const { dispatch } = useBudget();
    debugger;

    const leadinActions = (id: TExpense['id']) => (

        <LeadingActions>
            <SwipeAction onClick={() => dispatch({type: "get-expense-by-id", payload: {id}})}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )
    
    const trailingActions = (id: TExpense['id']) => (

        <TrailingActions>
            <SwipeAction onClick={() => dispatch({type: "remove-expense", payload: {id}})}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return filteredExpenses.map(expense => {

        let categoryInfo = categories.filter(category => category.id === expense.category)[0];
        debugger;
        return (
            <Fragment key={expense.id}>
                <SwipeableList>
                    <SwipeableListItem 
                        maxSwipe={30}
                        leadingActions={leadinActions(expense.id)}
                        trailingActions={trailingActions(expense.id)}
                    >
                        <div className="flex items-center justify-between gap-5 bg-white shadow-lg p-10 w-full border-b border-gray-300 cursor-pointer">
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

                            <AmountDisplay amount={expense.amount} isExpense={true} />
                        </div>
                    </SwipeableListItem>
                </SwipeableList>
            </Fragment>
        )
    })
}