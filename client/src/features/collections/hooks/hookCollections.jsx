import { useState, useEffect } from "react";
import { collectionService } from "../service/collectionService";


const MOCK_COLLECTIONS = [
  {
    id: 1,
    title: "Mountain Views",
    total_photos: 13,
    cover_photo: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop",
    contains_photo: true
  },
  {
    id: 2,
    title: "Minimalism",
    total_photos: 45,
    cover_photo: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=400&h=300&fit=crop",
    contains_photo: true,
  },
  {
    id: 3,
    title: "Architecture",
    total_photos: 7,
    cover_photo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
    contains_photo: true,
  }
];


export const  hookCollections = (refreshTrigger = 0) => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initialSelectedIds, setInitialSelectedIds] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await collectionService("collections");
        setCollections(data);
        
        if (Array.isArray(data)) {
            const preSelectedIds = data
              .filter(c => c.contains_photo)
              .map(c => c.id);
            setInitialSelectedIds(preSelectedIds);
        }
      } catch (error) {
        console.error("Erro ao buscar coleções:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [refreshTrigger]); 

  return { collections, loading, initialSelectedIds, error };
};