import { useEffect, useState } from "react";
import { collectionService } from "../service/collectionService";
export function listImagesCollection(idCollection) {
    
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      const data = await collectionService(
        `collections/${idCollection}/images`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      setImages(data);
    } catch (err) {
      setError(err);
      console.log(err);
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [idCollection]);

  return { images, loading, error };
}
