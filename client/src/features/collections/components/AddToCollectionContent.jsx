import Input from "../../../components/Input";
import { useCollections } from "../hooks/useCollections";

export function AddToCollectionContent({photo, onClose}) {
    const texto = photo.alternative_slugs.pt;
    const ultimoTraco = (texto.lastIndexOf('-'));
    const textoLimpo = texto.substring(0, ultimoTraco);
    const textoFormatado = textoLimpo.charAt(0).toUpperCase() + textoLimpo.slice(1).replaceAll('-', ' ');
    
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
                    <div key={collection.id} className="flex gap-1 items-center  bg-gray-100 my-1 rounded px-2 py-2 hover:bg-gray-200 cursor-pointer">
                        <img src={collection.cover_photo} alt="" className="h-10 rounded shadow-lg transition-colors duration-800  hover:shadow-xl"/>
                        <div>
                            <h4 className="font-destaque font-medium text-[15px]">{collection.title}</h4>
                            <p className="text-[12px] text-gray-500">{collection.total_photos} fotos</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="flex justify-center">
                <button className="flex justify-center items-center gap-2 rounded py-1 font-destaque border w-100 border-gray-300 cursor-pointer hover:bg-gray-100">
                    <i className="bi bi-plus font-bold text-2xl"></i>
                    <p className="text-center font-medium">Criar nova coleção</p>
                </button>
            </div>
        </div>

    );
}