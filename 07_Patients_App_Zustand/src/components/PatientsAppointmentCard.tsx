import { PatientCardData } from "./PatientCardData"

type PatientsAppointmentCardProps = {
    patients: TPatient[]
    removePatient: (id: TPatient['id']) => void
    getPatientById: (id: TPatient['id']) => void
}

export const PatientsAppointmentCard = ({
    patients, 
    removePatient, 
    getPatientById}: PatientsAppointmentCardProps
) => {

    return patients.map(({ id, name, caretaker, date, symptoms, email }) => {
        return (
            <div key={id} className="border border-l-8 rounded-xl shadow-md bg-blue-100 border-indigo-600 mb-10">
                <div className="px-5 pt-5">
                    <div className="flex justify-between">
                        <PatientCardData label="Id" data={id.split("-")[4]} />
                        <PatientCardData data={date.toString()} />
                    </div>
                    <PatientCardData label="Nombre" data={name} />
                    <PatientCardData label="Propietario" data={caretaker} />
                    <PatientCardData label="email" data={email} />
                    <PatientCardData label="Síntomas" data={symptoms} />
                </div>
                <div className="flex justify-center mt-5">
                    <button 
                        type="button" 
                        className="py-2 w-full bg-indigo-600 hover:bg-indigo-700 transition-all text-white font-bold uppercase rounded-bl-md"
                        onClick={() => getPatientById(id)}
                    >
                        Editar
                    </button>
                    <button 
                        type="button" 
                        className="py-2 w-full bg-red-500 hover:bg-red-600 transition-all text-white font-bold uppercase rounded-br-xl"
                        onClick={() => removePatient(id)}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        )
    })
}
