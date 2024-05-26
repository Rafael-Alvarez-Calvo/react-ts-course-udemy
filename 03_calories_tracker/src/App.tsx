import { useEffect, useMemo, useReducer } from "react"
import { CaloriesCalculatorForm } from "./components/CaloriesCalculatorForm"
import { formReducer, initialState } from "./reducers/formReducer"
import { RegisteredActivities } from "./components/RegisteredActivities";
import { CaloriesTracker } from "./components/CaloriesTracker";

function App() {

  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() =>{
    localStorage.setItem("activities", JSON.stringify(state.form))
  }, [state.form])

  const canRestartApp = () => useMemo(() => state.form.length > 0, [state.form])

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-lg font-bold text-white uppercase">Contador de calorías</h1>
          <button
            className="bg-red-500 rounded-md px-5 py-2 text-white font-semibold cursor-pointer uppercase text-sm disabled:opacity-50 transition-all"
            disabled={!canRestartApp()}
            onClick={() => dispatch({type: "reset-app"})}
          >
              Reniciar App
          </button>
        </div>
      </header>

      <main className="bg-lime-400 py-20">
        <section className="max-w-4xl mx-auto -mt-5">
          <CaloriesCalculatorForm 
            dispatch={dispatch}
            state={state}
          />
        </section>

        <section className="bg-gray-800 w-full p-10 mt-12">
          <div className="max-w-4xl mx-auto">
            <CaloriesTracker activities={state.form} />
          </div>
        </section>

        <section className="p-10 mx-auto max-w-4xl">
          <RegisteredActivities activities={state.form} dispatch={dispatch}/>
        </section>
      </main>
    </>
  )
}

export default App
