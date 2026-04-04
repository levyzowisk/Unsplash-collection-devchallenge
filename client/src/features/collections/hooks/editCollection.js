import { collectionService } from "../service/collectionService";

export function editCollection(idCollection,  name) {
    return collectionService(`collections/${idCollection}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
    });
}