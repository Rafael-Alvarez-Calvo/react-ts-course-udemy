type TGuitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

type TCartItem = TGuitar &{
    quantity: number
}

type TGuitarID = TGuitar['id']

type TCartProps = {
    cart: TCartItem[]
    deleteItemFromCart: (id: TGuitar['id'], clearAll: boolean) => void
    substractItemFromCart: (index: number) => void
    sumItemToCart: (index: number) => void
    isEmptyCart: boolean
    total: number
}

type TOtherProps = {
    index: number
}

type TIndexOtherProps = TOtherProps['index'];


/*UTILITY TYPES */

// type TCartItem = Pick<TGuitar, 'id' | 'name' | 'image' > & {
//     quantity: number
// }

// type TCartItem = Omit<TGuitar, 'id' | 'name' | 'image' > & {
//     quantity: number
// }




// interface ICartItem extends TGuitar{
//     quantity: number
// }

// interface IGuitar {
//     id: number
//     name: string
//     image: string
//     description: string
//     price: number
// }