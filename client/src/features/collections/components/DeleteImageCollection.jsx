import Button from "../../../components/Button";

export default function DeleteImageCollection({ onClose}) {
    return (
        <>
        <h1 className="font-destaque font-bold text-xl mb-5 ">Deletar imagem ?</h1>
        <p>Isso excluirá permanentemente a imagem da coleção. Esta ação não pode ser desfeita.</p>

        <div className="flex justify-end items-start  gap-2 mt-2">
                <Button type={"button"} text={"Cancelar"} className={"p-2 border-gray-400 hover:bg-gray-200 border rounded-lg px-5 cursor-pointer"} onClick={onClose}/>

                {/* Depois tirar o onClick daqui e colocar a logica de deleção. */}
                <Button text={"Excluir"} className={"p-2 bg-black hover:bg-black/77 text-white rounded-lg px-6 cursor-pointer"}  onClick={onClose}/>
        </div>
        </>
    );
}