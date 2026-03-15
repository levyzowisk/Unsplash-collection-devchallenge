import Button from "../../../components/Button";
import { useState } from "react";
import { Modal } from "../../../components/Modal";
import DeleteCardCollection from "./DeleteCardCollection";
import DeleteImageCollection from "./DeleteImageCollection";

function CardEdit({photos}) {
    console.log(photos);
    const [show, setShow] = useState(false);
    
    const disableShow = () => {
        setShow(false);
    }
    return (
        <>
    <section className="px-4  max-w-[1200px] mx-auto">
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {
            photos.map(photo => {
                

                return (
                    <div key={photo.id} className="break-inside-avoid relative group mb-4">
                        <img 
                            src={photo.urls.regular} 
                            alt={photo.alt_description} 
                            className="w-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                        />
                        
                        <div className={`absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl group-hover:scale-105`}>
                            <div className="absolute top-4 right-4 z-50 flex flex-row gap-2">
                                <Button className="cursor-pointer absolute right-1 rounded bg-red-600 text-white px-2 py-1 top-1" icon={<i class="bi bi-trash"></i>} onClick={() => setShow(true)} />

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

                )
            })
        }
      </div>

    </section>
            <Modal onClose={disableShow} isOpen={show} sizeModal= "h-50" itemsAlign={"items-center"}>
                <DeleteImageCollection onClose={disableShow}/>
            </Modal>
</>
    );
}

export default CardEdit;

