import { useParams, useSearchParams } from 'react-router'
import MainLayout from '../../layouts/MainLayout';
import Button from '../../components/Button';
import { useNavigate } from 'react-router';
import { usePhotos } from '../../features/search/hooks/usePhotos';
import CardEdit from '../../features/collections/components/CardEdit';
import { Modal } from '../../components/Modal';
import { useState } from 'react';
import DeleteCardCollection from '../../features/collections/components/DeleteCardCollection';
import Input from '../../components/Input';

function CollectionDetail() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');

    const [showEditNameCollection, setShowEditNameCollection] = useState(false);

    const navigate = useNavigate();

    const { photos, loading } = usePhotos();

    const [show, setShow] = useState(false);

    const disableShow = () => {
        setShow(false);
    }


    if (loading) return <div className="text-center mt-10">Carregando fotos...</div>;

    return (
        <MainLayout>
            <div className="px-4">
                <div className="mx-auto py-10">
                    <Button className="mb-3 p-1 hover:bg-gray-100 rounded-md px-5 cursor-pointer" icon={<i class="bi bi-arrow-left"></i>} text={"Voltar para coleções"} onClick={() => navigate('/collection')} />

                </div>

                <div className="flex justify-between mb-5">
                    <div className="flex items-center gap-3">
                        {!showEditNameCollection ? (
                            <>
                                <h1 className={"font-destaque font-bold text-2xl"} >{title}</h1>

                                <div className="cursor-pointer hover:bg-gray-100 p-1 px-2 rounded" onClick={() => setShowEditNameCollection(true)}><i class="bi bi-pencil"></i></div>
                            </>

                        ) : (
                        <form className="flex justify-between" onSubmit={""}>
                            <Input placeholder={"Nome da coleção"} required autoFocus className={"bg-gray-100 p-2 border mr-6 border-gray-900 rounded-lg w-100"} onChange={(e) => "setSearch(e.target.value)"} />
                                <Button icon={<i class="bi bi-check-lg"></i>} className={"p-2 text-black hover:bg-gray-100 rounded-lg px-4 cursor-pointer"} />
                                <Button icon={<i class="bi bi-x-lg"></i>} className={"p-2  hover:bg-gray-200  rounded-lg px-5 cursor-pointer"} onClick={() => setShowEditNameCollection(false)} />
                        </form>
                        )
                        }


                    </div>

                    <Button className="cursor-pointer right-2 rounded bg-red-500 hover:bg-red-700 text-white px-2 py-1 top-2" icon={<i class="bi bi-trash"></i>} text={"Deletar coleção"} onClick={() => setShow(true)} />
                </div>
                {/* E caso a coleção não tenha fotos, como proseguir, implementar o else. */}
                {photos ? <CardEdit photos={photos} /> : "oisom"}
            </div>
            <Modal onClose={disableShow} isOpen={show} sizeModal="h-50" itemsAlign={"items-center"} >
                <DeleteCardCollection onClose={disableShow} collectionTitle={title} />
            </Modal>

        </MainLayout>
    );
}

export default CollectionDetail;