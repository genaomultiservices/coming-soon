"use client"

import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Socials = () => {
    const [isHovering, setIsHovered] = useState(false);

    return (
        <div className="absolute bottom-10">
            <ul className="flex space-x-3">
                <li>
                    <Link href="https://www.instagram.com/genaomss/profilecard/?igsh=MWh5cW96NWZ4bGZqeg=="
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-secondaryBase2 transition ease-in-out duration-500 hover:bg-secondaryBase hover:text-white hover:shadow-lg"
                    >
                        <Instagram />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.facebook.com/GenaoMS?mibextid=ZbWKwL"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-secondaryBase2 transition ease-in-out duration-500 hover:bg-secondaryBase hover:text-white hover:shadow-lg"
                    >
                        <Facebook />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.tiktok.com/@yeigenao"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-secondaryBase2 transition ease-in-out duration-500 hover:bg-secondaryBase hover:text-white hover:shadow-lg"
                        onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                    >
                        {isHovering ? (
                            <Image
                                src="/images/tiktok-white.png"
                                alt="tiktok"
                                width={22}
                                height={22}
                            />
                        ) : (
                            <Image
                                src="/images/tiktok.png"
                                alt="tiktok"
                                width={22}
                                height={22}
                            />
                        )}
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Socials;