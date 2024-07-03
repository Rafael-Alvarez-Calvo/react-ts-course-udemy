import { useMemo } from "react";
import { useCryptoStore } from "../store"
import { Spinner } from "./Spinner/Spinner";

export const CryptoPriceDisplay = () => {

    const { cryptocurrencyDetail, loading } = useCryptoStore();
    const { IMAGEURL, PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cryptocurrencyDetail;

    const hasResult = useMemo(() => Object.keys(cryptocurrencyDetail).length !== 0 && !Object.values(cryptocurrencyDetail).includes(''), [cryptocurrencyDetail]);

    return (
        <div className="result-wrapper">
            {loading 
                ? <Spinner /> 
                : hasResult && (
                <>
                    <img
                        src={`https://cryptocompare.com/${IMAGEURL}`}
                        alt="Imagen Cryptomoneda"
                    />
                    <div>
                        <p>El precio es de: <span>{PRICE}</span></p>
                        <p>Precio más alto del día: <span>{HIGHDAY}</span></p>
                        <p>Precio más bajo del día: <span>{LOWDAY}</span></p>
                        <p>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></p>
                        <p>Última actualización: <span>{LASTUPDATE}</span></p>
                    </div>
                </>
            )}
        </div>
    )
}
