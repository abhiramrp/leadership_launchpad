"use client";

import Link from "next/link";
import { useState } from "react";

import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="inline-block w-full bg-black text-yellow-400">
            <div className="justify-between flex items-center p-4">
                <Link href="/" className="text-2xl font-bold p-2">
                    Leadership Launchpad
                </Link>

                <div className="flex justify-center items-center px-2">
                    <button onClick={() => setNavbar(!navbar)} className="w-10 h-10 md:hidden">
                        {
                            navbar ? (<XMarkIcon />) : (<Bars3Icon />)
                        }
                    </button>
                </div>

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
                        <Link href="/about" onClick={() => setNavbar(!navbar)}>
                            About
                        </Link>
                    </li>
                    <li className="text-xl py-3 px-5 text-center hover:bg-blue-100 hover:text-gray-800">
                        <Link href="#programs" onClick={() => setNavbar(!navbar)}>
                            Our Programs
                        </Link>
                    </li>

                    <li className="text-xl py-3 px-5 text-center hover:bg-blue-100 hover:text-gray-800">
                        <Link href="#programs" onClick={() => setNavbar(!navbar)}>
                            Join Us
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