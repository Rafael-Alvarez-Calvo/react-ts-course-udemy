import { z } from "zod";
import { CurrencySchema, CryptoCurrencyResponseSchema, PairSchema, CryptoDetailSchema } from "../schemas/crypto-schema";

export type TCurrency = z.infer<typeof CurrencySchema>
export type TCryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type TPair = z.infer<typeof PairSchema>
export type TCryptoDetailSchema = z.infer<typeof CryptoDetailSchema>