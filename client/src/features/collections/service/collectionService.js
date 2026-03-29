export async function collectionService() {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL_API}/collections`);
    const data = await response.json();
    return data;
}