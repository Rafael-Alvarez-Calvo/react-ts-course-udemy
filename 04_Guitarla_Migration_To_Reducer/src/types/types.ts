import { TCartReduceActions } from "../reducers/cartReducer"

export type TGuitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type TCartItem = TGuitar & {
    quantity: number
}

export type TGuitarID = TGuitar['id']

export type TCartProps = {
    cart: TCartItem[]
    dispatch: React.Dispatch<TCartReduceActions>
}