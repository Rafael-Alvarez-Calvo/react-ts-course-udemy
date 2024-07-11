import { useAppStore } from '../stores/useAppStore';
import type { TCocktail } from '../types';

type CocktailCardProps = {
    cocktail: TCocktail
}

export const CocktailCard = ({cocktail: {strDrinkThumb, strDrink, idDrink}}: CocktailCardProps) => {

    const { fetchCocktailRecipe } = useAppStore();

    return (
        <div className="border shadow-lg rounded-lg">
            <div className="overflow-hidden rounded-tl-lg rounded-tr-lg">
                <img 
                    src={strDrinkThumb} 
                    alt={`Imagen de ${strDrink}`}
                    className="hover:scale-125 transition-transform hover:rotate-2"
                />
            </div>

            <div className="p-7 pt-5">
                <h2 className="text-2xl truncate font-black">{strDrink}</h2>
                <div className='flex justify-between items-center'>
                    <button
                        type="button"
                        className="bg-orange-400 hover:bg-orange-500 mt-5 w-full py-2 font-bold text-white text-lg rounded-lg"
                        onClick={() => fetchCocktailRecipe(idDrink)}
                    >Ver Receta</button>
                </div>
            </div>
        </div>
    )
}
