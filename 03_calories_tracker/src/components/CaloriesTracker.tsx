import { useMemo } from "react"

type TCaloriesTrackerProps = {
    activities: TCaloriesForm[]
}

type TCaloriesValuesProps = {
    calories: number
    text: string
    customTextStyle: string
}

export const CaloriesTracker = ({ activities }: TCaloriesTrackerProps) => {

    const consumedCalories = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [activities]);

    const burntCalories = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [activities]);
    
    const diffCalories = useMemo(() => consumedCalories - burntCalories, [activities]);

    const CaloriesValues = ({calories, text, customTextStyle} : TCaloriesValuesProps) =>{

        return(
            <p className="flex flex-col items-center text-white font-bold rounded-full gap-3 uppercase">
                <span className={`text-6xl ${customTextStyle}`}>{calories}</span>
                <span className="">{text}</span>
            </p>
        )
    }

    return (
        <>
            <h2 className="text-3xl font-bold text-white text-center">Resumen de calorías</h2>

            <div className="flex flex-col items-center md:flex-row md:justify-around mt-10">
                <CaloriesValues calories={consumedCalories} text="Consumidas" customTextStyle="text-red-400"/>
                <CaloriesValues calories={burntCalories} text="Quemadas" customTextStyle="text-blue-400"/>
                <CaloriesValues calories={diffCalories} text="Resultado" customTextStyle={diffCalories < 0 ? "text-blue-400" : diffCalories > 0 ? "text-red-400" : "text-white"}/>
            </div>
        </>
    )
}
