import { Fragment, useMemo } from 'react';
import { useAppStore } from '../stores/useAppStore';
import { CocktailCard } from '../components/CocktailCard';

export const HomeView = () => {

    const { cocktails, searchFilters } = useAppStore();

    const hasCocktails = useMemo(() => cocktails.drinks.length, [cocktails]);
    const hasSearchFilters = useMemo(() => Object.keys(searchFilters).length, [searchFilters]);

    return (
        <Fragment>
            <h1 className="text-6xl font-extrabold">
                {hasSearchFilters 
                    ? `Cocktails de ${searchFilters.ingredient} - ${searchFilters.category}` 
                    : 'Cocktails y Bebidas'
                }
            </h1>

            {hasCocktails ? (
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 my-10 gap-10">
                    {cocktails.drinks.map((cocktail) => (
                        <CocktailCard
                            key={cocktail.idDrink}
                            cocktail={cocktail}
                        />
                    ))}
                </div>
            ) : (
                <p className="my-10 text-center text-2xl">
                    No  hay resultados aún, utiliza el formulario para buscar recetas
                </p>
            )}

        </Fragment>
    )
}
