import { useData } from "../../hooks/useData";

export const TipForm = ({ order, tip, setTip }: TOrderProps) => {

    const { tipOptions } = useData();

    const TipOptions = () =>{

        return tipOptions.map(optionTip => {

            return (
                <div key={optionTip.id}>
                    <label htmlFor={optionTip.id} className="text-lg">{optionTip.label}</label>
                    <input 
                        id={optionTip.id}
                        className="ml-1"
                        type="radio" 
                        name="tip"
                        disabled={order.length === 0} 
                        checked={optionTip.value === tip}
                        value={optionTip.value} 
                        onChange={event => setTip && setTip(+event.target.value)}
                    />
                </div>
            )
        })
    }

    return (
        <div className="flex justify-center items-center w-full px-8 gap-3">
            <h3 className="font-black text-2xl">Propina:</h3>

            <form className="flex justify-center items-center w-2/4 mt-2 gap-8">
                <TipOptions />
            </form>
        </div>
    )
}
