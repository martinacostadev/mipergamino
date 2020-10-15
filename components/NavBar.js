import Link from "next/link";
import { useRouter } from "next/router";
import Search from "./Search";

export default function NavBar() {
  const router = useRouter();
  const currentRoute = router.route;
  return (
    <nav className="mx-auto bg-gray-300 mt-0 top-0 fixed w-full z-50 px-8">
      <div className="pt-4 flex-shrink-0 flex items-center">
        <img className="h-8 w-8" src="/logo.svg" alt="" />
        <div className="flex-grow">
          <Link href="/">
            <a className="ml-4 font-medium text-gray-900">Inicio</a>
          </Link>
        </div>
        <Link href="/profile">
          <a
            href="#"
            className="ml-8 text-sm px-3 py-2 leading-none border rounded hover:text-teal-500 lg:mt-0"
          >
            Perfil
          </a>
        </Link>
      </div>
      {currentRoute !== "/" && <Search />}
    </nav>
  );
}
