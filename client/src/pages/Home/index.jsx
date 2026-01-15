import { useState } from "react";
import PhotoGrid from "../../features/search/components/PhotoGrid";
import SearchHero from "../../features/search/components/SearchHero";
import MainLayout from "../../layouts/MainLayout";

function Home() {
    const [query, setQuery] = useState('');

    const handleSearch = (searchTerm) => {
        setQuery(searchTerm)
    }
    return (
        <MainLayout>
            <SearchHero onSearch={handleSearch}/>
            <PhotoGrid query={query}/>
        </MainLayout>
    );
}

export default Home;