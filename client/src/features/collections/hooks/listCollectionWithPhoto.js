import { collectionService } from "../service/collectionService";
import { useEffect, useState } from "react";

export  function listCollection(idImage) {
    const [collections, setCollections] = useState([]);
    const [initialSelectedIds, setInitialSelectedIds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

     const loadData = async () => {
        setLoading(true); 
         try {
         
             const data =  await collectionService(`collections?idImage=${idImage}`, {
                     method: "GET",
                     headers: {
                         "Content-Type": "application/json"
                     },
         
                 });
         
                 const preSelectedIds = data
                       .filter(c => c.containsPhoto)
                       .map(c => c.id);
                     setInitialSelectedIds(preSelectedIds);
                     setCollections(data);
        }
          catch (err) {
             setError(err);
         } finally {
             setLoading(false);
         }
     }

    useEffect(() => {
        loadData();
    }, [idImage]);
    
    
    return {collections, initialSelectedIds, loading, error, loadData};
}