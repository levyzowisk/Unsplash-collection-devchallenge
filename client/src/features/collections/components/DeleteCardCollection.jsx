import Button from "../../../components/Button";
import { deleteCollection } from "../hooks/deleteCollection";

export default function DeleteCardCollection({collectionTitle, onClose, id, onSuccess}) {
    
    const confirmDelete = async () =>  {
        await deleteCollection(id);
        
        if (onSuccess) {
            onSuccess();
        }
        onClose();
    }

    return (
        <>
        <h1 className="font-destaque font-bold text-xl mb-5">Deletar coleção ?</h1>
        <p>Isso excluirá permanentemente <b>{collectionTitle}</b> e removerá todas as imagens salvas nele. Esta ação não pode ser desfeita.</p>

        <div className="flex justify-end items-start mt-auto gap-2">
                <Button type={"button"} text={"Cancelar"} className={"p-2 border-gray-400 hover:bg-gray-200 border rounded-lg px-5 cursor-pointer"} onClick={onClose}/>

                {/* Depois tirar o onClick daqui e colocar a logica de deleção. */}
                <Button text={"Excluir"} className={"p-2 bg-black hover:bg-black/77 text-white rounded-lg px-6 cursor-pointer"}  onClick={confirmDelete}/>
        </div>
        </>
    );
}