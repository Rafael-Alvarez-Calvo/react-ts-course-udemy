import { useState } from "react";
import { currencies } from "../data/data";
import { ErrorMessage } from "./ErrorMessage";
import { useCryptoStore } from "../store";
import { TPair } from "../types";

export const CryptoSearchForm = () => {

    const { cryptocurrencies, fetchCryptoDetail } = useCryptoStore();
    
    const [pair, setPair] = useState<TPair>({
        currency: '',
        criptocurrency: ''
    });
    const [error, setError] = useState('');

    const CurrenciesOptions = () => {

        return currencies.map( currency => (
            <option key={currency.code} value={currency.code}>{currency.name}</option>
        ))
    }

    const CryptoCurrenciesOptions = () => {

        return cryptocurrencies.map( crypto => (
            <option
                key={crypto.CoinInfo.FullName}
                value={crypto.CoinInfo.Name}
            >
                {crypto.CoinInfo.FullName}
            </option>
        ))
    }

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [event.target.name]: event.target.value
        })
    }
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(Object.values(pair).indexOf('') > -1){
            setError('Todos los campos son obligatorios');
            return
        }

        setError('');
        fetchCryptoDetail(pair)
    }
    
    return (
        <form
            className='form'
            onSubmit={handleSubmit}
        >

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <div className='field'>
                <label htmlFor="currency">Moneda:</label>
                <select 
                    name="currency" 
                    id="currency"
                    onChange={handleChange}
                    value={pair.currency}
                >
                    <option value="">-- Seleccione --</option>
                    <CurrenciesOptions />
                </select>
            </div>

            <div className='field'>
                <label htmlFor="criptocurrency">Criptomoneda:</label>
                <select 
                    name="criptocurrency" 
                    id="criptocurrency"
                    onChange={handleChange}
                    value={pair.criptocurrency}
                >
                    <option value="">-- Seleccione --</option>
                    <CryptoCurrenciesOptions />
                </select>
            </div>

            <input type='submit' value='Cotizar' />
        </form>
    )
}
