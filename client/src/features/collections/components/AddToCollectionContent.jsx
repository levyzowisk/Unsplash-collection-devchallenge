
import { useState, useEffect } from "react";
import { listCollection } from "../hooks/listCollectionWithPhoto";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import {toast} from 'react-toastify';
import removeImageCollection from "../hooks/removeImageCollection";
import { addImageCollection } from "../hooks/addImageCollection";

export function AddToCollectionContent({photo, onClose}) {
    
    const texto = photo.alternative_slugs.pt;
    const ultimoTraco = (texto.lastIndexOf('-'));
    const textoLimpo = texto.substring(0, ultimoTraco);
    const textoFormatado = textoLimpo.charAt(0).toUpperCase() + textoLimpo.slice(1).replaceAll('-', ' ');
            
    const [selectedIds, setSelectedIds] = useState([]);
    const {collections, initialSelectedIds, loading} = listCollection(photo.id);
    console.log(collections);
    
    
    useEffect(() => {
            setSelectedIds(initialSelectedIds);
            console.log(selectedIds);
            
    }, [initialSelectedIds]);
 
    const toggleCollection = async (collectionId) => {
        const isAlreadySelected = selectedIds.includes(collectionId);

        let newIds;
        if(isAlreadySelected) {
            newIds = selectedIds.filter(id => id !== collectionId);
            await removeImageCollection(collectionId, photo.id);
            toast.warn("Removida da coleção", {
                theme: "colored",
                hideProgressBar: "true",
                autoClose: 1000,
            });
            

        } else {
            newIds = [...selectedIds, collectionId];
            await addImageCollection(collectionId, photo.user.first_name, photo.urls.regular, photo.id);
            toast.success("Adiconada a coleção",{
                theme: "colored",
                hideProgressBar: "true",
                autoClose: 1000,
            });

        }

        setSelectedIds(newIds);
        console.log(selectedIds);
        
    }

    const [showNewCollection, setShowNewCollection] = useState(false);
    
    const [search, setSearch] = useState("");

    const createCollection = (e) => {
        e.preventDefault();
        newCollection({
            title: search,
            total_photos: 10, 
            cover_photo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
            contains_photo: false,
        })
        setShowNewCollection(false);
        toast.success("Coleção criada");
        setSearch("");
    };
    
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
                    
                    return (
                        <div 
                            onClick={() => toggleCollection(collection.id)} 
                            className={`flex gap-1 items-center my-1 rounded px-2 py-2 cursor-pointer transition-colors ${isSelect ? ' bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
                        >
                            <img src={collection.cover_photo} alt="" className="h-10 rounded shadow-lg transition-colors hover:shadow-xl"/>
                            <div className="flex justify-between items-center w-full pl-2">
                                <div>
                                    <h4 className={`font-destaque font-medium text-[15px] ${isSelect ? 'text-white' : ' text-black'}`} >{collection.name}</h4>
                                    <p className={`text-[12px] ${isSelect ? 'text-white' : 'text-gray-500'}`}>{collection.totalImages} fotos</p>
                                </div>

                                <div className="pr-2 hover:scale-110" title="Adicionar a coleção">
                                    {isSelect ? <i className="bi bi-check-lg text-lg text-white"></i> :  ""}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

         {!showNewCollection ? (
            <div className="flex justify-center pt-4">
                <Button className="flex justify-center items-center gap-2 rounded text-center font-medium py-1 font-destaque border w-full border-gray-300 cursor-pointer hover:bg-gray-100" text={"Criar nova coleção"} onClick={() => setShowNewCollection(true)}/>
            </div>)
            :
             (<form className="flex justify-between" onSubmit={createCollection}>
                <Input placeholder={"Nome da coleção"} required autoFocus className={"bg-gray-100 p-2 border mr-6 border-gray-900 rounded-lg w-40"} onChange={(e) => setSearch(e.target.value)}/>
                <Button text={"Criar"} className={"p-2 bg-black hover:bg-black/77 text-white rounded-lg px-6 cursor-pointer"} />
                <Button text={"Cancelar"} className={"p-2 border-gray-400 hover:bg-gray-200 border rounded-lg px-5 cursor-pointer"} onClick={() => setShowNewCollection(false)}/>
             </form>)
        }
        </div>
    );
}