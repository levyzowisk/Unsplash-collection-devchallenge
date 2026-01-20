import MainLayout from "../../layouts/MainLayout";
import CollectionsGrid from "../../features/collections/components/CollectionGrid";
function Collection() {
    return (
        <>
            <MainLayout>
                <div className="max-w-[1200px] mx-auto px-4 py-10">

                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Suas Coleções</h1>
                        <p className="text-gray-500 max-w-lg mx-auto">
                            Explore o mundo através de coleções de belas fotos selecionadas pela nossa comunidade.
                        </p>
                    </div>

                    <CollectionsGrid />

                </div>
            </MainLayout>
        </>
    );
}

export default Collection;