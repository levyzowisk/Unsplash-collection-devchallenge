import logo1 from '../assets/logo1.png';
import {NavLink, useLocation} from 'react-router';
function MainLayout({children}) {
    

    return (
        <div className="h-lvh">
            <header className='flex justify-between px-6 py-4 border-b-1 border-gray-200'>
                <div className=''>
                    <a href="" className='flex items-center gap-x-2'>
                        <img className='w-7' src={logo1} alt="Logomarca" />
                        <p className='font-destaque font-semibold text-xl'>Unsplash Collection</p>
                    </a>
                </div>

                <nav>
                    <ul className='flex flex-row gap-x-3'>
                        <li><NavLink to="/" className={({isActive}) => isActive ? 'text-lg font-destaque' : 'text-lg font-destaque text-gray-400 hover:text-gray-900 hover:duration-100'}>Home</NavLink></li>
                        <li><NavLink to="/collection" className={({isActive}) => isActive ? 'text-lg font-destaque' : 'font-destaque text-gray-400 hover:text-gray-900 hover:duration-100 text-lg'}>Collections</NavLink></li>
                    </ul>
                </nav>
            </header>

            <main>
                {children}  
            </main> 
        </div>
    )
}

export default MainLayout;

//  <li><a href="" className='text-lg font-destaque'>Home</a></li>
//  <li><a href="/collection" className='font-destaque text-gray-400 hover:text-gray-900 hover:duration-100 text-lg'>Collections</a></li>