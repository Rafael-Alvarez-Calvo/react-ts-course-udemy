import { useBudget } from '../hooks/useBudget'
import { AmountDisplay } from './AmountDisplay';

export const BudgetTracker = () => {

    const { dispatch } = useBudget();
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='flex justify-center'>
                <img src='/img/grafico.jpg' alt='Gráfica de gastos'/>
            </div>
            
            <div className='flex flex-col justify-center items-center gap-8'>
                <button 
                    type='button' 
                    className='bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg'
                >
                    Limpiar presupuesto
                </button>
                <AmountDisplay label="Gastos" amount={300} />
            </div>

        </div>
    )
}
