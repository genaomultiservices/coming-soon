import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">
      <Image
        src="/images/avatar3.png"
        alt="avatar3"
        width={400}
        height={0}
        className="absolute max-w-[150px] lg:max-w-[400px] h-auto -top-20 md:-right-16 lg:right-5 top-20 animate-blob"
      />
      <Image
        src="/images/shapes.svg"
        alt="shapes"
        width={0}
        height={0}
        className="absolute w-screen h-screen left-24 bottom-24 animate-blob2"
      />
      <Image
        src="/images/logo.png"
        alt="logo"
        width={300}
        height={0}
        className="absolute max-w-[150px] lg:max-w-[300px] left-24 bottom-24 h-auto animate-blob2"
      />
      <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900">
        <div className="text-center space-y-5 lg:space-y-10">
          <h3 className="font-light lg:text-4xl uppercase tracking-wider">
            Próximamente
          </h3>
          <h1 className="text-2xl lg:text-7xl font-extrabold">En construcción...</h1>
          <p className="lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto">
            Estamos en construcción. Vuelva pronto para que esté enterado. ¡¡Siga en contacto!!
          </p>
        </div>
      </div>
      <div className="absolute bottom-5">
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
    </div>
  );
}
