"use client";

import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./components";

export default function NavLinks() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#dashboards", label: "Dashboards" },
    { href: "#contact", label: "Contact" },
  ];
  const [isselected, setIsselected] = useState<string>(links[0].href);
  return (
    <nav className='sticky top-0 z-10 bg-white'>
      <ul className='grid justify-between grid-cols-2 px-8 py-2'>
        <li>
          <Link href='/' className='text-xl font-bold text-white no-underline'>
            <Image src={"/logo.jpeg"} alt='logo' width={48} height={48} />
          </Link>
        </li>
        <div className='flex'>
          <ul
            className='flex items-center justify-start space-x-4 text-sm'
            onMouseLeave={() =>
              setTimeout(() => setIsselected(links[0].href), 300)
            }>
            {links.map(({ href, label }) => (
              <li
                key={`${href}${label}`}
                onMouseOver={() => setTimeout(() => setIsselected(href), 200)}
                className='px-4 py-2 relative cursor-pointer'>
                {isselected == href ? (
                  <motion.div
                    className='absolute inset-0 bg-gray-100 -z-[1]'
                    layoutId='linkbackground'></motion.div>
                ) : null}
                <Link
                  href={href}
                  className={clsx(
                    "text-gray-950 cursor-pointer no-underline relative"
                  )}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <li className='ml-2'>
            <Link href='/resume.pdf' target='_blank'>
              <Button>Resume</Button>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
