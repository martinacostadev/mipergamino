import Link from "next/link";

const removeAccentsAndLowerCase = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export default function Menubutton({ text }) {
  return (
    <Link href={`/${removeAccentsAndLowerCase(text)}`}>
      <div className="rounded-lg min-h-10 item-menu-inicio bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white text-2xl">
        {text}
      </div>
    </Link >
  )
}