import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { TCryptoDetailSchema, TCryptocurrency, TPair } from "./types";
import { getCryptos, getCryptoDetail } from "./services/CryptoService";

type TCryptoStore = {
    cryptocurrencies: TCryptocurrency[]
    cryptocurrencyDetail: TCryptoDetailSchema
    loading: boolean
    fetchCryptos: () => Promise<void>
    fetchCryptoDetail: (pair: TPair) => Promise<void>
}

export const useCryptoStore = create<TCryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    cryptocurrencyDetail: {} as TCryptoDetailSchema,
    loading: false,
    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos();
        set(() => ({
            cryptocurrencies
        }))
    },
    fetchCryptoDetail: async (pair) => {
        set(() => ({
            loading: true
        }))
        const cryptocurrencyDetail = await getCryptoDetail(pair);
        set(() => ({
            cryptocurrencyDetail,
            loading: false
        }))
    },
})));
