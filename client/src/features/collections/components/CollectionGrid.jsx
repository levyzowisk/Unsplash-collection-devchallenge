import { useCollections } from "../hooks/useCollections";
import CollectionCard
 from "./CollectionCard";
export default function CollectionsGrid () {
    const {collections, loading} =  useCollections();

    if(loading) return <div className="text-center py-10">Carregando coleções...</div>;

    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {collections.map((collection) => (
            <CollectionCard key={collection.id} data={collection} />
        ))}
    </div>
    );
}