import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { createCollection } from '../hooks/createCollection';
import {useState} from 'react';
import {toast} from 'react-toastify'

export default function CreateCardCollection({onClose, onSuccess}) {
    
    const [data, setData] = useState({
        name: ""
    });

    const createdCollection = async (e) => {
        e.preventDefault();

        try {
            console.log(data);
            
            await createCollection(data);
            toast.success("Coleção criada");
            if (onSuccess) onSuccess(); // Chama a função que fecha o modal e recarrega a grid
        } catch (error) {
            console.log(error);
            
            toast.error("Erro ao criar coleção");
        }
    };

    const onInputChange = (e) => {
        setData({
            name: e.target.value
        });
    }


    return (
        <>
            <h1 className="text-start font-bold font-destaque ">Criar uma nova coleção</h1>
            <form action="" className="h-full pb-4 flex flex-col" onSubmit={createdCollection}>
                <Input onChange = {onInputChange} name="title" placeholder={"Nome da coleção"} required autoFocus className={"bg-gray-100 p-2 mt-6 border mr-6 border-gray-400 rounded-lg w-100"} />


                <div className="flex justify-end items-start mt-auto gap-2">
                <Button type={"button"} text={"Cancelar"} className={"p-2 border-gray-400 hover:bg-gray-200 border rounded-lg px-5 cursor-pointer"} onClick={onClose}/>

                <Button text={"Criar"} className={"p-2 bg-black hover:bg-black/77 text-white rounded-lg px-6 cursor-pointer"} />
                </div>
            </form>

        </>
    )
}