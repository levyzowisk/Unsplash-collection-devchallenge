import { useEffect, useState } from "react";
import { collectionService } from "../service/collectionService";

export function listCollection(refreshTrigger = 0) {
    const [collections, setCollections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadData = async () => {
        try {
            const data = await collectionService('collections', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setCollections(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, [refreshTrigger]);

    return {collections, loading, error};
}