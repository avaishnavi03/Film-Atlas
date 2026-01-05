import { useEffect, useState } from "react";
import axiosInstance from "../services/axiosInstance";
import type { AxiosRequestConfig } from "axios";

function useFetchMovies(request: AxiosRequestConfig) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response = await axiosInstance(request);
                setData(response.data);
            } catch (err) {
                setError("Failed to load data");
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [request.url]);

    return { data, loading, error };
}

export default useFetchMovies;
