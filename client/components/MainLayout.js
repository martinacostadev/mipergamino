import Link from "next/link";

const SiteLayout = ({ children }) => (
  <div className="bg-white antialiased">
    <div>
      <div>
        <div className="max-w-xl mx-auto px-8">
          <nav>
            <div className="py-4 flex-shrink-0 flex items-center">
              <img className="h-8 w-8" src="/logo.svg" alt="" />
              <div className="flex-grow">
                <Link href="/">
                  <a className="ml-8 font-medium text-gray-900">Inicio</a>
                </Link>
              </div>
              <Link href="/profile">
                <div>
                  <a href="#" class="ml-8 text-sm px-3 py-2 leading-none border rounded hover:text-teal-500 mt-4 lg:mt-0">Perfil</a>
                </div>
              </Link>
            </div>
            <div className="mt-2">
              <input
                className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                placeholder="Buscar..."
              />
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div className="mt-6 sm:mt-0">{children}</div>
  </div>
);

export default SiteLayout;