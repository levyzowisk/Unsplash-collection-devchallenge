import { Link } from 'react-router';
import { Modal } from '../../../components/Modal';
import { useState } from 'react';
import DeleteCardCollection from './DeleteCardCollection';
import Button from '../../../components/Button';
export default function CollectionCard({ data }) {
    
    const [show, setShow] = useState(false);
    console.log(data);
    

    const disableShow = () => {
        setShow(false);
    }
    
    return (
        <>
        <div className='block group transition-transform duration-400 hover:scale-102 overflow-hidden hover:shadow-sm
          shadow-xs hover:bg-gray-100 rounded-xl pb-2 bg-gray-50'>
            <div className="absolute top-1 right-1 bg-black/10 group-hover:bg-black/20 opacity-0 z-50 group-hover:opacity-100 transition-opacity" >
                <Button className="cursor-pointer absolute right-2 rounded bg-red-600 text-white px-2 py-1 top-2" icon={<i class="bi bi-trash"></i>} onClick={() => setShow(true)} />
                    
            </div>

         <Link to={`/collection/${data.id}?title=${encodeURIComponent(data.name)}`} className='block group transition-transform duration-400 hover:scale-102 overflow-hidden  hover:bg-gray-100 rounded-xl pb-2 bg-gray-50'>
            <div className="relative h-60 w-full  rounded-xl bg-gray-200">
                <img
                    src={data.cover_photo}
                    alt={data.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-101"
                />

            <div >
      

            </div>
            </div>

            {/* 2. Informações (Título e total) */}
            <div className="mt-3 p-2">
                <h3 className="text-lg font-bold text-gray-900  transition-colors">
                    {data.name}
                </h3>
                <p className="text-sm text-gray-500">
                    {data.totalImages} photos
                </p>
            </div>

         </Link>
        </div>

            <Modal onClose={disableShow} isOpen={show} sizeModal= "h-55" itemsAlign={"items-center"}>
                <DeleteCardCollection onClose={disableShow} collectionTitle={data.title} />
            </Modal>
        </>
    )
}