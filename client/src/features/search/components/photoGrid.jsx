import { usePhotos } from "../hooks/usePhotos";

export function PhotoGrid ({query}) {
    const {photos, loading} =  usePhotos(query);
    
    if (loading) return <div className="text-center mt-10">Carregando fotos...</div>;

    return (
        <section className="px-4 py-8 max-w-[1200px] mx-auto">
        {/* Aqui a mágica do Masonry acontece: columns-2 md:columns-3 */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
            
            {photos.map((photo) => (
            <div key={photo.id} className="break-inside-avoid relative group mb-4">
                
                {/* Imagem */}
                <img 
                src={photo.urls.regular} 
                alt={photo.alt_description} 
                className="w-full rounded-xl object-cover shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
                />

                {/* Overlay (Sombra preta que aparece ao passar o mouse) */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex flex-col justify-end p-4 text-white">
                <p className="font-bold text-sm">{photo.user.name}</p>
                <p className="text-xs text-gray-200">{photo.likes} likes</p>
                </div>

            </div>
            ))}

        </div>
        </section>
    );
}

export default PhotoGrid;