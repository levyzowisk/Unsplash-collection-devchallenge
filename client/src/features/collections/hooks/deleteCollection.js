import { collectionService } from "../service/collectionService"
export const deleteCollection =  (id) => {
    
    return collectionService(`collections/${id}`,{
        method: "DELETE",
    });
}