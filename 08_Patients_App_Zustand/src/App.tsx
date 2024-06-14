import { PatientsAppointments } from "./components/PatientsAppointments"
import { PatientsForm } from "./components/PatientsForm"
import { ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css'

function App() {

  return (
    <>
      <header className="container mx-auto mt-16">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Seguimiento de Pacientes 
          <span className="text-indigo-700"> Médicos</span>
        </h1>
      </header>

      <main className="mt-12 md:flex justify-between px-60">
        <PatientsForm />
        <PatientsAppointments />
      </main>
      <ToastContainer />
    </>
  )
}

export default App
