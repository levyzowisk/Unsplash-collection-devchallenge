import { collectionService } from "../service/collectionService"
export const createCollection =  (dados) => {
    
    return collectionService("collections",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
}