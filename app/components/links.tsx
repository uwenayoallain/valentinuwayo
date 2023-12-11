"use client";

import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

export default function NavLinks() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#dashboards", label: "Dashboards" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className='sticky top-0'>
      <ul className='grid justify-between grid-cols-2 px-8 py-2'>
        <li>
          <Link href='/' className='text-xl font-bold text-white no-underline'>
            <Image src={"/logo.jpeg"} alt='logo' width={48} height={48} />
          </Link>
        </li>
        <ul className='flex items-center justify-start space-x-4'>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link
                href={href}
                className={clsx("text-gray-950 cursor-pointer no-underline")}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
