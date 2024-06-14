import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { toast } from 'react-toastify';

type TPatientsState = {
    patients: TPatient[]
    activeId: TPatient['id']
    addPatient: (patientData: TDraftPatient) => void
    removePatient: (id: TPatient['id']) => void
    getPatientById: (id: TPatient['id']) => void
    updatePatient: (data: TDraftPatient) => void
}

const createPatient = (patient: TDraftPatient) : TPatient =>{
    return {id: uuidv4(), ...patient}
}

export const usePatientStore = create<TPatientsState>()(
    devtools(
    persist(
        (set) => ({
            patients: [],
            activeId: "",
            addPatient: (patientData) => {
                set((state) => ({
                    patients: [...state.patients, createPatient(patientData)]
                }))
                toast.success("El paciente se ha registrado correctamente.")
            },
            removePatient: (id) => {
                set((state) => ({
                    patients: state.patients.filter(patient => patient.id !== id)
                }))
                toast.error(`El paciente se ha eliminado.`);
            },
            getPatientById: (id) => {
                set(() => ({
                    activeId: id
                }))
            },
            updatePatient: (data) => {
                set((state) => ({
                    patients: state.patients.map(patient => patient.id === state.activeId ? {id: patient.id, ...data} : patient),
                    activeId: ''
                }))
                toast.success(`El paciente ${data.name} se ha actualizado correctamente.`);
            },
        }), 
        {
            name: 'patients-storage'
        }
    )
))