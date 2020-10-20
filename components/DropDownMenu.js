import Link from "next/link";

export default function DropDownMenu({ userContext }) {
  return (
    <div>
      <div className="group inline-block">
        <button className="outline-none focus:outline-none border px-3 py-1 rounded-sm flex items-center min-w-32">
          <span className="pr-1 font-semibold flex-1 flex items-center ">
            {userContext.state.user.displayName.split(" ")[0]}
            <img
              src={userContext.state.user.photoURL}
              className="rounded-full ml-2 h-8 w-8 flex items-center justify-center"
              loading="lazy"
            />
          </span>
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180
          transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul
          className="bg-white border rounded-b-lg transform scale-0 group-hover:scale-100 absolute 
    transition duration-150 ease-in-out origin-top min-w-32"
        >
          <li className="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer">
            <Link href="/profile">Perfil</Link>
          </li>
          <li
            className="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer"
            onClick={userContext.actions.signOut}
          >
            Salir
          </li>
        </ul>
      </div>
    </div>
  );
}
