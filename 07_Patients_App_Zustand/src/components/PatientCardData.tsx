type PatientCardDataProps = {
    label?: string
    data: string
}

export const PatientCardData = ({label, data}: PatientCardDataProps) => {
    return (
        <p className="font-bold mb-3 text-gray-700 uppercase last-of-type:mb-0">
            {label && `${label}: `}
            <span className="font-normal normal-case">{data}</span>
        </p>
    )
}