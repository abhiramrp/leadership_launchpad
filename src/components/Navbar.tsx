"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="inline-block w-full bg-black text-yellow-400">
            <div className="justify-between flex items-center p-4">
                <Link href="/" className="text-2xl font-bold p-2">
                    Leadership Launchpad
                </Link>
            </div>
            

            <div className={`flex justify-center items-center md:block ${
                navbar ? 'flex' : 'hidden'
            }`}>
                <ul className="h-fit md:h-auto items-center justify-center md:flex">
                    <li className="text-xl py-3 px-5 text-center hover:bg-blue-100 hover:text-gray-800">
                        <Link href="/" onClick={() => setNavbar(!navbar)}>
                            Home
                        </Link>

                    </li>
                    <li className="text-xl py-3 px-5 text-center hover:bg-blue-100 hover:text-gray-800">
                        <Link href="#about" onClick={() => setNavbar(!navbar)}>
                            About
                        </Link>
                    </li>
                    <li className="text-xl py-3 px-5 text-center hover:bg-blue-100 hover:text-gray-800">
                        <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                            Projects
                        </Link>
                    </li>
                    <li className="text-xl py-3 px-5 text-center hover:bg-blue-100 hover:text-gray-800">
                        <Link href="/Abhiram_Rishi_Prattipati.pdf" onClick={() => setNavbar(!navbar)}>
                            Resume
                        </Link>
                    </li>
                    <li className="text-xl py-3 px-5 text-center hover:bg-blue-100 hover:text-gray-800">
                        <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                            Contact
                        </Link>
                    </li>
                </ul>

            </div>

        </nav>
    )

}