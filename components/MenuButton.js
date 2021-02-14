import Link from "next/link";

const removeAccentsAndLowerCase = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

export default function Menubutton({ text, icon: Icon }) {
  return (
    <Link href={`/${removeAccentsAndLowerCase(text)}`}>
      <a className="flex justify-between items-end rounded-lg m-4 item-menu-inicio bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white text-2xl">
        <span className="font-bold">{text}</span>
        <Icon size={60} />
      </a>
    </Link>
  );
}
