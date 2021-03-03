import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Search from "./Search";
import SessionContext, {
  Provider as SessionProvider,
} from "~/src/session/context";
import DropDownMenu from "./DropDownMenu";
import { useUser, useSessionActions } from "~/src/session/hooks";

export default function NavBar() {
  const router = useRouter();
  const currentRoute = router.route;
  const user = useUser();
  const { signIn, signOut } = useSessionActions();

  return (
    <>
      <nav className="mx-auto bg-gray-300 mt-0 top-0 fixed w-full z-50 px-8">
        <div className="pt-4 flex-shrink-0 flex items-center">
          <img className="h-8 w-8" src="/logo.svg" alt="" />
          <div className="flex-grow">
            <Link href="/">
              <a className="ml-3 font-medium text-gray-900">Inicio</a>
            </Link>
          </div>

          {user ? (
            <DropDownMenu user={user} signOut={signOut} />
          ) : (
            <button onClick={signIn}>Ingresar</button>
          )}
        </div>
        {currentRoute !== "/" && currentRoute !== "/profile" && <Search />}
      </nav>

      <div className="h-4"></div>
    </>
  );
}
