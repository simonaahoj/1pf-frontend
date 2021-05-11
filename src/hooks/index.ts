import { useState, useEffect } from 'react';
import { Rate } from "../components/Types"

export default function useRates(): [
    Error | null,
    Rate[]
] {
    const [retes, setRates] = useState<Rate[]>([])
    const [error, setError] = useState<null | Error>(null)

    async function fetchData() {
        try {
            const result = await fetch("https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e")
            const ratesJson = await result.json()
            setRates(ratesJson)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return [error, retes];
}
