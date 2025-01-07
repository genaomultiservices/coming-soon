import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Socials = () => {
    return (
        <div className="absolute bottom-10">
            <ul className="flex space-x-3">
                <li>
                    <Link href="https://www.instagram.com/genaomss/profilecard/?igsh=MWh5cW96NWZ4bGZqeg=="
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 transition ease-in-out duration-500 hover:bg-secondaryBase hover:text-white hover:shadow-lg"
                    >
                        <Instagram />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.facebook.com/GenaoMS?mibextid=ZbWKwL"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 transition ease-in-out duration-500 hover:bg-secondaryBase hover:text-white hover:shadow-lg"
                    >
                        <Facebook />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.tiktok.com/@yeigenao"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 transition ease-in-out duration-500 hover:bg-secondaryBase hover:text-white hover:shadow-lg"
                    >
                        <Image
                            src="/images/tiktok.png"
                            alt="tiktok"
                            width={25}
                            height={25}
                        />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Socials;