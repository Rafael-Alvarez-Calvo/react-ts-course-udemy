type TPatient = {
    id: string
    name: string
    caretaker: string
    email: string
    date: Date
    symptoms: string
}

type TDraftPatient = Omit<TPatient, 'id'>