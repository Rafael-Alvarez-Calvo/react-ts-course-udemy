import { useBudget } from '../hooks/useBudget'
import { AmountDisplay } from './AmountDisplay';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"

export const BudgetTracker = () => {

    const { state, dispatch, totalExpenses, remainBudget } = useBudget();

    const expentPercentage = +((totalExpenses / state.budget) * 100).toFixed(2);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='flex justify-center'>
                <CircularProgressbar 
                    value={expentPercentage}
                    styles={buildStyles({
                        pathColor: expentPercentage === 100 ? '#DC2626' : '#3b82f6',
                        textColor: expentPercentage === 100 ? '#DC2626' : '#3b82f6',
                        textSize: 10,
                        trailColor: '#F5F5F5'
                    })}
                    text={`${expentPercentage}% Gastado`}
                />

            </div>
            
            <div className='flex flex-col justify-center items-center gap-8'>
                <button 
                    type='button' 
                    className='bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg'
                    onClick={() => dispatch({type: "clear-budget"})}
                >
                    Limpiar presupuesto
                </button>
                <AmountDisplay label="Presupuesto" amount={state.budget} />
                <AmountDisplay label="Gastado" amount={totalExpenses} />
                <AmountDisplay label="Disponible" amount={remainBudget} />
            </div>

        </div>
    )
}
