import { useMemo } from 'react'
import { useAppStore } from '../stores/useAppStore'
import { CocktailCard } from '../components/CocktailCard';

export default function FavouritesView () {

  const { favourites } = useAppStore()
  const hasFavourites = useMemo(() => favourites.length, [favourites]);

  return (
    <>
      <h1 className="text-6xl font-extrabold">Mis Cocktails favoritos</h1>

      {hasFavourites ? (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 my-10 gap-10">
          {favourites.map(cocktail => (
            <CocktailCard
              key={cocktail.idDrink}
              cocktail={cocktail}
            />
          ))}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">
          Los favoritos se mostrarán aquí
        </p>
      )}
    </>
  )
}
