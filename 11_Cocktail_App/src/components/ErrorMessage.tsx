export const ErrorMessage = ({children} : {children : React.ReactNode}) => {
    return (
        <div className="text-center text-white bg-orange-800 rounded-lg py-2 font-bold text-lg">
            {children}
        </div>
    )
}
