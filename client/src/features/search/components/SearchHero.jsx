import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState } from "react";

function searchHero({onSearch}) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSearch(inputValue);
        }
    };
    return (
        <section className="flex flex-col justify-center items-center text-center h-100     ">
            <div className="">
                <h1 className="font-destaque font-bold text-5xl mb-5">Descubra Lindas Imagens</h1>
                <p className="text-gray-500 text-lg mb-3">Pesquise milhões de fotos de alta qualidade e adicione as suas coleções.</p>
            </div>
            <form  onSubmit={handleSubmit} className="relative w-120">
                <i class="bi bi-search absolute left-4 top-1/2 -translate-y-1/2"></i>
                <Input placeholder={"Digite uma palavra chave"} value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="bg-gray-100 p-3 rounded-lg w-full pl-10"/>
                <Button onClick={handleSubmit} className="absolute right-2 top-1/2 hover:bg-gray-800 hover:shadow-lg duration-300 -translate-y-1/2 bg-gray-950 text-white py-2 px-4 rounded-lg" text={"Pesquisar"} />
            </form>
        </section>

    );
}

export default searchHero;