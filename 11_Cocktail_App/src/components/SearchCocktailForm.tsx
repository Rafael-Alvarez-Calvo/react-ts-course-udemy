import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useAppStore } from '../stores/useAppStore';
import { ErrorMessage } from './ErrorMessage';

export const SearchCocktailkForm = () => {

    const { fetchCategories, categories, searchCocktails, showNotification } = useAppStore();

    useEffect(() => {
      fetchCategories();
    }, [])

    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    });

    const [error, setError] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> ) => {

        setSearchFilters({
            ...searchFilters,
            [event.target.name]: event.target.value
        })
        
    }
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(Object.values(searchFilters).indexOf('') > -1){
            setError('Todos los campos son obligatorios');
            showNotification({
                text: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        setError('');
        searchCocktails(searchFilters);
    }

    return (
        <form
            className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6'
            onSubmit={handleSubmit}
        >
            {error && <ErrorMessage>{error}</ErrorMessage>}

            <div className='space-y-4'>
                <label
                    htmlFor="ingredient"
                    className='block text-white uppercase font-extrabold text-lg'
                >Nombre o Ingredientes</label>

                <input
                    id='ingredient'
                    type='text'
                    name='ingredient'
                    className='p-3 w-full rounded-lg focus:outline-none'
                    placeholder='Nombre o Ingrediente. Ej. Vodka, Tequila, Café'
                    onChange={handleChange}
                    value={searchFilters.ingredient}
                />
            </div>
            <div className='space-y-4'>
                <label
                    htmlFor="category"
                    className='block text-white uppercase font-extrabold text-lg'
                >Categoría</label>

                <select
                    id='category'
                    name='category'
                    className='p-3 w-full rounded-lg focus:outline-none'
                    onChange={handleChange}
                    value={searchFilters.category}
                >
                    <option value="">-- Seleccione --</option>
                    {categories.drinks.map(category => (
                        <option
                            key={category.strCategory}
                            value={category.strCategory}
                        >
                            {category.strCategory}
                        </option>
                    ))}
                </select>
            </div>
            <input
                type='submit'
                value='Buscar Recetas'
                className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase'
            />
        </form>
    )
}
