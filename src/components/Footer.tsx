import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-600 text-white mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between py-2">
                <span className="text-sm">
                    © {new Date().getFullYear()} Leadership Launchpad.
                </span>

                <div className="ml-4 flex justify-center items-center space-x-4">

                    <div className="w-10 h-10 relative p-2">
                        <Link href="https://github.com/abhiramrp">
                            <Image
                                quality={100}
                                src="/logos/github.svg"
                                alt="github"
                                fill
                                sizes="100%"
                                style={{
                                    objectFit: "cover"
                                }} />
                        </Link>
                    </div>

                    <div className="w-12 h-10 relative">
                        <Link href="https://www.linkedin.com/in/abhiramprattipati/">

                            <Image
                                quality={100}
                                src="/logos/linkedin.svg"
                                alt="github"
                                fill
                                sizes="100%"
                                style={{
                                    objectFit: "cover"
                                }} />
                        </Link>
                    </div>


                </div>
            </div>


        </footer>
    );
}

