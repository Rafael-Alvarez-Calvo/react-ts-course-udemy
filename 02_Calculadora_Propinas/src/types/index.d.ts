type TMenuItem = {
    id: number,
    name: string
    price: number
}

type TOrderItem = TMenuItem & {
    quantity: number
}

type TOrderProps = {
    order: TOrderItem[]
    deleteOrder?: (id: TOrderItem['id']) => void
    tip?: number
    setTip?: React.Dispatch<React.SetStateAction<number>>
}

type TTipOptions = {
    id: string,
    value: number
    label: string
}