import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-600 text-white mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between py-2">
                <span className="text-sm">
                    © {new Date().getFullYear()} Leadership Launchpad. &#x2022;  Terms &#x2022;  Privacy
                </span>

                <div className="ml-4 flex justify-center items-center space-x-4">

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

