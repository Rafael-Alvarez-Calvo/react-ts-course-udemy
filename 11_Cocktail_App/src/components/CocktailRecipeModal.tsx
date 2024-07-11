import { Dialog, DialogTitle, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import { useAppStore } from '../stores/useAppStore';
import { TRecipe } from '../types';

export default function CocktailRecipeModal() {

  const { modal, closeModal, cocktailRecipe, handleClickFavorite, favoriteExists } = useAppStore();

  const Ingredients = () => {
    const ingredients: JSX.Element[] = [];

    for(let i = 1; i <= 6; i++){
      const ingredient = cocktailRecipe[`strIngredient${i}` as keyof TRecipe];
      const measure = cocktailRecipe[`strMeasure${i}` as keyof TRecipe];

      if(ingredient && measure){
        ingredients.push(
          <li key={i} className='text-lg font-normal'>
              {ingredient} - {measure}
          </li>
        )
      }
    }

    return ingredients
  }

  return (
    <Fragment>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl" >
                  <DialogPanel className="bg-orange-400 p-5 pb-8">
                    <DialogTitle as="h3" className="text-white text-4xl font-bold pb-5 text-center">
                      {cocktailRecipe.strDrink}
                    </DialogTitle>

                    <img
                      src={cocktailRecipe.strDrinkThumb}
                      alt={`Imagen de ${cocktailRecipe.strDrink}`}
                      className='mx-auto w-80 rounded-lg shadow-xl'
                    />
                  </DialogPanel>
                  <DialogPanel className="px-10 pb-8 pt-5">
                    <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-3">
                      Ingredientes y Cantidades
                    </DialogTitle>
                    <ul>
                      {Ingredients()}
                    </ul>
                    <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold mt-5 mb-3">
                      Instrucciones
                    </DialogTitle>

                    <p className='text-lg'>{cocktailRecipe.strInstructions}</p>

                    <div className='mt-8 flex justify-between gap-4'>
                      <button
                        type='button'
                        className='w-full rounded bg-gray-500 p-3 font-bold uppercase text-white shadow hover:bg-gray-500'
                        onClick={closeModal}
                      >Cerrar</button>

                      <button
                        type='button'
                        className='w-full rounded bg-orange-500 p-3 font-bold uppercase text-white shadow hover:bg-orange-400'
                        onClick={() => {
                          handleClickFavorite(cocktailRecipe)
                          closeModal()
                        }}
                      >
                        {favoriteExists(cocktailRecipe.idDrink) 
                          ? 'Eliminar Favorito' 
                          : 'Agregar a Favoritos'
                        }
                      </button>
                    </div>
                  </DialogPanel>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  )
}
