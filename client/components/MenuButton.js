import Link from "next/link";

const removeAccentsAndLowerCase = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export default function Menubutton({ text }) {
  return (
    <Link href={`/${removeAccentsAndLowerCase(text)}`} >
      <div className="item-menu-inicio md:rounded-lg">
        {text}
      </div>
    </Link >
  )
}