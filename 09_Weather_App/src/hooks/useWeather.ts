import axios from "axios";
import { useMemo, useState } from "react";
import { z } from "zod";
// import { object, string, number, InferOutput, parse } from "valibot";

//---- ZOD ------//
const TypedWeather = z.object({
    name: z.string(),
    main: z.object({
        feels_like: z.number(),
        humidity: z.number(),
        pressure: z.number(),
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number()
    }),
})

export type TWeather = z.infer<typeof TypedWeather>
//---- ZOD ------//

//---Valibot---//
// const weatherSchema = object({
//     name: string(),
//     main: object({
//         feels_like: number(),
//         humidity: number(),
//         pressure: number(),
//         temp: number(),
//         temp_max: number(),
//         temp_min: number()
//     }),
// })

// type TWeather = InferOutput<typeof weatherSchema>

export const useWeather = () => {

    // Type Guards -> Es mejor forma que la anterior pero se vuelve muy inmantenible si la respuesta de la API es muy grande
    // const typeWeatherResponse = (weatherData: unknown) : weatherData is TWeather  => {

    //     return (
    //         Boolean(weatherData) &&
    //         typeof weatherData === 'object' &&
    //         typeof (weatherData as TWeather).name === 'string' &&
    //         typeof (weatherData as TWeather).main === 'object' &&
    //         typeof (weatherData as TWeather).main.feels_like === 'number' &&
    //         typeof (weatherData as TWeather).main.humidity === 'number' &&
    //         typeof (weatherData as TWeather).main.pressure === 'number' &&
    //         typeof (weatherData as TWeather).main.temp === 'number' &&
    //         typeof (weatherData as TWeather).main.temp_max === 'number' &&
    //         typeof (weatherData as TWeather).main.temp_min === 'number'
    //     )
    // }

    const initialState = {
        name: '',
        main: {
            feels_like: 0,
            humidity: 0,
            pressure: 0,
            temp: 0,
            temp_max: 0,
            temp_min: 0
        }
    }

    const [weather, setWeather] = useState<TWeather>(initialState)
    const [loading, setLoading] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false)
    
    const fetchWeather = async (search: TSearch) => {

        const apiId = import.meta.env.VITE_GEO_API_KEY;

        setLoading(true);
        setWeather(initialState);
        setIsNotFound(false);
        
        try {
            const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apiId}`;

            const { data: geoData } = await axios.get(geoUrl);
            
            if(!geoData[0]){
                setIsNotFound(true);
                return
            }

            const lat = geoData[0].lat;
            const lon = geoData[0].lon;

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiId}`;

            // Castear el type
            // const { data: weatherData } = await axios.get<TWeather>(weatherUrl);
            // console.log(weatherData)

            // Type Guards -> Es mejor forma que la anterior pero se vuelve muy inmantenible si la respuesta de la API es muy grande
            // const { data: weatherData } = await axios.get(weatherUrl);
            // const isValidWeatherResponse = typeWeatherResponse(weatherData);

            // isValidWeatherResponse && console.log(weatherData)
            // isValidWeatherResponse || console.log('La respuesta no tiene la forma correcta')
            
            //Valibot
            // const { data: weatherData } = await axios.get(weatherUrl);
            // const weatherResult = parse(weatherSchema, weatherData);
            // console.log(weatherResult)
            
            // ZOD
            const { data: weatherData } = await axios.get(weatherUrl);
            const {data: weatherResult, success} = TypedWeather.safeParse(weatherData);
            
            if(success){
                setWeather(weatherResult);
            }

        } catch (error) {
            console.log(error);

        } finally {
            setLoading(false);
        }
    }

    const hasWeatherData = useMemo(() => weather.name, [weather])
    
    return {
        weather,
        fetchWeather,
        hasWeatherData,
        loading,
        isNotFound
    }
}
