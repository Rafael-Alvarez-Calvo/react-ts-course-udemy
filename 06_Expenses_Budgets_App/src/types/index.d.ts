type TExpense = {
    id: string
    expenseName: string
    amount: number
    category: string
    date: Value
}

export type TDraftExpense = Omit<TExpense, 'id'>

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type TCategory = {
    id: string
    name: string
    icon: string
}