import React, { useState } from 'react';
import { usePhotos } from '../hooks/usePhotos';
import { AddToCollectionContent } from '../../collections/components/AddToCollectionContent';
import { Modal } from '../../../components/Modal';

const PhotoGrid = ({ query, collectionId }) => {
  const { photos, loading } = usePhotos(query, collectionId);

 const [selectedPhoto, setSelectedPhoto] = useState(null);

 const handleAddToCollection = (e, photo) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedPhoto(photo); // <--- Ao setar a foto, o modal vai abrir
  };

  const closeModal = () => setSelectedPhoto(null);

  const handleDownload = (e, photoUrl) => {
    e.preventDefault();
    e.stopPropagation(); 
    window.open(photoUrl, '_blank'); 
  };


  if (loading) return <div className="text-center mt-10">Carregando fotos...</div>;

  return (
    <section className="px-4 py-8 max-w-[1200px] mx-auto">
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        
        {photos.map((photo) => {
          return (
          <div key={photo.id} className="break-inside-avoid relative group mb-4">
            
            <img 
              src={photo.urls.regular} 
              alt={photo.alt_description} 
              className="w-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            />

            {/* === O OVERLAY ESCURO (Fica por cima da imagem) === */}
            <div className={`absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl group-hover:scale-105`}>
              
            <div className="absolute top-4 right-4 z-50 flex flex-row gap-2">

              {/* 1. Botão de Download */}
              {/* Removemos o 'absolute' e posicionamentos manuais daqui */}
              <button 
                  onClick={(e) => handleDownload(e, photo.links.download)}
                  className="bg-gray-100/90 hover:bg-white text-gray-700 p-2 rounded-lg shadow-sm transition-all hover:scale-105 flex items-center justify-center w-10 h-10"
                  title="Baixar foto"
              >
                  <i className="bi bi-arrow-down-circle text-lg"></i>
              </button>

            <button 
            className="bg-gray-100/90 hover:bg-white text-gray-700 w-10 h-10 rounded-lg flex items-center justify-center hover:scale-105 transition-all shadow-sm"
            title="Adicionar à coleção"
            onClick={(e) => handleAddToCollection(e, photo)}>
              <i className="bi bi-plus-lg text-xl"></i>
            </button>

          </div>

              <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                <img 
                  src={photo.user.profile_image.small} 
                  alt={photo.user.name} 
                  className="w-8 h-8 rounded-full border border-white/50"
                />
                <div className="text-sm">
                  <p className="font-medium leading-tight">{photo.user.name}</p>
                  <p className="text-xs text-gray-200 opacity-80">{photo.likes} likes</p>
                </div>
              </div>

            </div>

          </div>
        )})}
      </div>

      <Modal isOpen={!!selectedPhoto} onClose={closeModal}>
        
        {/* Renderiza o conteúdo apenas se tiver foto selecionada */}
        {selectedPhoto && (
          <AddToCollectionContent
            photo={selectedPhoto} 
            onClose={closeModal} 
          />
        )}

      </Modal>
    </section>
  );
};

export default PhotoGrid;