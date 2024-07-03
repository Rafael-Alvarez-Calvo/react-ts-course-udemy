import axios from "axios";
import { CryptoCurrenciesResponseSchema, CryptoDetailSchema } from "../schemas/crypto-schema";
import { TPair } from "../types";

export const getCryptos = async () => {

    const cryptoApiUrl = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
    
    const { data: {Data: cryptoData} } = await axios.get(cryptoApiUrl);
    const {data: cryptoResult, success} = CryptoCurrenciesResponseSchema.safeParse(cryptoData);
    
    if(success)
        return cryptoResult;
}

export const getCryptoDetail = async (pair: TPair) => {
    
    const cryptoApiUrl = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`;

    const { data: 
                { DISPLAY: {
                    [pair.criptocurrency]: {
                        [pair.currency]: cryptoDetailData
                    }
                }}
    } = await axios.get(cryptoApiUrl);

    const {data: cryptoResult, success} = CryptoDetailSchema.safeParse(cryptoDetailData);

    if(success)
        return cryptoResult;
}