import { useMemo } from "react"
import { useData } from "../hooks/useData";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { TCaloriesFormActions } from "../reducers/formReducer";

type TRegisteredActivitiesListProps = {
    activities: TCaloriesForm[]
    dispatch : React.Dispatch<TCaloriesFormActions>
}

export const RegisteredActivities = ({ activities, dispatch }: TRegisteredActivitiesListProps) => {

    const { categories } = useData();

    const categoryName = useMemo(() => 
        (category: TCaloriesForm['category']) => {
            return categories.map(cat => cat.id === category ? cat.name : "")
    }, [activities]);

    const handleEditActivity = (activityId: TCaloriesForm['id']) => {
        return dispatch({type: "set-activeId", payload: {id: activityId}})
    }
    
    const handleRemoveActivity = (activityId: TCaloriesForm['id']) => {
        return dispatch({type: "remove-activity", payload: {id: activityId}})
    }

    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center border-b-gray-500 border-b pb-5 mt-3">Registro de actividades</h2>

            {activities.length 
                ? activities.map(activity =>{
                    return(
                        <div key={activity.id} className="bg-white mt-10 rounded-lg shadow-md">
                            <div className={`w-full rounded-tl-lg rounded-tr-lg py-2 ${activity.category === 1 ? "bg-red-400" : "bg-blue-400"}`}>
                                <p className="text-center text-xl text-white font-bold uppercase">{categoryName(+activity.category)}</p>
                            </div>

                            <div className="flex justify-between px-8 py-7">
                                <div className="space-y-2 relative">
                                    <p className="text-3xl font-bold">{activity.activity}</p>
                                    <p className="text-4xl text-lime-500 font-bold">{activity.calories} Kcal</p>
                                </div>

                                <div className="flex gap-5 items-center">
                                    <button onClick={() => handleEditActivity(activity.id)}>
                                        <PencilSquareIcon className="h-8 w-8 text-yellow-500"/>
                                    </button>
                                    <button onClick={() => handleRemoveActivity(activity.id)}>
                                        <TrashIcon className="h-8 w-8 text-red-500"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                )

                : <p className="text-center text-4xl text-gray-500 mt-8">No hay ningun registro de actividad</p>
            }
        </>
    )
}
