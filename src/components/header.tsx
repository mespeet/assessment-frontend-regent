import Image from "next/image"
import Link from "next/link"

export default function Header(){
    return (
        <header className="h-16 flex items-center justify-between p-2 backdrop-blur-2xl mb-6">
            <Link href="/" className="flex gap-2">
                <Image src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="Logo" width={150} height={150} className="h-6 w-fit"/>
                <h1 className="font-bold">DARK</h1>
            </Link>
        </header>
    );
}