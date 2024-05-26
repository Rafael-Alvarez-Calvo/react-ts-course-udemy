export const useData = () => {

    const categories : TCategories[] = [
        { id: 1, name: 'Comida'},
        { id: 2, name: 'Ejercicio'}
    ]

    return {
        categories
    }
}