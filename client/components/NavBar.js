import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  return (
    <nav>
      <div className="py-4 flex-shrink-0 flex items-center">
        <img className="h-8 w-8" src="/logo.svg" alt="" />
        <div className="flex-grow">
          <Link href="/">
            <a className="ml-8 font-medium text-gray-900">Inicio</a>
          </Link>
        </div>
        <Link href="/profile">
          <a href="#" className="ml-8 text-sm px-3 py-2 leading-none border rounded hover:text-teal-500 lg:mt-0">Perfil</a>
        </Link>
      </div>
      <div className="mt-2 lg:py-4 mb-2">
        <input
          className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
          placeholder="Buscar..."
        />
      </div>
    </nav>
  )
}