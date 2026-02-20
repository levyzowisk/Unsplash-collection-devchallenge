import { useState, useEffect } from "react";
import Input from "../../../components/Input";
import { useCollections } from "../hooks/useCollections";

export function AddToCollectionContent({photo, onClose}) {
    
    const texto = photo.alternative_slugs.pt;
    const ultimoTraco = (texto.lastIndexOf('-'));
    const textoLimpo = texto.substring(0, ultimoTraco);
    const textoFormatado = textoLimpo.charAt(0).toUpperCase() + textoLimpo.slice(1).replaceAll('-', ' ');
    
    const [selectedIds, setSelectedIds] = useState([]);
    const {collections, loading, initialSelectedIds} = useCollections();
    
    useEffect(() => {
            setSelectedIds(initialSelectedIds);
    }, [initialSelectedIds]);
    
    const toggleCollection = async (collectionId) => {
        const isAlreadySelected = selectedIds.includes(collectionId);

        let newIds;
        if(isAlreadySelected) {
            newIds = selectedIds.filter(id => id !== collectionId);
        } else {
            newIds = [...selectedIds, collectionId];
        }

        setSelectedIds(newIds);
    }
    if(loading) return <div>Carregando coleções...</div>;
    
    return (
        <div className="flex flex-col h-full">
            <h1 className="font-destaque font-semibold text-xl pb-2">Adicionar à coleção</h1>
            
            <section className="p-2 flex bg-gray-100 gap-2 rounded text-sm">
            <img src={photo.urls.thumb} className="w-20 rounded" />
            <div>
                <h1 className="font-destaque font-semibold">{textoFormatado}</h1>
                <p className="font-destaque text-xs text-gray-500" >by {photo.user.first_name} {photo.user.last_name}</p>
            </div>
            </section>
            <div className="pt-5">
                <form  onSubmit={''} className="relative w-100">
                    <i class="bi bi-search absolute left-4 top-1/2 -translate-y-1/2"></i>
                    <Input placeholder={"Digite uma palavra chave..."} value={''} onChange={''} className="bg-gray-100 p-3 rounded-lg w-full pl-10"/>
                </form>
            </div>
            <div className="pt-5 flex flex-col gap-1 flex-1">
                {collections.map((collection) => {
                    const isSelect = selectedIds.includes(collection.id);
                    console.log(isSelect);
                    

                    return (
                        <div 
                            onClick={() => toggleCollection(collection.id)} 
                            className={`flex gap-1 items-center my-1 rounded px-2 py-2 cursor-pointer transition-colors ${isSelect ? ' bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
                        >
                            <img src={collection.cover_photo} alt="" className="h-10 rounded shadow-lg transition-colors hover:shadow-xl"/>
                            <div className="flex justify-between items-center w-full pl-2">
                                <div>
                                    <h4 className={`font-destaque font-medium text-[15px] ${isSelect ? 'text-white' : ' text-black'}`} >{collection.title}</h4>
                                    <p className={`text-[12px] ${isSelect ? 'text-white' : 'text-gray-500'}`}>{collection.total_photos} fotos</p>
                                </div>

                                <div className="pr-2 hover:scale-110" title="Adicionar a coleção">
                                    {isSelect ? <i className="bi bi-plus-lg text-lg text-white"></i>     :  <i className="bi bi-check-lg text-lg text-black"></i>}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="flex justify-center pt-4">
                <button className="flex justify-center items-center gap-2 rounded py-1 font-destaque border w-full border-gray-300 cursor-pointer hover:bg-gray-100">
                    <p className="text-center font-medium">Criar nova coleção</p>
                </button>
            </div>
        </div>
    );
}