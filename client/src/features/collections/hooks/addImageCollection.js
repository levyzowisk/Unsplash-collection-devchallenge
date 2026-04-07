import { collectionService } from "../service/collectionService";

export function addImageCollection(collectionId, photographName, url, idImage) {
    return collectionService(`collections/${collectionId}/images`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ photographerName: photographName, url: url, idImage: idImage})
    });
}