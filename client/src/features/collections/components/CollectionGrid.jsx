import { listCollection } from "../hooks/listCollection";
import CollectionCard from "./CollectionCard";

export default function CollectionsGrid ({ refreshTrigger, onSuccess }) {
    
    const {collections, loading, error} = listCollection(refreshTrigger);

    if(loading) return <div className="text-center py-10">Carregando coleções...</div>;

    if(error) return <div className="text-center py-10">Erro ao carregar coleções</div>;

    if(collections.length == 0) {
        return <div className="text-center py-10">Nenhuma coleção encontrada</div>
    }


    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {collections.map((collection) => (
            <CollectionCard key={collection.id} data={collection}  onSuccess={onSuccess} />
        ))}
    </div>
    );
}