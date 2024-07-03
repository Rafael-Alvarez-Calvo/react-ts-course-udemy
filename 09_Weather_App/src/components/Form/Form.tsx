import { ChangeEvent, FormEvent, useState } from 'react'
import { countries } from '../../data/countries';
import { Alert } from '../Alert/Alert';

import styles from './Form.module.css';

type FormProps = {
    fetchWeather: (search: TSearch) => Promise<void>
}

export const Form = ({ fetchWeather } : FormProps) => {

    const [search, setSearch] = useState<TSearch>({
        city: '',
        country: ''
    })

    const [alert, setAlert] = useState('')

    const handleChangeForm = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {

        setSearch({
            ...search,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isSearchEmpty = Object.values(search).indexOf("") > -1;

        if(isSearchEmpty){
            return setAlert('Todos los campos son obligatorios');
        }

        fetchWeather(search);
    }

    return (
        <form 
            className={styles.form}
            onSubmit={handleSubmitForm}
        >

            {alert && <Alert>{alert}</Alert>}
            <div className={styles.field}>
                <label htmlFor="country">País:</label>
                <select
                    id="country"
                    name="country"
                    value={search.country}
                    onChange={handleChangeForm}
                >
                    <option value="">-- Seleccione un País ---</option>
                    {countries.map( country => (
                        <option
                            key={country.code}
                            value={country.code}
                        >{country.name}</option>
                    ))}
                </select>
            </div>

            <div className={styles.field}>
                <label htmlFor="city">Ciudad:</label>
                <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Escribe tu ciudad"
                    value={search.city}
                    onChange={handleChangeForm}
                />
            </div>

            <input className={styles.submit} type="submit" value='Consultar Clima' />
        </form>
    )
}
