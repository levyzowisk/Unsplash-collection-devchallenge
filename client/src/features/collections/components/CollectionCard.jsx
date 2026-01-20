import { Link } from 'react-router';

export default function CollectionCard({ data }) {
    return (
        <Link to={`/collection/${data.id}`} className='block group transition-transform duration-400 hover:scale-102 overflow-hidden hover:shadow-sm
         shadow-xs hover:bg-gray-100 rounded-xl pb-2 bg-gray-50'>
            <div className="relative h-60 w-full  rounded-xl bg-gray-200">
                <img
                    src={data.cover_photo}
                    alt={data.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-101"
                />

            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            </div>

            {/* 2. Informações (Título e total) */}
            <div className="mt-3 p-2">
                <h3 className="text-lg font-bold text-gray-900  transition-colors">
                    {data.title}
                </h3>
                <p className="text-sm text-gray-500">
                    {data.total_photos} photos
                </p>
            </div>
        </Link>
    )
}