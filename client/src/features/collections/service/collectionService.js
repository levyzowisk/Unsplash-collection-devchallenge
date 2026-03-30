export async function collectionService(path ,options = {}) {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL_API}/${path}`, options);
    
    const text = await response.text();
    const data = text ? JSON.parse(text) : [];
    
    return data;
}