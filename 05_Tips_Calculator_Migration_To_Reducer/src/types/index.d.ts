type TMenuItem = {
    id: number,
    name: string
    price: number
}

type TOrderItem = TMenuItem & {
    quantity: number
}

type TOrderProps = {
    order?: TOrderItem[]
    dispatch: React.Dispatch<TOrderActions>
    tip?: number
}

type TTipOptions = {
    id: string,
    value: number
    label: string
}