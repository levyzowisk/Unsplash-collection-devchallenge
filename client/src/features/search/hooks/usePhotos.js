import { useEffect, useState } from "react";
import api from "../../../services/api";

export function usePhotos (query= '') {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchPhotos = async () => {
            setLoading(true);
        try {

            let response;
            if(query) {
                response = await api.get('/search/photos', {
                    params: {query, per_page: 20}
                });
                setPhotos(response.data.results);
            } else {
                response = await api.get('/photos/random', {
                    params: { count: 10}
                });
                setPhotos(response.data);
            }
            } catch(error) {
                console.error("Erro ao buscar fotos", error);
        }
            finally {
             setLoading(false)
        }    
        }
        fetchPhotos();
    },[query])
    return {photos, loading};
}