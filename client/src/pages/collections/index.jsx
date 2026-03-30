import MainLayout from "../../layouts/MainLayout";
import CollectionsGrid from "../../features/collections/components/CollectionGrid";
import Button from "../../components/Button";
import { Modal } from "../../components/Modal";
import {useState} from "react"
import CreateCardCollection from "../../features/collections/components/CreateCardCollection";
function Collection() {
    const [show, setShow] = useState(false);
    const [refreshTrigger, setRefreshTrigger] = useState(0); // <-- Variável para controlar os re-renders da Grid

    const disableShow = () => {
        setShow(false);
    }

    const handleSuccess = () => {
        setShow(false);
        setRefreshTrigger(prev => prev + 1); // Avisa a Grid que um novo item chegou!
    }

    return (
        <>
            <MainLayout>
                <div className="max-w-[1200px] mx-auto px-4 py-10">

                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Suas Coleções</h1>

                        <Button icon={<i className="bi bi-plus-lg"> </i>} text={`Criar nova coleção`} className={"p-2 bg-black text-white  hover:bg-black/75 border rounded-lg px-5 cursor-pointer mt-2"} onClick={() => setShow(!show)}/>
                        <Modal isOpen={show} onClose={disableShow} sizeModal= "h-55" itemsAlign={"items-center"}>
                            <CreateCardCollection onClose={disableShow} onSuccess={handleSuccess}></CreateCardCollection>
                        </Modal>
                    </div>

                    <CollectionsGrid refreshTrigger={refreshTrigger} />
                
                </div>
            </MainLayout>
        </>
    );
}

export default Collection;