import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { useCollections } from '../hooks/useCollections';
import {useState} from 'react';
import {toast} from 'react-toastify'

export default function CreateCardCollection({onClose}) {
    const {newCollection} = useCollections();
    const [collection, setCollection] = useState();

    const createCollection = (e) => {
        e.preventDefault();
        newCollection({
            title: collection,
            total_photos: 10, 
            cover_photo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
            contains_photo: false,
        })
        toast.success("Coleção criada");
        setCollection("");
        onClose();
    };

    return (
        <>
            <h1 className="text-start font-bold font-destaque ">Criar uma nova coleção</h1>
            <form action="" className="h-full pb-4 flex flex-col" onSubmit={createCollection}>
                <Input placeholder={"Nome da coleção"} required autoFocus className={"bg-gray-100 p-2 mt-6 border mr-6 border-gray-400 rounded-lg w-100"} onChange={(e) => setCollection(e.target.value)}/>


                <div className="flex justify-end items-start mt-auto gap-2">
                <Button type={"button"} text={"Cancelar"} className={"p-2 border-gray-400 hover:bg-gray-200 border rounded-lg px-5 cursor-pointer"} onClick={onClose}/>

                <Button text={"Criar"} className={"p-2 bg-black hover:bg-black/77 text-white rounded-lg px-6 cursor-pointer"} />
                </div>
            </form>

        </>
    )
}