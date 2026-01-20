import { useState, useEffect } from "react";

const MOCK_COLLECTIONS = [
  {
    id: 1,
    title: "Mountain Views",
    total_photos: 13,
    cover_photo: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Minimalism",
    total_photos: 45,
    cover_photo: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Architecture",
    total_photos: 7,
    cover_photo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
  }
];

export const useCollections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCollections(MOCK_COLLECTIONS);
      setLoading(false);
    }, 500);
  }, []);

  return { collections, loading };
};