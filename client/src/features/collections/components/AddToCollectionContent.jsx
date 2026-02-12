import { useState } from "react";
import Input from "../../../components/Input";
import { useCollections } from "../hooks/useCollections";

export function AddToCollectionContent({photo, onClose}) {
    console.log(photo);
    
    const texto = photo.alternative_slugs.pt;
    const ultimoTraco = (texto.lastIndexOf('-'));
    const textoLimpo = texto.substring(0, ultimoTraco);
    const textoFormatado = textoLimpo.charAt(0).toUpperCase() + textoLimpo.slice(1).replaceAll('-', ' ');
    
    const [selectedIds, setSelectedIds] = useState([]);
    
    const toggleCollection = async (collectionId) => {
        const isAlreadySelected = selectedIds.includes(collectionId);

        let newIds;
        if(isAlreadySelected) {
            newIds = selectedIds.filter(id => id !== collectionId);
        }
    }
    const {collections, loading} = useCollections();
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
                {collections.map((collection) => (
                    <div key={collection.id} className={`flex gap-1 items-center my-1 rounded px-2 py-2 ${visible ?  'bg-gray-100 hover:bg-gray-200' : 'bg-gray-800 hover:bg-gray-700'}`}>
                        <img src={collection.cover_photo} alt="" className="h-10 rounded shadow-lg transition-colors duration-800  hover:shadow-xl"/>
                        <div className="flex justify-between items-center w-100">
                            <div>
                                <h4 className={`font-destaque font-medium text-[15px] ${visible ? 'text-black' : 'text-white'}`} >{collection.title}</h4>
                                <p className={`text-[12px] ${visible ? 'text-gray-500' : 'text-white'}`}>{collection.total_photos} fotos</p>
                            </div>

                            <div className="pr-2 cursor-pointer hover:scale-110" title="Adicionar a coleção" onClick={() => setVisible(!visible)}>
                                {visible === false ? <i class="bi bi-check-lg text-lg text-white"></i> : <i class="bi bi-plus-lg text-lg"></i>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="flex justify-center">
                <button className="flex justify-center items-center gap-2 rounded py-1 font-destaque border w-100 border-gray-300 cursor-pointer hover:bg-gray-100">
                    <p className="text-center font-medium">Criar nova coleção</p>
                </button>
            </div>
        </div>

    );
}