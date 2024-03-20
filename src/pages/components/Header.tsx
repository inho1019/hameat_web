import Link from "next/link";

export default function Header() {

  return (
    <Link href={'/'} className="flex flex-row p-5">
        <img className="w-16" src="/images/icon.png"/>
    </Link>
  )
}