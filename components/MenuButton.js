import Link from "next/link";
import Alquileres from "../components/icons/Alquileres";

const removeAccentsAndLowerCase = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

export default function Menubutton({ text }) {
  return (
    <Link href={`/${removeAccentsAndLowerCase(text)}`}>
      <div className="relative rounded-lg min-h-full m-4 item-menu-inicio bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white text-2xl">
        <div className="sticky flex">
          <Alquileres size={80} className="absolute -mt-5 md:-m-5 right-0" />
        </div>
        <div className="absolute left-0 bottom-0 px-2 py-2 text-2xl font-bold">
          {text}
        </div>
      </div>
    </Link>
  );
}
