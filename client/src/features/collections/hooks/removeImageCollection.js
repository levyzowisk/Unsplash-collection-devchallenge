import { collectionService } from "../service/collectionService";

export default function removeImageCollection(collectionId, photoId) {{
    return collectionService(`collections/${collectionId}/images/${photoId}`, {
            method: 'DELETE'
        });
}
}