import { usePatientStore } from "../stores/store"
import { PatientsAppointmentCard } from "./PatientsAppointmentCard";

export const PatientsAppointments = () => {

    const { patients, removePatient, getPatientById } = usePatientStore();

    const PatientsList = () => {
        return (
            <>
                <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
                <p className="text-lg mt-5 mb-10 text-center">
                    Administra tus
                    <span className="text-indigo-600 font-bold"> pacientes</span>
                </p>
                <div className="overflow-y-auto max-h-screen px-8">
                    <PatientsAppointmentCard 
                        patients={patients} 
                        removePatient={removePatient}
                        getPatientById={getPatientById}
                    />
                </div>
            </>
        )
    }

    const NoPatients = () => {
        return (
            <>
                <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                <p className="text-lg mt-5 mb-10 text-center">
                    Comienza agregando pacientes y
                    <span className="text-indigo-600 font-bold"> aparecerán en este lugar</span>
                </p>
            </>
        )
    }

    return (
        <div className="md:w-1/2 lg:3/5 px-10 pb-10 h-screen">
            {patients.length
                ? <PatientsList />
                : <NoPatients />
            }
        </div>
    )
}
